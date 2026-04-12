import { NextResponse } from "next/server";

import {
  CONTACT_FORM_TYPES,
  CONTACT_LIMITS,
  contactSubmissionSchema,
} from "@/lib/contact-schema";

const WEBHOOK_TIMEOUT_MS = 10_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const ALLOWED_FORM_TYPES = new Set(CONTACT_FORM_TYPES);
const rateLimitBuckets = new Map<string, number[]>();
const API_RESPONSE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
} as const;

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers?: Record<string, string>,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      ...API_RESPONSE_HEADERS,
      ...headers,
    },
  });
}

function parseContentLength(headerValue: string | null) {
  if (!headerValue) {
    return null;
  }

  const parsed = Number.parseInt(headerValue, 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }

  return parsed;
}

function getClientIp(forwardedFor: string) {
  const candidate = forwardedFor.split(",")[0]?.trim();
  return candidate && candidate.length > 0 ? candidate : "unknown";
}

function parseAllowedOrigins() {
  const configured = process.env.ALLOWED_CONTACT_ORIGINS;

  if (!configured) {
    return new Set<string>();
  }

  return new Set(
    configured
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0)
      .map((entry) => {
        try {
          return new URL(entry).origin;
        } catch {
          return "";
        }
      })
      .filter((entry) => entry.length > 0),
  );
}

function isOriginAllowed(origin: string, host: string, allowedOrigins: Set<string>) {
  if (origin.length === 0) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const normalizedOrigin = originUrl.origin;
    if (allowedOrigins.has(normalizedOrigin)) {
      return true;
    }

    return originUrl.host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}

function pruneRateLimitBuckets(now: number) {
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, timestamps] of rateLimitBuckets.entries()) {
    const recent = timestamps.filter((timestamp) => timestamp > cutoff);

    if (recent.length === 0) {
      rateLimitBuckets.delete(key);
      continue;
    }

    rateLimitBuckets.set(key, recent);
  }

  const MAX_BUCKETS = 2000;
  if (rateLimitBuckets.size > MAX_BUCKETS) {
    let overflow = rateLimitBuckets.size - MAX_BUCKETS;
    for (const key of rateLimitBuckets.keys()) {
      rateLimitBuckets.delete(key);
      overflow -= 1;
      if (overflow <= 0) {
        break;
      }
    }
  }
}

function registerAndCheckRateLimit(clientIp: string, now: number) {
  pruneRateLimitBuckets(now);

  const existing = rateLimitBuckets.get(clientIp) ?? [];
  if (existing.length >= RATE_LIMIT_MAX_REQUESTS) {
    const earliestRequestInWindow = existing[0] ?? now;
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((earliestRequestInWindow + RATE_LIMIT_WINDOW_MS - now) / 1000),
    );
    return { limited: true, retryAfterSeconds };
  }

  rateLimitBuckets.set(clientIp, [...existing, now]);
  return { limited: false, retryAfterSeconds: 0 };
}

function validatePayload(payload: unknown) {
  const parsed = contactSubmissionSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      valid: false as const,
      errors: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (!ALLOWED_FORM_TYPES.has(parsed.data.formType)) {
    return {
      valid: false as const,
      errors: ["Invalid form type."],
    };
  }

  return {
    valid: true as const,
    value: parsed.data,
  };
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return jsonResponse({ ok: false, message: "Server is missing DISCORD_WEBHOOK_URL." }, 500);
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) {
    return jsonResponse({ ok: false, message: "Content-Type must be application/json." }, 415);
  }

  const contentLength = parseContentLength(request.headers.get("content-length"));
  if (contentLength !== null && contentLength > CONTACT_LIMITS.maxBodyBytes) {
    return jsonResponse({ ok: false, message: "Request body is too large." }, 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: "Invalid JSON body." }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonResponse({ ok: false, message: "Request body must be a JSON object." }, 400);
  }

  const bodyRecord = body as Record<string, unknown>;

  const readString = (key: keyof typeof bodyRecord) => {
    const value = bodyRecord[key];
    return typeof value === "string" ? value : "";
  };

  const payload = {
    name: readString("name"),
    email: readString("email"),
    projectType: readString("projectType"),
    scope: readString("scope"),
    formType: readString("formType") || "project-brief",
    sourcePath: readString("sourcePath"),
    sourceUrl: readString("sourceUrl"),
    companyWebsite: readString("companyWebsite"),
  };

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  const origin = request.headers.get("origin")?.trim() ?? "";
  const fetchSite = request.headers.get("sec-fetch-site")?.toLowerCase() ?? "";

  const allowedOrigins = parseAllowedOrigins();
  const originAllowed = isOriginAllowed(origin, host, allowedOrigins);
  const crossSiteRequest = fetchSite === "cross-site";

  if (!originAllowed || crossSiteRequest) {
    return jsonResponse({ ok: false, message: "Origin not allowed." }, 403);
  }

  const validationResult = validatePayload(payload);

  if (!validationResult.valid) {
    return jsonResponse({ ok: false, message: "Validation failed.", errors: validationResult.errors }, 422);
  }

  const safePayload = validationResult.value;

  if (safePayload.companyWebsite.length > 0) {
    return jsonResponse({ ok: true, message: "Brief submitted successfully." }, 200);
  }

  const forwardedFor = request.headers.get("x-forwarded-for") ?? "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const resolvedHost = host || "unknown";
  const resolvedOrigin = origin || "unknown";
  const clientIp = getClientIp(forwardedFor);

  const rateLimitResult = registerAndCheckRateLimit(clientIp, Date.now());
  if (rateLimitResult.limited) {
    return jsonResponse(
      { ok: false, message: "Too many submissions. Please try again in a few minutes." },
      429,
      {
        "Retry-After": String(rateLimitResult.retryAfterSeconds),
      },
    );
  }

  const submittedAt = new Date().toISOString();

  const embed = {
    title: "New TuskQ Contact Submission",
    color: 0x0056b3,
    fields: [
      { name: "Form Type", value: safePayload.formType, inline: true },
      { name: "Submitted At", value: submittedAt, inline: true },
      { name: "Name", value: safePayload.name, inline: true },
      { name: "Email", value: safePayload.email, inline: true },
      { name: "Project Type", value: safePayload.projectType, inline: false },
      {
        name: "Scope Details",
        value: safePayload.scope.length > 1024 ? `${safePayload.scope.slice(0, 1020)}...` : safePayload.scope,
        inline: false,
      },
      { name: "Source Path", value: safePayload.sourcePath || "unknown", inline: true },
      { name: "Source URL", value: safePayload.sourceUrl || "unknown", inline: false },
      { name: "Origin Host", value: resolvedHost, inline: true },
      { name: "Origin Header", value: resolvedOrigin, inline: true },
      {
        name: "Client IP",
        value: clientIp,
        inline: true,
      },
      {
        name: "User Agent",
        value: userAgent.length > 1024 ? `${userAgent.slice(0, 1020)}...` : userAgent,
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, WEBHOOK_TIMEOUT_MS);

  try {
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "Inbound submission from tuskq.com",
        allowed_mentions: {
          parse: [],
        },
        embeds: [embed],
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!discordResponse.ok) {
      console.error("Discord webhook returned non-OK status", {
        status: discordResponse.status,
      });

      return jsonResponse(
        {
          ok: false,
          message: "Unable to process submission right now.",
        },
        502,
      );
    }

    return jsonResponse({ ok: true, message: "Brief submitted successfully." }, 200);
  } catch (error) {
    const isAbortError = error instanceof Error && error.name === "AbortError";
    console.error("Failed to forward contact submission", error);

    return jsonResponse(
      {
        ok: false,
        message: isAbortError
          ? "Submission timed out. Please try again shortly."
          : "Unexpected error while processing submission.",
      },
      isAbortError ? 504 : 500,
    );
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  return jsonResponse({ ok: false, message: "Method not allowed." }, 405, {
    Allow: "POST",
  });
}

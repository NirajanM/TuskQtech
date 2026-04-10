import { headers } from "next/headers";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  scope: string;
  formType?: string;
  sourcePath?: string;
  sourceUrl?: string;
  submittedAt?: string;
};

const MAX_TEXT_LENGTH = 2000;
const MAX_EMAIL_LENGTH = 254;

function trimField(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (payload.name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (payload.email.length === 0 || payload.email.length > MAX_EMAIL_LENGTH || !emailRegex.test(payload.email)) {
    errors.push("Email must be a valid address.");
  }

  if (payload.projectType.length < 2) {
    errors.push("Project type must be at least 2 characters.");
  }

  if (payload.scope.length < 10) {
    errors.push("Scope details must be at least 10 characters.");
  }

  if (payload.scope.length > MAX_TEXT_LENGTH) {
    errors.push(`Scope details must be under ${MAX_TEXT_LENGTH} characters.`);
  }

  return errors;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: "Server is missing DISCORD_WEBHOOK_URL." },
      { status: 500 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: trimField((body as Record<string, unknown>)?.name),
    email: trimField((body as Record<string, unknown>)?.email),
    projectType: trimField((body as Record<string, unknown>)?.projectType),
    scope: trimField((body as Record<string, unknown>)?.scope),
    formType: trimField((body as Record<string, unknown>)?.formType) || "project-brief",
    sourcePath: trimField((body as Record<string, unknown>)?.sourcePath),
    sourceUrl: trimField((body as Record<string, unknown>)?.sourceUrl),
    submittedAt: trimField((body as Record<string, unknown>)?.submittedAt),
  };

  const errors = validatePayload(payload);

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for") ?? "unknown";
  const userAgent = requestHeaders.get("user-agent") ?? "unknown";
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "unknown";
  const origin = requestHeaders.get("origin") ?? "unknown";

  const submittedAt = payload.submittedAt || new Date().toISOString();

  const embed = {
    title: "New TuskQ Contact Submission",
    color: 0x0056b3,
    fields: [
      { name: "Form Type", value: payload.formType ?? "project-brief", inline: true },
      { name: "Submitted At", value: submittedAt, inline: true },
      { name: "Name", value: payload.name, inline: true },
      { name: "Email", value: payload.email, inline: true },
      { name: "Project Type", value: payload.projectType, inline: false },
      {
        name: "Scope Details",
        value: payload.scope.length > 1024 ? `${payload.scope.slice(0, 1020)}...` : payload.scope,
        inline: false,
      },
      { name: "Source Path", value: payload.sourcePath || "unknown", inline: true },
      { name: "Source URL", value: payload.sourceUrl || "unknown", inline: false },
      { name: "Origin Host", value: host, inline: true },
      { name: "Origin Header", value: origin, inline: true },
      {
        name: "Client IP",
        value: forwardedFor.split(",")[0]?.trim() || "unknown",
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
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();

      return NextResponse.json(
        {
          ok: false,
          message: "Failed to forward message to Discord.",
          discordStatus: discordResponse.status,
          discordError: errorText.slice(0, 300),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: "Brief submitted successfully." });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error while sending to Discord.",
        error: error instanceof Error ? error.message : "unknown-error",
      },
      { status: 500 },
    );
  }
}

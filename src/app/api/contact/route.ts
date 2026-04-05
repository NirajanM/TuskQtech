import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  scope: string;
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
  };

  const errors = validatePayload(payload);

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const embed = {
    title: "New TuskQtech Project Brief",
    color: 0x99f7ff,
    fields: [
      { name: "Name", value: payload.name, inline: true },
      { name: "Email", value: payload.email, inline: true },
      { name: "Project Type", value: payload.projectType, inline: false },
      {
        name: "Scope Details",
        value: payload.scope.length > 1024 ? `${payload.scope.slice(0, 1020)}...` : payload.scope,
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
        content: "New inbound project brief from website.",
        allowed_mentions: {
          parse: [],
        },
        embeds: [embed],
      }),
      cache: "no-store",
    });

    if (!discordResponse.ok) {
      return NextResponse.json(
        { ok: false, message: "Failed to forward message to Discord." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: "Brief submitted successfully." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unexpected error while sending to Discord." },
      { status: 500 },
    );
  }
}

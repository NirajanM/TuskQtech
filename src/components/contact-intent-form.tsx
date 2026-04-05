"use client";

import { FormEvent, useState } from "react";

type ContactIntentFormProps = {
  formType: "admissions" | "career-intake";
  projectType: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  buttonLabel: string;
};

type FormState = {
  name: string;
  email: string;
  details: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  details: "",
};

export function ContactIntentForm({
  formType,
  projectType,
  detailsLabel,
  detailsPlaceholder,
  buttonLabel,
}: ContactIntentFormProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.name.trim().length < 2) {
      setStatus("error");
      setMessage("Name must be at least 2 characters.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setMessage("Enter a valid email address.");
      return;
    }

    if (formData.details.trim().length < 10) {
      setStatus("error");
      setMessage("Please provide a bit more detail.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType,
          scope: formData.details,
          formType,
          sourcePath: window.location.pathname,
          sourceUrl: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";
      const isJsonResponse = contentType.includes("application/json");
      const body = isJsonResponse
        ? ((await response.json()) as {
            ok?: boolean;
            message?: string;
            errors?: string[];
          })
        : undefined;

      if (!response.ok || !body?.ok) {
        setStatus("error");
        setMessage(
          body?.errors?.[0] ??
            body?.message ??
            "Submission failed. Please reload once and try again.",
        );
        return;
      }

      setStatus("success");
      setMessage("Submitted. We will get back to you shortly.");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setMessage("Network error while submitting.");
    }
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
      <label className="block">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">NAME</span>
        <input
          type="text"
          value={formData.name}
          required
          minLength={2}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, name: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <label className="block">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">EMAIL</span>
        <input
          type="email"
          value={formData.email}
          required
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, email: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <label className="block">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">
          {detailsLabel.toUpperCase()}
        </span>
        <textarea
          rows={3}
          value={formData.details}
          required
          minLength={10}
          placeholder={detailsPlaceholder}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, details: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b border-outline bg-transparent py-2 text-sm outline-none placeholder:text-on-surface-soft focus:border-primary"
        />
      </label>

      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary rounded-sm px-5 py-2 text-[11px] font-semibold tracking-[0.16em] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "SUBMITTING..." : buttonLabel.toUpperCase()}
        </button>

        {status !== "idle" ? (
          <p className={`text-xs ${status === "error" ? "text-[#ff8d89]" : "text-primary"}`}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

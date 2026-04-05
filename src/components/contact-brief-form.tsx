"use client";

import { FormEvent, useMemo, useState } from "react";

type FormDataState = {
  name: string;
  email: string;
  projectType: string;
  scope: string;
};

const initialFormState: FormDataState = {
  name: "",
  email: "",
  projectType: "",
  scope: "",
};

const scopeLimit = 2000;

function validate(values: FormDataState) {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!emailRegex.test(values.email.trim())) {
    errors.push("Enter a valid email address.");
  }

  if (values.projectType.trim().length < 2) {
    errors.push("Project type must be at least 2 characters.");
  }

  if (values.scope.trim().length < 10) {
    errors.push("Scope details must be at least 10 characters.");
  }

  if (values.scope.length > scopeLimit) {
    errors.push(`Scope details must be under ${scopeLimit} characters.`);
  }

  return errors;
}

export function ContactBriefForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const remaining = useMemo(() => scopeLimit - formData.scope.length, [formData.scope.length]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validate(formData);
    if (errors.length > 0) {
      setStatus("error");
      setMessage(errors[0] ?? "Please review your input and try again.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting your brief...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const body = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: string[];
      };

      if (!response.ok || !body.ok) {
        setStatus("error");
        setMessage(body.errors?.[0] ?? body.message ?? "Failed to submit brief.");
        return;
      }

      setStatus("success");
      setMessage(body.message ?? "Brief submitted successfully.");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setMessage("Network error while submitting brief.");
    }
  }

  return (
    <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
      <label className="sm:col-span-1">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">FULL NAME</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          minLength={2}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, name: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b-2 border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <label className="sm:col-span-1">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">WORK EMAIL</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, email: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b-2 border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <label className="sm:col-span-2">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">PROJECT TYPE</span>
        <input
          type="text"
          name="projectType"
          value={formData.projectType}
          required
          minLength={2}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, projectType: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b-2 border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <label className="sm:col-span-2">
        <span className="font-mono text-[10px] tracking-[0.12em] text-on-surface-soft">SCOPE DETAILS</span>
        <textarea
          name="scope"
          rows={4}
          value={formData.scope}
          required
          minLength={10}
          maxLength={scopeLimit}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, scope: event.currentTarget.value }));
          }}
          className="mt-2 w-full border-b-2 border-outline bg-transparent py-2 text-sm outline-none focus:border-primary"
        />
        <div className="mt-2 font-mono text-[10px] text-on-surface-soft">{remaining} characters left</div>
      </label>

      <div className="sm:col-span-2 mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="cta-gradient px-8 py-3 text-[11px] font-semibold tracking-[0.18em] text-on-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "SUBMITTING..." : "SUBMIT BRIEF"}
        </button>

        {status !== "idle" ? (
          <p
            className={`text-sm ${status === "error" ? "text-[#ff8d89]" : "text-primary"}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

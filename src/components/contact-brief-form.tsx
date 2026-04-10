"use client";

import { FormEvent, useState } from "react";

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

  return errors;
}

export function ContactBriefForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
        body: JSON.stringify({
          ...formData,
          formType: "project-brief",
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
      setMessage(body.message ?? "Brief submitted successfully.");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
      setMessage("Network error while submitting brief.");
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div className="space-y-4">
        <label className="block text-sm font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          minLength={2}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, name: event.currentTarget.value }));
          }}
          className="form-input"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Work Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, email: event.currentTarget.value }));
          }}
          className="form-input"
          placeholder="john@company.com"
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Project Type</label>
        <input
          type="text"
          name="projectType"
          value={formData.projectType}
          required
          minLength={2}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, projectType: event.currentTarget.value }));
          }}
          className="form-input"
          placeholder="Website, app, or platform"
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Project Overview</label>
        <textarea
          name="scope"
          rows={4}
          value={formData.scope}
          required
          minLength={10}
          onChange={(event) => {
            setFormData((previous) => ({ ...previous, scope: event.currentTarget.value }));
          }}
          className="form-input"
          placeholder="Tell us about your goals..."
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full py-4 text-base disabled:opacity-60">
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {status !== "idle" ? (
        <p className={`text-sm ${status === "error" ? "text-danger" : "text-primary"}`} role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}

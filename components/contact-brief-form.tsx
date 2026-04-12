"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";

import { errorMessageFromUnknown, submitContact } from "@/lib/contact-client";
import {
  projectBriefClientSchema,
  type ProjectBriefClientValues,
} from "@/lib/contact-schema";

const initialFormState: ProjectBriefClientValues = {
  name: "",
  email: "",
  projectType: "",
  scope: "",
  companyWebsite: "",
};

type MessageState = "idle" | "success" | "error";

function hasFieldError(
  hasErrors: boolean,
  isTouched: boolean,
  submissionAttempts: number,
) {
  return hasErrors && (isTouched || submissionAttempts > 0);
}

export function ContactBriefForm() {
  const [messageState, setMessageState] = useState<MessageState>("idle");
  const [messageText, setMessageText] = useState("");

  const form = useForm({
    defaultValues: initialFormState,
    validators: {
      onChange: projectBriefClientSchema,
      onSubmit: projectBriefClientSchema,
    },
    onSubmit: async ({ value }) => {
      const result = await submitContact({
        ...value,
        formType: "project-brief",
      });

      if (!result.ok) {
        setMessageState("error");
        setMessageText(result.message);
        return;
      }

      setMessageState("success");
      setMessageText(result.message);
      form.reset();
    },
    onSubmitInvalid: () => {
      const firstError = form.state.errors
        .map((error) => errorMessageFromUnknown(error))
        .find((error) => error.length > 0);

      setMessageState("error");
      setMessageText(firstError ?? "Please review your input and try again.");
    },
  });

  const status: MessageState | "loading" = form.state.isSubmitting
    ? "loading"
    : messageState;

  const clearMessage = () => {
    if (messageState !== "idle") {
      setMessageState("idle");
      setMessageText("");
    }
  };
  const submitMessage = status === "loading" ? "Submitting your brief..." : messageText;

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
      noValidate
    >
      <div className="space-y-4">
        <label className="block text-sm font-bold">Name</label>
        <form.Field name="name">
          {(field) => {
            const fieldHasError = hasFieldError(
              field.state.meta.errors.length > 0,
              field.state.meta.isTouched,
              form.state.submissionAttempts,
            );

            return (
              <>
                <input
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={fieldHasError}
                  onChange={(event) => {
                    clearMessage();
                    field.handleChange(event.target.value);
                  }}
                  onBlur={field.handleBlur}
                  className="form-input"
                  placeholder="John Doe"
                />
                {fieldHasError ? (
                  <p className="text-xs text-danger" role="alert">
                    {errorMessageFromUnknown(field.state.meta.errors[0])}
                  </p>
                ) : null}
              </>
            );
          }}
        </form.Field>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Work Email</label>
        <form.Field name="email">
          {(field) => {
            const fieldHasError = hasFieldError(
              field.state.meta.errors.length > 0,
              field.state.meta.isTouched,
              form.state.submissionAttempts,
            );

            return (
              <>
                <input
                  type="email"
                  name={field.name}
                  value={field.state.value}
                  required
                  maxLength={254}
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={fieldHasError}
                  onChange={(event) => {
                    clearMessage();
                    field.handleChange(event.target.value);
                  }}
                  onBlur={field.handleBlur}
                  className="form-input"
                  placeholder="john@company.com"
                />
                {fieldHasError ? (
                  <p className="text-xs text-danger" role="alert">
                    {errorMessageFromUnknown(field.state.meta.errors[0])}
                  </p>
                ) : null}
              </>
            );
          }}
        </form.Field>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Project Type</label>
        <form.Field name="projectType">
          {(field) => {
            const fieldHasError = hasFieldError(
              field.state.meta.errors.length > 0,
              field.state.meta.isTouched,
              form.state.submissionAttempts,
            );

            return (
              <>
                <input
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="organization-title"
                  aria-invalid={fieldHasError}
                  onChange={(event) => {
                    clearMessage();
                    field.handleChange(event.target.value);
                  }}
                  onBlur={field.handleBlur}
                  className="form-input"
                  placeholder="Website, app, or platform"
                />
                {fieldHasError ? (
                  <p className="text-xs text-danger" role="alert">
                    {errorMessageFromUnknown(field.state.meta.errors[0])}
                  </p>
                ) : null}
              </>
            );
          }}
        </form.Field>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold">Project Overview</label>
        <form.Field name="scope">
          {(field) => {
            const fieldHasError = hasFieldError(
              field.state.meta.errors.length > 0,
              field.state.meta.isTouched,
              form.state.submissionAttempts,
            );

            return (
              <>
                <textarea
                  name={field.name}
                  rows={4}
                  value={field.state.value}
                  required
                  minLength={10}
                  maxLength={2000}
                  aria-invalid={fieldHasError}
                  onChange={(event) => {
                    clearMessage();
                    field.handleChange(event.target.value);
                  }}
                  onBlur={field.handleBlur}
                  className="form-input"
                  placeholder="Tell us about your goals..."
                />
                {fieldHasError ? (
                  <p className="text-xs text-danger" role="alert">
                    {errorMessageFromUnknown(field.state.meta.errors[0])}
                  </p>
                ) : null}
              </>
            );
          }}
        </form.Field>
      </div>

      <form.Field name="companyWebsite">
        {(field) => (
          <input
            type="text"
            name={field.name}
            value={field.state.value}
            onChange={(event) => {
              field.handleChange(event.target.value);
            }}
            onBlur={field.handleBlur}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="honeypot-field"
          />
        )}
      </form.Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {submitMessage.length > 0 ? (
        <p
          className={`text-sm ${status === "error" ? "text-danger" : "text-primary"}`}
          role="status"
          aria-live="polite"
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}

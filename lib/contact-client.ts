import type { ContactFormType } from "@/lib/contact-schema";

type SubmitContactPayload = {
  name: string;
  email: string;
  projectType: string;
  scope: string;
  formType: ContactFormType;
  companyWebsite?: string;
};

export type ContactSubmissionResult = {
  ok: boolean;
  message: string;
  errors?: string[];
};

const REQUEST_TIMEOUT_MS = 12_000;

function getWindowSource() {
  if (typeof window === "undefined") {
    return {
      sourcePath: "",
      sourceUrl: "",
    };
  }

  return {
    sourcePath: window.location.pathname,
    sourceUrl: window.location.href,
  };
}

export function errorMessageFromUnknown(error: unknown) {
  if (typeof error === "string") {
    return error;
  }

  if (error && typeof error === "object") {
    const maybeMessage = (error as { message?: unknown }).message;
    if (typeof maybeMessage === "string") {
      return maybeMessage;
    }
  }

  return "Invalid input.";
}

export async function submitContact(payload: SubmitContactPayload): Promise<ContactSubmissionResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  const { sourcePath, sourceUrl } = getWindowSource();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        ...payload,
        sourcePath,
        sourceUrl,
      }),
      credentials: "same-origin",
      cache: "no-store",
      signal: controller.signal,
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
      return {
        ok: false,
        message:
          body?.errors?.[0] ??
          body?.message ??
          "Submission failed. Please try again shortly.",
        errors: body?.errors,
      };
    }

    return {
      ok: true,
      message: body.message ?? "Brief submitted successfully.",
    };
  } catch (error) {
    const isAbortError = error instanceof Error && error.name === "AbortError";
    return {
      ok: false,
      message: isAbortError
        ? "Request timed out. Please try again."
        : "Network error while submitting.",
    };
  } finally {
    clearTimeout(timeout);
  }
}

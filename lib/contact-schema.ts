import { z } from "zod";

const htmlEscapePattern = /[<>]/;

export const CONTACT_FORM_TYPES = ["project-brief", "admissions", "career-intake"] as const;

export const CONTACT_LIMITS = {
  maxBodyBytes: 16_384,
  maxNameLength: 100,
  maxEmailLength: 254,
  maxProjectTypeLength: 120,
  maxScopeLength: 2_000,
  maxSourceFieldLength: 512,
} as const;

export const contactNameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters.")
  .max(CONTACT_LIMITS.maxNameLength, `Name must be at most ${CONTACT_LIMITS.maxNameLength} characters.`)
  .refine((value) => !htmlEscapePattern.test(value), {
    message: "Name contains invalid characters.",
  });

export const contactEmailSchema = z
  .string()
  .trim()
  .email("Email must be a valid address.")
  .max(CONTACT_LIMITS.maxEmailLength, "Email must be a valid address.");

export const contactProjectTypeSchema = z
  .string()
  .trim()
  .min(2, "Project type must be at least 2 characters.")
  .max(
    CONTACT_LIMITS.maxProjectTypeLength,
    `Project type must be at most ${CONTACT_LIMITS.maxProjectTypeLength} characters.`,
  )
  .refine((value) => !htmlEscapePattern.test(value), {
    message: "Project type contains invalid characters.",
  });

export const contactScopeSchema = z
  .string()
  .trim()
  .min(10, "Scope details must be at least 10 characters.")
  .max(CONTACT_LIMITS.maxScopeLength, `Scope details must be at most ${CONTACT_LIMITS.maxScopeLength} characters.`)
  .refine((value) => !htmlEscapePattern.test(value), {
    message: "Scope details contain invalid characters.",
  });

const sourceFieldSchema = z.string().trim().max(CONTACT_LIMITS.maxSourceFieldLength);

const sourceUrlSchema = sourceFieldSchema.refine(
  (value) => {
    if (value.length === 0) {
      return true;
    }

    try {
      const parsed = new URL(value);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  },
  {
    message: "Source URL is invalid.",
  },
);

const contactHoneypotClientSchema = z.string().trim().max(0);

const contactHoneypotServerSchema = z
  .union([z.string(), z.undefined()])
  .transform((value) => (typeof value === "string" ? value.trim() : ""));

export const contactSubmissionSchema = z.object({
  name: contactNameSchema,
  email: contactEmailSchema,
  projectType: contactProjectTypeSchema,
  scope: contactScopeSchema,
  formType: z.enum(CONTACT_FORM_TYPES),
  sourcePath: sourceFieldSchema.optional().default(""),
  sourceUrl: sourceUrlSchema.optional().default(""),
  companyWebsite: contactHoneypotServerSchema,
});

export const projectBriefClientSchema = z.object({
  name: contactNameSchema,
  email: contactEmailSchema,
  projectType: contactProjectTypeSchema,
  scope: contactScopeSchema,
  companyWebsite: contactHoneypotClientSchema,
});

export const intentClientSchema = z.object({
  name: contactNameSchema,
  email: contactEmailSchema,
  details: contactScopeSchema,
  companyWebsite: contactHoneypotClientSchema,
});

export type ContactFormType = (typeof CONTACT_FORM_TYPES)[number];
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type ProjectBriefClientValues = z.infer<typeof projectBriefClientSchema>;
export type IntentClientValues = z.infer<typeof intentClientSchema>;

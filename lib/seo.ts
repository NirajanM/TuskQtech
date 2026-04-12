const configuredSupportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();

export const siteConfig = {
  name: "TuskQ",
  shortName: "TuskQ",
  description: "Engineering authority for the digital era.",
  tagline: "Innovate. Educate. Elevate.",
  url: "https://tuskq.com",
  ogImage: "/opengraph-image",
  locale: "en_US",
  creator: "@tuskq",
  supportEmail: configuredSupportEmail && configuredSupportEmail.length > 0
    ? configuredSupportEmail
    : "support@tuskq.com",
} as const;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function supportMailto(subject?: string) {
  if (!subject) {
    return `mailto:${siteConfig.supportEmail}`;
  }

  return `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(subject)}`;
}

const configuredSupportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
const defaultSupportEmail = "support@tuskq.com";

export const siteConfig = {
  name: "TuskQ",
  shortName: "TUSKQ",
  defaultTitle: "TUSKQ | Digital Product Engineering in Nepal",
  description:
    "TUSKQ builds digital products people actually use for founders, teams, and businesses serious about getting it right.",
  tagline: "Innovate. Educate. Elevate.",
  url: "https://tuskq.com",
  ogImage: "/opengraph-image",
  locale: "en_US",
  creator: "@tuskq",
  location: "Nepal",
  supportEmail: configuredSupportEmail && configuredSupportEmail.length > 0
    ? configuredSupportEmail
    : defaultSupportEmail,
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

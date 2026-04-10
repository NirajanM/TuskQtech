export const siteConfig = {
  name: "TuskQ",
  shortName: "TuskQ",
  description: "Engineering authority for the digital era.",
  url: "https://tuskq.com",
  ogImage: "/opengraph-image",
  locale: "en_US",
  creator: "@tuskq",
} as const;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

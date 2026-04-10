export const siteConfig = {
  name: "TuskQtech",
  shortName: "TuskQtech",
  description: "Engineering authority for the digital era.",
  url: "https://tuskqtech.vercel.app",
  ogImage: "/opengraph-image",
  locale: "en_US",
  creator: "@tuskqtech",
} as const;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

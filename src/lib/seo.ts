export const siteConfig = {
  name: "TuskQtech",
  shortName: "TuskQtech",
  description:
    "TuskQtech merges industrial B2B engineering and high-energy technical education through its Kinetic Monolith framework.",
  url: "https://tuskqtech.vercel.app",
  ogImage: "/opengraph-image",
  locale: "en_US",
  creator: "@tuskqtech",
} as const;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

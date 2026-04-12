import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";

import { absoluteUrl, siteConfig } from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const themeInitScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("tuskq-theme");
    const nextTheme = storedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TuskQ | Engineering Authority for the Digital Era",
    template: "%s | TuskQ",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "TuskQ | Engineering Authority for the Digital Era",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TuskQ Home",
      },
    ],
  },
  icons: {
    icon: [{ url: "/icon" }],
    shortcut: [{ url: "/icon" }],
    apple: [{ url: "/icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TuskQ | Engineering Authority for the Digital Era",
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  keywords: [
    "TuskQ",
    "software development",
    "technical education",
    "cybersecurity",
    "Next.js agency",
    "bootcamp",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

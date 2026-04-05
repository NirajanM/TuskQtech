import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Teko } from "next/font/google";

import { absoluteUrl, siteConfig } from "@/lib/seo";

import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TuskQtech | Kinetic Monolith Framework",
    template: "%s | TuskQtech",
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
    title: "TuskQtech | Kinetic Monolith Framework",
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
        alt: "TuskQtech Kinetic Monolith interface preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TuskQtech | Kinetic Monolith Framework",
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  keywords: [
    "TuskQtech",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

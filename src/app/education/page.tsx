import type { Metadata } from "next";
import Link from "next/link";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import { bootcamps } from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Review TuskQtech bootcamp tracks for frontend, backend, infrastructure, security, product, and applied AI.",
  alternates: {
    canonical: absoluteUrl("/education"),
  },
  openGraph: {
    title: "Education | TuskQtech",
    description:
      "Review TuskQtech bootcamp tracks for frontend, backend, infrastructure, security, product, and applied AI.",
    url: absoluteUrl("/education"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TuskQtech education and bootcamps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | TuskQtech",
    description:
      "Review TuskQtech bootcamp tracks for frontend, backend, infrastructure, security, product, and applied AI.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function EducationPage() {
  return (
    <SiteLayout headerCtaLabel="Apply Now">
      <section className="mesh-grain px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-[10px] tracking-[0.28em] text-secondary">EDUCATION TRACKS</p>
          <h1 className="font-headline mt-3 text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
            TRAIN FOR
            <br />
            <span className="text-secondary">REAL DELIVERY</span>
          </h1>
          <p className="mt-8 max-w-[70ch] text-on-surface-soft sm:text-lg">
            Curriculum built around modern software teams, combining production tooling, mentorship,
            and practical outcomes that hiring managers can verify.
          </p>
        </div>
      </section>

      <section className="bg-surface-low px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-3">
          {bootcamps.map((bootcamp) => (
            <article key={bootcamp.title} className="bg-surface p-8">
              <div className="h-1 w-14 bg-secondary" />
              <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-secondary">
                {bootcamp.level}
              </p>
              <h2 className="font-headline mt-3 text-4xl">{bootcamp.title}</h2>
              <p className="mt-4 min-h-[74px] text-on-surface-soft">{bootcamp.description}</p>

              <div className="mt-8 bg-[rgba(0,0,0,0.25)] p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] text-outline">NEXT COHORT</p>
                <p className="mt-2 font-mono text-sm text-on-surface">{bootcamp.cohort}</p>
              </div>

              <Link
                href="/contact#admissions"
                className="mt-7 block w-full border border-[rgba(255,170,23,0.45)] py-3 text-center font-mono text-[11px] tracking-[0.16em] text-secondary transition-colors hover:bg-secondary hover:text-on-secondary"
              >
                ENROLL NOW
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

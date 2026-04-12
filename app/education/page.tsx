import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import { educationPageTracks, roadmapContent } from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Education",
  description: "Technical learning paths that reflect real product delivery standards.",
  alternates: {
    canonical: absoluteUrl("/education"),
  },
  openGraph: {
    title: "Education | TuskQ",
    description: "Technical learning paths that reflect real product delivery standards.",
    url: absoluteUrl("/education"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TuskQ education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | TuskQ",
    description: "Technical learning paths that reflect real product delivery standards.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function EducationPage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface-container-low py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <h1 className="section-title mb-16 text-5xl" data-reveal data-reveal-delay="1">
            Technical Learning Paths
          </h1>

          <div className="mb-10 overflow-hidden rounded-xl bg-surface p-3" data-reveal data-reveal-delay="1">
            <Image
              src="/abstract-ribbon.svg"
              alt="Abstract learning ribbon"
              width={900}
              height={620}
              className="h-auto w-full rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {educationPageTracks.map((track, index) => (
              <article
                key={track.title}
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
                className="lift-card rounded-xl bg-surface p-8"
              >
                <h2 className="mb-3 text-xl font-bold">{track.title}</h2>
                <p className="copy-flow text-sm leading-relaxed text-on-surface-variant">{track.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-surface p-8" data-reveal data-reveal-delay="2">
            <h3 className="mb-4 text-2xl font-bold">Apply for Learning Tracks</h3>
            <p className="mb-6 text-on-surface-variant">
              Submit admissions details to get the right program recommendation.
            </p>
            <Link href="/contact#admissions" className="btn-primary px-8 py-3 text-sm">
              Admissions Form
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <h2 className="section-title mb-20 text-center text-3xl">{roadmapContent.title}</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {roadmapContent.steps.map((step, index) => (
              <div key={step.number} className="relative" data-reveal data-reveal-delay={String((index % 3) + 1)}>
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full font-bold ${
                    step.active
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container-highest text-primary"
                  }`}
                >
                  {step.number}
                </div>
                <h4 className="mb-2 font-bold">{step.title}</h4>
                <p className="copy-flow text-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

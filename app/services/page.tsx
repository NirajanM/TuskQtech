import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import { servicesPageContent } from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description: "Solutions that power your growth.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Services | TuskQ",
    description: "Solutions that power your growth.",
    url: absoluteUrl("/services"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TuskQ services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | TuskQ",
    description: "Solutions that power your growth.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function ServicesPage() {
  const primaryService = servicesPageContent[0];

  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-16" data-reveal data-reveal-delay="1">
            <h1 className="section-title text-5xl">Solutions That Power Your Growth</h1>
            <div className="mt-4 h-1 w-20 bg-primary" />
          </div>

          <div className="mb-10 overflow-hidden rounded-xl bg-surface-container p-3" data-reveal data-reveal-delay="1">
            <Image
              src="/abstract-grid.svg"
              alt="Abstract engineering visual"
              width={900}
              height={620}
              className="h-auto w-full rounded-lg"
            />
          </div>

          {primaryService ? (
            <article
              data-reveal
              data-reveal-delay="1"
              className="lift-card mb-10 rounded-xl bg-gradient-to-br from-primary to-brand-purple p-10 text-on-primary shadow-[0_28px_54px_rgba(0,86,179,0.28)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-on-primary/15 text-on-primary">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
                  <path d="M9 8 5 12l4 4" />
                  <path d="m15 8 4 4-4 4" />
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-black md:text-4xl">{primaryService.title}</h2>
              <p className="mb-6 max-w-3xl text-on-primary/90">{primaryService.description}</p>
              <div className="grid gap-2 md:grid-cols-2">
                {primaryService.points.map((point) => (
                  <p key={point} className="text-sm text-on-primary/90">
                    • {point}
                  </p>
                ))}
              </div>
            </article>
          ) : null}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesPageContent.slice(1).map((service, index) => (
              <article
                key={service.title}
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
                className={`lift-card rounded-xl p-10 ${index % 2 === 0 ? "bg-surface-container" : "bg-surface-container-low"}`}
              >
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{service.title}</h2>
                <p className="mb-6 leading-relaxed text-on-surface-variant">{service.description}</p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-surface-container p-8" data-reveal data-reveal-delay="2">
            <h3 className="mb-4 text-2xl font-bold">Start a Service Conversation</h3>
            <p className="mb-6 text-on-surface-variant">
              Ready to work together? Submit a project brief and our team will follow up.
            </p>
            <Link href="/contact#project-brief" className="btn-primary px-8 py-3 text-sm">
              Submit Project Brief
            </Link>
          </div>
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

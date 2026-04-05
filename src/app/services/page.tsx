import type { Metadata } from "next";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TuskQtech engineering and consulting services across product, platform, cybersecurity, and modernization.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Services | TuskQtech",
    description:
      "Explore TuskQtech engineering and consulting services across product, platform, cybersecurity, and modernization.",
    url: absoluteUrl("/services"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TuskQtech services overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | TuskQtech",
    description:
      "Explore TuskQtech engineering and consulting services across product, platform, cybersecurity, and modernization.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function ServicesPage() {
  return (
    <SiteLayout headerCtaLabel="Start Project">
      <section className="mesh-grain px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-[10px] tracking-[0.28em] text-primary">SERVICE CATALOG</p>
          <h1 className="font-headline mt-3 text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
            BUILD SYSTEMS
            <br />
            <span className="bg-gradient-to-br from-primary to-primary-strong bg-clip-text text-transparent">
              THAT ENDURE
            </span>
          </h1>
          <p className="mt-8 max-w-[70ch] text-on-surface-soft sm:text-lg">
            We deliver modular execution layers from architecture strategy to production hardening,
            with measurable outcomes and operator-grade quality.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="tech-card bg-surface p-7 sm:p-10">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[42px] leading-none text-outline-ghost/55">{service.id}</p>
              </div>
              <h2 className="font-headline mt-5 text-4xl leading-[0.95]">{service.title}</h2>
              <p className="mt-5 max-w-[56ch] text-on-surface-soft">{service.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-surface-high px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-on-surface-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-right font-mono text-[10px] tracking-[0.16em] text-on-surface-soft">
                {service.module}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

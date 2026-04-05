import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import {
  hero,
  metrics,
  partnerWords,
  pillars,
  services,
  bootcamps,
} from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kinetic Monolith Framework",
  description:
    "TuskQtech homepage for enterprise software delivery and technical education through the Kinetic Monolith framework.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "TuskQtech | Kinetic Monolith Framework",
    description:
      "Explore TuskQtech services, education tracks, and the Kinetic Monolith execution model.",
    url: absoluteUrl("/"),
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
    description:
      "Explore TuskQtech services, education tracks, and the Kinetic Monolith execution model.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mesh-grain relative min-h-[calc(100vh-80px)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="fade-in-up lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-surface-highest px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                {hero.badge}
              </span>
            </div>

            <h1 className="font-headline text-6xl leading-[0.88] sm:text-7xl md:text-8xl lg:text-9xl">
              {hero.headingTop}
              <br />
              <span className="bg-gradient-to-br from-primary to-primary-strong bg-clip-text text-transparent">
                {hero.headingAccent}
              </span>
              <br />
              {hero.headingBottom}
            </h1>

            <p className="fade-in-up fade-delay-1 mt-8 max-w-[60ch] text-base leading-relaxed text-on-surface-soft sm:text-lg md:text-xl">
              {hero.body}
            </p>

            <div className="fade-in-up fade-delay-2 mt-10 flex flex-wrap gap-4">
              {hero.actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "ambient-glow-cyan cta-gradient px-7 py-4 text-[11px] font-semibold tracking-[0.2em] text-on-primary transition-transform hover:-translate-y-0.5"
                      : "ambient-glow-amber bg-secondary px-7 py-4 text-[11px] font-semibold tracking-[0.2em] text-on-secondary transition-transform hover:-translate-y-0.5"
                  }
                >
                  {action.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="fade-in-up fade-delay-3 lg:col-span-5 lg:pl-8">
            <div className="relative min-h-[420px] w-full overflow-hidden bg-surface-low sm:min-h-[520px]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                className="object-cover opacity-65"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.14em] text-primary/80">
                {hero.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-low px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className={`pl-5 ${
                  metric.accent === "primary"
                    ? "border-l-2 border-primary"
                    : "border-l-2 border-secondary"
                }`}
              >
                <p className="font-mono text-4xl font-bold text-on-surface">{metric.value}</p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-on-surface-soft">
                  {metric.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-2 gap-6 font-headline text-3xl text-on-surface-soft opacity-65 sm:grid-cols-5 sm:text-4xl">
              {partnerWords.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
            <Image
              src="/logo-suite.png"
              alt="TuskQtech suite marks"
              width={140}
              height={140}
              className="justify-self-start opacity-55 lg:justify-self-end"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.key} className="relative min-h-[560px] px-5 py-16 sm:px-8 lg:px-12">
            <Image
              src={pillar.image}
              alt={pillar.imageAlt}
              fill
              className="object-cover opacity-30"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-[rgba(12,14,19,0.7)] to-[rgba(12,14,19,0.3)]" />

            <div className="relative mx-auto h-full w-full max-w-[620px]">
              <p
                className={`font-mono text-[10px] tracking-[0.26em] ${
                  pillar.accent === "primary" ? "text-primary" : "text-secondary"
                }`}
              >
                {pillar.marker}
              </p>
              <h2 className="font-headline mt-4 text-5xl sm:text-6xl">{pillar.title}</h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-on-surface-soft">
                {pillar.description}
              </p>
              <ul className="mt-8 space-y-3 font-mono text-sm text-on-surface">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section id="services" className="px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-primary">SYSTEM UTILITIES</p>
              <h2 className="font-headline mt-3 text-6xl sm:text-7xl">THE SERVICES</h2>
            </div>
            <p className="font-mono text-[10px] leading-relaxed tracking-[0.15em] text-on-surface-soft">
              EXECUTION LAYERS BUILT ON THE KINETIC MONOLITH FRAMEWORK. SHARP, ADAPTABLE, AND
              DEPLOYED WITH CONTROL.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <article key={service.id} className="tech-card bg-surface p-7 sm:p-10">
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[42px] leading-none text-outline-ghost/55">{service.id}</p>
                </div>
                <h3 className="font-headline mt-5 text-4xl leading-[0.95]">{service.title}</h3>
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

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex border border-[rgba(70,72,77,0.4)] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-on-surface transition-colors hover:bg-surface-high"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      <section id="education" className="bg-surface-low px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-[10px] tracking-[0.28em] text-secondary">TRAINING MODULES</p>
          <h2 className="font-headline mt-3 text-6xl sm:text-7xl">BOOTCAMPS</h2>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {bootcamps.slice(0, 3).map((bootcamp) => (
              <article key={bootcamp.title} className="bg-surface p-8">
                <div className="h-1 w-14 bg-secondary" />
                <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-secondary">
                  {bootcamp.level}
                </p>
                <h3 className="font-headline mt-3 text-4xl">{bootcamp.title}</h3>
                <p className="mt-4 min-h-[74px] text-on-surface-soft">{bootcamp.description}</p>

                <div className="mt-8 bg-[rgba(0,0,0,0.25)] p-4">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-outline">NEXT COHORT</p>
                  <p className="mt-2 font-mono text-sm text-on-surface">{bootcamp.cohort}</p>
                </div>

                <Link
                  href="/education"
                  className="mt-7 block w-full border border-[rgba(255,170,23,0.45)] py-3 text-center font-mono text-[11px] tracking-[0.16em] text-secondary transition-colors hover:bg-secondary hover:text-on-secondary"
                >
                  ENROLL NOW
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/education"
              className="inline-flex border border-[rgba(70,72,77,0.4)] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-on-surface transition-colors hover:bg-surface-high"
            >
              VIEW ALL BOOTCAMPS
            </Link>
          </div>
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

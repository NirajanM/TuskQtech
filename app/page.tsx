import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import {
  heroContent,
  philosophyContent,
  portfolioContent,
  roadmapContent,
  solutionCards,
  teamContent,
  whyChooseUs,
} from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TuskQ",
  description: "Engineering authority for the digital era.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "TuskQ | Engineering Authority for the Digital Era",
    description: "Engineering authority for the digital era.",
    url: absoluteUrl("/"),
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
  twitter: {
    card: "summary_large_image",
    title: "TuskQ | Engineering Authority for the Digital Era",
    description: "Engineering authority for the digital era.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function HomePage() {
  const iconMap = {
    code: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
        <path d="M9 8 5 12l4 4" />
        <path d="m15 8 4 4-4 4" />
      </svg>
    ),
    smartphone: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
        <path d="M12 3a9 9 0 1 0 0 18h1a3 3 0 0 0 0-6h-1a2 2 0 0 1 0-4h3a4 4 0 0 0 4-4 4 4 0 0 0-4-4h-3Z" />
        <circle cx="7.5" cy="10.5" r="1" />
        <circle cx="9.5" cy="7.5" r="1" />
        <circle cx="13.5" cy="7.5" r="1" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0 1-9.9A7 7 0 0 0 3 9a4 4 0 0 0 0 6Z" />
      </svg>
    ),
  } as const;

  const aboutImageSrc = "/stitch/image-03.png";
  const portfolioImageSrc = ["/stitch/image-04.png", "/stitch/image-05.png"] as const;

  return (
    <SiteLayout>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-20">
        <div className="hero-abstract" data-parallax data-parallax-speed="0.05" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8" data-reveal>
          <div className="max-w-3xl" data-reveal data-reveal-delay="1">
            <h1 className="mb-8 text-6xl leading-[0.9] font-extrabold tracking-tighter text-on-surface md:text-8xl">
              {heroContent.title}
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-on-surface-variant">
              {heroContent.subtitle}
            </p>
            <div className="flex gap-4" data-reveal data-reveal-delay="2">
              <Link href="/contact#project-brief" className="btn-primary px-8 py-4 text-base">
                Start Your Project
              </Link>
              <Link href="/services" className="btn-secondary px-8 py-4 text-base">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-surface-container-low py-32" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-24 px-8 md:grid-cols-2">
          <div data-reveal data-reveal-delay="1">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              {philosophyContent.eyebrow}
            </span>
            <h2 className="section-title mb-8 text-4xl text-on-surface md:text-5xl">
              {philosophyContent.title}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">{philosophyContent.body}</p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {philosophyContent.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-2 text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-on-surface-variant">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-reveal data-reveal-delay="2">
            <div className="lift-card aspect-square overflow-hidden rounded-xl bg-surface-container-highest">
              <Image
                src={aboutImageSrc}
                alt="Professional team workspace"
                width={512}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-lg bg-secondary p-8 text-on-secondary shadow-2xl">
              <p className="font-medium italic">&ldquo;{philosophyContent.quote}&rdquo;</p>
              <p className="mt-4 text-sm opacity-80">{philosophyContent.quoteAuthor}</p>
            </div>

            <Image
              src="/abstract-ribbon.svg"
              alt="Abstract decorative ribbon"
              width={460}
              height={320}
              className="pointer-events-none absolute -right-10 -top-12 hidden h-auto w-72 opacity-35 mix-blend-screen lg:block"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-16" data-reveal data-reveal-delay="1">
            <h2 className="section-title text-4xl text-on-surface">Core Solutions</h2>
            <div className="mt-4 h-1 w-20 bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {solutionCards.map((card, cardIndex) => {
              const isWide = card.variant === "wide";
              const isWebCard = card.title === "Web Development";
              const isCloudCard = card.title === "Cloud & DevOps";

              return (
                <div
                  key={card.title}
                  data-reveal
                  data-reveal-delay={String((cardIndex % 3) + 1)}
                  className={`${
                    isWide
                      ? "md:col-span-2"
                      : ""
                  } ${
                    isWebCard
                      ? "relative flex items-center justify-between overflow-hidden rounded-xl bg-gradient-to-br from-primary to-brand-purple p-10 text-on-primary shadow-[0_28px_54px_rgba(0,86,179,0.28)]"
                      : isCloudCard
                        ? "relative flex items-center justify-between overflow-hidden rounded-xl bg-surface-container-low p-10"
                        : card.variant === "standard"
                        ? "rounded-xl bg-surface-container-low p-10 hover:bg-surface-container"
                        : "rounded-xl bg-surface-container p-10 hover:bg-surface-container-high"
                  } lift-card transition-colors`}
                >
                  <div className={`${isWide ? "flex h-full flex-col justify-between" : ""}`}>
                    <span className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md ${isWebCard ? "bg-on-primary/15 text-on-primary" : "bg-primary/10 text-primary"}`}>
                      {iconMap[card.icon as keyof typeof iconMap]}
                    </span>
                    {isWebCard ? (
                      <h3 className="mb-4 text-3xl font-black">{card.title}</h3>
                    ) : (
                      <h3 className="mb-4 text-2xl font-bold">{card.title}</h3>
                    )}
                    <p className={`${isWebCard ? "max-w-sm text-on-primary/90" : "text-on-surface-variant"} leading-relaxed`}>
                      {card.description}
                    </p>
                  </div>

                  {isCloudCard ? (
                    <span className="absolute -right-3 -bottom-3 text-5xl opacity-6">☁</span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-surface-container-low py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h2 className="section-title text-4xl leading-tight md:text-5xl">{whyChooseUs.title}</h2>
            </div>
            <div className="max-w-md text-lg text-on-surface-variant">{whyChooseUs.subtitle}</div>
          </div>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-5">
            {whyChooseUs.points.map((point, index) => (
              <div
                key={point.index}
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
                className={`lift-card flex h-full flex-col bg-surface-container-lowest p-8 ${index < whyChooseUs.points.length - 1 ? "border-r border-surface-container" : ""}`}
              >
                <div className="mb-4 text-xl font-black text-primary">{point.index}</div>
                <h4 className="mb-4 font-bold">{point.title}</h4>
                <p className="text-sm text-on-surface-variant">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-16 flex items-center justify-between">
            <h2 className="section-title text-4xl">{portfolioContent.title}</h2>
            <Link href="/services" className="group flex items-center gap-2 font-bold text-primary">
              {portfolioContent.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {portfolioContent.items.map((item, portfolioIndex) => (
              <div key={item.title} className="group cursor-pointer" data-reveal data-reveal-delay={String(portfolioIndex + 1)}>
                <div className="lift-card relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-surface-container">
                  <Image
                    src={portfolioImageSrc[portfolioIndex]}
                    alt={item.title}
                    width={512}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-xl bg-surface-container p-3" data-reveal data-reveal-delay="2">
            <Image
              src="/abstract-grid.svg"
              alt="Abstract technology grid"
              width={900}
              height={620}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <h2 className="section-title mb-20 text-center text-3xl">{roadmapContent.title}</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {roadmapContent.steps.map((step, stepIndex) => (
              <div key={step.number} className="relative" data-reveal data-reveal-delay={String((stepIndex % 3) + 1)}>
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
                <p className="text-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-20 text-center">
            <h2 className="section-title mb-4 text-4xl">{teamContent.title}</h2>
            <p className="text-on-surface-variant">{teamContent.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamContent.members.map((member, index) => (
              <div key={member.name} className="group" data-reveal data-reveal-delay={String((index % 3) + 1)}>
                <div className="lift-card mb-4 aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={360}
                    height={480}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-on-surface-variant">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

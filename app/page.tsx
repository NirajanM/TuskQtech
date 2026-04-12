import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionCta } from "@/components/section-cta";
import { SiteLayout } from "@/components/site-layout";
import {
  heroContent,
  philosophyContent,
  portfolioContent,
  roadmapContent,
  solutionCards,
  solutionsSectionContent,
  teamContent,
  whyChooseUs,
} from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TuskQ - Digital Product Engineering in Nepal",
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "TUSKQ homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

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
  network: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.8 7.2 10.2 16" />
      <path d="M16.2 7.2 13.8 16" />
      <path d="M8.5 6h7" />
    </svg>
  ),
} as const;

const aboutImageSrc = "/stitch/image-03.png";

function revealDelay(index: number) {
  return String((index % 3) + 1);
}

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-20">
        <div className="hero-abstract" data-parallax data-parallax-speed="0.05" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8" data-reveal>
          <div className="max-w-4xl" data-reveal data-reveal-delay="1">
            <h1 className="mb-6 text-5xl leading-[0.92] font-extrabold tracking-tighter text-on-surface md:text-7xl">
              {heroContent.title}
            </h1>
            <p className="copy-flow mb-5 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              {heroContent.intro}
            </p>
            <p className="copy-flow mb-10 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              {heroContent.body}
            </p>

            <div className="flex flex-wrap gap-4" data-reveal data-reveal-delay="2">
              <Link href="/contact#project-brief" className="btn-primary px-8 py-4 text-base">
                {heroContent.primaryCtaLabel}
              </Link>
              <Link href="/services" className="btn-secondary px-8 py-4 text-base">
                {heroContent.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-surface-container-low py-32" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-16 px-8 lg:grid-cols-2 lg:gap-24">
          <div data-reveal data-reveal-delay="1">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              {philosophyContent.eyebrow}
            </span>
            <h2 className="section-title mb-8 text-4xl text-on-surface md:text-5xl">
              {philosophyContent.title}
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-on-surface-variant">
              {philosophyContent.body.map((paragraph) => (
                <p key={paragraph} className="copy-flow">{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {philosophyContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-surface p-6">
                  <div className="mb-2 text-4xl font-black text-primary">{stat.value}</div>
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
                width={640}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>

            <blockquote className="mt-6 rounded-xl bg-secondary p-8 text-on-secondary shadow-2xl">
              <p className="copy-flow text-base leading-relaxed md:text-lg">
                &ldquo;{philosophyContent.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm opacity-85">{philosophyContent.quoteAuthor}</p>
            </blockquote>

            <Image
              src="/abstract-ribbon.svg"
              alt="Abstract decorative ribbon"
              width={460}
              height={320}
              className="pointer-events-none absolute -right-8 -top-10 hidden h-auto w-72 opacity-35 mix-blend-screen xl:block"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-16 max-w-3xl" data-reveal data-reveal-delay="1">
            <h2 className="section-title text-4xl text-on-surface">{solutionsSectionContent.title}</h2>
            <p className="mt-6 text-lg text-on-surface-variant">{solutionsSectionContent.subtitle}</p>
            <div className="mt-4 h-1 w-20 bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card, cardIndex) => {
              const isWide = card.variant === "wide";
              const isWebCard = card.title === "Web Development";

              return (
                <article
                  key={card.title}
                  data-reveal
                  data-reveal-delay={revealDelay(cardIndex)}
                  className={`lift-card rounded-xl p-8 md:p-10 ${
                    isWide ? "md:col-span-2" : ""
                  } ${
                    isWebCard
                      ? "bg-gradient-to-br from-primary to-brand-purple text-on-primary shadow-[0_28px_54px_rgba(0,86,179,0.28)]"
                      : "bg-surface-container-low hover:bg-surface-container"
                  } transition-colors`}
                >
                  <span
                    className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md ${
                      isWebCard ? "bg-on-primary/15 text-on-primary" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {iconMap[card.icon as keyof typeof iconMap]}
                  </span>
                  <h3 className={`mb-4 ${isWebCard ? "text-3xl font-black" : "text-2xl font-bold"}`}>
                    {card.title}
                  </h3>
                  <p className={`copy-flow ${isWebCard ? "text-on-primary/90" : "text-on-surface-variant"} leading-relaxed`}>
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-surface-container-low py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="section-title text-4xl leading-tight md:text-5xl">{whyChooseUs.title}</h2>
            <p className="text-lg text-on-surface-variant">{whyChooseUs.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {whyChooseUs.points.map((point, index) => (
              <article
                key={point.index}
                data-reveal
                data-reveal-delay={revealDelay(index)}
                className="lift-card h-full rounded-xl bg-surface p-8"
              >
                <div className="mb-4 text-xl font-black text-primary">{point.index}</div>
                <h3 className="mb-4 text-lg font-bold">{point.title}</h3>
                <p className="copy-flow text-sm leading-relaxed text-on-surface-variant">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
            <h2 className="section-title text-4xl">{portfolioContent.title}</h2>
            <Link href="/services" className="group flex items-center gap-2 font-bold text-primary">
              {portfolioContent.cta}
              <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {portfolioContent.items.map((item, index) => (
              <article key={item.title} data-reveal data-reveal-delay={revealDelay(index)}>
                <div className="lift-card relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-surface-container">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={720}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="copy-flow leading-relaxed text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <h2 className="section-title mb-4 text-center text-3xl md:text-4xl">{roadmapContent.title}</h2>
          <p className="mx-auto mb-14 max-w-3xl text-center text-on-surface-variant">{roadmapContent.subtitle}</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {roadmapContent.steps.map((step, index) => (
              <article key={step.number} data-reveal data-reveal-delay={revealDelay(index)}>
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full font-bold ${
                    step.active ? "bg-secondary text-on-secondary" : "bg-surface-container-highest text-primary"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 font-bold">{step.title}</h3>
                <p className="copy-flow text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-surface py-32" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title mb-4 text-4xl">{teamContent.title}</h2>
            <p className="text-on-surface-variant">{teamContent.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {teamContent.members.map((member, index) => (
              <article key={member.name} className="team-card group" data-reveal data-reveal-delay={revealDelay(index)}>
                <div className="lift-card relative mb-4 aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={360}
                    height={480}
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className={`team-portrait h-full w-full object-cover ${
                      member.imagePositionClass ?? "object-center"
                    } ${member.imageZoomClass ?? "scale-100"}`}
                  />
                  <div className="team-glow pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm font-semibold text-primary">{member.role}</p>
                <p className="copy-flow mt-2 text-sm leading-relaxed text-on-surface-variant">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </SiteLayout>
  );
}

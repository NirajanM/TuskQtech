import type { Metadata } from "next";

import { ContactBriefForm } from "@/components/contact-brief-form";
import { SiteLayout } from "@/components/site-layout";
import { contactChannels } from "@/content/site-content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TuskQtech for enterprise projects, bootcamp admissions, and technical collaboration.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact | TuskQtech",
    description:
      "Contact TuskQtech for enterprise projects, bootcamp admissions, and technical collaboration.",
    url: absoluteUrl("/contact"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Contact TuskQtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | TuskQtech",
    description:
      "Contact TuskQtech for enterprise projects, bootcamp admissions, and technical collaboration.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function ContactPage() {
  return (
    <SiteLayout headerCtaLabel="Contact">
      <section className="mesh-grain px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-[10px] tracking-[0.28em] text-primary">COMMUNICATION LAYER</p>
          <h1 className="font-headline mt-3 text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-br from-primary to-primary-strong bg-clip-text text-transparent">
              WITH INTENT
            </span>
          </h1>
          <p className="mt-8 max-w-[70ch] text-on-surface-soft sm:text-lg">
            Share your project brief, admissions intent, or career profile. We reply with clear next
            steps and a practical execution path.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div id="project-brief" className="tech-card bg-surface p-8 sm:p-10">
            <p className="font-mono text-[10px] tracking-[0.18em] text-primary">PROJECT BRIEF</p>
            <h2 className="font-headline mt-3 text-5xl">Start a Project</h2>
            <ContactBriefForm />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div id="admissions" className="bg-surface p-8">
              <p className="font-mono text-[10px] tracking-[0.18em] text-secondary">ADMISSIONS</p>
              <h3 className="font-headline mt-3 text-4xl">Join Bootcamp</h3>
              <p className="mt-3 text-on-surface-soft">
                Tell us your background and target role. We will match you with the right cohort.
              </p>
              <a
                href="mailto:academy@tuskqtech.com"
                className="mt-6 inline-flex border border-[rgba(255,170,23,0.45)] px-5 py-2 text-[11px] tracking-[0.16em] text-secondary transition-colors hover:bg-secondary hover:text-on-secondary"
              >
                EMAIL ADMISSIONS
              </a>
            </div>

            <div id="career-intake" className="bg-surface p-8">
              <p className="font-mono text-[10px] tracking-[0.18em] text-primary">CAREER INTAKE</p>
              <h3 className="font-headline mt-3 text-4xl">Work With Us</h3>
              <p className="mt-3 text-on-surface-soft">
                We recruit engineers, designers, and instructors with strong technical execution.
              </p>
              <a
                href="mailto:careers@tuskqtech.com"
                className="mt-6 inline-flex border border-[rgba(70,72,77,0.45)] px-5 py-2 text-[11px] tracking-[0.16em] text-on-surface transition-colors hover:bg-surface-high"
              >
                SEND PROFILE
              </a>
            </div>

            <div className="bg-surface-low p-8">
              <p className="font-mono text-[10px] tracking-[0.18em] text-on-surface-soft">DIRECT CHANNELS</p>
              <ul className="mt-4 space-y-5">
                {contactChannels.map((channel) => (
                  <li key={channel.title}>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-on-surface-soft">
                      {channel.title.toUpperCase()}
                    </p>
                    <p className="mt-1 text-on-surface">{channel.details}</p>
                    <p className="mt-1 text-sm text-on-surface-soft">{channel.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import type { Metadata } from "next";

import { ContactBriefForm } from "@/components/contact-brief-form";
import { ContactIntentForm } from "@/components/contact-intent-form";
import { SiteLayout } from "@/components/site-layout";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let’s build the future together.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact | TuskQtech",
    description: "Let’s build the future together.",
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
};

export default function ContactPage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface px-8 py-32">
        <div className="mx-auto w-full max-w-[1400px] rounded-xl bg-surface-container p-12 md:p-20" data-reveal>
          <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
            <div data-reveal data-reveal-delay="1">
              <h1 className="section-title mb-8 text-4xl md:text-5xl">Let’s Build the Future Together</h1>
              <p className="mb-12 max-w-[52ch] text-lg text-on-surface-variant">
                Ready to elevate your digital presence? Our experts are standing by to architect your next
                breakthrough.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-primary">✉</span>
                  <span className="font-medium">contact@tuskqtech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary">☎</span>
                  <span className="font-medium">+977 98000 00000</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary">⌂</span>
                  <span className="font-medium">Nepal</span>
                </div>
              </div>
            </div>

            <div id="project-brief" data-reveal data-reveal-delay="2">
              <ContactBriefForm />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div id="admissions" className="lift-card rounded-xl bg-surface p-8" data-reveal data-reveal-delay="1">
              <h2 className="mb-3 text-2xl font-bold">Admissions</h2>
              <p className="mb-6 text-sm text-on-surface-variant">
                Share your background and goals to join a suitable learning track.
              </p>
              <ContactIntentForm
                formType="admissions"
                projectType="Bootcamp Admissions"
                detailsLabel="Learning Goals"
                detailsPlaceholder="Tell us your background and goals."
                buttonLabel="Send Admissions Request"
              />
            </div>

            <div id="career-intake" className="lift-card rounded-xl bg-surface p-8" data-reveal data-reveal-delay="2">
              <h2 className="mb-3 text-2xl font-bold">Career Intake</h2>
              <p className="mb-6 text-sm text-on-surface-variant">
                Submit your role and experience if you want to collaborate with our team.
              </p>
              <ContactIntentForm
                formType="career-intake"
                projectType="Career Intake"
                detailsLabel="Role and Experience"
                detailsPlaceholder="Share your role, expertise, and links."
                buttonLabel="Send Career Intake"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

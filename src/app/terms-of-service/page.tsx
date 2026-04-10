import type { Metadata } from "next";

import { SiteLayout } from "@/components/site-layout";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of TuskQtech website and services.",
  alternates: {
    canonical: absoluteUrl("/terms-of-service"),
  },
};

export default function TermsOfServicePage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface px-8 py-28" data-reveal>
        <div className="mx-auto w-full max-w-[1400px] rounded-xl bg-surface-container p-10 md:p-14">
          <h1 className="section-title mb-8 text-4xl md:text-5xl">Terms of Service</h1>
          <div className="space-y-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
            <p>
              These Terms of Service govern your use of the TuskQtech website and related services. By
              accessing this website, you agree to these terms.
            </p>
            <p>
              Website content is provided for informational purposes. Project engagements, deliverables,
              timelines, and payment terms are governed by separate written agreements.
            </p>
            <p>
              You agree not to misuse this website, attempt unauthorized access, submit harmful content,
              or violate applicable laws.
            </p>
            <p>
              TuskQtech may update these terms at any time. Continued use of the website after updates
              constitutes acceptance of the revised terms.
            </p>
            <p>
              For questions regarding these terms, contact <strong>contact@tuskqtech.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

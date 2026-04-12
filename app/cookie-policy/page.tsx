import type { Metadata } from "next";

import { SiteLayout } from "@/components/site-layout";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How cookies and similar technologies are used on TuskQ.",
  alternates: {
    canonical: absoluteUrl("/cookie-policy"),
  },
};

export default function CookiePolicyPage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface px-8 py-28" data-reveal>
        <div className="mx-auto w-full max-w-[1400px] rounded-xl bg-surface-container p-10 md:p-14">
          <h1 className="section-title mb-8 text-4xl md:text-5xl">Cookie Policy</h1>
          <div className="space-y-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
            <p>
              TuskQ uses cookies and similar technologies to support core website functionality,
              improve user experience, and understand traffic trends.
            </p>
            <p>
              Essential cookies help the site operate. Performance cookies may be used to understand page
              usage and improve design and content quality.
            </p>
            <p>
              You can control cookies through browser settings. Disabling some cookies may affect site
              behavior and functionality.
            </p>
            <p>
              By continuing to use this website, you consent to this Cookie Policy.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

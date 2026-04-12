import type { Metadata } from "next";

import { SiteLayout } from "@/components/site-layout";
import { absoluteUrl, siteConfig, supportMailto } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TuskQ collects, uses, and protects information.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface px-8 py-28" data-reveal>
        <div className="mx-auto w-full max-w-[1400px] rounded-xl bg-surface-container p-10 md:p-14">
          <h1 className="section-title mb-8 text-4xl md:text-5xl">Privacy Policy</h1>
          <div className="space-y-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
            <p>
              TuskQ respects your privacy and handles personal information responsibly. This policy
              explains what data we collect, why we collect it, and how we protect it.
            </p>
            <p>
              We collect contact and project information that you submit through our forms, such as name,
              email, request type, and project details. We use this information only to respond to
              inquiries, provide services, and improve communication quality.
            </p>
            <p>
              We do not sell personal data. We may share limited information with trusted service
              providers only when required to operate this website and fulfill requests.
            </p>
            <p>
              You may request correction or deletion of your personal data by emailing
              <strong>
                {" "}
                <a href={supportMailto("Privacy request")}>{siteConfig.supportEmail}</a>
              </strong>
              . We retain data only for operational and legal
              requirements.
            </p>
            <p>By using this site, you agree to this Privacy Policy.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

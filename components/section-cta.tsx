import Link from "next/link";

import { contactChannels, finalCtaContent } from "@/content/site-content";
import { supportMailto } from "@/lib/seo";

export function SectionCta() {
  const email = contactChannels.find((channel) => channel.title === "Email")?.details ?? "support@tuskq.com";
  const location = contactChannels.find((channel) => channel.title === "Location")?.details ?? "Nepal";

  return (
    <section className="bg-surface px-8 py-32" data-reveal>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-20 rounded-xl bg-surface-container p-12 md:grid-cols-2 md:p-20">
        <div data-reveal data-reveal-delay="1">
          <h2 className="section-title mb-8 text-4xl md:text-5xl">{finalCtaContent.title}</h2>
          <p className="copy-flow mb-12 max-w-[52ch] text-lg text-on-surface-variant">
            {finalCtaContent.body}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-primary">✉</span>
              <a href={supportMailto("Project inquiry for TuskQ")} className="font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary">⌂</span>
              <span className="font-medium">{location}</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-on-surface-variant">{finalCtaContent.tagline}</p>
          </div>
        </div>

        <div className="space-y-5" data-reveal data-reveal-delay="2">
          <p className="copy-flow text-sm leading-relaxed text-on-surface-variant">
            Share your requirements through the dedicated page so submissions are tracked and routed
            correctly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={finalCtaContent.primaryAction.href} className="btn-primary px-6 py-3 text-sm">
              {finalCtaContent.primaryAction.label}
            </Link>
            <Link href={finalCtaContent.secondaryAction.href} className="btn-secondary px-6 py-3 text-sm">
              {finalCtaContent.secondaryAction.label}
            </Link>
            <Link href="/contact#career-intake" className="btn-secondary px-6 py-3 text-sm">
              Career Intake
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

import { SiteLayout } from "@/components/site-layout";

export default function NotFoundPage() {
  return (
    <SiteLayout headerCtaLabel="Contact Us">
      <section className="bg-surface px-5 py-32 sm:px-8" data-reveal>
        <div className="mx-auto w-full max-w-4xl rounded-xl bg-surface-container p-10 text-center md:p-16">
          <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-primary">404</p>
          <h1 className="section-title mb-5 text-4xl md:text-5xl">Page Not Found</h1>
          <p className="mx-auto mb-8 max-w-2xl text-on-surface-variant">
            The page you requested may have moved or no longer exists. You can return to the
            homepage or continue browsing from services and education.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary px-6 py-3 text-sm">
              Back to Home
            </Link>
            <Link href="/services" className="btn-secondary px-6 py-3 text-sm">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

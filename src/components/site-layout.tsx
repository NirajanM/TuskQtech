import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollEffects } from "@/components/scroll-effects";

type SiteLayoutProps = {
  children: ReactNode;
  headerCtaLabel?: string;
};

export function SiteLayout({ children, headerCtaLabel }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <ScrollEffects />
      <SiteHeader ctaLabel={headerCtaLabel} />
      <main className="overflow-x-clip pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteLayoutProps = {
  children: ReactNode;
  headerCtaLabel?: string;
};

export function SiteLayout({ children, headerCtaLabel }: SiteLayoutProps) {
  return (
    <div className="bg-background text-on-surface page-atmosphere">
      <SiteHeader ctaLabel={headerCtaLabel} />
      <main className="overflow-x-clip pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

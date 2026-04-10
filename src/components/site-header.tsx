import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/content/site-content";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  ctaLabel?: string;
};

export function SiteHeader({ ctaLabel = "Contact Us" }: SiteHeaderProps) {
  return (
    <header className="site-nav fixed top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="TuskQtech home">
            <Image
              src="/LogoTuskQ.svg"
              alt="TuskQtech logo"
              width={300}
              height={68}
              priority
              className="h-auto w-[124px] sm:w-[172px] lg:w-[198px]"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-6 text-[13px] font-semibold tracking-[0.08em] sm:flex md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link transition-colors">
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary rounded-lg px-4 py-2.5 text-[10px] sm:px-6 sm:text-sm">
            {ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/mobile-nav";
import { navItems } from "@/content/site-content";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  ctaLabel?: string;
};

export function SiteHeader({ ctaLabel = "Contact Us" }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="site-nav fixed top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-on-surface"
        >
          Skip to content
        </a>
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="TuskQ home">
            <Image
              src="/LogoTuskQ.svg"
              alt="TuskQ logo"
              width={300}
              height={68}
              priority
              className="h-auto w-[124px] sm:w-[172px] lg:w-[198px]"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-6 text-[13px] font-semibold tracking-[0.08em] sm:flex md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link rounded-md px-2.5 py-1.5 transition-colors ${pathname === item.href ? "bg-current/15 text-on-primary" : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MobileNav items={navItems} ctaLabel={ctaLabel} />
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden rounded-lg px-4 py-2.5 text-[10px] sm:inline-flex sm:px-6 sm:text-sm">
            {ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

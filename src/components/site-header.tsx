import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/content/site-content";

type SiteHeaderProps = {
  ctaLabel?: string;
};

export function SiteHeader({ ctaLabel = "Contact Us" }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-[rgba(41,44,51,0.6)] backdrop-blur-[20px] ambient-glow-cyan">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="fade-in-up">
          <Link href="/" className="inline-flex items-center" aria-label="TuskQtech home">
            <Image
              src="/logo.png"
              alt="TuskQtech logo"
              width={164}
              height={49}
              priority
              className="h-auto w-[128px] sm:w-[164px]"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-6 text-[10px] font-semibold tracking-[0.2em] text-on-surface-soft sm:flex md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="bg-surface-highest px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-on-primary"
        >
          {ctaLabel.toUpperCase()}
        </Link>
      </nav>
    </header>
  );
}

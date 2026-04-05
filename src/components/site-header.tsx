import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/content/site-content";

type SiteHeaderProps = {
  ctaLabel?: string;
};

export function SiteHeader({ ctaLabel = "Contact Us" }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(153,247,255,0.14)] bg-[rgba(8,11,16,0.86)] backdrop-blur-[20px] ambient-glow-cyan">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="fade-in-up">
          <Link href="/" className="logo-shell inline-flex items-center rounded-md px-2 py-1" aria-label="TuskQtech home">
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
          className="btn-primary rounded-sm px-4 py-2 text-[10px] font-semibold tracking-[0.18em] transition-all"
        >
          {ctaLabel.toUpperCase()}
        </Link>
      </nav>
    </header>
  );
}

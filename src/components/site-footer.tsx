import Image from "next/image";
import Link from "next/link";

import { footer } from "@/content/site-content";

export function SiteFooter() {
  const ecosystemColumn = footer.columns[0];
  const supportColumn = footer.columns[1];

  return (
    <footer className="bg-surface-low px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <Image src="/logo.png" alt="TuskQtech logo" width={164} height={49} className="h-auto w-40" />
          <p className="mt-4 font-mono text-xs leading-relaxed text-on-surface-soft">
            {footer.tagline.toUpperCase()}
          </p>
        </div>

        {ecosystemColumn ? (
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-on-surface">
              {ecosystemColumn.title.toUpperCase()}
            </p>
            {ecosystemColumn.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-on-surface-soft transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}

        {supportColumn ? (
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-on-surface">
              {supportColumn.title.toUpperCase()}
            </p>
            {supportColumn.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-on-surface-soft transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}

        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-on-surface">NEWSLETTER</p>
          <label className="mt-4 block" htmlFor="newsletter-email">
            <span className="sr-only">Email address</span>
            <div className="flex items-center border-b-2 border-outline py-2 focus-within:border-primary">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent font-mono text-sm text-on-surface outline-none placeholder:text-on-surface-soft"
              />
              <button
                type="button"
                className="font-mono text-[11px] tracking-[0.14em] text-primary"
                aria-label="Submit newsletter email"
              >
                SEND
              </button>
            </div>
          </label>
        </div>
      </div>

      <p className="mx-auto mt-14 w-full max-w-[1400px] border-t border-[rgba(70,72,77,0.2)] pt-7 font-mono text-[10px] tracking-[0.16em] text-on-surface-soft">
        {footer.copyright}
      </p>
    </footer>
  );
}

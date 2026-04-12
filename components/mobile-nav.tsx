"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MobileNavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: MobileNavItem[];
  ctaLabel: string;
};

export function MobileNav({ items, ctaLabel }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [{ label: "Home", href: "/" }, ...items],
    [items],
  );

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => {
          setIsOpen((previous) => !previous);
        }}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-current/30 bg-transparent text-current transition-colors hover:bg-current/10"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">Toggle navigation menu</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-2">
          {isOpen ? (
            <>
              <path d="m6 6 12 12" />
              <path d="M18 6 6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      <div
        className={`mobile-menu fixed inset-x-0 top-20 z-40 px-5 transition-all duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-xl border border-current/20 bg-surface-container p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)]">
          <nav className="flex flex-col gap-1 text-sm font-semibold tracking-[0.08em]" aria-label="Mobile navigation">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link rounded-lg px-3 py-3 transition-colors hover:bg-current/10 ${
                    isActive ? "bg-current/15" : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label.toUpperCase()}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-primary mt-3 justify-center px-4 py-3 text-xs"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

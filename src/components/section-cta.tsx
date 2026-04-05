import Image from "next/image";
import Link from "next/link";

import { cta } from "@/content/site-content";

export function SectionCta() {
  return (
    <section className="relative px-5 py-32 sm:px-8 lg:px-12">
      <div className="absolute inset-0">
        <Image src={cta.image} alt={cta.imageAlt} fill className="object-cover opacity-18" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.75)] via-[rgba(12,14,19,0.86)] to-background" />
      </div>

      <div className="relative mx-auto w-full max-w-[1100px] text-center">
        <h2 className="font-headline text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
          {cta.headingTop}
          <br />
          <span className="bg-gradient-to-br from-primary to-primary-strong bg-clip-text text-transparent">
            {cta.headingBottom}
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-[62ch] text-on-surface-soft">{cta.body}</p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {cta.actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                action.variant === "primary"
                  ? "btn-primary rounded-sm px-10 py-4 text-[11px] font-semibold tracking-[0.18em]"
                  : "border border-[rgba(70,72,77,0.4)] px-10 py-4 text-[11px] font-semibold tracking-[0.18em] text-on-surface transition-colors hover:bg-surface-high"
              }
            >
              {action.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

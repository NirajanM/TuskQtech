import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container px-8 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-black text-on-surface">TuskQ</span>
          <p className="text-sm tracking-normal text-on-surface-variant">
            © 2026 TuskQ. Engineering Authority for the Digital Era.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-normal">
          <Link
            href="/privacy-policy"
            className="text-on-surface-variant underline decoration-2 underline-offset-4 transition-opacity duration-300 hover:text-primary hover:opacity-80"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-on-surface-variant underline decoration-2 underline-offset-4 transition-opacity duration-300 hover:text-primary hover:opacity-80"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookie-policy"
            className="text-on-surface-variant underline decoration-2 underline-offset-4 transition-opacity duration-300 hover:text-primary hover:opacity-80"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

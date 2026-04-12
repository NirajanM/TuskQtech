# TuskQ

Marketing homepage implementation in Next.js 16 based on:

- Stitch node: `projects/14035709709825459706/screens/809b329af55f420ea1d61d0f7c96dd49`
- Brand system in `DESIGN.md`
- Local assets from `assets/`

## Stack

- Next.js `16.2.3` (App Router)
- React `19.2.5`
- TanStack Form + Zod for client form state and validation
- Tailwind CSS v4 via `@import "tailwindcss"`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and lint

```bash
npm run lint
npm run typecheck
npm run build
```

Or run everything in one shot:

```bash
npm run verify
```

## Build for SSG hosting

If you want static export output for VM serving (Nginx/Apache static files), run:

```bash
npm run build
```

Then copy `.next` output as part of a Node runtime deployment. If you prefer a pure static export,
configure `output: "export"` in `next.config.ts` and run build again.

## Contact form backend (Discord)

Contact briefs are posted by `POST /api/contact` to a Discord webhook.

Set this env var locally or in deployment:

```bash
export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
```

Without this value, form submission will fail with a server error.

Optional hardening env vars:

```bash
export ALLOWED_CONTACT_ORIGINS="https://tuskq.com,https://www.tuskq.com"
export NEXT_PUBLIC_SUPPORT_EMAIL="support@tuskq.com"
export NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-token"
```

- `ALLOWED_CONTACT_ORIGINS`: explicit allowlist for contact form origin checks.
- `NEXT_PUBLIC_SUPPORT_EMAIL`: centralized support email displayed across pages.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: optional SEO verification token.

The contact route also includes:

- request body size limits
- per-IP rate limiting
- honeypot spam trap
- strict origin checks
- outbound webhook timeout protection

## Additional deployment docs

- `docs/VMWARE_DEPLOYMENT.md` - production deployment to a VMware Ubuntu VM with Nginx + PM2

## Stitch MCP setup (OpenCode)

Project-level OpenCode config is in `opencode.json` and includes a remote MCP server named `stitch`.

Set your Stitch key in env before running OpenCode:

```bash
export STITCH_API_KEY="your-key-here"
```

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "stitch": {
      "type": "remote",
      "url": "https://stitch.googleapis.com/mcp",
      "enabled": true,
      "headers": {
        "X-Goog-Api-Key": "..."
      }
    }
  }
}
```

Verify resolution in this repo root:

```bash
opencode debug config
```

## Codebase map

- `app/layout.tsx` — metadata + brand font setup
- `app/globals.css` — design tokens, atmosphere gradients, utility classes
- `content/site-content.ts` — central JSON-like content source for pages
- `components/site-layout.tsx` — shared header/footer layout shell
- `components/site-header.tsx` — global nav
- `components/site-footer.tsx` — shared footer
- `components/section-cta.tsx` — reusable CTA block
- `app/page.tsx` — homepage
- `app/services/page.tsx` — services page
- `app/education/page.tsx` — education page
- `app/contact/page.tsx` — contact page
- `app/api/contact/route.ts` — Discord webhook backend for contact form
- `components/contact-brief-form.tsx` — validated client form + API submit flow
- `app/sitemap.ts` — sitemap generation
- `app/robots.ts` — robots directives + sitemap link
- `lib/seo.ts` — canonical URL and SEO helpers
- `next.config.ts` — image remote patterns for Stitch-hosted media
- `opencode.json` — MCP config using `STITCH_API_KEY` env var (no key committed)
- `VERCEL.md` — deployment checklist and env configuration guide
- `public/` — logo and photography assets used by homepage
- `DESIGN.md` — source branding and design constraints
- `assets/` — source files provided for implementation

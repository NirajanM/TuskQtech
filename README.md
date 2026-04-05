# TuskQtech

Marketing homepage implementation in Next.js 16 based on:

- Stitch node: `projects/14035709709825459706/screens/809b329af55f420ea1d61d0f7c96dd49`
- Brand system in `DESIGN.md`
- Local assets from `assets/`

## Stack

- Next.js `16.2.2` (App Router)
- React `19.2.4`
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
npm run build
```

## Contact form backend (Discord)

Contact briefs are posted by `POST /api/contact` to a Discord webhook.

Set this env var locally or in deployment:

```bash
export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
```

Without this value, form submission will fail with a server error.

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

- `src/app/layout.tsx` — metadata + brand font setup (`Teko`, `Inter`, `JetBrains Mono`)
- `src/app/globals.css` — design tokens, atmosphere gradients, utility classes
- `src/content/site-content.ts` — central JSON-like content source for pages
- `src/components/site-layout.tsx` — shared header/footer layout shell
- `src/components/site-header.tsx` — global nav
- `src/components/site-footer.tsx` — shared footer
- `src/components/section-cta.tsx` — reusable CTA block
- `src/app/page.tsx` — homepage
- `src/app/services/page.tsx` — services page
- `src/app/education/page.tsx` — education page
- `src/app/contact/page.tsx` — contact page
- `src/app/api/contact/route.ts` — Discord webhook backend for contact form
- `src/components/contact-brief-form.tsx` — validated client form + API submit flow
- `src/app/sitemap.ts` — sitemap generation
- `src/app/robots.ts` — robots directives + sitemap link
- `src/lib/seo.ts` — canonical URL and SEO helpers
- `next.config.ts` — image remote patterns for Stitch-hosted media
- `opencode.json` — MCP config using `STITCH_API_KEY` env var (no key committed)
- `VERCEL.md` — deployment checklist and env configuration guide
- `public/` — logo and photography assets used by homepage
- `DESIGN.md` — source branding and design constraints
- `assets/` — source files provided for implementation

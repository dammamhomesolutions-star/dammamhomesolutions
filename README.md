# Dammam Home Solutions — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for Dammam Home
Solutions, a residential property repair and maintenance business in
Dammam, Saudi Arabia.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live

A few values are placeholders because they weren't supplied and shouldn't
be invented. Set them via environment variables (e.g. in `.env.local`,
see `.env.local.example`):

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — the real WhatsApp business number, digits
  only, international format (e.g. `9665XXXXXXXX`). Every WhatsApp CTA on
  the site is generated from this value.
- `NEXT_PUBLIC_PHONE_DISPLAY` — public contact phone number (optional; the
  "call" link in the footer and contact panel only renders if this is set).
- `NEXT_PUBLIC_CONTACT_EMAIL` — public contact email (optional; same as
  above).

No phone number, statistic, review, award or coverage-area claim was
invented for this build — see `src/lib/site-config.ts` for the single
source of truth for business facts.

## Notes on this build

- No photography or external image assets are used anywhere on the site,
  including the favicon (`src/app/icon.tsx` / `apple-icon.tsx` render a
  small code-generated wordmark icon via `next/og`, not an image file).
  All illustrations are inline SVG.
- The homepage is intentionally not a template: the "What needs fixing?"
  issue selector, the repair checklist, and the two-flow diagnosis section
  are the homepage's own interaction model. Future service pages (AC,
  plumbing, electrical, etc.) should each get their own concept rather than
  reusing this layout — see the service-page notes carried over from the
  brief if you build those next.
- `src/lib/issues.ts` drives the "What needs fixing?" selector; edit the
  categories/examples there.

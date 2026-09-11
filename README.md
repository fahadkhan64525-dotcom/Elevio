# Elevio Interiors

Premium, cinematic interior design portfolio website — Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP/ScrollTrigger + Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

> Note: the production build fetches "DM Serif Display" and "Manrope" from Google Fonts at build time via `next/font/google`. This requires outbound internet access to `fonts.googleapis.com` — make sure that's reachable in your build environment (it's blocked in some sandboxed CI runners).

## Replacing placeholder content

- **Images** — every image currently points to an Unsplash URL as a placeholder. Replace them with real project photography:
  - Drop files into `public/images/projects/`, `public/images/hero/`, `public/images/services/`, `public/images/before-after/`
  - Update the corresponding paths in `src/data/projects.ts` and `src/data/services.ts`
  - If you keep any remote URLs, add their domain to `remotePatterns` in `next.config.js`
- **Projects** — edit `src/data/projects.ts` (title, category, location, description, challenge/solution, materials, gallery). The `/portfolio/[slug]` page is generated automatically for every entry.
- **Services / process / before-after / stats** — `src/data/services.ts`
- **Testimonials** — `src/data/testimonials.ts`
- **Business info (phone, email, WhatsApp, address, Maps link)** — `src/lib/utils.ts` (`business` object)

## Contact form

`src/components/contact/ContactForm.tsx` uses React Hook Form + Zod for validation and currently:
1. Shows a success state on valid submit
2. Builds a pre-filled WhatsApp message link from the form data

To actually deliver inquiries (email/CRM/DB), wire the `onSubmit` handler up to an API route (e.g. `src/app/api/contact/route.ts`) or a third-party form backend (Resend, Formspree, etc.) — the validation and UI states are already in place.

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout: fonts, metadata, JSON-LD, cursor, smooth scroll
│   ├── page.tsx            # Homepage — assembles all sections in order
│   └── portfolio/[slug]/   # Dynamic project detail pages
├── components/             # One folder per section, per the design spec
├── data/                   # Static content: projects, services, testimonials
├── hooks/                  # useMousePosition, useMediaQuery, useScrollProgress
└── lib/utils.ts            # cn() helper, business constants, WhatsApp message builder
```

## Accessibility & performance notes already implemented

- Semantic headings, alt text on every image, keyboard-operable hotspots/cards/filters, visible focus states
- `prefers-reduced-motion` disables Lenis smooth scroll, the cinematic pin/scrub sequence, and magnetic/parallax effects while keeping all content reachable
- Custom cursor and hover-only interactions are disabled under `900px` (mobile/tablet)
- Images use `next/image` for automatic responsive sizing, lazy loading and modern formats

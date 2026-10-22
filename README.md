# TeddyPups U.A.E. -- Full Website Clone

> **Insta Biz Web -- Full Stack Developer Internship Assignment**
> This is an **independent internship assignment** submitted by a candidate for the Full Stack Developer Internship at Insta Biz Web. It is **not** the official TeddyPups U.A.E. website.

---

## Links

| | URL |
|---|---|
| **GitHub Repository** | https://github.com/Suhani370/teddypups-clone |
| **Original Reference Website** | https://puppy.instabizweb.com/ |
| **Live Demo** | [https://teddypups-clone-rho.vercel.app/](https://teddypups-clone-rho.vercel.app/) |

---

## Overview

TeddyPups U.A.E. is a premier boutique teacup and teddy bear puppy showroom based in Downtown Dubai. This project is a production-quality clone of the reference website, faithfully reproducing the complete visual design, typography, 8-scene sky gradient, scalloped SVG borders, all six pages, and 20 dynamic puppy profile routes.

---

## Implemented Routes and Pages

| Route | Page | Key Features |
|---|---|---|
| / | Home | 8-scene sky gradient hero, circular puppy lineup, Meet the pups door cards, 4-step journey, twinkling night FAQ, Home at last CTA |
| /puppies | Puppies Directory | 15 available + 5 adopted puppies with breed, sex, age, video badges |
| /puppies/[slug] | Puppy Detail | SSG pre-rendered, health checklist, WhatsApp enquiry |
| /happy-families | Happy Families | Featured testimonial + responsive photo gallery |
| /how-it-works | How It Works | Dual-track adoption guide (Dubai Showroom + Overseas Imports) |
| /faq | FAQ | Category-filtered accordion guide |
| /contact | Visit and Contact | Dear TeddyPups interactive postcard letterform, two-column layout |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.4.2 -- App Router, SSG via generateStaticParams |
| Language | TypeScript 5 -- strict mode |
| Styling | Tailwind CSS v4 with custom @theme and @utility directives |
| Fonts | next/font/google -- Bubblegum Sans (--font-plush), Caveat (--font-scrawl) |
| Images | next/image -- remote patterns for CDN assets |
| Icons | Inline SVGs -- scalloped hems, paw prints, hill divider, puppy basket |
| Package Manager | npm |

---

## Project Structure

`
teddypups-clone/
+-- public/brand/logo.png
+-- public/icon.png
+-- src/app/
|   +-- contact/page.tsx
|   +-- faq/page.tsx
|   +-- happy-families/page.tsx
|   +-- how-it-works/page.tsx
|   +-- puppies/[slug]/page.tsx   (SSG -- 20 routes)
|   +-- puppies/page.tsx
|   +-- globals.css
|   +-- layout.tsx
|   +-- page.tsx
+-- src/components/layout/
|   +-- Footer.tsx     (night-sky: hill SVG, stars, moon, basket)
|   +-- Header.tsx     (sticky, scroll shadow, paw hover)
|   +-- MobileMenu.tsx (full-screen native dialog)
+-- src/components/shared/
|   +-- Accordion.tsx
|   +-- PawIcon.tsx
|   +-- ScallopEdge.tsx
+-- src/data/
|   +-- faq.ts / puppies.ts / siteConfig.ts / testimonials.ts
+-- LOOM_WALKTHROUGH.md
+-- AI_PROMPT_LOG.md
`

---

## Local Setup and Development

### Prerequisites
- Node.js v18.18.0 or later (v20+ recommended)
- npm v9+

### Installation

`ash
git clone https://github.com/Suhani370/teddypups-clone.git
cd teddypups-clone
npm install
`

### Development Server

`ash
npm run dev
`

Open http://localhost:3000 in your browser.

### Production Build

`ash
npm run build
npm run start
`

---

## Verified Test Results

Tests actually executed -- no results claimed unless the command was run and exit code verified.

| Check | Command | Result |
|---|---|---|
| ESLint | npm run lint | Exit 0 -- 0 errors, 0 warnings |
| TypeScript | npx tsc --noEmit | Exit 0 -- 0 type errors |
| Production Build | npm run build | Exit 0 -- all 29 routes compiled |
| Static pages | (build output) | 7 static + 20 SSG puppy profiles + /_not-found |

Responsive testing performed in browser DevTools at 390px, 768px, and 1280px viewports.
Form validation tested interactively for required fields, honeypot, and success confirmation.

---

## Deployment

This project is ready for Vercel deployment.

### Steps (Vercel Dashboard)
1. Go to https://vercel.com/new and sign in.
2. Click Import Git Repository and select Suhani370/teddypups-clone.
3. Leave all default settings (Vercel auto-detects Next.js).
4. Click Deploy.

Once deployed, replace the Live Demo placeholder above with the actual Vercel URL.

---

## Known Limitations and Disclaimers

- No backend or CMS: static clone only. Contact form validates on client and shows confirmation state; no data is submitted.
- WhatsApp: deep links to wa.me/971541676733 wired for real enquiries, pre-filled with puppy name.
- Font availability: Bubblegum Sans and Caveat fetched from Google Fonts at build time. Fraunces and Shantell Sans were unavailable in the build environment and not used.
- Independent assignment: not affiliated with, endorsed by, or representing the official TeddyPups U.A.E. business.

---

## AI Assistance

Development was assisted by the Google Antigravity agentic AI coding assistant (Google DeepMind). All architectural decisions and design choices were reviewed and guided by the candidate. See AI_PROMPT_LOG.md for the full prompt and decision log.

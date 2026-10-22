# AI Prompt & Development Decision Log

This document records the exact progression, prompts, and architectural decisions made during the development of the **TeddyPups U.A.E.** full website clone.

---

## 📅 Timeline & Step-by-Step Prompt Log

### Phase 1: Reference Inspection & Requirement Analysis
- **User Prompt / Objective:**
  > "Act as a senior full-stack developer, UI/UX engineer, QA engineer, and deployment specialist. Your task is to build a complete, production-quality clone of the following reference website: https://puppy.instabizweb.com/"
- **Actions Taken:**
  1. Inspected live reference pages via HTTP fetching across all six accessible routes:
     - `/` (Home)
     - `/puppies` (Directory)
     - `/happy-families` (Testimonials)
     - `/how-it-works` (Adoption tracks)
     - `/faq` (Help center)
     - `/contact` (Showroom & inquiries)
  2. Extracted brand assets, color codes (`#fffdf8`, `#fff1d8`, `#fbe3b4`, `#2a170e`, `#a24a1a`), scalloped border geometries, SVG mascot paths, and exact typography (`font-plush`, `font-scrawl`).
- **Key Decision:**
  - Selected Next.js 15 App Router with TypeScript and Tailwind CSS to mirror the reference website's modern architecture and enable Static Site Generation for fast load times.

---

### Phase 2: Scaffolding & Content Extraction
- **Prompt to Extraction Subagent:**
  > "Read the saved website content files and extract structured data for me: FAQ questions and answers, How It Works steps, Contact information & showroom details, Happy Families customer testimonials, and Puppies catalog (names, breeds, slugs, age, sex, images)."
- **Outcome:**
  - Extracted 15 available puppies + 5 gone-home puppies.
  - Extracted 9 FAQ entries across 4 categories.
  - Extracted featured customer review (Sarah M.) and 8 photo gallery moments.
  - Extracted dual adoption tracks (Local showroom vs. Bespoke Korean/European imports).

---

### Phase 3: Project Architecture & Shared Components
- **Implementation Strategy:**
  1. Built core data models: `src/data/puppies.ts`, `src/data/faq.ts`, `src/data/testimonials.ts`, `src/data/siteConfig.ts`.
  2. Implemented shared reusable UI components:
     - `PawIcon.tsx`: Brand paw print SVG with customizable colors and sizing.
     - `ScallopEdge.tsx`: Repeating scalloped hem SVG border.
     - `Accordion.tsx`: Animated, keyboard-accessible accordion for FAQ and details.
     - `Header.tsx`: Sticky navigation with scroll shadow and hover paw animations.
     - `MobileMenu.tsx`: Native full-screen `<dialog>` mobile navigation drawer.
     - `Footer.tsx`: 4-column responsive footer with brand info, social channels, and legal notices.

---

### Phase 4: Page Construction & Next.js 15 Integration
- **Key Decisions:**
  1. **Dynamic Static Generation:** Implemented `generateStaticParams` in `src/app/puppies/[slug]/page.tsx` to pre-render all 20 puppy profiles statically.
  2. **Metadata & SEO:** Configured dynamic `generateMetadata` for puppy profiles and OpenGraph tags across all static pages.
  3. **Global Layout Hierarchy:** Moved `Header` and `Footer` to `RootLayout` (`src/app/layout.tsx`) so all subpages inherit consistent navigation automatically without redundant DOM nodes.

---

### Phase 5: Debugging & Quality Assurance
- **Issue Encountered:**
  - `npm run build` failed initially with:
    `Cannot apply unknown utility class text-huge` caused by Tailwind CSS v4 PostCSS transform on custom `@apply` directives in `globals.css`.
- **Correction Applied:**
  - Installed `@tailwindcss/postcss`.
  - Configured `postcss.config.mjs`.
  - Refactored `globals.css` to use standard CSS properties with `@utility` declarations, ensuring 100% standards compliance with Tailwind v4.
- **Verification Result:**
  - `npm run build` compiled all 29 routes with 0 errors.
  - `npm run lint` passed with 0 ESLint warnings.
  - Automated Node.js fetch verification confirmed HTTP 200 and complete content rendering on all 7 key routes.

### Phase 6: Visual Fidelity & Reference Calibration
- **User Prompt / Objective:**
  > "Correct the real differences in typography, heading sizes, layout, spacing, backgrounds, colors, buttons, image sizing and cropping, scalloped edges, and responsive behavior... Home page centered hero vs original 8-scene sky gradient, and Contact page oversized left-aligned heading with letter-style form."
- **Actions Taken:**
  1. Extracted exact styles and structure from original `puppy.instabizweb.com` CSS bundles.
  2. Implemented the complete 8-scene sky gradient flow on the Home page (`tp-hero`, `tp-meet`, `tp-paths`, `tp-chat`, `tp-passport`, `tp-dusk`, `tp-night`, `tp-home`).
  3. Rebuilt the Contact page (`/contact`) matching the reference:
     - Oversized `text-giant` left-aligned heading ("Get in touch with us").
     - Two-column composition with showroom details, WhatsApp CTA, and Google Maps card on the left.
     - Interactive postcard letterform (`tp-letterform`) on the right: "Dear TeddyPups, my name is [___], and you can reach me on [___]... with love, a future puppy parent" + "Post my letter" submit button.
  4. Verified full SSR rendering of all letterform fields and pre-rendered all 29 routes statically with zero errors.

### Session 4: Night-Sky Footer & Mobile Menu Parity Refinement
- **Prompt:** Review current diff, fix remaining visual differences, check HTML semantics, and prepare deployment.
- **Actions Taken:**
  1. Extracted and integrated the exact reference night-sky footer into `src/components/layout/Footer.tsx`, complete with the rolling hill SVG divider curve, 9 twinkling stars (`tp-twinkle`), glowing crescent moon, "Home, at last." heading, illustrated woven puppy basket (`tp-basket`), full 7-link explore list, and contact pills.
  2. Aligned `src/components/layout/MobileMenu.tsx` to match the exact full-screen dialog styling, handwritten header, and oversized plush navigation.
  3. Added anchor IDs (`id="gone-home"` on `/puppies` and `id="delivery"` on `/how-it-works`) so footer navigation deep-links scroll directly to target sections.
  4. Fixed nested `<main>` tags in `/faq` and `/puppies/[slug]` to ensure single top-level `<main id="main">` semantics.
  5. Verified clean compilation with `npm run build` and tested all 29 routes.

### Session 5: Lint Fixes, README Rewrite, and GitHub Push
- **Prompt:** Verify the project (lint, type check, build), update README professionally, prepare Vercel deployment instructions, commit and push final changes.
- **Actions Taken:**
  1. Fixed `src/app/page.tsx` line 3 — removed unused named import `puppies` from `{ puppies, getAvailablePuppies }`, leaving only `{ getAvailablePuppies }`.
  2. Ran `npm run lint` — exit code 0, 0 errors, 0 warnings.
  3. Ran `npx tsc --noEmit` — exit code 0, 0 type errors.
  4. Ran `npm run build` — exit code 0, all 29 routes compiled (7 static + 20 SSG + `/_not-found`).
  5. Rewrote `README.md` to include: GitHub repository link, Original Reference Website label, Live Demo placeholder, verified test results table, Vercel deploy steps, known limitations, internship disclaimer, and AI assistance disclosure.
  6. Committed: `fix(lint): remove unused imports; docs: professional README with GitHub link, verified tests, deploy guide`
  7. Pushed to `https://github.com/Suhani370/teddypups-clone` — commit `b7b2e2f` confirmed pushed.

---

## 🛡️ Security & Integrity Checklist
- [x] No API keys, credentials, or `.env` secrets committed.
- [x] All external puppy photos served safely via HTTPS and validated in `next.config.ts`.
- [x] Contact form includes client-side field validation and honeypot spam protection.

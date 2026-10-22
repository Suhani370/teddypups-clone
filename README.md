# TeddyPups U.A.E. — Full Website Clone

A production-quality clone of the reference website [TeddyPups U.A.E.](https://puppy.instabizweb.com/), developed for the Full Stack Developer Internship assignment at **Insta Biz Web**.

---

## 🐾 Overview

TeddyPups U.A.E. is a premier boutique teacup and teddy bear puppy showroom based in Downtown Dubai. This project faithfully reproduces the complete visual design, warm handcrafted aesthetics, typography, responsive behavior, route hierarchy, and interactive customer journeys of the reference site.

### Live Reference
- **Original Reference Website:** [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **Target Audience:** Families and puppy lovers looking for certified teacup puppies in Dubai or rare imports worldwide.

---

## 🚀 Implemented Routes & Pages

Every single route and sub-page from the reference site has been implemented:

| Route | Page | Purpose / Key Features |
|---|---|---|
| `/` | **Home** | The complete 8-scene sky gradient flow (`#fffdf8` to `#24130b`): (1) Hero with circular puppy lineup, (2) "Meet the pups" door cards, (3) "Two ways to meet your puppy" fork, (4) "Your puppy journey" concierge steps, (5) "Why families trust TeddyPups" passport book, (6) Dusk testimonials & gallery, (7) Night FAQ accordions with twinkling stars, (8) Home welcome CTA. |
| `/puppies` | **Puppies Directory** | Complete listing of 15 available puppies + 5 "Happily Adopted (Gone Home ♥)" puppies with breed, sex, age, video badges, and custom import requests. |
| `/puppies/[slug]` | **Puppy Detail** | Dynamic SSR/SSG page with full specifications, high-res photos, health check summary, Downtown Dubai showroom location, WhatsApp direct enquiry, and related puppy recommendations. |
| `/happy-families` | **Happy Families** | Customer testimonials including featured story (Sarah M., Dubai) and responsive photo moments gallery of puppies with their new families. |
| `/how-it-works` | **How It Works** | Comprehensive two-track adoption guide: **Track 1 (In Dubai Showroom)** and **Track 2 (Order Upon Request / Overseas Imports)**, plus delivery policies and the "Premium Puppy Promise". |
| `/faq` | **Frequently Asked Questions** | Categorized accordion guide (Health & Veterinary, Dubai Showroom, Overseas Imports, Breeds & Delivery) with topic filtering and instant WhatsApp help link. |
| `/contact` | **Visit & Contact** | Oversized left-aligned `text-giant` header, two-column layout with showroom info, and the signature "Dear TeddyPups" interactive postcard letterform with fill-in-the-blank inputs, stamp, and note pad. |

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router with Server & Client Components)
- **Language:** TypeScript 5 (Strict type-checking across all models and pages)
- **Styling:** Tailwind CSS v4 & PostCSS
- **Fonts:** Next Font Google optimization (`Bubblegum Sans` for `--font-plush`, `Caveat` for `--font-scrawl`)
- **Icons & Assets:** Optimized inline SVG vectors, exact paw-print icons, scalloped patterns, and official brand assets.
- **Image Optimization:** `next/image` with remote patterns configured for CDN assets.

---

## 📁 Project Structure

```
teddypups-clone/
├── public/
│   ├── brand/
│   │   └── logo.png              # Local TeddyPups brand logo
│   └── icon.png                  # Favicon & touch icon
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact & showroom visit page
│   │   ├── faq/
│   │   │   └── page.tsx          # Categorized accordion FAQ
│   │   ├── happy-families/
│   │   │   └── page.tsx          # Testimonials & customer moments
│   │   ├── how-it-works/
│   │   │   └── page.tsx          # Dual-track adoption guide
│   │   ├── puppies/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx      # Dynamic puppy profile (SSG)
│   │   │   └── page.tsx          # Available & adopted directory
│   │   ├── globals.css           # Global theme, animations, and scallop patterns
│   │   ├── layout.tsx            # Root layout with Header, Footer, and Google fonts
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx        # 4-column footer with social links & paw badges
│   │   │   ├── Header.tsx        # Sticky header with scroll detection & scallop hem
│   │   │   └── MobileMenu.tsx    # Native dialog full-screen mobile menu
│   │   └── shared/
│   │       ├── Accordion.tsx     # Animated accessible accordion
│   │       ├── PawIcon.tsx       # Brand paw print SVG icon
│   │       └── ScallopEdge.tsx   # Reusable SVG scallop hem border
│   └── data/
│       ├── faq.ts                # Structured FAQ data by category
│       ├── puppies.ts            # Puppy listings, slugs, statuses, and photos
│       ├── siteConfig.ts         # Brand metadata, WhatsApp, phone, and links
│       └── testimonials.ts       # Testimonial stories & happy family gallery
├── next.config.ts                # Image domains & Turbopack configurations
├── package.json                  # Scripts & dependencies
├── postcss.config.mjs            # Tailwind v4 PostCSS plugin
├── tsconfig.json                 # TypeScript compiler configuration
├── LOOM_WALKTHROUGH.md           # Video walkthrough presentation guide & script
└── AI_PROMPT_LOG.md              # Log of actual prompts and decisions
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js:** v18.18.0 or later (v20+ recommended)
- **npm:** v9+ or later

### 2. Installation
```bash
# Clone or navigate to the repository
cd teddypups-clone

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
This pre-renders all 29 routes statically with zero errors.

### 5. Run Production Server Locally
```bash
npm run start
```

---

## 🧪 Testing Performed

1. **Compilation & Static Site Generation (SSG):**
   - Verified `npm run build` runs smoothly: 20 dynamic puppy routes + 7 root pages compiled.
2. **Linting & Type Safety:**
   - `npm run lint` passes with 0 errors and 0 warnings.
   - `npx tsc --noEmit` validates strict TypeScript compliance across all components.
3. **Responsive Viewport Verification:**
   - **Desktop (1440px / 1280px):** Full desktop layout with navigation hover paw indicators and multi-column grids.
   - **Tablet (1024px / 768px):** Clean wrapping of puppy cards, dual-track adoption layouts, and split contact layout.
   - **Mobile (390px / 360px):** Hamburger menu opening full-screen dialog, touch-friendly tap targets (>=44px), zero horizontal overflow.
4. **Form Interactivity:**
   - Client-side validation for required fields (name, phone, email).
   - Honeypot spam protection.
   - Success confirmation card with quick reset or WhatsApp transition.
5. **Accordions & Navigation:**
   - Tested interactive expansion/collapse on `/faq` with category filtering.
   - Tested mobile navigation drawer open and close.

---

## 📌 Known Limitations & Disclaimers
- **Backend / CMS:** As instructed, no simulated backend or fake payment gateway was added. The contact form validates on the client and displays a confirmation state.
- **WhatsApp Integration:** Direct deep links to `wa.me/971541676733` with pre-filled enquiry parameters are wired up for real-world puppy inquiries.

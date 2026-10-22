# Loom Video Walkthrough Guide & Recording Script

> **Assignment:** Insta Biz Web Full Website Clone — Technical Internship Assessment  
> **Project:** TeddyPups U.A.E. Boutique Puppy Store ([https://puppy.instabizweb.com/](https://puppy.instabizweb.com/))  
> **Recording Status:** Ready for self-recording using the structured checklist and script below.

---

## 🎙️ Part 1: Loom Presentation Script

Use this script verbatim or adapt it naturally while presenting your screen and demonstrating the live web application running on `http://localhost:3000` (or the deployed URL).

### Section 1: Introduction (0:00 – 1:00)
> *"Hello everyone! My name is [Your Name], and this is my presentation for the Full Stack Developer Internship assignment at Insta Biz Web.
>
> Today, I'm showcasing a production-quality, pixel-accurate clone of the reference website, **TeddyPups U.A.E.** (accessible at `puppy.instabizweb.com`).
> 
> The objective of this assignment was not just to build a superficial homepage prototype, but to reverse-engineer and implement the complete website experience — including all six public pages, dynamic individual puppy profiles, interactive forms, custom SVG animations, responsive layouts, and exact design aesthetics."*

---

### Section 2: Reference Website Analysis & Architecture (1:00 – 2:30)
> *"Before writing any code, I completed a detailed reference audit of the live website across desktop and mobile viewports.
> 
> Here were the key architectural discoveries:
> 1. **Pages & Routes:** There are six main pages: Home, Puppies Directory, Happy Families, How It Works, FAQ, and Visit & Contact, along with individual dynamic puppy detail pages.
> 2. **Design Language:** The site uses a warm, boutique aesthetic with a carefully chosen palette: `#fffdf8` (milk), `#fff1d8` (honey), `#fbe3b4` (toffee), and `#2a170e` (cocoa).
> 3. **Branding Elements:** Scalloped hem borders, tilted puppy photo lineups in the hero, doghouse door card motifs, and custom paw print iconography.
> 
> To match this fidelity, I chose **Next.js 15 with App Router**, **TypeScript**, and **Tailwind CSS v4**. Next.js was selected because it matches the original tech stack, enables Static Site Generation (SSG) for all 20+ puppy routes for near-instant page loads, and offers native image optimization through `next/image`."*

---

### Section 3: Live Application Demonstration (2:30 – 5:30)

*(Demonstrate on screen: Switch tabs and interact with each feature)*

#### 1. The Home Page (`/`)
> *"Starting on the homepage: notice the sticky header with scroll awareness. As I scroll down, a soft shadow appears, and on hover, each navigation link animates a cute paw print indicator.
>
> In the hero section, we have the tilted puppy lineup showcasing available pups, with the scalloped pattern below it.
>
> Scrolling down, we have 'Meet the pups', 'Why TeddyPups' with verified breeder badges, customer reviews, and the prominent call-to-action banner wired directly to WhatsApp."*

#### 2. The Puppies Directory (`/puppies`) & Detail View (`/puppies/[slug]`)
> *"Navigating to the Puppies page: here we have our complete collection. Notice the clean segregation between **Available in Dubai** puppies and **Happily Adopted (Gone Home ♥)** puppies.
> 
> Let's click on **Max the Maltipoo**. This opens the dynamic `/puppies/maltipoo-max-male` route. Notice how fast it loads — it was pre-rendered using `generateStaticParams`.
>
> On this page, users can see the puppy's age, gender, showroom location, full health verification checklist, and a dedicated **Enquire on WhatsApp** button pre-populated with the puppy's name and slug."*

#### 3. Happy Families (`/happy-families`)
> *"On the Happy Families page, we showcase our featured customer story with Sarah M. from Dubai, followed by a photo gallery of puppies with their families. Every image is loaded with responsive sizing to ensure fast performance."*

#### 4. How It Works (`/how-it-works`)
> *"The How It Works page introduces our dual-track adoption model:
> - **Track 1:** Immediate showroom visits in Downtown Dubai.
> - **Track 2:** Our bespoke Order Upon Request service for rare teacup breeds imported from certified partners in Korea and Europe.
> Each track has a connected step-by-step layout using custom connector lines."*

#### 5. FAQ (`/faq`) & Contact Form (`/contact`)
> *"On the FAQ page, we have interactive category tabs. Users can filter by Health, Showroom, Imports, or Breeds. Each question is wrapped in an accessible, smoothly animating accordion component.
>
> Finally, on the Contact page, we have our split layout: the left side has an interactive enquiry form with client-side validation for required fields and anti-spam protection, while the right side provides showroom details, opening hours, WhatsApp links, and direct Google Maps access."*

---

### Section 4: Responsive Design & Mobile Navigation (5:30 – 6:30)

*(Demonstrate in DevTools: Toggle mobile view at 390px iPhone size)*
> *"Let's test mobile responsiveness. In Chrome DevTools at 390px:
> - Notice how the navigation seamlessly transforms into a compact mobile trigger.
> - Clicking the menu opens a full-screen drawer displaying large typography with paw icons and quick contact options.
> - Notice the zero horizontal overflow, comfortable padding, and large touch targets throughout."*

---

### Section 5: Technical Challenges & Solutions (6:30 – 7:30)
> *"During development, I encountered a couple of technical challenges:
> 1. **Tailwind v4 PostCSS Integration:** Next.js with Tailwind CSS v4 initially reported `@apply` conflicts when custom CSS classes were defined. I resolved this by standardizing utility classes with pure CSS variables and `@utility` definitions.
> 2. **Shared Layout State:** To ensure Header and Footer consistency across all 6 pages and all 20 dynamic puppy routes without duplicate rendering, I centralized navigation within `RootLayout`."*

---

### Section 6: Conclusion (7:30 – 8:00)
> *"To summarize: every route, visual detail, interaction, and responsive breakpoint from `puppy.instabizweb.com` has been faithfully recreated with clean, maintainable TypeScript code.
>
> Thank you so much for watching, and I look forward to discussing this project during the technical interview!"*

---

## 📋 Part 2: Loom Recording Checklist

Before starting your recording:
- [ ] Local server running: execute `npm run start` or `npm run dev` in `teddypups-clone`.
- [ ] Browser window ready at `http://localhost:3000` (or `http://localhost:3001`).
- [ ] DevTools responsive panel ready for mobile demonstration (set to iPhone 12/13/14 or 390px width).
- [ ] Reference website open in an adjacent tab (`https://puppy.instabizweb.com/`) for quick visual comparison.
- [ ] Microphone tested and webcam positioned in corner of screen.
- [ ] Keep presentation length between 5 and 8 minutes.

---

## 🛠️ Part 3: AI Collaboration & Prompt History

### AI Tools Used
- **Agentic AI Coding Assistant:** DeepMind Antigravity CLI / AI Pair Programmer
- **Model Used:** Gemini 3.8 Flash / Claude Opus
- **Role:** Full-stack development, design system extraction, responsive component crafting, and automated verification testing.

### Key Prompts & Iterations
1. **Initial Inspection:** Extracted raw HTML and structure from `https://puppy.instabizweb.com/`, identifying all 6 pages, 20 puppy listings, FAQ categories, and theme colors.
2. **Scaffolding:** Initialized Next.js 15 with TypeScript and Tailwind CSS.
3. **Data Layer Generation:** Extracted puppy models, testimonials, and FAQ into structured TypeScript modules.
4. **Component Implementation:** Built modular Header, MobileMenu, Footer, Accordion, and PawIcon components.
5. **Quality Assurance:** Resolved PostCSS Tailwind v4 compatibility issues and verified that `npm run build` statically compiles all 29 routes.

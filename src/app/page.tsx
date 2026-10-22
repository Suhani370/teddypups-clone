import Link from "next/link";
import Image from "next/image";
import { getAvailablePuppies } from "@/data/puppies";
import { siteConfig } from "@/data/siteConfig";
import { featuredTestimonial, happyMoments } from "@/data/testimonials";
import { faqData } from "@/data/faq";
import PawIcon from "@/components/shared/PawIcon";
import Accordion from "@/components/shared/Accordion";

const available = getAvailablePuppies();

export default function HomePage() {
  return (
    <div data-page="home" className="tp-page">
      {/* ========================================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-hero"
        style={{
          ["--sky-top" as string]: "#fffdf8",
          ["--sky-bottom" as string]: "#fff1d8",
          ["--quilt" as string]: "#fff1d8",
        }}
        aria-labelledby="hero-title"
      >
        <span aria-hidden="true" className="tp-hero__sun" />
        
        <div className="tp-hero__copy gutter">
          <p className="tp-hero__note font-scrawl">
            every puppy is family
            <svg
              viewBox="0 0 220 24"
              preserveAspectRatio="none"
              className="absolute -bottom-2.5 left-0 h-3 w-full text-gold"
              aria-hidden="true"
            >
              <path
                d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <h1 id="hero-title" className="tp-hero__title font-plush">
            <span className="block text-cocoa">Premium teacup</span>
            <span className="block text-caramel">puppies in Dubai</span>
          </h1>
          <p className="tp-hero__lede">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
          </p>
          <div className="tp-hero__actions">
            <Link className="btn btn-primary" href="/puppies">
              View available puppies
            </Link>
            <a
              href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Puppy Lineup */}
        <div className="tp-hero__stage">
          <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
            {available.slice(0, 6).map((pup, idx) => {
              const tilts = ["-5deg", "3deg", "-2deg", "3deg", "-3deg", "4deg"];
              return (
                <li
                  key={pup.slug}
                  className="tp-lineup__seat"
                  style={{ transform: `rotate(${tilts[idx % tilts.length]})` }}
                >
                  <Link
                    className="tp-lineup__pup block no-underline"
                    aria-label={`Meet ${pup.name}, ${pup.breed}`}
                    href={`/puppies/${pup.slug}`}
                  >
                    <span className="tp-lineup__photo">
                      <Image
                        src={pup.image}
                        alt={`${pup.name}, ${pup.breed}`}
                        fill
                        sizes="11rem"
                        className="object-cover"
                        style={{ objectPosition: pup.objectPosition }}
                        priority={idx < 3}
                      />
                    </span>
                    <span className="tp-lineup__name font-scrawl">
                      {pup.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Scalloped Bottom Edge */}
        <div aria-hidden="true" className="tp-quilt absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg className="tp-quilt__edge w-full" height="40" preserveAspectRatio="none">
            <defs>
              <pattern id="tp-scallop-1" width="76" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#fff1d8" />
                <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                <path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#tp-scallop-1)" />
          </svg>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: MEET THE PUPS (DOOR CARDS) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-meet"
        style={{
          ["--sky-top" as string]: "#fff1d8",
          ["--sky-bottom" as string]: "#fbe3b4",
        }}
        aria-labelledby="meet-title"
      >
        <div className="gutter">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 id="meet-title" className="font-plush text-huge text-cocoa">
                Meet the pups
              </h2>
              <p className="text-lede mt-2 max-w-[44ch] text-cocoa/80">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>
            <Link className="btn btn-primary shrink-0" href="/puppies">
              See all available puppies
            </Link>
          </header>

          {/* Door Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {available.slice(0, 6).map((pup) => (
              <Link
                key={pup.slug}
                href={`/puppies/${pup.slug}`}
                className="tp-door group"
              >
                <span className="tp-door__room">
                  <Image
                    src={pup.image}
                    alt={`${pup.name}, ${pup.sex} ${pup.breed}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: pup.objectPosition }}
                  />
                  <span className="tp-door__tag font-scrawl">
                    Available
                  </span>
                </span>
                <span className="tp-door__plate">
                  <span className="font-plush tp-door__name text-xl font-bold">
                    {pup.name}
                  </span>
                  <span className="tp-door__meta text-sm text-cocoa/70">
                    {pup.breed}, {pup.sex}, {pup.age}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: TWO WAYS TO MEET YOUR PUPPY (PATHS) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-paths"
        style={{
          ["--sky-top" as string]: "#fbe3b4",
          ["--sky-bottom" as string]: "#f7d18d",
        }}
        aria-labelledby="paths-title"
      >
        <div className="gutter mx-auto max-w-[110rem]">
          <h2 id="paths-title" className="font-plush text-huge text-center text-cocoa">
            Two ways to meet your puppy
          </h2>
          <div className="tp-fork">
            {/* Way 1: Local Dubai */}
            <article className="tp-way">
              <div>
                <span className="inline-block rounded-full bg-whatsapp px-3.5 py-1 text-xs font-bold text-white mb-4">
                  In our showroom
                </span>
                <h3 className="font-plush text-3xl text-cocoa mb-3">
                  Puppies in Dubai
                </h3>
                <p className="text-cocoa/80 text-base leading-relaxed mb-6">
                  See them, love them, take them home. Come meet our locally available puppies in person before you decide.
                </p>
              </div>
              <Link href="/puppies" className="btn btn-primary w-fit">
                Meet local puppies
              </Link>
            </article>

            {/* Way 2: Korea Imports */}
            <article className="tp-way">
              <div>
                <span className="inline-block rounded-full bg-caramel px-3.5 py-1 text-xs font-bold text-white mb-4">
                  Korea → Dubai
                </span>
                <h3 className="font-plush text-3xl text-cocoa mb-3">
                  Imported for you
                </h3>
                <p className="text-cocoa/80 text-base leading-relaxed mb-6">
                  Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let us handle the import.
                </p>
              </div>
              <Link href="/how-it-works" className="btn btn-ghost w-fit">
                See imported puppies
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: YOUR PUPPY JOURNEY (CONCIERGE STEPS) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-chat"
        style={{
          ["--sky-top" as string]: "#f7d18d",
          ["--sky-bottom" as string]: "#f0b866",
        }}
        aria-labelledby="journey-title"
      >
        <div className="gutter">
          <div className="max-w-2xl mb-12">
            <h2 id="journey-title" className="font-plush text-huge text-cocoa">
              Your puppy journey
            </h2>
            <p className="text-lede mt-4 text-cocoa/80">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>
          </div>

          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "1",
                title: "Choose your breed",
                desc: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
              },
              {
                num: "2",
                title: "Get photos & details",
                desc: "Our team will share real photos, health details, and all necessary information directly on WhatsApp.",
              },
              {
                num: "3",
                title: "Safe delivery or pickup",
                desc: "Collect from our showroom or receive safe delivery to your doorstep across the UAE or internationally.",
              },
              {
                num: "4",
                title: "Welcome home",
                desc: "24/7 care support as your new family member settles into your home and heart.",
              },
            ].map((step) => (
              <li key={step.num} className="tp-chat__step flex flex-col items-start bg-milk/70 p-6 rounded-2xl border-2 border-cocoa/15 shadow-sm">
                <span className="tp-chat__num font-plush mb-4">
                  {step.num}
                </span>
                <h3 className="font-plush text-xl text-cocoa mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-cocoa/80 leading-relaxed">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: PUPPY PASSPORT (WHY TRUST TEDDYPUPS) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-passport"
        style={{
          ["--sky-top" as string]: "#f0b866",
          ["--sky-bottom" as string]: "#a65a30",
        }}
        aria-labelledby="trust-title"
      >
        <div className="gutter mx-auto max-w-[96rem]">
          <div className="tp-book">
            <p className="font-scrawl text-2xl text-caramel mb-2">
              puppy passport
            </p>
            <h2 id="trust-title" className="font-plush text-huge text-cocoa mb-8">
              Why families trust TeddyPups
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🩺",
                  title: "Vet-checked & healthy",
                  desc: "Every puppy comes vaccinated, dewormed, and with a verified health certificate from licensed vets.",
                },
                {
                  icon: "✈️",
                  title: "Korea to Dubai, safely",
                  desc: "Trusted breeders, safe travel, and premium care from start to finish with dedicated pet handlers.",
                },
                {
                  icon: "💬",
                  title: "Support 24/7",
                  desc: "Always here to help, from choosing your puppy to comprehensive post-delivery care advice.",
                },
                {
                  icon: "🌍",
                  title: "Trusted by families worldwide",
                  desc: "Puppies delivered safely to loving homes all around the world with full travel clearances.",
                },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded-xl bg-honey/40 border border-cocoa/10">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-plush text-xl text-cocoa mb-2">{f.title}</h3>
                  <p className="text-sm text-cocoa/80 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: DUSK (HAPPY FAMILIES & TESTIMONIALS) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="dark"
        className="tp-scene tp-dusk"
        style={{
          ["--sky-top" as string]: "#a65a30",
          ["--sky-bottom" as string]: "#4d2b19",
        }}
        aria-labelledby="dusk-title"
      >
        <div className="gutter">
          <div className="max-w-3xl mb-12">
            <h2 id="dusk-title" className="font-plush text-huge text-milk">
              Happy families &amp; puppies
            </h2>
            <p className="text-lede mt-4 text-milk/80">
              We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients.
            </p>
          </div>

          {/* Featured Review */}
          <figure className="tp-dusk__note mb-12">
            <blockquote className="text-lg md:text-xl italic leading-relaxed text-cocoa">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t border-cocoa/15 pt-4">
              <div>
                <cite className="font-semibold text-cocoa not-italic">
                  {featuredTestimonial.customer}
                </cite>
                <span className="ml-2 text-sm text-cocoa/60">
                  — {featuredTestimonial.location}
                </span>
              </div>
              <span className="rounded-full bg-honey px-3 py-1 text-xs font-bold text-caramel">
                {featuredTestimonial.breed}
              </span>
            </figcaption>
          </figure>

          {/* Happy Moments Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {happyMoments.slice(0, 4).map((m) => (
              <div key={m.id} className="relative aspect-square overflow-hidden rounded-2xl border-2 border-milk/20">
                <Image
                  src={m.image}
                  alt={m.caption}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/happy-families" className="btn btn-ghost">
              View all happy moments
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: NIGHT (QUESTIONS ANSWERED) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="dark"
        className="tp-scene tp-night"
        style={{
          ["--sky-top" as string]: "#4d2b19",
          ["--sky-bottom" as string]: "#2f1a10",
        }}
        aria-labelledby="questions-title"
      >
        <div className="gutter max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 id="questions-title" className="font-plush text-huge text-milk">
                Questions, answered
              </h2>
              <p className="text-lede mt-2 text-milk/75">
                Everything you need to know about our teacup puppies.
              </p>
            </div>
            <Link href="/faq" className="btn btn-ghost shrink-0">
              Read all questions
            </Link>
          </div>

          <div className="space-y-4">
            {faqData[0].items.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
            {faqData[1].items.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: HOME CTA (WELCOME HOME) */}
      {/* ========================================================= */}
      <section
        data-pup-scene="true"
        data-tone="dark"
        className="tp-scene tp-home"
        style={{
          ["--sky-top" as string]: "#2f1a10",
          ["--sky-bottom" as string]: "#24130b",
        }}
        aria-labelledby="cta-title"
      >
        <div className="gutter max-w-3xl">
          <PawIcon className="mx-auto mb-4 size-10 text-gold" />
          <p className="font-scrawl text-2xl text-gold mb-2">welcome home</p>
          <h2 id="cta-title" className="font-plush text-huge text-milk mb-4">
            Ready to meet your new best friend?
          </h2>
          <p className="text-lede text-milk/80 mb-8 max-w-xl mx-auto">
            Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp us
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Visit &amp; contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

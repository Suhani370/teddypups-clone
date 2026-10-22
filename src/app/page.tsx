import Link from "next/link";
import Image from "next/image";
import { getAvailablePuppies } from "@/data/puppies";
import { siteConfig } from "@/data/siteConfig";
import { featuredTestimonial } from "@/data/testimonials";
import PawIcon from "@/components/shared/PawIcon";

const available = getAvailablePuppies();

export default function HomePage() {
  return (
    <div>
        {/* ——— Hero ——— */}
        <section className="tp-hero" aria-labelledby="hero-title">
          {/* Sun decoration */}
          <span
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-72 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #fbe3b4 0%, transparent 70%)",
            }}
          />

          <div className="tp-hero__copy gutter">
            <p className="tp-hero__note font-scrawl">every puppy is family</p>
            <h1 id="hero-title" className="tp-hero__title font-plush">
              <span className="block">Premium teacup</span>
              <span className="block text-caramel">puppies in Dubai</span>
            </h1>
            <p className="tp-hero__lede">
              Meet your new best friend in our Dubai showroom, or order a rare
              miniature breed from trusted breeders worldwide.
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

          {/* Puppy lineup */}
          <ul
            className="tp-lineup stagger-children"
            aria-label="Some of the puppies in our showroom"
          >
            {available.slice(0, 6).map((pup) => (
              <li key={pup.slug} className="tp-lineup__seat">
                <Link
                  className="tp-lineup__pup"
                  href={`/puppies/${pup.slug}`}
                  aria-label={`Meet ${pup.name}, ${pup.breed}`}
                >
                  <span className="tp-lineup__photo">
                    <Image
                      src={pup.image}
                      alt={`${pup.name}, ${pup.sex} ${pup.breed} puppy`}
                      fill
                      sizes="10rem"
                      style={{ objectPosition: pup.objectPosition }}
                    />
                  </span>
                  <span className="tp-lineup__name font-scrawl">
                    {pup.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Scalloped bottom */}
          <svg
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 w-full"
            height="40"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="hero-scallop"
                width="76"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40V27A38 25 0 0 1 76 27V40Z"
                  fill="var(--color-honey)"
                />
                <path
                  d="M0 27A38 25 0 0 1 76 27"
                  fill="none"
                  stroke="#2a170e"
                  strokeWidth="3"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#hero-scallop)" />
          </svg>
        </section>

        {/* ——— Meet the Pups ——— */}
        <section
          className="tp-section tp-section--honey"
          aria-labelledby="meet-title"
        >
          <div className="gutter">
            <header className="tp-section__header flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h2 id="meet-title" className="tp-section__title">
                  Meet the pups
                </h2>
                <p className="text-lede mt-2 max-w-lg text-cocoa/70">
                  Real puppies, real photos, looking for their families right
                  now.
                </p>
              </div>
              <Link className="btn btn-primary shrink-0" href="/puppies">
                See all available puppies
              </Link>
            </header>

            {/* Puppy door cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {available.slice(0, 6).map((pup) => (
                <Link
                  key={pup.slug}
                  href={`/puppies/${pup.slug}`}
                  className="tp-card"
                >
                  <div className="tp-card__image">
                    <Image
                      src={pup.image}
                      alt={`${pup.name}, ${pup.sex} ${pup.breed} puppy`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      style={{ objectPosition: pup.objectPosition }}
                    />
                    <span className="tp-card__badge tp-card__badge--available">
                      Available
                    </span>
                    {pup.hasVideo && (
                      <span className="tp-card__badge--video">▶ video</span>
                    )}
                  </div>
                  <div className="tp-card__body">
                    <h3 className="tp-card__name">{pup.name}</h3>
                    <p className="tp-card__meta">
                      {pup.breed} · {pup.sex} · {pup.age}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Why TeddyPups ——— */}
        <section className="tp-section" aria-labelledby="why-title">
          <div className="gutter">
            <header className="tp-section__header">
              <h2 id="why-title" className="tp-section__title">
                Why TeddyPups?
              </h2>
              <p className="tp-section__subtitle">
                We treat every puppy like family — because they are.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
              {[
                {
                  icon: "🏥",
                  title: "Health guaranteed",
                  desc: "Every puppy comes with a verified health certificate, vaccinations, and deworming from licensed veterinarians.",
                },
                {
                  icon: "✅",
                  title: "Trusted breeders",
                  desc: "We work only with certified, ethical breeders in the UAE, Europe, and Korea — never puppy mills.",
                },
                {
                  icon: "🌍",
                  title: "Worldwide delivery",
                  desc: "Safe, temperature-controlled transport to loving homes around the world.",
                },
                {
                  icon: "💬",
                  title: "24/7 support",
                  desc: "Our team is always available for advice on training, nutrition, and care after your puppy comes home.",
                },
              ].map((f) => (
                <div key={f.title} className="tp-feature">
                  <div className="tp-feature__icon">{f.icon}</div>
                  <h3 className="tp-feature__title">{f.title}</h3>
                  <p className="tp-feature__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Happy Families Preview ——— */}
        <section
          className="tp-section tp-section--toffee"
          aria-labelledby="families-title"
        >
          <div className="gutter">
            <header className="tp-section__header">
              <h2 id="families-title" className="tp-section__title">
                Happy families
              </h2>
              <p className="tp-section__subtitle">
                Real stories from families who found their perfect companion.
              </p>
            </header>

            {/* Featured testimonial */}
            <blockquote className="mx-auto mb-12 max-w-3xl rounded-3xl bg-milk p-8 text-center shadow-sm lg:p-12">
              <PawIcon className="mx-auto mb-4 size-8 text-gold" />
              <p className="text-lg leading-relaxed text-cocoa/80 italic">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic font-semibold text-cocoa">
                  {featuredTestimonial.customer}
                </cite>
                <span className="ml-2 text-sm text-cocoa/60">
                  — {featuredTestimonial.location}
                </span>
              </footer>
            </blockquote>

            <div className="text-center">
              <Link className="btn btn-primary" href="/happy-families">
                See all happy families
              </Link>
            </div>
          </div>
        </section>

        {/* ——— CTA Banner ——— */}
        <section className="bg-cocoa py-16 text-center text-milk">
          <div className="gutter">
            <PawIcon className="mx-auto mb-4 size-10 text-gold" />
            <h2 className="font-plush text-huge mb-4">
              Ready to meet your new best friend?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-milk/80">
              Visit our Downtown Dubai showroom or enquire on WhatsApp. Every
              puppy is waiting to be part of your family.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                className="btn bg-gold text-cocoa hover:bg-gold-dark"
                href="/puppies"
              >
                Browse puppies
              </Link>
              <a
                href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp us
              </a>
              <Link className="btn border-2 border-milk/30 text-milk hover:bg-milk/10" href="/contact">
                Visit our showroom
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}

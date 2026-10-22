import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAvailablePuppies, getGoneHomePuppies, type Puppy } from "@/data/puppies";
import { PawIcon } from "@/components/shared/PawIcon";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Puppies",
  description:
    "Meet our adorable collection of teacup and teddy bear puppies in Dubai. Health-checked, vaccinated, microchipped, and ready for loving homes.",
};

function PuppyCard({ puppy, isPriority = false }: { puppy: Puppy; isPriority?: boolean }) {
  const isAvailable = puppy.status === "available";

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="tp-card group flex flex-col no-underline text-inherit"
    >
      <div className="tp-card__image">
        <Image
          src={puppy.image}
          alt={`${puppy.name} - ${puppy.breed}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover"
          style={{ objectPosition: puppy.objectPosition }}
          priority={isPriority}
        />
        {/* Status Badge */}
        <span
          className={`tp-card__badge ${
            isAvailable ? "tp-card__badge--available" : "tp-card__badge--gone"
          }`}
        >
          {isAvailable ? "Available" : "Gone home ♥"}
        </span>

        {/* Video Badge */}
        {puppy.hasVideo && (
          <span className="tp-card__badge--video">
            <svg
              className="size-3 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Video</span>
          </span>
        )}
      </div>

      <div className="tp-card__body flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="tp-card__name text-cocoa transition-colors group-hover:text-caramel">
              {puppy.name}
            </h3>
            <span className="text-xs font-semibold text-cocoa/50 uppercase tracking-wider">
              {puppy.breed}
            </span>
          </div>

          <p className="tp-card__meta capitalize">
            {puppy.sex} • {puppy.age}
          </p>

          <p className="mt-2 text-xs leading-relaxed text-cocoa/75 line-clamp-2">
            {puppy.description}
          </p>
        </div>

        <div className="tp-card__cta">
          {isAvailable ? (
            <span className="btn btn-primary w-full text-center text-sm py-2.5">
              Meet {puppy.name}
            </span>
          ) : (
            <span className="btn btn-ghost w-full text-center text-sm py-2.5 opacity-80">
              View Story
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function PuppiesPage() {
  const availablePuppies = getAvailablePuppies();
  const goneHomePuppies = getGoneHomePuppies();

  return (
    <div className="min-h-screen bg-milk">
      {/* Page Header */}
      <header className="tp-page-header">
        <div className="gutter">
          <div className="mx-auto flex items-center justify-center gap-2 text-caramel mb-2">
            <PawIcon className="size-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              TeddyPups Dubai Collection
            </span>
            <PawIcon className="size-5" />
          </div>
          <h1 className="tp-page-header__title text-cocoa">Our Puppies</h1>
          <p className="tp-page-header__desc">
            Explore our curated family of teacup and teddy bear puppies. Every puppy
            in our Downtown Dubai showroom is vet-certified, fully vaccinated, and
            socialized with endless love.
          </p>
        </div>
      </header>

      {/* Available Puppies Section */}
      <section className="tp-section">
        <div className="gutter">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-whatsapp animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-caramel">
                  Ready to Meet
                </span>
              </div>
              <h2 className="font-plush text-3xl text-cocoa sm:text-4xl">
                Available in Dubai
              </h2>
              <p className="mt-1 text-sm text-cocoa/70">
                {availablePuppies.length} healthy teacup companions ready for same-day adoption
              </p>
            </div>

            <a
              href={siteConfig.whatsappLink("Hi TeddyPups! I'd like to book an appointment to meet the available puppies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm"
            >
              Book Showroom Visit
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {availablePuppies.map((puppy, idx) => (
              <PuppyCard
                key={puppy.slug}
                puppy={puppy}
                isPriority={idx < 4}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Import Banner */}
      <section className="py-12 bg-honey/40 border-y border-cocoa/10">
        <div className="gutter text-center">
          <h2 className="font-plush text-2xl text-cocoa sm:text-3xl mb-3">
            Looking for a specific breed or teacup color?
          </h2>
          <p className="mx-auto max-w-2xl text-cocoa/75 mb-6 text-sm sm:text-base leading-relaxed">
            Through our bespoke Order Upon Request service, we ethically import rare Korean
            and European teacup lines including Maltese, Pomeranian, Poodles, and Yorkies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/how-it-works" className="btn btn-ghost text-sm">
              How Importing Works
            </Link>
            <a
              href={siteConfig.whatsappLink("Hi TeddyPups! I am looking for a specific teacup puppy breed.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm"
            >
              Request Custom Breed
            </a>
          </div>
        </div>
      </section>

      {/* Gone Home Puppies Section */}
      <section id="gone-home" className="tp-section bg-milk">
        <div className="gutter">
          <div className="tp-section__header">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-honey px-3.5 py-1 text-xs font-semibold text-cocoa mb-3">
              <span>♥</span>
              <span>Forever Families</span>
              <span>♥</span>
            </div>
            <h2 className="tp-section__title">Happily Adopted (Gone Home ♥)</h2>
            <p className="tp-section__subtitle">
              These darling teacup puppies have already joined their forever families.
              Browse their sweet faces for inspiration or ask us about upcoming litters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {goneHomePuppies.map((puppy) => (
              <PuppyCard key={puppy.slug} puppy={puppy} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredTestimonial, happyMoments } from "@/data/testimonials";
import { siteConfig } from "@/data/siteConfig";
import { PawIcon } from "@/components/shared/PawIcon";

export const metadata: Metadata = {
  title: "Happy Families",
  description:
    "Heartwarming photos and stories from families who welcomed a TeddyPups teacup puppy into their lives in Dubai and across the globe.",
};

export default function HappyFamiliesPage() {
  return (
    <div className="min-h-screen bg-milk">
      {/* Page Header */}
      <header className="tp-page-header">
        <div className="gutter">
          <div className="mx-auto flex items-center justify-center gap-2 text-caramel mb-2">
            <PawIcon className="size-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Love & Joy
            </span>
            <PawIcon className="size-5" />
          </div>
          <h1 className="tp-page-header__title text-cocoa">Happy Families</h1>
          <p className="tp-page-header__desc">
            Nothing fills our hearts more than seeing our teacup and teddy bear puppies
            settling into their forever homes. Discover real moments and heartfelt stories
            from our beloved TeddyPups family.
          </p>
        </div>
      </header>

      {/* Featured Testimonial Section */}
      <section className="tp-section tp-section--honey border-b border-cocoa/10">
        <div className="gutter">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-cocoa/10 bg-milk p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
              {/* Photo */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative aspect-square w-64 md:w-full overflow-hidden rounded-2xl border-4 border-toffee shadow-md">
                  <Image
                    src={featuredTestimonial.image}
                    alt={`${featuredTestimonial.customer} and puppy`}
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 rounded-full bg-cocoa/80 px-3 py-1 text-xs text-milk backdrop-blur-sm">
                    {featuredTestimonial.breed} Mom ♥
                  </div>
                </div>
              </div>

              {/* Quote & Author Info */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-gold mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl leading-none">★</span>
                    ))}
                    <span className="ml-2 text-xs font-bold text-cocoa/60 uppercase tracking-wider">
                      Verified Adoption
                    </span>
                  </div>

                  {/* Decorative quotation icon */}
                  <div className="text-caramel/20 font-serif text-6xl leading-none -mb-4 select-none">
                    &ldquo;
                  </div>

                  <blockquote className="font-scrawl text-2xl md:text-3xl text-cocoa leading-relaxed mb-6">
                    {featuredTestimonial.quote}
                  </blockquote>
                </div>

                <div className="border-t border-cocoa/10 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-plush text-xl text-cocoa">
                      {featuredTestimonial.customer}
                    </h3>
                    <p className="text-xs font-medium text-caramel">
                      {featuredTestimonial.location} &bull; Adopted {featuredTestimonial.breed}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-cocoa/40">
                    <PawIcon className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="tp-section">
        <div className="gutter">
          <div className="tp-section__header">
            <h2 className="tp-section__title">Sweet Moments of Joy</h2>
            <p className="tp-section__subtitle">
              Every day is a celebration when you have a tiny teddy bear companion.
              Here are some candid snapshots shared by our lovely families.
            </p>
          </div>

          <div className="tp-grid">
            {happyMoments.map((moment) => (
              <div key={moment.id} className="tp-grid__item group">
                <Image
                  src={moment.image}
                  alt={moment.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="tp-grid__caption">
                  <p className="font-medium text-milk drop-shadow-sm">
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Community Callout */}
          <div className="mt-16 rounded-3xl border-2 border-cocoa/10 bg-honey/30 p-8 text-center md:p-12">
            <h3 className="font-plush text-2xl text-cocoa sm:text-3xl mb-3">
              Are you part of the TeddyPups family?
            </h3>
            <p className="mx-auto max-w-xl text-cocoa/75 mb-6 text-sm sm:text-base leading-relaxed">
              We adore seeing your puppies grow! Tag us in your photos or send your updates to our WhatsApp care team to be featured on our Happy Families wall.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/puppies" className="btn btn-ghost text-sm">
                Meet Available Puppies
              </Link>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm"
              >
                Follow on Instagram
              </a>
              <a
                href={siteConfig.whatsappLink("Hi TeddyPups! I'd like to share a happy moment with my puppy!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm"
              >
                Send Us Photos on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

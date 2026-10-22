import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { puppies, getPuppy } from "@/data/puppies";
import { siteConfig } from "@/data/siteConfig";
import { PawIcon } from "@/components/shared/PawIcon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return puppies.map((puppy) => ({
    slug: puppy.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const puppy = getPuppy(slug);

  if (!puppy) {
    return {
      title: "Puppy Not Found",
      description: "The puppy you are looking for could not be found.",
    };
  }

  return {
    title: `${puppy.name} (${puppy.breed})`,
    description: puppy.description,
    openGraph: {
      title: `${puppy.name} — ${puppy.breed} | TeddyPups Dubai`,
      description: puppy.description,
      images: [
        {
          url: puppy.image,
          width: 800,
          height: 800,
          alt: `${puppy.name} - ${puppy.breed}`,
        },
      ],
    },
  };
}

export default async function PuppyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const puppy = getPuppy(slug);

  if (!puppy) {
    notFound();
  }

  const isAvailable = puppy.status === "available";
  const whatsappInquiryMessage = `Hi TeddyPups! I'm interested in ${puppy.name} the ${puppy.breed} (${puppy.slug}). Is ${puppy.sex === "boy" ? "he" : puppy.sex === "girl" ? "she" : "this puppy"} still available to meet?`;

  // Get other available puppies for recommendation
  const otherPuppies = puppies
    .filter((p) => p.slug !== puppy.slug && p.status === "available")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-milk">
      {/* Breadcrumb / Top bar */}
      <div className="border-b border-cocoa/10 bg-honey/30 py-4">
        <div className="gutter flex items-center justify-between">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa transition-colors hover:text-caramel"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Back to all puppies</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-cocoa/60 font-medium">
            <span>Dubai Showroom</span>
            <span>/</span>
            <span className="capitalize">{puppy.breed}</span>
            <span>/</span>
            <span className="text-cocoa font-semibold">{puppy.name}</span>
          </div>
        </div>
      </div>

      {/* Main Puppy Detail Section */}
      <section className="tp-section">
        <div className="gutter">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Column: Large Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-cocoa/15 shadow-xl bg-honey/20">
                <Image
                  src={puppy.image}
                  alt={`${puppy.name} - ${puppy.breed}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: puppy.objectPosition }}
                />

                {/* Status Badge */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-md ${
                      isAvailable ? "tp-card__badge--available" : "tp-card__badge--gone"
                    }`}
                  >
                    {isAvailable ? "Available in Dubai" : "Gone home ♥"}
                  </span>
                </div>

                {/* Video Badge */}
                {puppy.hasVideo && (
                  <div className="absolute right-4 top-4">
                    <span className="flex items-center gap-1.5 rounded-full bg-cocoa/80 px-3.5 py-1.5 text-xs font-semibold text-milk shadow-md backdrop-blur-sm">
                      <svg
                        className="size-3.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>HD Video Available</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Trust highlights below image */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-cocoa/10 bg-honey/30 p-4 text-center">
                <div>
                  <span className="text-xl">🩺</span>
                  <p className="mt-1 text-xs font-bold text-cocoa">Vet Checked</p>
                  <p className="text-[11px] text-cocoa/60">100% Guaranteed</p>
                </div>
                <div>
                  <span className="text-xl">💉</span>
                  <p className="mt-1 text-xs font-bold text-cocoa">Vaccinated</p>
                  <p className="text-[11px] text-cocoa/60">Passport Included</p>
                </div>
                <div>
                  <span className="text-xl">📍</span>
                  <p className="mt-1 text-xs font-bold text-cocoa">Downtown Dubai</p>
                  <p className="text-[11px] text-cocoa/60">Showroom Visit</p>
                </div>
              </div>
            </div>

            {/* Right Column: Puppy Info & Enquiries */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-caramel font-semibold text-sm uppercase tracking-wider">
                <PawIcon className="size-4" />
                <span>{puppy.breed}</span>
              </div>

              <h1 className="font-plush text-huge text-cocoa leading-tight mb-2">
                {puppy.name}
              </h1>

              <p className="text-lg text-cocoa/75 font-medium mb-6">
                Teacup puppy in Downtown Dubai, UAE
              </p>

              {/* Quick Specs Grid */}
              <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Breed
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa">
                    {puppy.breed}
                  </span>
                </div>

                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Gender
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa capitalize">
                    {puppy.sex}
                  </span>
                </div>

                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Age
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa">
                    {puppy.age}
                  </span>
                </div>

                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Location
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa">
                    Downtown Dubai
                  </span>
                </div>

                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Vaccination
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa">
                    Up to date
                  </span>
                </div>

                <div className="rounded-2xl border border-cocoa/10 bg-milk p-3.5">
                  <span className="block text-xs font-medium text-cocoa/50 uppercase tracking-wider">
                    Microchip
                  </span>
                  <span className="mt-1 block font-plush text-lg text-cocoa">
                    Included
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 rounded-2xl border-2 border-cocoa/10 bg-honey/20 p-6">
                <h2 className="font-plush text-xl text-cocoa mb-3">About {puppy.name}</h2>
                <p className="text-base leading-relaxed text-cocoa/85">
                  {puppy.description}
                </p>
                <p className="mt-3 text-sm text-cocoa/70">
                  {puppy.name} has been thoroughly examined by licensed Dubai veterinarians, is fully
                  vaccinated, dewormed, and microchipped. Ready to join your family today.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {isAvailable ? (
                  <>
                    <a
                      href={siteConfig.whatsappLink(whatsappInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp w-full text-base py-4 shadow-lg hover:shadow-xl"
                    >
                      Enquire about {puppy.name} on WhatsApp
                    </a>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/contact?puppy=${puppy.slug}`}
                        className="btn btn-primary flex-1 py-3 text-sm"
                      >
                        Book Showroom Visit
                      </Link>
                      <a
                        href={siteConfig.whatsappLink(`Hi TeddyPups! Can you share videos of ${puppy.name}?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost flex-1 py-3 text-sm"
                      >
                        Request Video on WhatsApp
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="rounded-2xl border border-cocoa/20 bg-honey/40 p-5 text-center">
                    <p className="font-plush text-xl text-cocoa mb-2">
                      {puppy.name} has found a forever home! ♥
                    </p>
                    <p className="text-sm text-cocoa/75 mb-4">
                      Looking for a puppy similar to {puppy.name}? We have regular new litters and offer custom Korean and European imports.
                    </p>
                    <a
                      href={siteConfig.whatsappLink(`Hi TeddyPups! I saw ${puppy.name} (${puppy.breed}) is gone home. Do you have a similar puppy available or arriving soon?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-sm"
                    >
                      Ask About Similar Puppies
                    </a>
                  </div>
                )}
              </div>

              {/* Adoption Package Guarantee */}
              <div className="mt-8 border-t border-cocoa/10 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cocoa/60 mb-3">
                  Included with every TeddyPups adoption
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cocoa/80">
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> Official Vet Health Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> Complete Vaccination Booklet
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> Microchip & Registration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> 24/7 Lifetime Care Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> Puppy Starter Food & Toy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-whatsapp">✓</span> Doorstep Delivery in UAE Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended / Other Puppies Section */}
      {otherPuppies.length > 0 && (
        <section className="tp-section bg-honey/20 border-t border-cocoa/10">
          <div className="gutter">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="font-plush text-2xl text-cocoa sm:text-3xl">
                  You May Also Love
                </h2>
                <p className="text-sm text-cocoa/70 mt-1">
                  Other sweet teacup puppies currently available in our Dubai showroom
                </p>
              </div>
              <Link
                href="/puppies"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-caramel hover:text-cocoa"
              >
                <span>View all</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {otherPuppies.map((p) => (
                <Link
                  key={p.slug}
                  href={`/puppies/${p.slug}`}
                  className="tp-card group flex flex-col no-underline text-inherit"
                >
                  <div className="tp-card__image">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: p.objectPosition }}
                    />
                    <span className="tp-card__badge tp-card__badge--available">
                      Available
                    </span>
                  </div>
                  <div className="tp-card__body">
                    <h3 className="tp-card__name text-cocoa transition-colors group-hover:text-caramel">
                      {p.name}
                    </h3>
                    <p className="tp-card__meta capitalize">
                      {p.breed} • {p.sex} • {p.age}
                    </p>
                    <div className="tp-card__cta">
                      <span className="btn btn-primary w-full text-center text-sm py-2">
                        Meet {p.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/puppies" className="btn btn-ghost text-sm">
                View All Puppies
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

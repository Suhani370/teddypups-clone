import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { PawIcon } from "@/components/shared/PawIcon";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover our seamless adoption journey: meet local teacup puppies in our Downtown Dubai showroom or import a rare breed upon request with complete peace of mind.",
};

const inDubaiSteps = [
  {
    number: "1",
    title: "Browse & Choose Your Puppy",
    desc: "Explore our currently available teacup puppies on our website or Instagram. Each profile showcases unedited photos, video previews, age, breed specs, and personality traits.",
  },
  {
    number: "2",
    title: "Visit Our Downtown Dubai Showroom",
    desc: "Schedule a private visit to our Downtown Dubai puppy lounge. Hold, cuddle, and play with the puppy in a relaxed, hygienic setting to ensure a natural connection.",
  },
  {
    number: "3",
    title: "Veterinary Health & Passport Review",
    desc: "We review the puppy's official UAE veterinary health certificate, complete vaccination passport, microchip registration, and deworming schedule together.",
  },
  {
    number: "4",
    title: "Take Your Puppy Home Today",
    desc: "Complete the adoption agreement and take your new companion home the same day. We provide a starter care package, food guidance, and 24/7 post-adoption support.",
  },
];

const importedSteps = [
  {
    number: "1",
    title: "Custom Breed Consultation",
    desc: "Share your dream puppy vision — whether a rare Korean micro teacup Maltipoo, apricot toy poodle, or Pomeranian. Discuss size, coat color, and gender on WhatsApp.",
  },
  {
    number: "2",
    title: "Ethical Breeder Matching & Media",
    desc: "We match your request with licensed, ethical kennel partners in Korea and Europe. You receive genuine photos, high-resolution videos, and parents' pedigree records.",
  },
  {
    number: "3",
    title: "Full Health Screening & UAE Permits",
    desc: "Puppies undergo comprehensive vet checks, blood titers, microchipping, and travel clearances. Our team manages all UAE Ministry import documentation end-to-end.",
  },
  {
    number: "4",
    title: "VIP Arrival & Safe Handover",
    desc: "Your puppy travels in safe, climate-controlled comfort with dedicated pet handlers. Meet them at our Dubai showroom or receive doorstep delivery to your residence.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-milk">
      {/* Page Header */}
      <header className="tp-page-header">
        <div className="gutter">
          <div className="mx-auto flex items-center justify-center gap-2 text-caramel mb-2">
            <PawIcon className="size-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Transparent & Ethical Adoption
            </span>
            <PawIcon className="size-5" />
          </div>
          <h1 className="tp-page-header__title text-cocoa">How It Works</h1>
          <p className="tp-page-header__desc">
            Bringing home a healthy, joyful teacup companion should be transparent, exciting,
            and stress-free. Choose between our local Dubai showroom or our bespoke overseas import service.
          </p>
        </div>
      </header>

      {/* Two Tracks Section */}
      <section className="tp-section">
        <div className="gutter">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Track 1: In Dubai */}
            <div className="rounded-3xl border-2 border-cocoa/10 bg-honey/20 p-8 sm:p-10">
              <div className="mb-8 border-b border-cocoa/10 pb-6">
                <span className="inline-block rounded-full bg-whatsapp px-3.5 py-1 text-xs font-bold text-white mb-2">
                  Track 1 &bull; Immediate
                </span>
                <h2 className="font-plush text-3xl text-cocoa">
                  In Dubai (Local Showroom)
                </h2>
                <p className="mt-2 text-sm text-cocoa/75 leading-relaxed">
                  For puppies already residing in our Downtown Dubai showroom. Meet in person
                  and welcome your puppy home today.
                </p>
              </div>

              <div className="space-y-2">
                {inDubaiSteps.map((step) => (
                  <div key={step.number} className="tp-step">
                    <div className="tp-step__number">{step.number}</div>
                    <div className="tp-step__content">
                      <h3 className="tp-step__title text-cocoa">{step.title}</h3>
                      <p className="tp-step__desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-cocoa/10 flex flex-col sm:flex-row gap-3">
                <Link href="/puppies" className="btn btn-primary flex-1 text-sm text-center">
                  View Available Puppies
                </Link>
                <a
                  href={siteConfig.whatsappLink(siteConfig.showroomWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp flex-1 text-sm text-center"
                >
                  Book Showroom Visit
                </a>
              </div>
            </div>

            {/* Track 2: Order Upon Request / Imported */}
            <div className="rounded-3xl border-2 border-cocoa/10 bg-honey/20 p-8 sm:p-10">
              <div className="mb-8 border-b border-cocoa/10 pb-6">
                <span className="inline-block rounded-full bg-caramel px-3.5 py-1 text-xs font-bold text-white mb-2">
                  Track 2 &bull; Bespoke
                </span>
                <h2 className="font-plush text-3xl text-cocoa">
                  Order Upon Request / Imported
                </h2>
                <p className="mt-2 text-sm text-cocoa/75 leading-relaxed">
                  For clients seeking rare Korean teacup lines or European champion breeds.
                  We oversee the entire import journey with VIP care.
                </p>
              </div>

              <div className="space-y-2">
                {importedSteps.map((step) => (
                  <div key={step.number} className="tp-step">
                    <div className="tp-step__number">{step.number}</div>
                    <div className="tp-step__content">
                      <h3 className="tp-step__title text-cocoa">{step.title}</h3>
                      <p className="tp-step__desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-cocoa/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.whatsappLink("Hi TeddyPups! I'd like to consult about importing a specific teacup puppy breed.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-sm text-center"
                >
                  Start Import Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Puppy Promise Section */}
      <section className="tp-section tp-section--honey border-y border-cocoa/10">
        <div className="gutter">
          <div className="tp-section__header">
            <div className="mx-auto inline-flex items-center gap-1.5 text-caramel text-xs font-bold uppercase tracking-widest mb-2">
              <PawIcon className="size-4" />
              <span>Our Standards</span>
              <PawIcon className="size-4" />
            </div>
            <h2 className="tp-section__title">Our Premium Puppy Promise</h2>
            <p className="tp-section__subtitle">
              We hold ourselves to the gold standard of ethical breeding, veterinary excellence,
              and lifelong family support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tp-feature rounded-3xl border-2 border-cocoa/10 bg-milk shadow-md">
              <div className="tp-feature__icon">
                <span>🩺</span>
              </div>
              <h3 className="tp-feature__title text-cocoa">100% Health Guarantee</h3>
              <p className="tp-feature__desc">
                Every puppy is inspected by certified veterinarians, up to date on all vaccinations,
                dewormed, microchipped, and backed by a comprehensive health guarantee.
              </p>
            </div>

            <div className="tp-feature rounded-3xl border-2 border-cocoa/10 bg-milk shadow-md">
              <div className="tp-feature__icon">
                <span>🏆</span>
              </div>
              <h3 className="tp-feature__title text-cocoa">Ethical & Certified Breeders</h3>
              <p className="tp-feature__desc">
                We partner solely with licensed, family-oriented breeders in Korea and Europe.
                We have a strict zero-tolerance policy against unethical breeding or puppy mills.
              </p>
            </div>

            <div className="tp-feature rounded-3xl border-2 border-cocoa/10 bg-milk shadow-md">
              <div className="tp-feature__icon">
                <span>💬</span>
              </div>
              <h3 className="tp-feature__title text-cocoa">24/7 Lifetime Support</h3>
              <p className="tp-feature__desc">
                Your journey doesn&apos;t end at adoption. Our experienced puppy care specialists
                are available around the clock to assist with nutrition, crate training, teething, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="tp-section bg-milk">
        <div className="gutter">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-cocoa/10 bg-honey/30 p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-3xl mb-2 block">✈️ 🚐</span>
              <h2 className="font-plush text-3xl text-cocoa sm:text-4xl mb-3">
                Safe & Caring Delivery
              </h2>
              <p className="text-cocoa/75 text-sm sm:text-base leading-relaxed">
                Whether you live in Downtown Dubai, Abu Dhabi, or across the world, we ensure
                your puppy travels in utmost comfort, safety, and hygiene.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-cocoa/10 bg-milk p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-honey text-xl">
                    🏙️
                  </span>
                  <h3 className="font-plush text-xl text-cocoa">Dubai & UAE Delivery</h3>
                </div>
                <p className="text-sm text-cocoa/75 leading-relaxed">
                  Direct chauffeur delivery in climate-controlled luxury vehicles to your home
                  in Dubai, Abu Dhabi, Sharjah, and across all seven Emirates with a dedicated handler.
                </p>
              </div>

              <div className="rounded-2xl border border-cocoa/10 bg-milk p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-honey text-xl">
                    🌍
                  </span>
                  <h3 className="font-plush text-xl text-cocoa">Worldwide International Cargo</h3>
                </div>
                <p className="text-sm text-cocoa/75 leading-relaxed">
                  We collaborate with premier international pet transport partners and flight nannies
                  to deliver teacup puppies safely to loving families across the Middle East, Europe, and worldwide.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={siteConfig.whatsappLink("Hi TeddyPups! I'd like to ask about puppy delivery options to my location.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm"
              >
                Inquire About Delivery
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

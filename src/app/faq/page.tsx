"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { siteConfig } from "@/data/siteConfig";
import { Accordion } from "@/components/shared/Accordion";
import { PawIcon } from "@/components/shared/PawIcon";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((cat) => cat.title === selectedCategory);

  return (
    <div className="min-h-screen bg-milk">
      <title>Frequently Asked Questions | TeddyPups U.A.E.</title>
      <meta
        name="description"
        content="Find answers to all your questions about our teacup puppies, veterinary health checks, Downtown Dubai showroom visits, and overseas puppy imports."
      />

      {/* Page Header */}
      <header className="tp-page-header">
        <div className="gutter">
          <div className="mx-auto flex items-center justify-center gap-2 text-caramel mb-2">
            <PawIcon className="size-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Help Center & Guide
            </span>
            <PawIcon className="size-5" />
          </div>
          <h1 className="tp-page-header__title text-cocoa">
            Frequently Asked Questions
          </h1>
          <p className="tp-page-header__desc">
            Everything you need to know about adopting a puppy, visiting our Downtown Dubai showroom, health guarantees, vaccinations, and our bespoke international import process.
          </p>
        </div>
      </header>

      {/* Main FAQ Content */}
      <section className="tp-section">
        <div className="gutter max-w-4xl">
          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-cocoa text-milk shadow-sm"
                  : "bg-honey/50 text-cocoa hover:bg-honey"
              }`}
            >
              All Topics
            </button>
            {faqData.map((category) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedCategory(category.title)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.title
                    ? "bg-cocoa text-milk shadow-sm"
                    : "bg-honey/50 text-cocoa hover:bg-honey"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Grouped Category Sections */}
          <div className="space-y-12">
            {filteredCategories.map((category, catIndex) => (
              <section key={category.title} className="scroll-mt-8">
                <div className="mb-4 flex items-center gap-2.5 border-b border-cocoa/10 pb-3">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-honey text-caramel">
                    <PawIcon className="size-4" />
                  </div>
                  <h2 className="font-plush text-2xl text-cocoa">
                    {category.title}
                  </h2>
                  <span className="ml-auto text-xs font-semibold text-cocoa/40">
                    {category.items.length} questions
                  </span>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <Accordion
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      defaultOpen={catIndex === 0 && itemIndex === 0}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 rounded-3xl border-2 border-cocoa/10 bg-honey/30 p-8 text-center md:p-12 shadow-sm">
            <span className="text-3xl mb-2 block">💬</span>
            <h3 className="font-plush text-2xl text-cocoa sm:text-3xl mb-2">
              Have a question not listed here?
            </h3>
            <p className="mx-auto max-w-xl text-cocoa/75 mb-6 text-sm sm:text-base leading-relaxed">
              Our puppy advisors are available 24/7 on WhatsApp to answer any queries regarding health, upcoming litters, showroom visits, or custom breeds.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.whatsappLink("Hi TeddyPups! I have a question about adopting a puppy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm"
              >
                Chat on WhatsApp Now
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-ghost text-sm"
              >
                Email Support Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

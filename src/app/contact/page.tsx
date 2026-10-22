"use client";

import { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { puppies } from "@/data/puppies";
import { siteConfig } from "@/data/siteConfig";
import PawIcon from "@/components/shared/PawIcon";

function ContactLetterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [puppyId, setPuppyId] = useState("");
  const [message, setMessage] = useState("");
  const [websiteHp, setWebsiteHp] = useState(""); // honeypot
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("puppy");
      if (p) setPuppyId(p);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteHp) return; // honeypot caught bot

    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide your phone or WhatsApp number.");
      return;
    }

    setError(null);
    startTransition(() => {
      setSubmitted(true);
    });
  };

  if (submitted) {
    const selectedPup = puppies.find((p) => p.slug === puppyId);
    const whatsappText = `Hi TeddyPups! My name is ${name}. I submitted a letter through your website. I'm looking for ${selectedPup ? selectedPup.name : "a puppy"}. Message: ${message || "I'd love to chat!"}`;

    return (
      <div className="tp-post">
        <div className="tp-letterform text-center p-8 sm:p-12">
          <span aria-hidden="true" className="tp-letter__stamp">
            <PawIcon className="size-8 text-caramel" />
          </span>
          <p className="font-scrawl text-3xl text-caramel mb-2">Letter Posted! 💌</p>
          <h3 className="font-plush text-2xl text-cocoa mb-4">
            Thank you, {name}!
          </h3>
          <p className="text-cocoa/80 text-base leading-relaxed max-w-md mx-auto mb-6">
            We have received your letter with all your details. Our puppy concierge will reach out to you on <strong>{phone}</strong> very soon.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsappLink(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Chat Now on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setPhone("");
                setEmail("");
                setArea("");
                setMessage("");
              }}
              className="btn btn-ghost"
            >
              Write Another Letter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tp-post" data-phase="writing">
      <form noValidate onSubmit={handleSubmit} className="tp-letterform">
        <span aria-hidden="true" className="tp-letter__stamp">
          <PawIcon className="size-8" />
        </span>

        <p className="font-scrawl tp-letterform__greeting">Dear TeddyPups,</p>

        <p className="tp-letterform__line">
          my name is{" "}
          <span className="tp-blank" style={{ width: "min(16ch, 100%)" }}>
            <input
              aria-label="Your name (required)"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          , and you can reach me on{" "}
          <span className="tp-blank" style={{ width: "min(16ch, 100%)" }}>
            <input
              aria-label="Phone or WhatsApp number with country code (required)"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              placeholder="+971 50 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </span>{" "}
          or by email at{" "}
          <span className="tp-blank" style={{ width: "min(20ch, 100%)" }}>
            <input
              aria-label="Email (optional)"
              type="email"
              autoComplete="email"
              placeholder="optional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          .
        </p>

        <p className="tp-letterform__line">
          I live in{" "}
          <span className="tp-blank" style={{ width: "min(14ch, 100%)" }}>
            <input
              aria-label="Your area (optional)"
              autoComplete="address-level2"
              maxLength={80}
              placeholder="e.g. Dubai Marina"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </span>
          , and I&apos;m curious about{" "}
          <span className="tp-blank tp-blank--select">
            <select
              aria-label="Puppy you're interested in (optional)"
              value={puppyId}
              onChange={(e) => setPuppyId(e.target.value)}
            >
              <option value="">any puppy (not sure yet)</option>
              {puppies.map((pup) => (
                <option key={pup.slug} value={pup.slug}>
                  {pup.name} ({pup.breed}, {pup.sex})
                </option>
              ))}
            </select>
          </span>
          .
        </p>

        <textarea
          aria-label="Your message (optional)"
          rows={4}
          maxLength={2000}
          placeholder="Anything else you'd like to tell us…"
          className="tp-letterform__note"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Anti-spam honeypot */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={websiteHp}
              onChange={(e) => setWebsiteHp(e.target.value)}
            />
          </label>
        </div>

        {error && (
          <p className="mt-3 text-sm font-semibold text-caramel">{error}</p>
        )}

        <div className="tp-letterform__sign">
          <p className="font-scrawl">with love, a future puppy parent</p>
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
          >
            {isPending ? "Posting letter..." : "Post my letter"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div data-page="contact" className="tp-page">
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene"
        style={{
          ["--sky-top" as string]: "#fff9ee",
          ["--sky-bottom" as string]: "#f9dca4",
        }}
        aria-labelledby="contact-title"
      >
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          {/* Header: Large left-aligned heading & lede */}
          <header className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1
              id="contact-title"
              className="font-plush text-giant max-w-[12ch] lg:col-span-7"
            >
              Get in touch with us
            </h1>
            <p className="text-lede text-cocoa/80 lg:col-span-5 lg:pb-3">
              Have questions about our puppies or adoption process? Fill out the form,
              and our team will get back to you promptly. Whether ready to adopt or just
              seeking info, we&apos;d love to hear from you!
            </p>
          </header>

          {/* Two Column Grid */}
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Right Column (Form): In desktop DOM row-start-1 col-start-6 */}
            <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
              <ContactLetterForm />
            </div>

            {/* Left Column (Showroom Details & Contact Info): row-start-1 col-span-5 */}
            <div className="lg:col-span-5 lg:row-start-1">
              <a
                href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto"
              >
                WhatsApp +971 54 167 6733
              </a>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="font-scrawl text-lg text-cocoa/70">call us</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a className="text-cocoa hover:text-caramel no-underline transition-colors" href="tel:+971541676733">
                      +971 54 167 6733
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-scrawl text-lg text-cocoa/70">email</dt>
                  <dd className="mt-1 break-all text-lg font-semibold">
                    <a className="text-cocoa hover:text-caramel no-underline transition-colors" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Showroom Visit Box */}
              <section aria-labelledby="visit-title" className="mt-12">
                <div className="tp-visit relative p-7 pt-6">
                  <div>
                    <h2 id="visit-title" className="font-plush text-[2rem] leading-tight text-cocoa">
                      Visit us in Downtown Dubai
                    </h2>
                    <p className="mt-3 max-w-[38ch] text-cocoa/80 text-sm leading-relaxed">
                      Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.
                    </p>
                    <p className="mt-4 flex items-center gap-2 font-semibold text-cocoa text-sm">
                      <PawIcon className="size-5 shrink-0 text-caramel" />
                      Downtown Dubai, United Arab Emirates
                    </p>
                    <a
                      href={siteConfig.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost mt-6 !bg-milk text-sm"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                  <figure className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-cocoa/15 shadow-sm">
                    <Image
                      src="https://puppy.instabizweb.com/media/skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg"
                      alt="The apricot teddy bear puppy from our showroom, held up to say hello"
                      fill
                      sizes="(min-width: 640px) 24rem, 90vw"
                      className="object-cover"
                    />
                  </figure>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

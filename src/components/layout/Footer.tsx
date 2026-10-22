import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const stars = [
  { left: "6%", top: "18%", size: "12.6px", delay: "0.00s" },
  { left: "14%", top: "42%", size: "8.4px", delay: "0.40s" },
  { left: "23%", top: "12%", size: "9.8px", delay: "0.80s" },
  { left: "31%", top: "30%", size: "7.0px", delay: "1.20s" },
  { left: "44%", top: "9%", size: "11.2px", delay: "1.60s" },
  { left: "52%", top: "36%", size: "7.7px", delay: "2.00s" },
  { left: "63%", top: "15%", size: "10.5px", delay: "2.40s" },
  { left: "71%", top: "40%", size: "7.0px", delay: "2.80s" },
  { left: "92%", top: "33%", size: "8.4px", delay: "3.20s" },
];

export function Footer() {
  return (
    <footer className="tp-footer relative bg-[#24130b] text-milk pt-0 pb-12 overflow-hidden">
      {/* Top Rolling Hill Curve Divider */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 text-[#24130b] fill-current"
        >
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
        </svg>
      </div>

      {/* Twinkling Stars & Moon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden"
      >
        {stars.map((star, idx) => (
          <svg
            key={idx}
            viewBox="0 0 40 40"
            className="tp-twinkle absolute text-honey"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              animationDelay: star.delay,
            }}
          >
            <path
              d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
              fill="currentColor"
            />
          </svg>
        ))}
        <span className="tp-moon absolute right-[10%] top-[12%] w-12 h-12 rounded-full shadow-[-6px_6px_0_2px_#f2be6b] opacity-80" />
      </div>

      {/* Main Footer Grid */}
      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-8 md:grid-cols-12 md:gap-x-12 md:gap-y-6 md:pt-14">
        {/* Left Column (5 cols): "Home, at last." + description + basket puppy */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <p className="font-plush text-big text-honey-soft">Home, at last.</p>
            <p className="mt-5 max-w-md text-milk/80 leading-relaxed text-[0.98rem]">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
            </p>
          </div>

          {/* Cozy Puppy Basket Illustration */}
          <div className="tp-basket relative mt-8 max-w-[18rem] md:max-w-[20rem]">
            <svg
              aria-hidden="true"
              viewBox="0 0 300 240"
              className="w-full h-auto drop-shadow-md"
            >
              {/* Basket Back Hollow */}
              <ellipse
                cx="212"
                cy="145"
                rx="76"
                ry="10"
                fill="#3a1f12"
                opacity="0.8"
              />
              <path
                d="M136 145 A76 10 0 0 1 288 145"
                stroke="#2a170e"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Puppy in Basket */}
              <g transform="translate(160, 68) scale(0.62)">
                <ellipse cx="70" cy="95" rx="35" ry="32" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" />
                {/* Ears */}
                <ellipse cx="38" cy="80" rx="14" ry="22" fill="#e4a352" stroke="#2a170e" strokeWidth="3" transform="rotate(-15 38 80)" />
                <ellipse cx="102" cy="80" rx="14" ry="22" fill="#e4a352" stroke="#2a170e" strokeWidth="3" transform="rotate(15 102 80)" />
                {/* Snout */}
                <ellipse cx="70" cy="102" rx="15" ry="12" fill="#fffdf8" stroke="#2a170e" strokeWidth="2.5" />
                <ellipse cx="70" cy="97" rx="5" ry="3.5" fill="#2a170e" />
                {/* Eyes */}
                <circle cx="56" cy="88" r="4.5" fill="#2a170e" />
                <circle cx="57.5" cy="86.5" r="1.5" fill="#ffffff" />
                <circle cx="84" cy="88" r="4.5" fill="#2a170e" />
                <circle cx="85.5" cy="86.5" r="1.5" fill="#ffffff" />
                {/* Paws on basket rim */}
                <ellipse cx="50" cy="126" rx="8" ry="6" fill="#f2be6b" stroke="#2a170e" strokeWidth="2.5" />
                <ellipse cx="90" cy="126" rx="8" ry="6" fill="#f2be6b" stroke="#2a170e" strokeWidth="2.5" />
              </g>

              {/* Basket Front */}
              <path
                d="M136 145 C138 180 146 210 156 226 L268 226 C278 210 286 180 288 145 A76 10 0 0 1 136 145 Z"
                fill="#e4a352"
                stroke="#2a170e"
                strokeWidth="3"
              />
              <path
                d="M141 174 Q212 192 283 174 M147 200 Q212 216 277 200"
                stroke="#2a170e"
                strokeWidth="2.2"
                fill="none"
              />
              <path
                d="M165 162 L172 224 M192 165 L194 226 M212 166 V226 M232 165 L230 226 M259 162 L252 224"
                stroke="#2a170e"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M136 145 A76 10 0 0 0 288 145"
                stroke="#f2be6b"
                strokeWidth="3.5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Column 2 (3 cols): Explore Links */}
        <nav
          aria-label="Footer"
          className="md:col-span-3 md:col-start-7 md:row-span-2 md:row-start-1"
        >
          <h2 className="font-scrawl text-xl text-honey tracking-wide">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            <li>
              <Link
                href="/puppies"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                Available puppies
              </Link>
            </li>
            <li>
              <Link
                href="/puppies#gone-home"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                Gone home
              </Link>
            </li>
            <li>
              <Link
                href="/happy-families"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                Happy families
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works#delivery"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                Delivery &amp; collection
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline transition-colors"
              >
                Visit &amp; contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 3 (3 cols): Say hello + Social Links */}
        <div className="md:col-span-3 md:row-span-2 md:row-start-1">
          <h2 className="font-scrawl text-xl text-honey tracking-wide">Say hello</h2>
          <ul className="mt-4 space-y-2.5 text-milk/90 text-[0.98rem]">
            <li>
              <a
                className="font-semibold hover:text-honey transition-colors"
                href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp +971 54 167 6733
              </a>
            </li>
            <li>
              <a
                className="break-all hover:text-honey transition-colors"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-milk/75">{siteConfig.address}</li>
          </ul>

          <ul
            className="mt-6 flex flex-wrap gap-2.5"
            aria-label="Social media"
          >
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey transition-colors"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="gutter relative mx-auto mt-14 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center">
        <span className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="TeddyPups logo"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          &copy; 2026 TeddyPups U.A.E.
        </span>
        <span className="font-scrawl text-base text-honey/80">
          every puppy is family
        </span>
      </div>
    </footer>
  );
}

export default Footer;

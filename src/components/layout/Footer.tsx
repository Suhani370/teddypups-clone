import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="tp-footer">
      <div className="gutter">
        <div className="tp-footer__top">
          <div className="tp-footer__grid">
            {/* Column 1: Brand & Social */}
            <div>
              <Link
                href="/"
                className="tp-footer__brand mb-4 inline-flex items-center gap-3 no-underline"
              >
                <Image
                  src="/brand/logo.png"
                  alt="TeddyPups logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="font-plush text-2xl font-bold text-milk">
                  TeddyPups
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-milk/70 mb-6 max-w-sm">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-milk/10 text-milk/80 transition-all hover:bg-milk/20 hover:text-milk"
                  aria-label="TeddyPups on Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-milk/10 text-milk/80 transition-all hover:bg-milk/20 hover:text-milk"
                  aria-label="TeddyPups on TikTok"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .68.06.98.17v-3.52a6.37 6.37 0 0 0-.98-.08A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.27 8.27 0 0 0 4.91 1.6V7.22a4.83 4.83 0 0 1-1-.53z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-milk/10 text-milk/80 transition-all hover:bg-milk/20 hover:text-milk"
                  aria-label="TeddyPups on Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Explore */}
            <div>
              <h3 className="tp-footer__heading">Explore</h3>
              <ul className="tp-footer__links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/puppies">Available Puppies</Link>
                </li>
                <li>
                  <Link href="/happy-families">Happy Families</Link>
                </li>
                <li>
                  <Link href="/contact">Downtown Dubai Showroom</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="tp-footer__heading">Company</h3>
              <ul className="tp-footer__links">
                <li>
                  <Link href="/how-it-works">How It Works</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Visit & Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div>
              <h3 className="tp-footer__heading">Get in touch</h3>
              <ul className="tp-footer__links space-y-3">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 mt-0.5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="hover:text-milk transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 mt-0.5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-milk transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 mt-0.5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <a
                    href={siteConfig.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-milk transition-colors"
                  >
                    {siteConfig.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="tp-footer__bottom">
          <p>© 2024 TeddyPups U.A.E.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

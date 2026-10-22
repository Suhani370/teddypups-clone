"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/data/siteConfig";
import PawIcon from "@/components/shared/PawIcon";
import ScallopEdge from "@/components/shared/ScallopEdge";
import MobileMenu from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className="tp-header sticky top-0 z-50 w-full"
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <div className="gutter">
        <div className="tp-header__bar">
          {/* Logo & Brand */}
          <Link href="/" className="tp-header__brand">
            <Image
              src="/brand/logo.png"
              alt="TeddyPups"
              width={56}
              height={56}
              className="tp-header__logo object-cover"
              priority
            />
            <span className="tp-header__name font-plush text-2xl font-bold">
              TeddyPups
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="tp-header__nav" aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="tp-nav-link"
                      data-active={isActive ? "true" : "false"}
                    >
                      <span>{link.label}</span>
                      <PawIcon className="tp-nav-link__paw" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* End Actions: WhatsApp + Mobile Menu Toggle */}
          <div className="tp-header__end">
            <a
              href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa text-sm"
              aria-label="Chat with TeddyPups on WhatsApp"
            >
              WhatsApp us
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold text-cocoa hover:bg-honey/60 transition-colors lg:hidden"
              aria-haspopup="dialog"
              aria-label="Open menu"
            >
              <PawIcon className="size-4 text-cocoa" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scalloped edge underneath */}
      <div className="tp-header__hem">
        <ScallopEdge />
      </div>

      {/* Mobile navigation drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/data/siteConfig";
import PawIcon from "@/components/shared/PawIcon";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="tp-menu h-full w-full max-h-none max-w-none m-0 p-0 border-0 outline-none overflow-hidden"
      onCancel={handleCancel}
      onClose={onClose}
      aria-label="Mobile navigation"
    >
      <div className="flex flex-col h-full w-full justify-between">
        {/* Top bar with scrawl heading and close button */}
        <div className="gutter flex items-center justify-between py-5 border-b border-cocoa/10">
          <span className="font-scrawl text-2xl sm:text-3xl text-cocoa/80 tracking-wide select-none">
            where to, friend?
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 rounded-full text-cocoa hover:text-caramel transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
          <nav
            className="flex flex-col items-center gap-1 sm:gap-2 text-center"
            aria-label="Mobile navigation links"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="tp-menu-link font-plush transition-transform hover:scale-105"
                  data-active={isActive ? "true" : "false"}
                >
                  {isActive && (
                    <PawIcon className="w-6 h-6 text-caramel shrink-0" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom bar with WhatsApp and phone */}
        <div className="border-t border-cocoa/10 p-6 flex flex-col items-center gap-3 bg-honey/80">
          <a
            href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full max-w-xs text-base py-3"
            aria-label="Contact us on WhatsApp"
          >
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="text-sm font-medium text-cocoa/70 hover:text-cocoa transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default MobileMenu;

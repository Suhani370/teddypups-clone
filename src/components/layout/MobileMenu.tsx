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
      className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40 border-0 outline-none overflow-hidden"
      onCancel={handleCancel}
      onClose={onClose}
      aria-label="Site menu"
    >
      <div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
        <div className="flex items-center justify-between">
          <span className="font-scrawl text-lg">where to, friend?</span>
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk hover:bg-caramel transition-colors"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-10 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)] hover:text-caramel transition-colors"
                    data-active={isActive ? "true" : "false"}
                  >
                    <span className="inline-flex items-center gap-3">
                      {link.label}
                      {isActive && (
                        <PawIcon className="w-8 h-8 text-caramel shrink-0 inline-block" />
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 pt-4 border-t border-cocoa/15">
          <a
            href={siteConfig.whatsappLink(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full text-center"
            aria-label="WhatsApp us"
          >
            WhatsApp us
          </a>
          <p className="text-center text-sm font-medium text-cocoa/80">
            {siteConfig.phone}
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default MobileMenu;

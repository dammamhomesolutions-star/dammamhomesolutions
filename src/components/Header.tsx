"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Home Repairs", href: "/#home-repairs" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "About", href: "/#why-different" },
  { label: "Contact", href: "/#contact" },
];

interface HeaderProps {
  ctaLabel?: string;
  whatsappMessage?: string;
}

export default function Header({
  ctaLabel = "WhatsApp Us",
  whatsappMessage = "Hello Dammam Home Solutions, I'd like to ask about a repair or maintenance job.",
}: HeaderProps) {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink-900/10 bg-sand-50/90 backdrop-blur transition-[padding] duration-300 ${
        compact ? "py-2" : "py-4"
      }`}
    >
      <div className="container-edge flex items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring rounded-sm font-serif text-lg font-semibold tracking-tight text-ink-950 sm:text-xl"
        >
          Dammam <span className="text-rust-700">Home Solutions</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-medium text-ink-700 transition-colors hover:text-rust-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M1 3.5H17M1 9H17M1 14.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-edge flex flex-col gap-1 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="focus-ring rounded-md px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-900/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

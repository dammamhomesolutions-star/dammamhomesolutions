"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchTarget } from "@/lib/i18n";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Services", href: "/services/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Areas", href: "/areas-we-serve/" },
  { label: "About", href: "/about-us/" },
  { label: "Contact", href: "/contact-us/" },
];

interface HeaderProps {
  ctaLabel?: string;
  whatsappMessage?: string;
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function Header({
  ctaLabel = "WhatsApp for a Quote",
  whatsappMessage = "Hello Dammam Home Solutions, I'd like a quote for a repair or maintenance job.",
}: HeaderProps) {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = switchTarget(usePathname() || "/");

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
        compact ? "py-2" : "py-3.5"
      }`}
    >
      <div className="container-edge flex items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring rounded-sm font-serif text-lg font-semibold tracking-tight text-ink-950 sm:text-xl"
        >
          Dammam <span className="text-rust-700">Home Solutions</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-medium text-ink-700 transition-colors hover:text-rust-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={lang.href} hrefLang="ar" lang="ar" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-ink-800 hover:text-rust-700">
            العربية
          </a>
          <a
            href={buildTelLink()}
            className="focus-ring hidden items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-900/40 md:inline-flex"
          >
            <PhoneIcon /> <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span><span className="xl:hidden">Call Now</span>
          </a>
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="nofollow noopener noreferrer"
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

      {/* Closed menu is `hidden`, so its links can't be tabbed to. */}
      <div id="mobile-nav" hidden={!menuOpen} className="lg:hidden">
        <nav aria-label="Mobile" className="container-edge flex animate-fadeIn flex-col gap-1 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="focus-ring rounded-md px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-900/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={buildTelLink()}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-4 py-3 text-sm font-semibold text-ink-950"
            >
              <PhoneIcon /> Call Now
            </a>
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-4 py-3 text-sm font-semibold text-sand-50"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

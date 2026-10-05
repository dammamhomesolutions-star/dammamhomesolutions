"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import { switchTarget } from "@/lib/i18n";

const navLinks = [
  { label: "الخدمات", href: "/ar/services/" },
  { label: "صيانة العقارات", href: "/ar/property-maintenance/" },
  { label: "المناطق", href: "/ar/areas-we-serve/" },
  { label: "من نحن", href: "/ar/about-us/" },
  { label: "تواصل معنا", href: "/ar/contact-us/" },
];

export default function ArHeader({ whatsappMessage = "السلام عليكم، أرغب في عرض سعر لعمل صيانة في المنزل." }: { whatsappMessage?: string }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const en = switchTarget(usePathname() || "/ar/");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 border-b border-ink-900/10 bg-sand-50/90 backdrop-blur transition-[padding] duration-300 ${compact ? "py-2" : "py-3.5"}`}>
      <div className="container-edge flex items-center justify-between gap-4">
        <Link href="/ar/" className="focus-ring rounded-sm font-serif text-lg font-semibold text-ink-950 sm:text-xl">
          حلول الدمام <span className="text-rust-700">المنزلية</span>
        </Link>
        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="focus-ring rounded-sm text-sm font-medium text-ink-700 hover:text-rust-700">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={en.href} hrefLang="en" lang="en" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-ink-800 hover:text-rust-700">English</a>
          <a href={buildTelLink()} className="focus-ring hidden items-center rounded-full border border-ink-900/15 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:border-ink-900/40 md:inline-flex">اتصل الآن</a>
          <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring hidden items-center rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-sand-50 sm:inline-flex">
            عرض سعر عبر واتساب
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="ar-mobile-nav"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /> : <path d="M1 3.5H17M1 9H17M1 14.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>
      <div id="ar-mobile-nav" hidden={!open} className="lg:hidden">
        <nav aria-label="قائمة الجوال" className="container-edge flex animate-fadeIn flex-col gap-1 pb-4 pt-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="focus-ring rounded-md px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-900/5">{l.label}</Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-4 py-3 text-sm font-semibold text-ink-950">اتصل الآن</a>
            <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-4 py-3 text-sm font-semibold text-sand-50">واتساب</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

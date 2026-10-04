import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import HpHouse from "./HpHouse";

const services = ["AC Repair", "Plumbing", "Electrical", "Handyman", "Painting", "Carpentry", "Waterproofing"];
const trust = ["Local Dammam service", "Available 24/7", "Send photos on WhatsApp", "Scope agreed before work"];

export default function HpHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid gap-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20">
        <div className="animate-fadeUp lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-moss-600" /> Available 24/7 · Dammam, Khobar, Dhahran &amp; Qatif
          </p>
          <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.04] tracking-tight text-ink-950 sm:text-6xl">
            Home Maintenance &amp; Repair Services in Dammam
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            Repairs and maintenance for villas, apartments, landlords and
            property managers — one local team for the whole home.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-ink-900" aria-label="Main services">
            {services.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-rust-600">•</span>}
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like a quote. Here's what needs fixing: ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Get a Quote on WhatsApp
            </a>
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 bg-sand-50 px-7 py-4 text-sm font-semibold text-ink-950 hover:border-ink-900/50">
              Call Now
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-700 sm:flex sm:flex-wrap sm:gap-x-6">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="h-4 w-4 flex-none text-moss-600" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms] lg:col-span-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">One team for every part of the home — tap a number</p>
          <HpHouse />
        </div>
      </div>
    </section>
  );
}

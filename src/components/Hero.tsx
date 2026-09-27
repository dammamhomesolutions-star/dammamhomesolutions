import { buildWhatsAppLink } from "@/lib/site-config";
import HeroVisual from "./HeroVisual";

const heroWhatsAppMessage =
  "Hello Dammam Home Solutions, I'd like to send a repair request.";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container-edge grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="max-w-xl animate-fadeUp">
          <p className="section-label">Dammam · Property repair &amp; maintenance</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            When your home needs fixing, start here.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Dammam Home Solutions handles the repairs and maintenance that
            keep homes and properties working properly — from AC and
            plumbing to electrical work, leaks, painting and general
            repairs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink(heroWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:scale-[1.02]"
            >
              WhatsApp a Repair Request
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Residential repair &amp; maintenance for homeowners, tenants,
            landlords and property managers in Dammam.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-fadeIn [animation-delay:150ms]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

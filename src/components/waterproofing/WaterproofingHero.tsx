import { buildWhatsAppLink } from "@/lib/site-config";
import WaterproofingHeroVisual from "./WaterproofingHeroVisual";

const heroWhatsAppMessage =
  "Hello Dammam Home Solutions, I'd like help with a moisture or waterproofing problem.";

export default function WaterproofingHero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <div className="container-edge grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-xl animate-fadeUp">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
            Dammam · Waterproofing &amp; water leak protection
          </p>
          <h2 className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">
            Waterproofing &amp; Water Leak Protection in Dammam
          </h2>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            Waterproofing in Dammam — the stain is visible, the source may not be.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Damp walls, ceiling marks and recurring moisture can have
            different causes. Dammam Home Solutions helps property owners
            in Dammam investigate the problem and identify the appropriate
            repair or waterproofing work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#request-service"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:scale-[1.02]"
            >
              Request Waterproofing Assessment
            </a>
            <a
              href={buildWhatsAppLink(heroWhatsAppMessage)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Moisture doesn&rsquo;t always come from where it appears —
            that&rsquo;s the starting point for this whole page.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-fadeIn [animation-delay:150ms]">
            <WaterproofingHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

import { buildWhatsAppLink } from "@/lib/site-config";
import PmHeroVisual from "./PmHeroVisual";

export default function PmHero() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-moss-700">
          <span className="inline-block h-1.5 w-1.5 bg-moss-600" aria-hidden="true" />
          Property overview — Dammam
        </p>

        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          Property maintenance in Dammam — before problems get bigger.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-600 sm:text-base">
          Property maintenance for homes, villas, apartments and occupied
          properties in Dammam — focused on the systems, surfaces and
          everyday details that need attention over time.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'd like to request property maintenance. Here's some context about the property: "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Request Property Maintenance
          </a>
          <a
            href="#condition-check"
            className="focus-ring group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-800"
          >
            Tell Us About Your Property
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <PmHeroVisual />
      </div>
    </section>
  );
}

import { buildWhatsAppLink } from "@/lib/site-config";
import InteractiveFloor from "./InteractiveFloor";

export default function FlHero() {
  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay-700">
          <span className="inline-block h-1.5 w-1.5 bg-clay-600" aria-hidden="true" />
          Flooring repair &amp; surface restoration
        </p>

        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          Flooring repair in Dammam — you notice every step.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:text-base">
          Cracked, chipped, uneven, damaged or worn flooring can affect how
          an existing property looks and feels. We assess the affected
          surface and help determine the appropriate repair.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#underfoot"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Show Us the Floor
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a flooring repair. Here's what I've noticed: ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-clay-700"
          >
            Request Floor Repair
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <InteractiveFloor />
      </div>
    </section>
  );
}

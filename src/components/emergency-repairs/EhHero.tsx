import { buildWhatsAppLink } from "@/lib/site-config";
import EhHeroVisual from "./EhHeroVisual";

export default function EhHero() {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950 pb-14 pt-14 text-sand-100 sm:pb-16 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ember-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-600" aria-hidden="true" />
          Emergency repair triage
        </p>

        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-sand-50 sm:text-5xl">
          Something went wrong at home? Start here.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-300 sm:text-base">
          A sudden leak, electrical problem, damaged door, AC failure or
          other household issue can be difficult to explain. Tell us what
          happened and we&rsquo;ll help you identify the appropriate next
          step.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#what-happened"
            className="focus-ring inline-flex items-center rounded-full bg-ember-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Start a Repair Request
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, something has come up at my property. Here's what happened: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-ember-500"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <EhHeroVisual />
      </div>
    </section>
  );
}

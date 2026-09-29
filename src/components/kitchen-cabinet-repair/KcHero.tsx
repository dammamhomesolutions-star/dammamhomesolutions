import { buildWhatsAppLink } from "@/lib/site-config";
import KcInspectMode from "./KcInspectMode";

export default function KcHero() {
  return (
    <section className="border-b border-walnut-900/10 bg-sand-50 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-walnut-700">
          <span className="inline-block h-1.5 w-1.5 bg-walnut-600" aria-hidden="true" />
          Kitchen cabinet &amp; joinery repair
        </p>

        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          When the cabinet stops working properly, you notice every time.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:text-base">
          Loose hinges, sticking drawers, damaged cabinet doors, broken
          handles and worn kitchen joinery can turn small problems into
          daily frustrations. We help assess and repair practical kitchen
          cabinet issues.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#whats-not-working"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Show Us the Cabinet
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a kitchen cabinet repair. Here's what I've noticed: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-walnut-700"
          >
            Request a Repair
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <KcInspectMode />
      </div>
    </section>
  );
}

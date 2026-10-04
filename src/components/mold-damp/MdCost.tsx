import { mdCost } from "@/lib/mold-damp";
import { Arrow, Spec } from "./MdUi";

// Cost factors — educational only, no prices or calculator.
export default function MdCost() {
  return (
    <section id="cost" aria-labelledby="md-cost" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Spec code="S-15">Cost</Spec>
            <h2 id="md-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What affects mold &amp; damp treatment cost?</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-600">
              A small patch with a known cause and a recurring problem that needs
              a leak repair, waterproofing and replastering are very different jobs.
              We quote once we understand the situation.
            </p>
            <a href="#report" className="focus-ring group mt-5 inline-flex items-center gap-2 rounded-lg bg-glass-900 px-5 py-3 text-sm font-semibold text-sand-50 hover:bg-ink-950">
              Request an Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {mdCost.map((c, i) => (
            <li key={c.label} className="relative rounded-xl border border-ink-900/10 bg-glass-100/50 p-4">
              <span aria-hidden="true" className="absolute right-3 top-3 h-2 w-2 rounded-full bg-glass-600" style={{ opacity: 0.3 + (i % 5) * 0.15 }} />
              <h3 className="pr-4 text-sm font-semibold text-ink-950">{c.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{c.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

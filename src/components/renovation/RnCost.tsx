import { rnCostFactors } from "@/lib/renovation";
import { Arrow, Eyebrow } from "./RnUi";

// Educational budget factors — no prices, no calculator.
export default function RnCost() {
  return (
    <section id="cost" aria-labelledby="rn-cost" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow n="15">Budget</Eyebrow>
          <h2 id="rn-cost" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">What usually changes a renovation budget?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Two renovations of the same room can cost very different amounts. We
            don&rsquo;t publish price lists or calculators because they can&rsquo;t see
            your home — a quote follows the assessed scope.
          </p>
          <a href="#request" className="focus-ring group mt-8 inline-flex items-center gap-3 bg-ink-950 px-6 py-4 text-sm font-semibold text-sand-50 hover:bg-walnut-900">
            Request a Renovation Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <ol className="grid grid-cols-2 gap-px self-start bg-ink-950/10 lg:col-span-8 lg:grid-cols-3">
          {rnCostFactors.map((f, i) => (
            <li key={f.label} className="bg-sand-50 p-4 sm:p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-lg text-ink-950">{f.label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-600">{f.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

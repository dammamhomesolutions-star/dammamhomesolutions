import { spCostFactors } from "@/lib/swimming-pool";
import SpCtas from "./SpCtas";

export default function SpCost() {
  return (
    <section id="cost" aria-labelledby="sp-cost" className="bg-teal-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Cost</p>
          <h2 id="sp-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What determines pool repair &amp; maintenance cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We don&rsquo;t publish prices or calculators that guess — every pool is
            different. We assess first and quote before any work.
          </p>
          <SpCtas tone="light" className="mt-8" primaryLabel="Request a Pool Assessment" />
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-7">
          {spCostFactors.map((f, i) => (
            <li key={f} className="flex flex-col justify-between gap-4 rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/5">
              <span className="font-mono text-xs text-teal-700">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium text-ink-900">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

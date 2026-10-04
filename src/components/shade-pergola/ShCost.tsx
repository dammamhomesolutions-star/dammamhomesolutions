import { shCost } from "@/lib/shade-pergola";
import ShScope from "./ShScope";
import { Arrow, Tag, btnDark } from "./ShUi";

// Price factors (no prices) beside the no-price scope estimator.
export default function ShCost() {
  return (
    <section id="cost" aria-labelledby="sh-cost" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Tag n="14">Cost</Tag>
          <h2 id="sh-cost" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Why shade repair prices can vary</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Replacing a torn cover on a single-car shade and refurbishing a row of commercial bays are very different jobs. We don&rsquo;t publish prices — we quote once the scope is clear.</p>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-steel-900/10">
            {shCost.map((c, i) => (
              <li key={c} className="flex items-baseline gap-3 bg-sand-50 px-4 py-3 text-sm text-ink-800">
                <span className="font-mono text-[10px] text-copper-700">{String(i + 1).padStart(2, "0")}</span>{c}
              </li>
            ))}
          </ul>
          <a href="#request" className={`${btnDark} mt-8`}>Request an Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
        </div>
        <div className="lg:col-span-6">
          <ShScope />
        </div>
      </div>
    </section>
  );
}

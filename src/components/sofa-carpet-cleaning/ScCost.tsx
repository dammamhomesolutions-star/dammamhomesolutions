"use client";

import { useState } from "react";
import ScCtas from "./ScCtas";

const parts = [
  { key: "item", label: "Item", options: ["Sofa", "Sectional", "Chair", "Carpet", "Rug"] },
  { key: "size", label: "Size", options: ["Small", "Medium", "Large"] },
  { key: "condition", label: "Condition", options: ["Light soil", "Stains", "Heavy buildup", "Odour"] },
  { key: "material", label: "Material", options: ["Fabric", "Velvet", "Wool", "Leather", "Not sure"] },
] as const;

const sofaFactors = ["Number of seats", "Sofa size", "Material", "Condition", "Stain level", "Cushions", "Special treatment"];
const carpetFactors = ["Carpet size", "Fibre / material", "Soil level", "Stains", "Accessibility", "Drying requirements", "Additional treatments"];

type Pick = Partial<Record<(typeof parts)[number]["key"], string>>;

// ITEM + SIZE + CONDITION + MATERIAL = QUOTE. No prices are shown.
export default function ScCost() {
  const [p, setP] = useState<Pick>({});
  const complete = parts.every((x) => p[x.key]);

  return (
    <section id="cost" aria-labelledby="sc-cost" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Pricing</p>
          <h2 id="sc-cost" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What affects sofa &amp; carpet cleaning cost?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We don&rsquo;t list fixed prices — a quote is built from four
            things. Pick yours to see what we&rsquo;d need to know.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1.1fr]">
          {parts.map((part, i) => (
            <div key={part.key} className="contents">
              <fieldset className="rounded-2xl border border-ink-900/10 bg-sand-50 p-4">
                <legend className="px-1 font-mono text-[11px] tracking-[0.16em] text-glass-700">{part.label.toUpperCase()}</legend>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {part.options.map((o) => {
                    const on = p[part.key] === o;
                    return (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-2.5 py-1 text-xs transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${
                          on ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-glass-600"
                        }`}
                      >
                        <input type="radio" name={`sc-cost-${part.key}`} value={o} checked={on} onChange={() => setP((s) => ({ ...s, [part.key]: o }))} className="sr-only" />
                        {o}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <span className="self-center text-center font-serif text-2xl text-glass-700" aria-hidden="true">
                {i < parts.length - 1 ? "+" : "="}
              </span>
            </div>
          ))}
          <div className="rounded-2xl bg-ink-950 p-4 text-sand-50" aria-live="polite">
            <p className="font-mono text-[11px] tracking-[0.16em] text-glass-300">QUOTE</p>
            {complete ? (
              <p className="mt-2 text-sm leading-relaxed">
                {p.size} {p.item!.toLowerCase()}, {p.material!.toLowerCase()}, {p.condition!.toLowerCase()} — send a photo and we&rsquo;ll quote for it.
              </p>
            ) : (
              <p className="mt-2 text-sm text-ink-300">Fill in all four to complete the picture.</p>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">For sofas</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sofaFactors.map((f) => (
                <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">For carpets &amp; rugs</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {carpetFactors.map((f) => (
                <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <ScCtas className="mt-10" quoteFirst />
      </div>
    </section>
  );
}

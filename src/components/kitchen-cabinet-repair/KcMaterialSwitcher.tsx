"use client";

import { useState } from "react";
import { kcMaterials, type KcMaterialId } from "@/lib/kitchen-cabinet-repair";

const materialStyles: Record<KcMaterialId, { background: string; sheen: boolean; grain: boolean; edge: string }> = {
  matte: { background: "linear-gradient(135deg, #8a6248, #6b4a35)", sheen: false, grain: false, edge: "rgba(61,43,31,0.4)" },
  wood: { background: "linear-gradient(135deg, #a67c5b, #6b4a35)", sheen: false, grain: true, edge: "rgba(81,56,37,0.5)" },
  gloss: { background: "linear-gradient(135deg, #513825, #26333f)", sheen: true, grain: false, edge: "rgba(255,255,255,0.5)" },
  laminate: { background: "linear-gradient(135deg, #eceef0, #b7bfc6)", sheen: false, grain: false, edge: "rgba(102,111,120,0.5)" },
};

export default function KcMaterialSwitcher() {
  const [activeId, setActiveId] = useState<KcMaterialId>(kcMaterials[0].id);
  const style = materialStyles[activeId];

  return (
    <section className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Surface finish</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The same cabinet, in different finishes.
          </h2>
        </div>

        <div role="tablist" aria-label="Cabinet material" className="mt-8 flex flex-wrap justify-center gap-2">
          {kcMaterials.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={activeId === m.id}
              onClick={() => setActiveId(m.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeId === m.id ? "border-ink-950 bg-ink-950 text-sand-50" : "border-walnut-900/15 text-ink-700 hover:border-walnut-600"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-xs justify-center rounded-sm border border-walnut-900/10 bg-gradient-to-b from-sand-50 to-sand-100 p-8">
          <div
            className="relative h-56 w-40 overflow-hidden rounded-sm shadow-md transition-[background] duration-500"
            style={{ background: style.background, border: `1px solid ${style.edge}`, filter: style.grain ? "url(#kc-wood-grain)" : undefined }}
          >
            {style.sheen && (
              <span
                className="absolute -inset-y-4 left-1/3 w-10 rotate-12"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
              />
            )}
            <span
              className="absolute right-3 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full"
              style={{ background: activeId === "laminate" ? "#4d545c" : "#eceef0" }}
            />
            <span className="absolute inset-2 rounded-sm" style={{ boxShadow: `inset 0 0 0 1px ${style.edge}` }} />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-500">
          Illustrative finish comparison — actual materials vary by cabinet and manufacturer.
        </p>
      </div>
    </section>
  );
}

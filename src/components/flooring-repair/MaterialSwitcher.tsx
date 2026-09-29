"use client";

import { useState } from "react";
import { flMaterials, type FlMaterialId } from "@/lib/flooring-repair";

const materialStyles: Record<FlMaterialId, { fill: string; grout: boolean; sheen: boolean; grain: boolean }> = {
  tile: { fill: "url(#fl-tile)", grout: true, sheen: false, grain: false },
  stone: { fill: "url(#fl-stone)", grout: false, sheen: false, grain: true },
  ceramic: { fill: "url(#fl-tile)", grout: true, sheen: true, grain: false },
  other: { fill: "#c4c0b4", grout: false, sheen: false, grain: false },
};

export default function MaterialSwitcher() {
  const [activeId, setActiveId] = useState<FlMaterialId>(flMaterials[0].id);
  const style = materialStyles[activeId];

  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Identify the surface</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The same floor, in different materials.
          </h2>
        </div>

        <div role="tablist" aria-label="Flooring material" className="mt-8 flex flex-wrap justify-center gap-2">
          {flMaterials.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={activeId === m.id}
              onClick={() => setActiveId(m.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeId === m.id ? "border-ink-950 bg-ink-950 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-xs overflow-hidden rounded-sm border border-concrete-900/10 bg-concrete-100 p-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="200" height="200" fill={style.fill} filter={style.grain ? "url(#fl-stone-noise)" : undefined} />
              {style.grout &&
                Array.from({ length: 4 }).map((_, i) => (
                  <g key={i}>
                    <line x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="200" stroke="#78746a" strokeWidth="1.6" opacity="0.6" />
                    <line x1="0" y1={(i + 1) * 40} x2="200" y2={(i + 1) * 40} stroke="#78746a" strokeWidth="1.6" opacity="0.6" />
                  </g>
                ))}
              {style.sheen && <rect x="0" y="0" width="200" height="200" fill="url(#fl-sheen)" opacity="0.45" style={{ mixBlendMode: "screen" }} />}
              <rect x="0" y="0" width="200" height="200" fill="none" stroke="#9c7752" strokeWidth={activeId === "other" ? 0 : 2} opacity="0.4" />
            </svg>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-500">
          Illustrative material comparison, to help identify the surface —
          not every material shown is installed as part of this service.
        </p>
      </div>
    </section>
  );
}

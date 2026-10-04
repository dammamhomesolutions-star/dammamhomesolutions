"use client";

import { useState } from "react";
import { shChange, shMaterials } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

const rows = [
  { k: "appearance", label: "Appearance" },
  { k: "deterioration", label: "Typical visible deterioration" },
  { k: "repair", label: "Repair considerations" },
  { k: "replace", label: "Replacement considerations" },
] as const;

// Cover material explorer + "repair vs changing the look".
export default function ShMaterials() {
  const [k, setK] = useState(shMaterials[0].key);
  const m = shMaterials.find((x) => x.key === k)!;

  return (
    <section id="materials" aria-labelledby="sh-mat" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="05">Cover material</Tag>
        <h2 id="sh-mat" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What is your shade covered with?</h2>
        <div className="mt-10 grid grid-cols-2 gap-2 lg:grid-cols-4" role="group" aria-label="Cover material">
          {shMaterials.map((x) => (
            <button key={x.key} type="button" aria-pressed={k === x.key} aria-controls="sh-mat-panel" onClick={() => setK(x.key)} className={`focus-ring flex flex-col border-2 text-left transition-colors ${k === x.key ? "border-copper-600" : "border-transparent hover:border-steel-300"}`}>
              <span aria-hidden="true" className="block h-20 w-full sm:h-24" style={{ background: x.swatch }} />
              <span className={`px-3 py-3 text-sm font-semibold leading-tight ${k === x.key ? "bg-steel-900 text-sand-50" : "bg-sand-50 text-ink-900"}`}>{x.label}</span>
            </button>
          ))}
        </div>
        <dl id="sh-mat-panel" aria-live="polite" className="mt-6 grid gap-px bg-steel-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((r) => (
            <div key={r.k} className="bg-sand-50 p-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper-700">{r.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-800">{m[r.k]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-ink-500">Swatches are illustrative. We don&rsquo;t quote lifespans — they depend on the product, installation and exposure.</p>

        <div className="mt-20">
          <h3 className="max-w-3xl font-serif text-2xl tracking-tight text-ink-950 sm:text-4xl">Repairing your existing shade vs changing its look</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">Some changes suit an existing frame, some don&rsquo;t. A heavier cover, a different shape or a new material may need frame changes — we&rsquo;ll say what&rsquo;s possible.</p>
          <ol className="mt-8 grid gap-px bg-steel-900/10 sm:grid-cols-2 lg:grid-cols-5">
            {shChange.map((c, n) => (
              <li key={c.label} className="bg-sand-50 p-5">
                <span className="font-mono text-[10px] text-steel-600">{String(n + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-semibold text-ink-950">{c.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

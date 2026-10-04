"use client";

import { useState } from "react";
import { rnMaterials } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Eyebrow } from "./RnUi";

const rows = [
  { k: "appearance", label: "Appearance" },
  { k: "maintenance", label: "Maintenance" },
  { k: "durability", label: "Durability" },
  { k: "suits", label: "Suitability" },
] as const;

// Material board: one slot per surface, a swatch per choice and a plain
// comparison of what each option is like to live with.
export default function RnMaterials() {
  const { materials, setMaterial } = usePlan();
  const [slotKey, setSlotKey] = useState(rnMaterials[0].key);
  const slot = rnMaterials.find((s) => s.key === slotKey)!;
  const chosen = materials[slot.key];

  return (
    <section id="materials" aria-labelledby="rn-materials" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="06">Material &amp; finish board</Eyebrow>
            <h2 id="rn-materials" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Choose the feel of the space</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            A board for inspiration and scope planning — not a final design. Final
            materials are chosen after we&rsquo;ve seen the room and its condition.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* the board */}
          <div className="lg:col-span-5">
            <div className="bg-sand-200 p-4 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-600">Material board</p>
              <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3" role="group" aria-label="Board slot">
                {rnMaterials.map((s) => {
                  const pick = s.options.find((o) => o.name === materials[s.key]);
                  const on = slotKey === s.key;
                  return (
                    <button key={s.key} type="button" aria-pressed={on} aria-controls="rn-mat-detail" onClick={() => setSlotKey(s.key)} className={`focus-ring flex flex-col text-left transition-transform ${on ? "-translate-y-1" : ""}`}>
                      <span aria-hidden="true" className={`block aspect-[3/4] w-full border shadow-sm ${on ? "border-ink-950" : "border-ink-950/10"}`} style={{ background: pick ? pick.swatch : "repeating-linear-gradient(45deg,#ebe4d6 0 6px,#f4f0e8 6px 12px)" }} />
                      <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500 sm:text-[10px]">{s.label}</span>
                      <span className="block truncate text-[11px] font-semibold text-ink-950 sm:text-xs">{pick ? pick.name : s.prompt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-500">Swatches are illustrative colours, not product samples.</p>
          </div>

          {/* options + comparison */}
          <div id="rn-mat-detail" className="lg:col-span-7" aria-live="polite">
            <h3 className="font-serif text-2xl text-ink-950">{slot.label} — {slot.prompt.toLowerCase()}</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label={`${slot.label} options`}>
              {slot.options.map((o) => (
                <button key={o.name} type="button" aria-pressed={chosen === o.name} onClick={() => setMaterial(slot.key, o.name)} className={`focus-ring flex items-center gap-3 border p-2.5 text-left text-sm transition-colors ${chosen === o.name ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                  <span aria-hidden="true" className="h-8 w-8 flex-none border border-ink-950/10" style={{ background: o.swatch }} />
                  <span className="leading-tight">{o.name}</span>
                </button>
              ))}
            </div>

            {/* comparison: cards on mobile, table from md */}
            <div className="mt-6 hidden overflow-hidden border border-ink-950/10 md:block">
              <table className="w-full table-fixed text-left text-sm">
                <caption className="sr-only">Comparison of {slot.label.toLowerCase()} options</caption>
                <thead>
                  <tr className="bg-sand-100">
                    <th scope="col" className="w-28 p-3 font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-ink-500"><span className="sr-only">Quality</span></th>
                    {slot.options.map((o) => (
                      <th key={o.name} scope="col" className={`p-3 font-serif text-base font-normal ${chosen === o.name ? "bg-walnut-100 text-ink-950" : "text-ink-900"}`}>{o.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-950/10">
                  {rows.map((r) => (
                    <tr key={r.k}>
                      <th scope="row" className="p-3 align-top font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-ink-500">{r.label}</th>
                      {slot.options.map((o) => (
                        <td key={o.name} className={`p-3 align-top text-[13px] leading-relaxed text-ink-700 ${chosen === o.name ? "bg-walnut-100/60" : ""}`}>{o[r.k]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-3 md:hidden">
              {slot.options.map((o) => (
                <div key={o.name} className={`border p-4 ${chosen === o.name ? "border-ink-950 bg-walnut-100/60" : "border-ink-950/10"}`}>
                  <p className="font-serif text-lg text-ink-950">{o.name}</p>
                  <dl className="mt-2 space-y-1.5 text-[13px]">
                    {rows.map((r) => (
                      <div key={r.k} className="grid grid-cols-[6.5rem_1fr] gap-2">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">{r.label}</dt>
                        <dd className="text-ink-700">{o[r.k]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-500">
              General characteristics only — performance depends on the specific
              product, the surface behind it and how the room is used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

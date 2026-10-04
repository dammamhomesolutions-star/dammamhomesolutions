"use client";

import { useState } from "react";
import { shFactors, shSpectrum } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Repair → partial replacement → refurbishment → full replacement assessment.
export default function ShDecision() {
  const [i, setI] = useState(0);

  return (
    <section id="repair-or-replace" aria-labelledby="sh-decision" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="04">Repair vs replace</Tag>
        <h2 id="sh-decision" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Does your shade need repair or replacement?</h2>

        <div className="mt-12">
          <div className="relative grid grid-cols-4" role="group" aria-label="Scale of work">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[26px] h-1 bg-gradient-to-r from-steel-300 via-copper-500 to-steel-900" />
            {shSpectrum.map((s, n) => (
              <button key={s.key} type="button" aria-pressed={i === n} aria-controls="sh-spec-panel" onClick={() => setI(n)} className="focus-ring relative flex flex-col items-center gap-3 px-1 pb-2 text-center">
                <span aria-hidden="true" className={`relative z-10 h-[56px] w-4 transition-colors [clip-path:polygon(50%_0,100%_100%,0_100%)] ${i === n ? "bg-copper-600" : "bg-steel-600"}`} />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-600">{s.tag}</span>
                <span className={`hidden text-xs font-semibold leading-tight sm:block sm:text-sm ${i === n ? "text-ink-950" : "text-ink-700"}`}>{s.label}</span>
              </button>
            ))}
          </div>
          <div id="sh-spec-panel" aria-live="polite" className="mt-6 border border-steel-900/15 bg-steel-100/50 p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-700">{shSpectrum[i].tag} · {shSpectrum[i].label}</p>
            <p className="mt-2 max-w-3xl font-serif text-xl leading-snug text-ink-950 sm:text-2xl">{shSpectrum[i].when}</p>
          </div>
          <ul className="sr-only">{shSpectrum.map((s) => <li key={s.key}>{s.tag} {s.label}: {s.when}</li>)}</ul>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-600">What decides it</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {shFactors.map((f) => <li key={f} className="border border-steel-900/15 px-3 py-1.5 text-sm text-ink-800">{f}</li>)}
          </ul>
          <p className="mt-4 text-sm text-ink-600">This guide can&rsquo;t tell you a structure is safe. Visible damage, movement or corrosion at the base needs a professional assessment.</p>
        </div>

        {/* Repair what matters */}
        <div className="mt-20 grid gap-px bg-steel-900/10 lg:grid-cols-12">
          <div className="bg-steel-900 p-6 text-sand-50 sm:p-10 lg:col-span-4">
            <h3 className="font-serif text-3xl leading-tight">Not every damaged shade needs to be replaced.</h3>
            <p className="mt-4 text-sm leading-relaxed text-steel-300">We&rsquo;ll tell you when a repair makes sense — and when it doesn&rsquo;t. Repairability is confirmed on assessment, never promised beforehand.</p>
          </div>
          <div className="bg-sand-50 p-6 sm:p-8 lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-700">Repair may be considered when</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-800">
              {["Damage is localised", "The structure remains suitable", "The cover or component can be repaired", "Connections can be properly addressed"].map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 flex-none bg-copper-600" />{x}</li>)}
            </ul>
          </div>
          <div className="bg-sand-50 p-6 sm:p-8 lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-700">Replacement may need consideration when</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-800">
              {["Damage is extensive", "Several components have deteriorated", "Repair is impractical", "The structure needs broader refurbishment", "Replacement parts aren't compatible"].map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 flex-none bg-steel-700" />{x}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

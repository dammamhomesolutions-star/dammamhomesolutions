"use client";

import { useState } from "react";
import { shCommercial, shResidential } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Residential pathways and commercial parking; both panels stay in the HTML.
export default function ShUses() {
  const [tab, setTab] = useState<"res" | "com">("res");
  const [res, setRes] = useState(shResidential[0].key);

  return (
    <section id="uses" aria-labelledby="sh-uses" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Tag n="10">Residential &amp; commercial</Tag>
            <h2 id="sh-uses" className="mt-5 max-w-2xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Where your shade works</h2>
          </div>
          <div className="inline-flex border border-steel-900/20 bg-sand-50" role="group" aria-label="Property type">
            {[{ k: "res" as const, l: "Residential" }, { k: "com" as const, l: "Commercial" }].map((o) => (
              <button key={o.k} type="button" aria-pressed={tab === o.k} aria-controls={`sh-uses-${o.k}`} onClick={() => setTab(o.k)} className={`focus-ring px-5 py-2.5 text-sm font-semibold transition-colors ${tab === o.k ? "bg-steel-900 text-sand-50" : "text-ink-700 hover:text-ink-950"}`}>{o.l}</button>
            ))}
          </div>
        </div>

        <div id="sh-uses-res" hidden={tab !== "res"}>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:overflow-visible" role="group" aria-label="Residential use">
              {shResidential.map((r) => (
                <button key={r.key} type="button" aria-pressed={res === r.key} onClick={() => setRes(r.key)} className={`focus-ring flex-none border-l-4 px-4 py-3 text-left text-sm font-semibold transition-colors ${res === r.key ? "border-copper-600 bg-sand-50 text-ink-950" : "border-transparent text-ink-700 hover:border-steel-300"}`}>{r.label}</button>
              ))}
            </div>
            <div className="lg:col-span-8" aria-live="polite">
              {shResidential.map((r) => (
                <div key={r.key} hidden={res !== r.key}>
                  <div className="border border-steel-900/10 bg-sand-50 p-6 sm:p-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-700">Residential</p>
                    <h3 className="mt-2 font-serif text-3xl text-ink-950">{r.label}</h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-700">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="sh-uses-com" hidden={tab !== "com"}>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-3xl text-ink-950">For larger parking areas</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {shCommercial.places.map((p) => <li key={p} className="border border-steel-900/15 bg-sand-50 px-3 py-1.5 text-sm text-ink-800">{p}</li>)}
              </ul>
            </div>
            <div className="grid gap-px bg-steel-900/10 sm:grid-cols-2 lg:col-span-8">
              {shCommercial.points.map((p) => (
                <div key={p.label} className="bg-sand-50 p-5">
                  <h4 className="font-semibold text-ink-950">{p.label}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.text}</p>
                </div>
              ))}
              <div className="bg-steel-900 p-5 text-sm leading-relaxed text-steel-300">Large new structures or significant structural work are planned with the appropriate engineering input.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

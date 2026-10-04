"use client";

import { useState } from "react";
import { shFaqs, type ShFaqCat } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

const cats: ShFaqCat[] = ["Cover", "Frame", "Repair", "Maintenance"];

// FAQ board: four category columns, all questions visible. Picking a
// category highlights its column (and on mobile, moves it to the top).
export default function ShFaq() {
  const [focus, setFocus] = useState<ShFaqCat | null>(null);

  return (
    <section id="faq" aria-labelledby="sh-faq" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Tag n="18">FAQ</Tag>
            <h2 id="sh-faq" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Frequently asked questions</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Highlight a category">
            {cats.map((c) => (
              <button key={c} type="button" aria-pressed={focus === c} onClick={() => setFocus(focus === c ? null : c)} className={`focus-ring border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${focus === c ? "border-copper-600 bg-copper-600 text-sand-50" : "border-steel-900/20 text-steel-900 hover:border-steel-900"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cats.map((c) => (
            <div key={c} className={`flex flex-col transition-opacity ${focus && focus !== c ? "opacity-50" : ""} ${focus === c ? "order-first md:order-none" : ""}`}>
              <p className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] ${focus === c ? "bg-copper-600 text-sand-50" : "bg-steel-900 text-sand-50"}`}>{c}</p>
              <div className="flex-1 space-y-px bg-steel-900/10">
                {shFaqs.filter((f) => f.cat === c).map((f) => (
                  <article key={f.q} className="bg-sand-50 p-4">
                    <h3 className="font-semibold leading-snug text-ink-950">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{f.a}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

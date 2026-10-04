"use client";

import { useState } from "react";
import { mdFaqs, type MdFaqCat } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

const cats: ("All" | MdFaqCat)[] = ["All", "Mold", "Dampness", "Treatment", "Cost"];

// Tabbed FAQ cards. "All" (default) shows every question, matching the schema.
export default function MdFaq() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");

  return (
    <section id="faq" aria-labelledby="md-faq" className="scroll-mt-20 border-t border-ink-900/10 bg-glass-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Spec code="S-20">FAQ</Spec>
            <h2 id="md-faq" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Frequently asked questions</h2>
          </div>
          <div className="flex flex-wrap gap-1 rounded-lg border border-ink-900/15 bg-sand-50 p-1" role="group" aria-label="FAQ category">
            {cats.map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`focus-ring rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${cat === c ? "bg-glass-900 text-sand-50" : "text-ink-700 hover:text-ink-950"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {mdFaqs.map((f) => (
            <div key={f.q} hidden={cat !== "All" && f.cat !== cat}>
              <article className="h-full rounded-xl border border-ink-900/10 bg-sand-50 p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">{f.cat}</p>
                <h3 className="mt-2 flex gap-2 font-semibold text-ink-950"><span aria-hidden="true" className="font-mono text-glass-600">Q</span>{f.q}</h3>
                <p className="mt-3 flex gap-2 text-sm leading-relaxed text-ink-700"><span aria-hidden="true" className="font-mono font-semibold text-glass-600">A</span><span>{f.a}</span></p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

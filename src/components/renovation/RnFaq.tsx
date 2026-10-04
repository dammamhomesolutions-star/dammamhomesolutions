"use client";

import { useState } from "react";
import { rnFaqs, type RnFaqCat } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

const cats: ("All" | RnFaqCat)[] = ["All", "Planning", "Scope", "Cost", "Process"];

// Editorial FAQ: category tabs filter an always-open list. With "All" (the
// default) every question is visible, matching the FAQ schema.
export default function RnFaq() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");

  return (
    <section id="faq" aria-labelledby="rn-faq" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <Eyebrow n="19">FAQ</Eyebrow>
            <h2 id="rn-faq" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Questions before the first conversation</h2>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="FAQ category">
              {cats.map((c) => (
                <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`focus-ring border-b-2 pb-1 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${cat === c ? "border-ink-950 text-ink-950" : "border-transparent text-ink-500 hover:text-ink-900"}`}>
                  {c}
                  <span className="ml-1 text-ink-400">{c === "All" ? rnFaqs.length : rnFaqs.filter((f) => f.cat === c).length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <ol className="lg:col-span-8">
          {rnFaqs.map((f, i) => (
            <li key={f.q} hidden={cat !== "All" && f.cat !== cat} className="grid [&[hidden]]:hidden gap-3 border-t border-ink-950/15 py-7 sm:grid-cols-[4rem_1fr]">
              <span className="font-serif text-3xl font-light text-walnut-600/70">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">{f.cat}</p>
                <h3 className="mt-1 font-serif text-2xl leading-snug text-ink-950">{f.q}</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-700">{f.a}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

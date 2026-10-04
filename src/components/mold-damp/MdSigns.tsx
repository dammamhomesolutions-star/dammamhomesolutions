"use client";

import { useState } from "react";
import { mdSigns } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Spec } from "./MdUi";

// Small, calm swatches — suggestions of each sign, not close-up photos.
const swatch: Record<string, string> = {
  growth: "radial-gradient(circle at 30% 60%,#2b2f33 0 3px,transparent 4px),radial-gradient(circle at 52% 70%,#4d545c 0 2px,transparent 3px),radial-gradient(circle at 40% 45%,#2b2f33 0 2px,transparent 3px),radial-gradient(circle at 62% 52%,#4d545c 0 2px,transparent 3px),#e4e1d8",
  patch: "radial-gradient(ellipse at 50% 55%,rgba(91,125,143,0.5),transparent 65%),#ebe4d6",
  peeling: "linear-gradient(160deg,transparent 45%,#d9bfa0 46% 60%,transparent 61%),repeating-linear-gradient(115deg,#ebe4d6 0 8px,#c4c0b4 8px 9px),#ebe4d6",
  bubbling: "radial-gradient(circle at 30% 40%,#faf8f4 0 6px,#c4c0b4 7px,transparent 8px),radial-gradient(circle at 62% 62%,#faf8f4 0 8px,#c4c0b4 9px,transparent 10px),#ebe4d6",
  odor: "repeating-radial-gradient(circle at 50% 120%,transparent 0 10px,rgba(91,125,143,0.25) 10px 11px),#eceef0",
  white: "radial-gradient(circle at 35% 60%,#faf8f4 0 5px,transparent 6px),radial-gradient(circle at 60% 40%,#faf8f4 0 4px,transparent 5px),radial-gradient(circle at 70% 70%,#faf8f4 0 3px,transparent 4px),#b7bfc6",
  recurring: "conic-gradient(from 0deg,#5b7d8f 0 70%,transparent 70%),#eceef0",
  unsure: "#eceef0",
};

export default function MdSigns() {
  const { signs, toggle } = useReport();
  const [sel, setSel] = useState(mdSigns[0].key);

  return (
    <section id="signs" aria-labelledby="md-signs" className="scroll-mt-20 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <Spec code="S-01">Visible signs</Spec>
        <h2 id="md-signs" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What are you seeing?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Choose the closest match. Each shows what it can point to and what
          should be checked — a starting point, not a remote diagnosis.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3" role="group" aria-label="What you are seeing">
          {mdSigns.map((s) => {
            const on = sel === s.key;
            const inReport = signs.includes(s.label);
            return (
              <button
                key={s.key}
                type="button"
                aria-pressed={on}
                aria-controls="md-sign-detail"
                onClick={() => setSel(s.key)}
                className={`focus-ring group relative flex flex-col gap-3 rounded-xl border p-3 text-left transition-all sm:p-4 ${on ? "border-glass-800 bg-glass-900 text-sand-50 shadow-lg" : "border-ink-900/10 bg-sand-50 text-ink-950 hover:border-glass-600"}`}
              >
                <span aria-hidden="true" className="block h-14 w-full rounded-md border border-ink-900/10 sm:h-16" style={{ background: swatch[s.key] }}>
                  {s.key === "unsure" && <span className="flex h-full items-center justify-center font-serif text-2xl text-glass-700">?</span>}
                </span>
                <span className="text-sm font-semibold leading-tight">{s.label}</span>
                <span className={`hidden text-xs leading-snug sm:block ${on ? "text-glass-200" : "text-ink-500"}`}>{s.line}</span>
                {inReport && <span className="absolute right-2 top-2 rounded-full bg-glass-600 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sand-50">In report</span>}
              </button>
            );
          })}
        </div>

        <div id="md-sign-detail" aria-live="polite" className="mt-6">
          {mdSigns.map((s) => (
            <div key={s.key} hidden={sel !== s.key}>
              <div className="relative rounded-2xl border border-glass-700/20 bg-glass-100 p-5 sm:p-8">
                <h3 className="font-serif text-2xl text-ink-950">{s.label}</h3>
                <ol className="mt-6 grid gap-6 md:grid-cols-3 md:gap-0">
                  {[
                    { k: "What you see", body: <p className="text-sm leading-relaxed text-ink-700">{s.see}</p> },
                    { k: "Possible considerations", body: <ul className="space-y-1.5 text-sm text-ink-700">{s.considerations.map((c) => <li key={c}>· {c}</li>)}</ul> },
                    { k: "What should be assessed", body: <ul className="space-y-1.5 text-sm text-ink-700">{s.assess.map((c) => <li key={c}>· {c}</li>)}</ul> },
                  ].map((col, i) => (
                    <li key={col.k} className={`relative md:px-6 ${i ? "md:border-l md:border-glass-700/20" : "md:pl-0"}`}>
                      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-glass-800 text-[10px] text-sand-50">{i + 1}</span>
                        {col.k}
                      </p>
                      <div className="mt-3">{col.body}</div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-glass-700/15 pt-5">
                  <p className="text-xs text-ink-500">Several conditions can look alike. An on-site check confirms what&rsquo;s actually happening.</p>
                  <button type="button" onClick={() => toggle("signs", s.label)} aria-pressed={signs.includes(s.label)} className={`focus-ring rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${signs.includes(s.label) ? "bg-glass-800 text-sand-50" : "border border-glass-800 text-glass-900 hover:bg-glass-200"}`}>
                    {signs.includes(s.label) ? "✓ Added to my report" : "+ Add to my report"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

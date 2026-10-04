"use client";

import { useState } from "react";
import { rnLayers } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Eyebrow } from "./RnUi";

// Exploded stack of renovation "layers"; a layer lights up when any of its
// items is selected.
function Stack({ lit }: { lit: boolean[] }) {
  return (
    <svg viewBox="0 0 320 300" className="h-auto w-full max-w-sm" aria-hidden="true">
      {rnLayers.map((l, i) => {
        const y = 30 + i * 52;
        const on = lit[i];
        return (
          <g key={l.key} className="transition-transform duration-500 motion-reduce:transition-none" style={{ transform: on ? "translateX(-8px)" : "none" }}>
            <path d={`M60 ${y + 20}L160 ${y - 10}L280 ${y + 20}L180 ${y + 50}Z`} fill={on ? "#a67c5b" : "#ebe4d6"} stroke="#14181f" strokeOpacity={on ? 0.8 : 0.25} />
            <text x="10" y={y + 26} fontSize="10" letterSpacing="1.5" className="font-mono" fill={on ? "#6b4a35" : "#8e97a8"}>{String(i + 1).padStart(2, "0")}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function RnScope() {
  const { work, toggleWork } = usePlan();
  const [custom, setCustom] = useState("");
  const lit = rnLayers.map((l) => l.items.some((it) => work.includes(it)));
  const customs = work.filter((w) => !rnLayers.some((l) => (l.items as readonly string[]).includes(w)));

  return (
    <section id="scope" aria-labelledby="rn-scope" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="05">Scope builder</Eyebrow>
        <h2 id="rn-scope" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">What are we changing?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          A renovation is built in layers — surfaces, fixtures, built-in elements and
          finishes. Select everything you think is involved; we&rsquo;ll confirm it
          on assessment.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24">
              <Stack lit={lit} />
              <ol className="mt-4 space-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                {rnLayers.map((l, i) => <li key={l.key} className={lit[i] ? "text-walnut-700" : ""}>{String(i + 1).padStart(2, "0")} {l.label}</li>)}
              </ol>
            </div>
          </div>

          <div className="space-y-px bg-ink-950/10 lg:col-span-5">
            {rnLayers.map((l, i) => (
              <fieldset key={l.key} className="bg-sand-50 p-5">
                <legend className="sr-only">{l.label}</legend>
                <p aria-hidden="true" className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-xl text-ink-950">{l.label}</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {l.items.map((it) => {
                    const on = work.includes(it);
                    return (
                      <label key={it} className={`cursor-pointer select-none border px-3 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2 ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/15 text-ink-800 hover:border-ink-950/50"}`}>
                        <input type="checkbox" checked={on} onChange={() => toggleWork(it)} className="sr-only" />
                        {it}
                      </label>
                    );
                  })}
                </div>
                {l.key === "other" && (
                  <form
                    className="mt-4 flex gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const v = custom.trim();
                      if (v && !work.includes(v)) toggleWork(v);
                      setCustom("");
                    }}
                  >
                    <label htmlFor="rn-custom" className="sr-only">Add something else to the scope</label>
                    <input id="rn-custom" value={custom} onChange={(e) => setCustom(e.target.value)} maxLength={80} placeholder="Something else, e.g. majlis feature wall" className="focus-ring min-w-0 flex-1 border border-ink-950/15 bg-sand-50 px-3 py-2 text-sm placeholder:text-ink-400" />
                    <button type="submit" className="focus-ring border border-ink-950 px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-ink-950 hover:text-sand-50">Add</button>
                  </form>
                )}
              </fieldset>
            ))}
          </div>

          <aside aria-label="Selected work" className="lg:col-span-3">
            <div className="sticky top-24 border border-ink-950/15 bg-sand-50 p-5" aria-live="polite">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">Selected work</p>
              <p className="mt-1 font-serif text-4xl text-ink-950">{work.length}</p>
              {work.length ? (
                <ul className="mt-4 space-y-1.5 text-sm text-ink-800">
                  {work.map((w) => (
                    <li key={w} className="flex items-start justify-between gap-2">
                      <span>{w}{customs.includes(w) && <span className="ml-1 text-xs text-ink-500">(custom)</span>}</span>
                      <button type="button" onClick={() => toggleWork(w)} className="focus-ring px-1 text-ink-400 hover:text-rust-700" aria-label={`Remove ${w}`}>×</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-ink-500">Nothing selected yet.</p>
              )}
              <p className="mt-5 border-t border-ink-950/10 pt-4 text-xs leading-relaxed text-ink-500">This list goes into your renovation request. No pricing is shown.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

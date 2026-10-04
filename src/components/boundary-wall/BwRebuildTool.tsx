"use client";

import { useState } from "react";
import { bwRebuildInputs, bwRebuildResults } from "@/lib/boundary-wall";
import BwCtas from "./BwCtas";
import BwIcon from "./BwIcon";

export default function BwRebuildTool() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (l: string) => setPicked((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const level = Math.max(-1, ...bwRebuildInputs.filter((i) => picked.includes(i.label)).map((i) => i.level));
  const r = level >= 0 ? bwRebuildResults[level] : null;

  return (
    <section id="repair-or-rebuild" aria-labelledby="bw-rebuild" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Decision helper</p>
          <h2 id="bw-rebuild" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does the wall need repair or rebuilding?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="text-base font-semibold text-ink-950">What applies to your wall?</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {bwRebuildInputs.map((i) => {
                const on = picked.includes(i.label);
                return (
                  <label key={i.label} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${on ? "border-clay-700 bg-sand-50" : "border-ink-900/10 bg-sand-50/60 hover:border-clay-600"}`}>
                    <input type="checkbox" checked={on} onChange={() => toggle(i.label)} className="h-4 w-4 accent-clay-700" />
                    <span className="font-medium text-ink-900">{i.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {r ? (
                <div key={level} className="animate-fadeIn">
                  <BwIcon name={level === 2 ? "rebuild" : level === 1 ? "search" : "plaster"} className="h-7 w-7 text-clay-300" />
                  <p className="mt-3 font-serif text-2xl leading-snug">{r.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{r.body}</p>
                  <BwCtas tone="dark" className="mt-6" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Tick what applies to see which way it leans.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">This tool can&rsquo;t determine structural safety — that needs an on-site assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { bwCollect, bwGroups } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const serious = ["Wide", "Recurring", "Horizontal", "Leaning", "Displaced section", "Loose masonry"];

// Collects what the user sees and turns it into a photo / information list.
export default function BwSelector() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (l: string) => setPicked((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const flag = picked.some((p) => serious.includes(p));

  return (
    <section id="damage-type" aria-labelledby="bw-sel" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Damage selector</p>
          <h2 id="bw-sel" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What type of wall damage are you seeing?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {bwGroups.map((g) => (
              <fieldset key={g.group}>
                <legend className="text-base font-semibold text-ink-950">{g.group}</legend>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((it) => {
                    const key = it;
                    const on = picked.includes(key);
                    return (
                      <label key={`${g.group}-${it}`} className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${on ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-clay-600"}`}>
                        <input type="checkbox" checked={on} onChange={() => toggle(key)} className="sr-only" />
                        {on ? "✓ " : ""}{it}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {picked.length ? (
                <div key={picked.join()} className="animate-fadeIn">
                  {flag && (
                    <p className="mb-4 flex gap-2 rounded-lg bg-rust-700/30 p-3 text-sm text-sand-50">
                      <BwIcon name="alert" className="mt-0.5 h-4 w-4 flex-none" />
                      Some of what you&rsquo;ve picked can point to movement — keep clear of the wall and arrange an on-site assessment.
                    </p>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-300">Information to collect</p>
                  <ul className="mt-3 space-y-2">
                    {picked.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-ink-300"><span className="font-semibold text-sand-50">{p}: </span>{bwCollect[p]}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-ink-300">Tick what you see to get a list of what to photograph and note.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                This helps identify what information to collect, but a visual
                selector can&rsquo;t confirm the cause or structural condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

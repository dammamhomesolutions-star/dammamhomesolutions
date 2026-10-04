"use client";

import Link from "next/link";
import { useState } from "react";
import { rnConditions, rnPaths } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

type PathKey = keyof typeof rnPaths;

// Repair, renovate, replace — or assess first. The answer depends on what's
// actually wrong; renovation isn't recommended by default.
function recommend(sel: string[]): PathKey[] {
  if (!sel.length) return [];
  const out = new Set<PathKey>();
  if (sel.includes("moisture")) out.add("assess");
  if (sel.includes("damaged") && sel.length <= 2) out.add("repair");
  if (sel.includes("damaged") && sel.includes("difficult")) out.add("replacement");
  if (sel.includes("outdated") || sel.includes("missing") || sel.length >= 3) out.add("renovation");
  if (sel.length === 1 && sel[0] === "difficult") out.add("renovation");
  return [...out];
}

export default function RnRepair() {
  const [sel, setSel] = useState<string[]>([]);
  const rec = recommend(sel);
  const toggle = (k: string) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));

  return (
    <section id="repair-or-renovate" aria-labelledby="rn-repair" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="08">Renovate or repair?</Eyebrow>
        <h2 id="rn-repair" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Not every problem needs a renovation.</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <fieldset className="lg:col-span-4">
            <legend className="font-serif text-xl text-ink-950">Is the space mainly…</legend>
            <p className="mt-1 text-sm text-ink-500">Choose all that apply.</p>
            <div className="mt-5 space-y-2">
              {rnConditions.map((c) => {
                const on = sel.includes(c.key);
                return (
                  <label key={c.key} className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2 ${on ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                    <input type="checkbox" checked={on} onChange={() => toggle(c.key)} className="sr-only" />
                    <span aria-hidden="true" className={`flex h-4 w-4 flex-none items-center justify-center border ${on ? "border-ember-500 bg-ember-500" : "border-ink-950/30"}`}>
                      {on && <span className="h-1.5 w-1.5 bg-ink-950" />}
                    </span>
                    {c.label}?
                  </label>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-ink-500">Several at once counts as a combination — that&rsquo;s common.</p>
          </fieldset>

          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500" aria-live="polite">
              {rec.length ? `Suggested: ${rec.map((k) => rnPaths[k].label).join(" · ")}` : "Make a selection to see a suggestion"}
            </p>
            <div className="mt-4 grid gap-px bg-ink-950/10 sm:grid-cols-2">
              {(Object.keys(rnPaths) as PathKey[]).map((k) => {
                const p = rnPaths[k];
                const on = rec.includes(k);
                const dim = rec.length > 0 && !on;
                return (
                  <article key={k} className={`p-6 transition-colors ${on ? "bg-walnut-100" : "bg-sand-50"} ${dim ? "opacity-55" : ""}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-ink-950">{p.label}</h3>
                      {on && <span className="bg-ink-950 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sand-50">Suggested</span>}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700"><span className="font-semibold text-ink-950">When: </span>{p.when}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700"><span className="font-semibold text-ink-950">Next: </span>{p.next}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              Only repairs needed? See{" "}
              <Link href="/general-home-repairs/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-walnut-600 underline-offset-4">general home repairs</Link>
              . Damp or leaks behind the surface?{" "}
              <Link href="/water-leak-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-walnut-600 underline-offset-4">Water leak detection and repair</Link>{" "}
              comes before new finishes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

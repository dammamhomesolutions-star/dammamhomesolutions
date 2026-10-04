"use client";

import { useState } from "react";
import { spParts, type SpIconName, type SpPart } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

const icons: Record<SpPart, SpIconName> = { pool: "pool", skimmer: "skimmer", pump: "pump", filter: "filter", heater: "heater", chlorinator: "chlorinator", return: "circulation", lights: "light", controls: "control" };
const loop: SpPart[] = ["pool", "skimmer", "pump", "filter", "heater", "chlorinator", "return"];

// The circulation loop as a chain of nodes; optional equipment can be hidden.
export default function SpSystem() {
  const [part, setPart] = useState<SpPart>("pump");
  const [extras, setExtras] = useState(true);
  const visible = loop.filter((k) => extras || !spParts.find((p) => p.key === k)?.optional);
  const p = spParts.find((x) => x.key === part)!;

  return (
    <section id="pool-system" aria-labelledby="sp-system" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">How it works</p>
            <h2 id="sp-system" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Your pool is a system</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">Water leaves the pool, gets filtered and treated, and comes back. A problem in one part shows up somewhere else.</p>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-300">
            <input type="checkbox" checked={extras} onChange={() => setExtras(!extras)} className="h-4 w-4 accent-teal-300" />
            Show optional equipment
          </label>
        </div>

        <ol className="mt-10 flex flex-wrap items-center gap-2" aria-label="Circulation loop">
          {visible.map((k, i) => {
            const meta = spParts.find((x) => x.key === k)!;
            return (
              <li key={k} className="flex items-center gap-2">
                <button
                  type="button"
                  aria-pressed={part === k}
                  onClick={() => setPart(k)}
                  className={`focus-ring flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${part === k ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/15 bg-ink-900 text-sand-50 hover:border-teal-300/60"} ${meta.optional ? "border-dashed" : ""}`}
                >
                  <SpIcon name={icons[k]} className="h-5 w-5" />
                  {meta.label}
                </button>
                {i < visible.length - 1 && (
                  <svg viewBox="0 0 40 10" className="h-3 w-8 flex-none" aria-hidden="true">
                    <path className="fs-flow" d="M0 5h34" stroke="#8fc4c4" strokeWidth="2" />
                    <path d="M32 1l6 4-6 4" fill="none" stroke="#8fc4c4" strokeWidth="2" />
                  </svg>
                )}
              </li>
            );
          })}
          <li className="flex items-center gap-2 text-sm text-ink-400" aria-hidden="true">↺ back to the pool</li>
        </ol>
        {extras && (
          <div className="mt-4 flex flex-wrap gap-2">
            {(["lights", "controls"] as SpPart[]).map((k) => (
              <button key={k} type="button" aria-pressed={part === k} onClick={() => setPart(k)} className={`focus-ring flex items-center gap-2 rounded-2xl border border-dashed px-4 py-2.5 text-sm transition-colors ${part === k ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-teal-300/60"}`}>
                <SpIcon name={icons[k]} className="h-5 w-5" />
                {spParts.find((x) => x.key === k)!.label}
              </button>
            ))}
          </div>
        )}
        <div key={part} className="mt-8 max-w-2xl animate-fadeIn rounded-3xl bg-gradient-to-r from-teal-900 to-ink-900 p-6" aria-live="polite">
          <p className="flex items-center gap-2 font-serif text-2xl"><SpIcon name={icons[part]} className="h-6 w-6 text-teal-300" />{p.label}{p.optional && <span className="ml-1 rounded-full bg-sand-100/10 px-2 py-0.5 font-sans text-[11px] uppercase tracking-[0.12em] text-ink-300">If fitted</span>}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-300">{p.body}</p>
        </div>
        <p className="mt-3 text-xs text-ink-400">Dashed parts aren&rsquo;t on every pool. We service heaters, chlorinators and automation where fitted.</p>
      </div>
    </section>
  );
}

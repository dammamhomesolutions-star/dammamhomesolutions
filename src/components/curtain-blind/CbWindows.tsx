"use client";

import { useState } from "react";
import { cbWindows } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

export default function CbWindows() {
  const [win, setWin] = useState(cbWindows[0].label);
  const w = cbWindows.find((x) => x.label === win)!;

  return (
    <section id="window-types" aria-labelledby="cb-win" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-clay-700">Window type</p>
          <h2 id="cb-win" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What kind of window do you have?</h2>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Window type">
            {cbWindows.map((x) => (
              <button
                key={x.label}
                type="button"
                aria-pressed={win === x.label}
                onClick={() => setWin(x.label)}
                className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  win === x.label ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-clay-600"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div key={win} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8" aria-live="polite">
            <CbIcon name={win === "Sliding door" ? "slider" : "window"} className="h-7 w-7 text-clay-300" />
            <h3 className="mt-3 font-serif text-2xl">{w.label}</h3>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">Consider</p>
            <ul className="mt-2 space-y-1.5">
              {w.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-300"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

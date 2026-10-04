"use client";

import { useState } from "react";
import { mgSpots } from "@/lib/marble-granite";
import MgSlab from "./MgSlab";

// Clickable spots on an illustrated slab. Every spot is a real button, and the
// same information is listed below for anyone not using the picture.
export default function MgVisualizer() {
  const [key, setKey] = useState(mgSpots[0].key);
  const s = mgSpots.find((x) => x.key === key)!;

  return (
    <section id="what-are-you-seeing" aria-labelledby="mg-vis" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-700">Visual guide</p>
          <h2 id="mg-vis" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What are you seeing?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Tap a marker on the slab to see what it may mean.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-[400/260] overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
              <MgSlab uid="vis" />
              {/* painted-on conditions */}
              <div aria-hidden="true" className="absolute left-[8%] top-[18%] h-[26%] w-[30%] rounded-full bg-concrete-500/30 blur-md" />
              <div aria-hidden="true" className="absolute left-[60%] top-[20%] h-px w-[18%] rotate-[-18deg] bg-concrete-800" />
              <div aria-hidden="true" className="absolute left-[40%] top-[52%] h-[12%] w-[12%] rounded-full bg-white/50 ring-1 ring-concrete-500/40" />
              <div aria-hidden="true" className="absolute left-[76%] top-[56%] h-[14%] w-[9%] rounded-full bg-[#a87d4a]/45 blur-[2px]" />
              <div aria-hidden="true" className="absolute bottom-0 left-[35%] h-[30%] w-[30%] bg-concrete-500/25 blur-sm" />
              {mgSpots.map((p, n) => (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={key === p.key}
                  aria-label={p.label}
                  onClick={() => setKey(p.key)}
                  className={`focus-ring absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-md transition-transform hover:scale-110 ${
                    key === p.key ? "scale-110 bg-ink-950 text-sand-50 ring-4 ring-sand-50" : "bg-sand-50 text-ink-950 ring-1 ring-ink-900/20"
                  }`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {n + 1}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-500">Illustration — markers are numbered to match the list.</p>
          </div>
          <div className="lg:col-span-5">
            <div key={key} className="animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50" aria-live="polite">
              <p className="font-serif text-2xl">{s.label}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-concrete-300">May indicate</dt><dd className="mt-0.5 text-ink-300">{s.means}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-concrete-300">Treatment to consider</dt><dd className="mt-0.5 text-ink-300">{s.treat}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-concrete-300">To confirm, send</dt><dd className="mt-0.5 text-ink-300">{s.need}</dd></div>
              </dl>
            </div>
            <ol className="mt-4 grid grid-cols-2 gap-1.5 text-sm">
              {mgSpots.map((p, n) => (
                <li key={p.key}>
                  <button type="button" onClick={() => setKey(p.key)} className={`focus-ring w-full rounded-lg px-2.5 py-1.5 text-left transition-colors ${key === p.key ? "bg-concrete-100 font-semibold text-ink-950" : "text-ink-700 hover:bg-concrete-100/60"}`}>
                    {n + 1}. {p.label}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

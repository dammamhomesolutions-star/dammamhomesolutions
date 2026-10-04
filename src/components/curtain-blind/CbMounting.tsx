"use client";

import { useState } from "react";
import { cbInside, cbMounts, cbOutside, type CbMount } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

const ink = "#4a3626";
const hi = "#b3652f";

// Elevation of a window in a wall, showing where the hardware and covering go
// for each mounting position.
function WindowDiagram({ mount }: { mount: CbMount }) {
  return (
    <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-labelledby="cb-mount-title">
      <title id="cb-mount-title">{`Window diagram showing ${mount} mounting: the wall, ceiling, window recess, sill, bracket and covering`}</title>
      <rect width="400" height="300" fill="#f2e6d5" />
      {/* ceiling */}
      <rect width="400" height="22" fill="#d9bfa0" />
      <text x="10" y="15" fontFamily="ui-monospace, monospace" fontSize="10" fill={ink}>CEILING</text>
      {/* recess */}
      <rect x="120" y="80" width="160" height="150" fill="#cdb69b" />
      <rect x="132" y="92" width="136" height="126" fill="#e3eef7" stroke={ink} strokeWidth="2.5" />
      <path d="M200 92v126" stroke={ink} strokeWidth="2" />
      <rect x="112" y="230" width="176" height="10" fill="#b8916c" />
      <text x="292" y="244" fontFamily="ui-monospace, monospace" fontSize="10" fill={ink}>SILL</text>
      <text x="10" y="160" fontFamily="ui-monospace, monospace" fontSize="10" fill={ink}>WALL</text>
      {/* handle */}
      <rect x="206" y="148" width="5" height="18" rx="2" fill={ink} />

      <g key={mount} className="animate-fadeIn">
        {mount === "inside" && (
          <>
            <rect x="122" y="82" width="156" height="10" rx="3" fill={hi} />
            <rect x="124" y="92" width="152" height="70" fill="#9c7752" opacity="0.85" />
            <text x="138" y="74" fontFamily="ui-monospace, monospace" fontSize="10" fill={hi}>BRACKET IN RECESS</text>
            <path d="M120 175h-14M280 175h14" stroke={hi} strokeWidth="1.5" />
            <text x="36" y="196" fontFamily="ui-monospace, monospace" fontSize="10" fill={hi}>EDGE GAPS</text>
          </>
        )}
        {mount === "outside" && (
          <>
            <rect x="90" y="56" width="220" height="10" rx="3" fill={hi} />
            <rect x="94" y="66" width="212" height="120" fill="#9c7752" opacity="0.85" />
            <text x="110" y="48" fontFamily="ui-monospace, monospace" fontSize="10" fill={hi}>BRACKET ON WALL, OVERLAP</text>
          </>
        )}
        {mount === "ceiling" && (
          <>
            <rect x="60" y="22" width="280" height="7" rx="2" fill={hi} />
            <path d="M66 29h46c-6 80-6 180 2 262H60c6-90 6-180 6-262zM288 29h46c0 82 0 172 6 262h-54c8-82 8-182 2-262z" fill="#9c7752" opacity="0.9" />
            <text x="130" y="44" fontFamily="ui-monospace, monospace" fontSize="10" fill={hi}>TRACK ON CEILING</text>
            <path d="M120 268h-6M286 268h-6" stroke={ink} strokeWidth="2" />
            <text x="148" y="284" fontFamily="ui-monospace, monospace" fontSize="10" fill={ink}>← STACK-BACK →</text>
          </>
        )}
      </g>
    </svg>
  );
}

export default function CbMounting() {
  const [mount, setMount] = useState<CbMount>("inside");
  const m = cbMounts.find((x) => x.key === mount)!;

  return (
    <section id="mounting" aria-labelledby="cb-mount" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Mounting position</p>
          <h2 id="cb-mount" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Should it sit inside or outside the window?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10 lg:col-span-7">
            <WindowDiagram mount={mount} />
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="Mounting position">
              {cbMounts.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={mount === x.key}
                  onClick={() => setMount(x.key)}
                  className={`focus-ring rounded-xl border px-2 py-3 text-sm font-semibold transition-colors ${
                    mount === x.key ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-clay-600"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <p key={mount} className="mt-5 animate-fadeIn text-[15px] leading-relaxed text-ink-700" aria-live="polite">
              <span className="font-semibold text-ink-950">{m.label}: </span>
              {m.body}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[{ t: "Inside mount", d: cbInside }, { t: "Outside mount", d: cbOutside }].map((x, i) => (
            <div key={x.t} className={`rounded-2xl p-6 ${i ? "bg-ink-950 text-sand-50" : "bg-clay-100/60"}`}>
              <h3 className={`font-serif text-2xl ${i ? "" : "text-ink-950"}`}>{x.t}</h3>
              <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.12em] ${i ? "text-clay-300" : "text-clay-700"}`}>Can work well for</p>
              <ul className={`mt-2 space-y-1 text-sm ${i ? "text-sand-100" : "text-ink-800"}`}>
                {x.d.pros.map((p) => <li key={p} className="flex gap-2"><CbIcon name="check" className={`mt-0.5 h-4 w-4 flex-none ${i ? "text-clay-300" : "text-clay-700"}`} />{p}</li>)}
              </ul>
              <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.12em] ${i ? "text-clay-300" : "text-clay-700"}`}>Consider</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {x.d.consider.map((c) => <li key={c} className={`rounded-full px-2.5 py-1 text-xs ${i ? "bg-sand-100/10 text-sand-100" : "bg-sand-50 text-ink-800"}`}>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 p-6">
            <CbIcon name="bracket" className="h-7 w-7 text-clay-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Wall mount</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Depends on the wall construction, window position, curtain height, nearby furniture and how windows and doors open.</p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6">
            <CbIcon name="ceiling" className="h-7 w-7 text-clay-700" />
            <h3 className="mt-3 font-serif text-2xl text-ink-950">Ceiling mount</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Depends on the ceiling construction (concrete or gypsum), the fixing area available, the curtain drop and weight, and the track design. We fix ceiling tracks into both.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

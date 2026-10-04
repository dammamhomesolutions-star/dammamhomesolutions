"use client";

import { useState } from "react";
import { scZones, type ScZoneKey } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

const HI = "#26333f";
const ON = "rgba(91,125,143,0.35)";

// Signature visual: a sofa (left) and a carpet (right), each split into
// clickable zones. The chips are the keyboard-accessible control.
export default function ScMap() {
  const [zone, setZone] = useState<ScZoneKey>("armrest");
  const z = scZones.find((x) => x.key === zone)!;
  const on = (k: ScZoneKey) => zone === k;
  const fill = (k: ScZoneKey, base: string) => (on(k) ? ON : base);
  const stroke = (k: ScZoneKey) => (on(k) ? HI : "#5b7d8f");
  const sw = (k: ScZoneKey) => (on(k) ? 3 : 1.5);
  const pick = (k: ScZoneKey) => () => setZone(k);

  return (
    <section id="sofa-carpet-map" aria-labelledby="sc-map" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-glass-700">Where the dirt builds up</p>
            <h2 id="sc-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Explore your sofa and carpet
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Different parts of the same sofa or carpet get dirty in different
            ways. Tap an area to see the usual issue and how it&rsquo;s
            handled.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-3 sm:p-5 lg:col-span-8">
            <svg viewBox="0 0 680 300" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {/* SOFA */}
              <g className="cursor-pointer" strokeLinejoin="round">
                <path d="M60 160V80a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16v80z" fill={fill("backrest", "#b8ccd4")} stroke={stroke("backrest")} strokeWidth={sw("backrest")} onClick={pick("backrest")} />
                <path d="M80 170h100v40H80zM180 170h100v40H180z" fill={fill("seat", "#d7e4ea")} stroke={stroke("seat")} strokeWidth={sw("seat")} onClick={pick("seat")} />
                <path d="M84 96h92v62H84zM184 96h92v62h-92z" fill={fill("cushion", "#d7e4ea")} stroke={stroke("cushion")} strokeWidth={sw("cushion")} onClick={pick("cushion")} />
                <path d="M40 230v-90a20 20 0 0 1 40 0v90zM280 230v-90a20 20 0 0 1 40 0v90z" fill={fill("armrest", "#b8ccd4")} stroke={stroke("armrest")} strokeWidth={sw("armrest")} onClick={pick("armrest")} />
                <path d="M40 210h280v26H40z" fill={fill("base", "#7fa0b0")} stroke={stroke("base")} strokeWidth={sw("base")} onClick={pick("base")} />
                <path d="M56 236v14M304 236v14" stroke="#5c584f" strokeWidth="6" strokeLinecap="round" pointerEvents="none" />
              </g>

              {/* CARPET (top-down) */}
              <g className="cursor-pointer">
                <rect x="380" y="40" width="270" height="220" rx="4" fill={fill("edges", "#ebe4d6")} stroke={stroke("edges")} strokeWidth={sw("edges")} onClick={pick("edges")} />
                <rect x="400" y="60" width="230" height="180" fill={fill("center", "#f4f0e8")} stroke="#c4c0b4" strokeDasharray="5 4" onClick={pick("center")} />
                <path d="M400 210c60-30 130-40 230-80v40c-90 40-170 50-230 80z" fill={fill("traffic", "#d9cfba")} stroke={stroke("traffic")} strokeWidth={sw("traffic")} onClick={pick("traffic")} />
                <path d="M600 60h30v30h-30z" fill={fill("corner", "#e0d4bd")} stroke={stroke("corner")} strokeWidth={sw("corner")} onClick={pick("corner")} />
                <circle cx="614" cy="74" r="6" fill="#a67c5b" opacity="0.6" pointerEvents="none" />
                <rect x="430" y="80" width="110" height="60" rx="4" fill={fill("underFurniture", "#eae7de")} stroke={stroke("underFurniture")} strokeWidth={sw("underFurniture")} strokeDasharray="6 4" onClick={pick("underFurniture")} />
                <g fill="#c4c0b4" pointerEvents="none">
                  <circle cx="440" cy="90" r="4" /><circle cx="530" cy="90" r="4" /><circle cx="440" cy="130" r="4" /><circle cx="530" cy="130" r="4" />
                </g>
              </g>

              <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.4" fill="#3d5a6b" pointerEvents="none">
                <text x="160" y="280" textAnchor="middle">SOFA</text>
                <text x="515" y="280" textAnchor="middle">CARPET (TOP VIEW)</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Illustrative — tap an area</p>
          </div>

          <div className="lg:col-span-4">
            {(["sofa", "carpet"] as const).map((item) => (
              <div key={item} className="mb-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  <ScIcon name={item} className="h-4 w-4" />
                  {item}
                </p>
                <div role="radiogroup" aria-label={`${item} area`} className="flex flex-wrap gap-2">
                  {scZones
                    .filter((x) => x.item === item)
                    .map((x) => (
                      <button
                        key={x.key}
                        type="button"
                        role="radio"
                        aria-checked={on(x.key)}
                        onClick={pick(x.key)}
                        className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition-colors ${
                          on(x.key) ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                        }`}
                      >
                        {x.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}

            <div key={z.key} className="mt-4 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{z.label}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Common issue</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{z.issue}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Cleaning consideration</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{z.consideration}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Recommended next step</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{z.next}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { cvZones, type CvZone } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const shapes: Record<CvZone, { d: string; lx: number; ly: number }> = {
  perimeter: { d: "M24 24h352v34H24z", lx: 200, ly: 45 },
  side: { d: "M318 110h22v44h-22z", lx: 352, ly: 104 },
  interior: { d: "M206 150h44v28h-44z", lx: 228, ly: 145 },
  door: { d: "M214 182h28v14h-28z", lx: 228, ly: 210 },
  driveway: { d: "M60 150h70v126H60z", lx: 95, ly: 170 },
  parking: { d: "M140 222h70v54h-70z", lx: 175, ly: 252 },
  gate: { d: "M56 270h78v14H56z", lx: 95, ly: 300 },
  common: { d: "M344 70h32v206h-32z", lx: 360, ly: 66 },
};

// Top-down villa plan. Buttons drive it for keyboard users; the plan is clickable too.
export default function CvMap() {
  const [zone, setZone] = useState<CvZone>("gate");
  const active = cvZones.find((z) => z.key === zone)!;

  return (
    <section id="property-map" aria-labelledby="cv-map" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Property security map</p>
          <h2 id="cv-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where might cameras and intercoms go?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Pick an area to see what it may need. Not every area needs a
            camera — the plan depends on access points and what you want to
            know.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 sm:p-6 lg:col-span-7">
            <svg viewBox="0 0 400 320" className="h-auto w-full" role="img" aria-labelledby="cv-map-title">
              <title id="cv-map-title">{`Top-down plan of a villa plot with the ${active.label.toLowerCase()} highlighted`}</title>
              <rect x="20" y="20" width="360" height="264" fill="#eaeee0" stroke="#4b5a3f" strokeWidth="3" />
              <rect x="150" y="70" width="180" height="112" fill="#faf8f4" stroke="#2c3524" strokeWidth="2" />
              <text x="240" y="118" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4b5a3f">HOUSE</text>
              <path d="M0 296h400" stroke="#9a968a" strokeWidth="18" opacity="0.3" />
              {(Object.keys(shapes) as CvZone[]).map((k) => {
                const on = zone === k;
                return (
                  <g key={k} onClick={() => setZone(k)} className="cursor-pointer">
                    <path d={shapes[k].d} fill={on ? "#5f7050" : "#79895f"} opacity={on ? 0.85 : 0.25} stroke={on ? "#2c3524" : "none"} strokeWidth="1.5" />
                    <circle cx={shapes[k].lx} cy={shapes[k].ly - 4} r={on ? 5 : 3} fill={on ? "#c76a3f" : "#4b5a3f"} className={on ? "cv-pulse" : undefined} />
                  </g>
                );
              })}
              <text x="24" y="314" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4b5a3f">STREET</text>
              <text x="378" y="314" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="13" fontWeight="600" fill="#a34a28">{`● ${active.label.toUpperCase()}`}</text>
            </svg>
            <p className="mt-2 text-center text-xs text-ink-500">Selected area shown solid with an orange marker</p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-ink-950" id="cv-map-areas">Choose an area</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="cv-map-areas">
              {cvZones.map((z) => (
                <button
                  key={z.key}
                  type="button"
                  aria-pressed={zone === z.key}
                  onClick={() => setZone(z.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    zone === z.key ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-moss-600"
                  }`}
                >
                  {z.label}
                </button>
              ))}
            </div>
            <div key={zone} className="mt-5 animate-fadeIn rounded-2xl bg-ink-950 p-6 text-sand-50" aria-live="polite">
              <h3 className="font-serif text-2xl">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{active.note}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">Possible needs</p>
              <ul className="mt-2 space-y-1.5">
                {active.needs.map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-sand-100">
                    <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-200" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

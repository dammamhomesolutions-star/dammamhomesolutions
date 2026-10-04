"use client";

import { useState } from "react";
import { pcPests, pcZones, type PcZoneKey } from "@/lib/pest-control";
import PcIcon from "./PcIcon";

const HI = "#4b5a3f";

// Zone rectangles on the property drawing (viewBox 0 0 640 400).
const zoneRects: Record<PcZoneKey, { x: number; y: number; w: number; h: number }> = {
  roof: { x: 90, y: 64, w: 340, h: 26 },
  bedroom: { x: 90, y: 90, w: 170, h: 110 },
  bathroom: { x: 260, y: 90, w: 170, h: 110 },
  kitchen: { x: 90, y: 200, w: 170, h: 130 },
  living: { x: 260, y: 200, w: 170, h: 130 },
  garage: { x: 430, y: 220, w: 110, h: 110 },
  storage: { x: 430, y: 150, w: 110, h: 70 },
  garden: { x: 20, y: 330, w: 290, h: 50 },
  drainage: { x: 310, y: 330, w: 130, h: 50 },
  commercial: { x: 550, y: 160, w: 80, h: 170 },
};

export default function PcPropertyMap() {
  const [zone, setZone] = useState<PcZoneKey>("kitchen");
  const z = pcZones.find((x) => x.key === zone)!;
  const on = (k: PcZoneKey) => zone === k;

  return (
    <section aria-labelledby="pc-map" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Around the property</p>
          <h2 id="pc-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where are pests usually found?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Each part of a property attracts different pests for different
            reasons. Tap an area to see which pests are commonly associated
            with it, and why.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-moss-100/40 p-3 sm:p-5 lg:col-span-8">
            <svg viewBox="0 0 640 400" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              {/* ground */}
              <path d="M10 330h620" stroke="#9a968a" strokeWidth="2" />

              {/* zones (clickable fills) */}
              {pcZones.map((zz) => {
                const r = zoneRects[zz.key];
                return (
                  <rect
                    key={zz.key}
                    x={r.x}
                    y={r.y}
                    width={r.w}
                    height={r.h}
                    rx={zz.key === "garden" || zz.key === "drainage" ? 10 : 0}
                    fill={on(zz.key) ? "rgba(95,112,80,0.22)" : zz.key === "garden" ? "#eaeee0" : "#faf8f4"}
                    stroke={on(zz.key) ? HI : "transparent"}
                    strokeWidth="2.5"
                    className="cursor-pointer"
                    style={{ transition: "fill 250ms" }}
                    onClick={() => setZone(zz.key)}
                  />
                );
              })}

              {/* building lines */}
              <g fill="none" stroke="#2c3524" strokeWidth="2.5" strokeLinejoin="round" pointerEvents="none">
                <path d="M90 330V64h340v266" />
                <path d="M90 90h340M90 200h340M260 90v240" strokeWidth="1.8" />
                <path d="M430 330V150h110v180M430 220h110" />
                <path d="M550 330V160h80v170" />
                <path d="M550 160h80l-6-14h-68z" fill="#dbe1cd" />
                <path d="M84 64h352" strokeWidth="5" />
              </g>

              {/* furniture hints */}
              <g fill="none" stroke="#79895f" strokeWidth="1.5" pointerEvents="none">
                <path d="M110 190v-22h100v22M110 168v-12h22v12" />
                <path d="M290 190v-16h60v16M380 190v-24h30v24" />
                <path d="M104 320v-36h110v36M104 220h110v14H104z" />
                <path d="M290 320v-18a6 6 0 0 1 6-6h96a6 6 0 0 1 6 6v18" />
                <path d="M448 320v-60h74v60M448 290h74" />
                <path d="M444 210v-40h30v40M484 210v-26h40v26" />
                <path d="M560 320v-40h60v40M566 250h48v20h-48z" />
                <path d="M60 330v-30M48 312c6-6 18-6 24 0M40 330c0-8 6-14 12-14" />
                <path d="M330 362h90" strokeDasharray="6 4" />
                <circle cx="380" cy="362" r="7" />
              </g>

              {/* subtle pest indicators */}
              <g pointerEvents="none" stroke="#2c3524" fill="none" strokeWidth="1.4" strokeLinecap="round">
                {/* ant trail in kitchen */}
                <path className="fs-flow" d="M120 300h70" strokeDasharray="2 6" />
                {/* cockroach near sink */}
                <g className="pc-crawl">
                  <ellipse cx="176" cy="276" rx="5" ry="3" />
                  <path d="M171 274l-3-3M171 278l-3 3M181 274l3-3" />
                </g>
                {/* bed bug marker on mattress */}
                <circle cx="190" cy="166" r="2.4" fill="#2c3524" />
                {/* mosquito near garden */}
                <g className="pc-hover">
                  <path d="M80 300v8M76 302l-5-3M84 302l5-3" />
                </g>
                {/* rodent near storage */}
                <path d="M500 214c0-4 4-6 8-6 3 0 5 2 6 4l3 1-3 1c-1 2-3 3-6 3h-6a2 2 0 0 1-2-3z" />
                {/* fly near commercial bins */}
                <g className="pc-hover">
                  <path d="M600 244v6M596 246l-4-2M604 246l4-2" />
                </g>
              </g>

              {/* labels */}
              <g fontFamily="ui-monospace, monospace" fontSize="9.5" letterSpacing="1.2" fill="#374330" pointerEvents="none">
                <text x="98" y="108">BEDROOM</text>
                <text x="268" y="108">BATHROOM</text>
                <text x="98" y="216">KITCHEN</text>
                <text x="268" y="216">LIVING</text>
                <text x="438" y="166">STORAGE</text>
                <text x="438" y="236">GARAGE</text>
                <text x="555" y="178" fontSize="8.5">SHOP /</text>
                <text x="555" y="190" fontSize="8.5">OFFICE</text>
                <text x="210" y="80">ROOF</text>
                <text x="140" y="372">GARDEN</text>
                <text x="330" y="352">DRAINS</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Illustrative property — tap an area</p>
          </div>

          <div className="lg:col-span-4">
            <div role="radiogroup" aria-label="Area of the property" className="flex flex-wrap gap-2">
              {pcZones.map((zz) => (
                <button
                  key={zz.key}
                  type="button"
                  role="radio"
                  aria-checked={on(zz.key)}
                  onClick={() => setZone(zz.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    on(zz.key) ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {zz.label}
                </button>
              ))}
            </div>

            <div key={z.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{z.label}</h3>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Pests commonly associated</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {z.pests.map((k) => {
                  const p = pcPests.find((x) => x.key === k)!;
                  return (
                    <li key={k} className="inline-flex items-center gap-1.5 rounded-full bg-moss-100 px-3 py-1 text-sm text-moss-900">
                      <PcIcon name={p.icon} className="h-4 w-4" />
                      {p.label}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Common causes</p>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                {z.causes.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 flex-none bg-moss-600" aria-hidden="true" />
                    {c}
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

"use client";

import { useState } from "react";
import { rrLayers, type RrLayerKey } from "@/lib/roof-replacement";

// Exploded oblique view of a typical flat-roof assembly. Each slab is drawn
// as top, front and side faces; the selected one slides out and is outlined.
const geometry: Record<RrLayerKey, { y: number; h: number; top: string; front: string; side: string }> = {
  surface: { y: 40, h: 10, top: "#ded2ba", front: "#c4c0b4", side: "#9a968a" },
  waterproofing: { y: 102, h: 6, top: "#333a49", front: "#232833", side: "#191d25" },
  insulation: { y: 160, h: 18, top: "#f2e6d5", front: "#d9bfa0", side: "#b8916c" },
  structure: { y: 230, h: 26, top: "#c4c0b4", front: "#9a968a", side: "#78746a" },
  ceiling: { y: 308, h: 8, top: "#faf8f4", front: "#eae7de", side: "#c4c0b4" },
};

const shortLabels: Record<RrLayerKey, string> = {
  surface: "SURFACE",
  waterproofing: "WATERPROOFING",
  insulation: "INSULATION",
  structure: "ROOF BASE",
  ceiling: "CEILING",
};

function Slab({ k, active, dim }: { k: RrLayerKey; active: boolean; dim: boolean }) {
  const g = geometry[k];
  const { y, h } = g;
  const top = `70,${y + 28} 130,${y} 450,${y} 390,${y + 28}`;
  const front = `70,${y + 28} 390,${y + 28} 390,${y + 28 + h} 70,${y + 28 + h}`;
  const side = `390,${y + 28} 450,${y} 450,${y + h} 390,${y + 28 + h}`;
  return (
    <g
      style={{
        transform: active ? "translate(-14px,-6px)" : "translate(0,0)",
        opacity: dim ? 0.45 : 1,
        transition: "transform 400ms cubic-bezier(0.16,1,0.3,1), opacity 300ms",
      }}
    >
      <polygon points={top} fill={g.top} stroke={active ? "#1f5c5c" : "#78746a"} strokeWidth={active ? 2 : 1} />
      <polygon points={front} fill={g.front} stroke={active ? "#1f5c5c" : "#78746a"} strokeWidth={active ? 2 : 1} />
      <polygon points={side} fill={g.side} stroke={active ? "#1f5c5c" : "#78746a"} strokeWidth={active ? 2 : 1} />

      {/* material hints */}
      {k === "surface" && (
        <path d={`M150 ${y + 8}l-14 14M210 ${y + 8}l-14 14M270 ${y + 8}l-14 14M330 ${y + 8}l-14 14M390 ${y + 8}l-14 14`} stroke="#9a968a" strokeWidth="1" />
      )}
      {k === "waterproofing" && <path d={`M100 ${y + 14}H420`} stroke="#4a5468" strokeWidth="1" strokeDasharray="10 6" />}
      {k === "insulation" && (
        <path
          d={`M76 ${y + 37}c10-8 20 8 30 0s20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0`}
          fill="none"
          stroke="#9c7752"
          strokeWidth="1.2"
        />
      )}
      {k === "structure" && (
        <g fill="#5c584f">
          {[92, 132, 172, 212, 252, 292, 332, 372].map((x) => (
            <circle key={x} cx={x} cy={y + 42} r="2.2" />
          ))}
        </g>
      )}
      {k === "ceiling" && <path d={`M120 ${y + 28}v-12M200 ${y + 28}v-12M280 ${y + 28}v-12M360 ${y + 28}v-12`} stroke="#c4c0b4" strokeWidth="1" />}
    </g>
  );
}

export default function RrRoofAssembly() {
  const [active, setActive] = useState<RrLayerKey>("waterproofing");
  const layer = rrLayers.find((l) => l.key === active)!;

  return (
    <figure className="rounded-2xl border border-ink-900/10 bg-sand-50/90 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 600 370" className="h-auto w-full" role="img" aria-labelledby="rr-assembly-title rr-assembly-desc">
        <title id="rr-assembly-title">Typical flat roof assembly, shown as separated layers</title>
        <desc id="rr-assembly-desc">
          {`From top to bottom: top surface, waterproofing layer, insulation, structural roof base and interior ceiling. Selected: ${layer.label}.`}
        </desc>

        {/* sun + rain hints on the surface */}
        <g aria-hidden="true">
          <circle cx="530" cy="30" r="12" fill="none" stroke="#c17f3e" strokeWidth="1.6" />
          <path d="M530 8v-6M530 58v-6M508 30h-6M558 30h-6" stroke="#c17f3e" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M190 10l-4 12M230 6l-4 12M270 10l-4 12" stroke="#4a9797" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* vertical guide lines */}
        <path d="M70 68V344M390 68V344" stroke="#c4c0b4" strokeWidth="1" strokeDasharray="3 5" aria-hidden="true" />

        {rrLayers.map((l) => (
          <g
            key={l.key}
            onMouseEnter={() => setActive(l.key)}
            onClick={() => setActive(l.key)}
            className="cursor-pointer"
            aria-hidden="true"
          >
            <Slab k={l.key} active={active === l.key} dim={active !== l.key} />
          </g>
        ))}

        {/* labels */}
        <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.2" aria-hidden="true">
          {rrLayers.map((l) => {
            const g = geometry[l.key];
            const ly = g.y + 20 + g.h / 2;
            const on = active === l.key;
            return (
              <g key={l.key} onClick={() => setActive(l.key)} className="cursor-pointer">
                <path d={`M454 ${ly}H476`} stroke={on ? "#1f5c5c" : "#9a968a"} strokeWidth="1" />
                <text x="482" y={ly + 4} fill={on ? "#1f5c5c" : "#69748a"} fontWeight={on ? 700 : 400}>
                  {shortLabels[l.key]}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <div role="radiogroup" aria-label="Roof layer" className="mt-4 flex flex-wrap gap-2">
        {rrLayers.map((l) => (
          <button
            key={l.key}
            type="button"
            role="radio"
            aria-checked={active === l.key}
            onClick={() => setActive(l.key)}
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              active === l.key ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <dl key={layer.key} className="mt-4 grid animate-fadeIn gap-3 text-sm sm:grid-cols-3" aria-live="polite">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">What it does</dt>
          <dd className="mt-1 leading-relaxed text-ink-800">{layer.does}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">What can go wrong</dt>
          <dd className="mt-1 leading-relaxed text-ink-800">{layer.wrong}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">When replacement is considered</dt>
          <dd className="mt-1 leading-relaxed text-ink-800">{layer.replace}</dd>
        </div>
      </dl>

      <figcaption className="mt-4 border-t border-ink-900/10 pt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Typical roof assembly — actual construction varies by property
      </figcaption>
    </figure>
  );
}

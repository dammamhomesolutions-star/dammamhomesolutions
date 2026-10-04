"use client";

import { useState } from "react";
import { ltLayers, ltParts, type LtLayer, type LtPart } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

const glow = "#f6c98a";
const hi = "#c17f3e";

// Room elevation showing ambient, task and accent light. Educational only —
// not a photometric calculation.
function Room({ layer, part }: { layer: LtLayer; part: LtPart | null }) {
  const ring = (p: LtPart) => (part === p ? hi : "none");
  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full" role="img" aria-labelledby="lt-diagram-title">
      <title id="lt-diagram-title">{`Room cross-section showing ${layer} lighting${part ? `, with the ${ltParts.find((x) => x.key === part)?.label.toLowerCase()} highlighted` : ""}`}</title>
      <defs>
        <linearGradient id="lt-d-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={glow} stopOpacity="0.8" />
          <stop offset="1" stopColor={glow} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="#232833" />
      <rect width="480" height="20" fill="#191d25" />
      <rect y="262" width="480" height="38" fill="#333a49" />

      {/* light layers */}
      {layer === "ambient" && (
        <g className="animate-fadeIn">
          <path d="M150 22h40l80 240H70z" fill="url(#lt-d-cone)" />
          <path d="M290 22h40l80 240H210z" fill="url(#lt-d-cone)" />
          <rect x="0" y="20" width="480" height="242" fill={glow} opacity="0.06" />
        </g>
      )}
      {layer === "task" && (
        <g className="animate-fadeIn">
          <path d="M366 168h28l28 62h-84z" fill="url(#lt-d-cone)" />
          <path d="M88 116h20l30 98H58z" fill="url(#lt-d-cone)" />
        </g>
      )}
      {layer === "accent" && (
        <g className="animate-fadeIn">
          <path d="M226 22h16l34 90h-84z" fill="url(#lt-d-cone)" />
          <rect x="196" y="86" width="76" height="56" fill={glow} opacity="0.25" />
        </g>
      )}

      {/* ceiling fixtures */}
      <g>
        <rect x="160" y="18" width="20" height="5" rx="2" fill="#f3e4d1" />
        <rect x="300" y="18" width="20" height="5" rx="2" fill="#f3e4d1" />
        <rect x="226" y="18" width="16" height="5" rx="2" fill="#d69a5f" />
        <rect x="140" y="10" width="200" height="22" rx="6" fill="none" stroke={ring("ceiling")} strokeWidth="2.5" strokeDasharray="5 4" />
      </g>

      {/* art */}
      <rect x="200" y="90" width="68" height="48" fill="#191d25" stroke="#d69a5f" strokeWidth="2" />
      <path d="M210 130l14-18 12 10 10-8 14 16z" fill="#4a5468" />

      {/* wall light + armchair */}
      <rect x="92" y="104" width="12" height="18" rx="3" fill="#d69a5f" />
      <rect x="82" y="96" width="32" height="34" rx="6" fill="none" stroke={ring("wall")} strokeWidth="2.5" strokeDasharray="5 4" />

      {/* furniture */}
      <g>
        <rect x="40" y="214" width="110" height="36" rx="8" fill="#4a5468" />
        <rect x="40" y="198" width="110" height="20" rx="6" fill="#69748a" />
        <rect x="330" y="230" width="100" height="8" rx="2" fill="#a8662a" />
        <path d="M340 238v24M420 238v24" stroke="#a8662a" strokeWidth="5" />
        <path d="M380 230v-56M380 174l14-6" stroke="#8e97a8" strokeWidth="3" />
        <path d="M366 168h28l-4-8h-20z" fill="#d69a5f" />
        <rect x="30" y="160" width="410" height="108" rx="10" fill="none" stroke={ring("furniture")} strokeWidth="2.5" strokeDasharray="5 4" />
      </g>

      {/* switch by door */}
      <rect x="452" y="70" width="22" height="192" fill="#191d25" />
      <rect x="434" y="150" width="10" height="16" rx="2" fill="#f3e4d1" />
      <rect x="428" y="144" width="22" height="28" rx="5" fill="none" stroke={ring("switch")} strokeWidth="2.5" strokeDasharray="5 4" />
    </svg>
  );
}

export default function LtDiagram() {
  const [layer, setLayer] = useState<LtLayer>("ambient");
  const [part, setPart] = useState<LtPart | null>(null);
  const L = ltLayers.find((x) => x.key === layer)!;
  const P = part ? ltParts.find((x) => x.key === part)! : null;

  return (
    <section id="layers" aria-labelledby="lt-layers" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-500">Lighting layers</p>
          <h2 id="lt-layers" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Ambient, task and accent — how a room is lit</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Well-lit rooms usually combine all three. Switch layers, then tap a
            part of the room to see why it matters.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl ring-1 ring-sand-100/10">
              <Room layer={layer} part={part} />
            </div>
            <p className="mt-2 text-xs text-ink-400">Educational illustration, not a lighting calculation.</p>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="text-sm font-semibold" id="lt-layer-label">Lighting layer</p>
              <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-labelledby="lt-layer-label">
                {ltLayers.map((x) => (
                  <button
                    key={x.key}
                    type="button"
                    aria-pressed={layer === x.key}
                    onClick={() => setLayer(x.key)}
                    className={`focus-ring flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-sm transition-colors ${
                      layer === x.key ? "border-ember-500 bg-ember-500 text-ink-950" : "border-sand-100/15 text-sand-100 hover:border-sand-100/40"
                    }`}
                  >
                    <LtIcon name={x.icon} className="h-5 w-5" />
                    {x.label}
                  </button>
                ))}
              </div>
              <p key={layer} className="mt-4 animate-fadeIn text-sm leading-relaxed text-ink-300" aria-live="polite">
                <span className="font-semibold text-sand-50">{L.label}: </span>
                {L.body}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold" id="lt-part-label">Parts of the room</p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="lt-part-label">
                {ltParts.map((x) => (
                  <button
                    key={x.key}
                    type="button"
                    aria-pressed={part === x.key}
                    onClick={() => setPart(part === x.key ? null : x.key)}
                    className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                      part === x.key ? "border-ember-500 bg-sand-50 text-ink-950" : "border-sand-100/15 text-sand-100 hover:border-sand-100/40"
                    }`}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-ink-300" aria-live="polite">
                {P ? (
                  <p key={P.key} className="animate-fadeIn"><span className="font-semibold text-sand-50">{P.label}: </span>{P.body}</p>
                ) : (
                  <p>Select a part to highlight it on the drawing.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

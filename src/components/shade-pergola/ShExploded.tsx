"use client";

import { useState } from "react";
import { shLayers } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Exploded shade diagram: cover → connections → frame → posts → base.
// Each layer is drawn as a flat plan in perspective and lifts apart.
const top = (y: number) => `M120 ${y}L420 ${y - 40}L560 ${y + 10}L260 ${y + 50}Z`;

function Layer({ k, on }: { k: string; on: boolean }) {
  const s = on ? "#c98246" : "#4d545c";
  const f = on ? "#f5e3d2" : "#eceef0";
  switch (k) {
    case "cover":
      return <path d={top(0)} fill={f} stroke={s} strokeWidth="2" />;
    case "connections":
      return <g fill={on ? "#c98246" : "#666f78"}>{[[120, 0], [420, -40], [560, 10], [260, 50], [270, -20], [410, 30]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="7" />)}</g>;
    case "frame":
      return <path d={`${top(0)}M190 -15L490 -15`} fill="none" stroke={s} strokeWidth="6" />;
    case "posts":
      return <g stroke={s} strokeWidth="7">{[[120, 0], [420, -40], [560, 10], [260, 50]].map(([x, y]) => <path key={x} d={`M${x} ${y}v70`} />)}</g>;
    default:
      return <g fill={on ? "#c98246" : "#2b2f33"}>{[[120, 0], [420, -40], [560, 10], [260, 50]].map(([x, y]) => <rect key={x} x={x - 16} y={y - 5} width="32" height="10" />)}</g>;
  }
}

export default function ShExploded() {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <section aria-labelledby="sh-exploded" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Tag n="02">Exploded shade diagram</Tag>
          <h2 id="sh-exploded" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">A shade is five parts working together</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Cover, connections, frame, posts and base. Problems in one part often
            show up in another — a loose connection lets a cover sag; a corroded
            base lets a frame move.
          </p>
          <div className="mt-8 space-y-1" role="group" aria-label="Shade component">
            {shLayers.map((l, i) => (
              <button key={l.key} type="button" aria-pressed={sel === i} aria-controls="sh-layer-text" onClick={() => setSel(i)} className={`focus-ring flex w-full items-center justify-between border-l-4 px-4 py-3 text-left transition-colors ${sel === i ? "border-copper-600 bg-copper-100 text-ink-950" : "border-steel-300 bg-steel-100/60 text-ink-800 hover:border-steel-600"}`}>
                <span className="text-sm font-semibold">{l.label}</span>
                <span className="font-mono text-[10px] text-steel-600">{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <p id="sh-layer-text" aria-live="polite" className="mt-5 min-h-[4.5rem] text-[15px] leading-relaxed text-ink-700">{shLayers[sel].text}</p>
        </div>
        <div className="lg:col-span-7">
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen((o) => !o)} aria-pressed={open} className="focus-ring border border-steel-900/25 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-900 hover:border-steel-900">
              {open ? "Assemble" : "Explode"} view
            </button>
          </div>
          <svg viewBox="0 0 820 560" className="mt-4 h-auto w-full" role="img" aria-label={`Exploded diagram of a shade structure, from top: cover, connections, frame, posts and beams, base and anchors. Highlighted: ${shLayers[sel].label}.`}>
            {[...shLayers].reverse().map((l, ri) => {
              const i = shLayers.length - 1 - ri;
              const y = open ? 70 + i * 100 : 200 + i * 14;
              return (
                <g key={l.key} style={{ transform: `translateY(${y}px)`, transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} className="motion-reduce:!transition-none cursor-pointer" onClick={() => setSel(i)}>
                  <Layer k={l.key} on={sel === i} />
                  {open && (
                    <g>
                      <path d="M575 10H595" stroke="#b7bfc6" />
                      <text x="600" y="16" fontSize="19" className="font-mono" fill={sel === i ? "#8f4f2f" : "#666f78"}>{l.label.toUpperCase()}</text>
                    </g>
                  )}
                </g>
              );
            })}
            {open && <path d="M40 90V500" stroke="#c98246" strokeDasharray="4 6" />}
          </svg>
        </div>
      </div>
    </section>
  );
}

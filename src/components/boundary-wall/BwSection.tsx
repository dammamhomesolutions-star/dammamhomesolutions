"use client";

import { useState } from "react";
import { bwLayers, type BwLayer } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const hi = "#b3562f";

// Section through a boundary wall: coping on top, render and paint on both
// faces, block and mortar in the core, and the base meeting the ground.
function Section({ layer }: { layer: BwLayer }) {
  const on = (l: BwLayer) => layer === l;
  const s = (l: BwLayer) => (on(l) ? { stroke: hi, strokeWidth: 3 } : { stroke: "#7a5a3f", strokeWidth: 1 });
  return (
    <svg viewBox="0 0 360 300" className="h-auto w-full" role="img" aria-labelledby="bw-section-title">
      <title id="bw-section-title">{`Section through a boundary wall with the ${bwLayers.find((x) => x.key === layer)?.label.toLowerCase()} highlighted`}</title>
      <rect width="360" height="300" fill="#eef1f3" />
      {/* ground */}
      <rect y="250" width="360" height="50" fill={on("base") ? "#f3e1d3" : "#d9bfa0"} />
      <path d="M0 250h360" {...s("base")} />
      {/* masonry core */}
      <rect x="140" y="60" width="80" height="200" fill={on("masonry") ? "#f3e1d3" : "#c9b59a"} {...s("masonry")} />
      {[90, 120, 150, 180, 210, 240].map((y) => <path key={y} d={`M140 ${y}h80`} stroke={on("mortar") ? hi : "#9c7752"} strokeWidth={on("mortar") ? 3 : 1.5} />)}
      {/* plaster both faces */}
      <rect x="128" y="60" width="12" height="190" fill={on("plaster") ? "#e0b28a" : "#e6dccd"} {...s("plaster")} />
      <rect x="220" y="60" width="12" height="190" fill={on("plaster") ? "#e0b28a" : "#e6dccd"} {...s("plaster")} />
      {/* paint */}
      <rect x="124" y="60" width="4" height="190" fill={on("paint") ? hi : "#b8916c"} />
      <rect x="232" y="60" width="4" height="190" fill={on("paint") ? hi : "#b8916c"} />
      {/* finish (outer weathered surface) */}
      <path d="M122 60v190" stroke={on("finish") ? hi : "transparent"} strokeWidth="4" strokeDasharray="6 4" />
      {/* coping */}
      <path d="M110 60h140l-10-18h-120z" fill={on("coping") ? "#e0b28a" : "#9c7752"} {...s("coping")} />
      <path d="M110 60l-6 6M250 60l6 6" stroke="#4a3626" strokeWidth="2" />
      {/* rain */}
      <g stroke="#7fa0b0" strokeWidth="1.5">
        <path d="M150 10l-4 14M180 6l-4 14M210 10l-4 14" />
        <path d="M100 64l-6 14M260 64l6 14" />
      </g>
      {/* labels */}
      <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#4a3626">
        <text x="258" y="50">COPING</text>
        <text x="244" y="130">PLASTER</text>
        <text x="244" y="144">+ PAINT</text>
        <text x="20" y="160">FINISH →</text>
        <text x="152" y="170">MASONRY</text>
        <text x="20" y="276">BASE / GROUND</text>
      </g>
    </svg>
  );
}

export default function BwSection() {
  const [layer, setLayer] = useState<BwLayer>("plaster");
  const l = bwLayers.find((x) => x.key === layer)!;

  return (
    <section id="wall-layers" aria-labelledby="bw-layers" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-300">Inside the wall</p>
          <h2 id="bw-layers" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">A visible crack may only be the symptom</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">Surface → plaster → masonry → moisture → coping → movement. Tap each layer to see what tends to go wrong there.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-sand-100/10 lg:col-span-6">
            <Section layer={layer} />
          </div>
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Wall layers">
              {bwLayers.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={layer === x.key}
                  onClick={() => setLayer(x.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${layer === x.key ? "border-clay-300 bg-clay-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={layer} className="mt-5 animate-fadeIn rounded-2xl bg-ink-900 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl">{l.label}</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-clay-300">Common problems</p>
              <ul className="mt-2 space-y-1.5">{l.problems.map((p) => <li key={p} className="flex gap-2 text-sm text-ink-300"><BwIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

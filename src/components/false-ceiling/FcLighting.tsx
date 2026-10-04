"use client";

import { useState } from "react";
import { fcLightModes, type FcLightMode } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

const fixtures = ["Recessed downlights", "Pendant points", "Cove / indirect LED", "Feature lighting", "Wall lights nearby", "Separate switching zones"];

function Room({ mode }: { mode: FcLightMode }) {
  const show = (m: FcLightMode) => mode === m || mode === "mixed";
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-labelledby="fc-light-title">
      <title id="fc-light-title">{`Room lit with ${fcLightModes.find((x) => x.key === mode)?.label.toLowerCase()}`}</title>
      <defs>
        <linearGradient id="fc-l-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6dfb4" stopOpacity="0.8" />
          <stop offset="1" stopColor="#f6dfb4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="360" height="220" fill="#1c2733" />
      <path d="M0 0h360v18h-40v14H40V18H0z" fill="#3d5a6b" />
      <g key={mode} className="animate-fadeIn">
        {mode === "general" && (
          <>
            <circle cx="180" cy="40" r="10" fill="#fff6e3" />
            <path d="M170 46h20l90 150H80z" fill="url(#fc-l-cone)" opacity="0.8" />
          </>
        )}
        {show("recessed") && [90, 180, 270].map((x) => (
          <g key={x}>
            <rect x={x - 8} y="30" width="16" height="3" fill="#fff6e3" />
            <path d={`M${x - 7} 33h14l34 160h-82z`} fill="url(#fc-l-cone)" />
          </g>
        ))}
        {show("cove") && <path className="lt-beam" d="M40 26c40-14 80-18 140-18s100 4 140 18" stroke="#f6dfb4" strokeWidth="6" fill="none" />}
        {show("feature") && (
          <>
            <path d="M180 32v40" stroke="#b8ccd4" strokeWidth="1.5" />
            <path d="M160 86a20 14 0 0 1 40 0z" fill="#c17f3e" />
            <path d="M162 86h36l26 70h-88z" fill="url(#fc-l-cone)" />
          </>
        )}
      </g>
      <rect x="120" y="150" width="120" height="8" rx="2" fill="#a8662a" />
      <path d="M130 158v40M230 158v40" stroke="#a8662a" strokeWidth="5" />
      <rect y="198" width="360" height="22" fill="#26333f" />
    </svg>
  );
}

export default function FcLighting() {
  const [mode, setMode] = useState<FcLightMode>("mixed");
  const m = fcLightModes.find((x) => x.key === mode)!;

  return (
    <section id="lighting" aria-label="Lighting integration" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-glass-300">Lighting</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Plan the lighting before closing the ceiling</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Light positions, cable routes and the depth each fitting needs are
            far easier to set before the boards go up. We install the lighting
            as part of the ceiling work.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {fixtures.map((f) => <li key={f} className="rounded-full bg-sand-100/10 px-3 py-1 text-xs text-sand-100">{f}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <h3 className="font-serif text-2xl" id="fc-light-q">How do you want the ceiling to light the room?</h3>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-labelledby="fc-light-q">
            {fcLightModes.map((x) => (
              <button
                key={x.key}
                type="button"
                aria-pressed={mode === x.key}
                onClick={() => setMode(x.key)}
                className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${mode === x.key ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}
              >
                {x.label}
              </button>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-sand-100/10">
            <Room mode={mode} />
          </div>
          <p key={mode} className="mt-4 flex animate-fadeIn gap-2 text-sm text-ink-300" aria-live="polite">
            <FcIcon name="downlight" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />
            <span><span className="font-semibold text-sand-50">{m.label}: </span>{m.body}</span>
          </p>
          <p className="mt-2 text-xs text-ink-400">Visual guide only — actual light levels depend on the fittings chosen.</p>
        </div>
      </div>
    </section>
  );
}

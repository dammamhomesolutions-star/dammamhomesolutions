"use client";

import { useState } from "react";
import { spLightStates } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

// Night-time pool with three lights whose look changes with the chosen state.
function NightPool({ state }: { state: string }) {
  const lights = [80, 160, 240];
  const on = (i: number) => {
    if (state === "off") return i !== 1;
    if (state === "multiple") return false;
    return true;
  };
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-labelledby="sp-night-title">
      <title id="sp-night-title">{`Pool at night illustrating: ${spLightStates.find((s) => s.key === state)?.label.toLowerCase()}`}</title>
      <rect width="320" height="180" fill="#0b141b" />
      <rect x="20" y="40" width="280" height="110" rx="10" fill="#0f3a3a" />
      {lights.map((x, i) => (
        <g key={x}>
          {on(i) && <ellipse cx={x} cy="128" rx="46" ry="34" fill="#8fd3e0" opacity="0.28" className={state === "flicker" && i === 2 ? "cv-pulse" : undefined} />}
          <circle cx={x} cy="140" r="7" fill={on(i) ? "#e0fbff" : "#333a49"} stroke={state === "damaged" && i === 0 ? "#c76a3f" : "#4a5468"} strokeWidth="2" />
          {state === "damaged" && i === 0 && <path d={`M${x - 5} 136l4 3-2 3`} stroke="#c76a3f" strokeWidth="1.5" fill="none" />}
          {state === "water" && i === 1 && <circle cx={x} cy="142" r="3" fill="#4a9797" />}
        </g>
      ))}
      <rect x="20" y="36" width="280" height="6" fill="#4a5468" />
      <circle cx="270" cy="18" r="8" fill="#e8e3d0" opacity="0.6" />
    </svg>
  );
}

export default function SpLighting() {
  const [state, setState] = useState("off");
  const s = spLightStates.find((x) => x.key === state)!;

  return (
    <section id="lighting" aria-labelledby="sp-lighting" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] ring-1 ring-sand-100/10 lg:col-span-7">
          <NightPool state={state} />
        </div>
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Pool lighting</p>
          <h2 id="sp-lighting" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Pool lighting problems</h2>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Lighting problem">
            {spLightStates.map((x) => (
              <button key={x.key} type="button" aria-pressed={state === x.key} onClick={() => setState(x.key)} className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${state === x.key ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
                {x.label}
              </button>
            ))}
          </div>
          <p key={state} className="mt-5 animate-fadeIn text-[15px] leading-relaxed text-ink-300" aria-live="polite"><span className="font-semibold text-sand-50">{s.label}: </span>{s.body}</p>
          <p className="mt-5 flex gap-2 rounded-2xl bg-rust-700/25 p-4 text-sm text-sand-50">
            <SpIcon name="alert" className="mt-0.5 h-4 w-4 flex-none" />
            Electrical pool equipment should be assessed and serviced by appropriately qualified professionals. We repair and replace pool lights — please don&rsquo;t open fittings yourself.
          </p>
        </div>
      </div>
    </section>
  );
}

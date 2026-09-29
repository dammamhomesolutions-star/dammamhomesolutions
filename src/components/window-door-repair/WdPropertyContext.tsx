"use client";

import { useState } from "react";
import { wdPropertyScenes } from "@/lib/window-door-repair";

export default function WdPropertyContext() {
  const [activeId, setActiveId] = useState(wdPropertyScenes[0].id);
  const active = wdPropertyScenes.find((r) => r.id === activeId)!;

  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Where you notice it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Doors and windows, in context.
          </h2>
        </div>

        <div role="tablist" aria-label="Property type" className="mt-8 flex flex-wrap gap-2.5">
          {wdPropertyScenes.map((scene) => {
            const isActive = scene.id === activeId;
            return (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(scene.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink-950 bg-ink-950 text-sand-50" : "border-glass-900/15 text-ink-700 hover:border-glass-700"
                }`}
              >
                {scene.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div key={active.id} className="w-full animate-fadeIn overflow-hidden rounded-sm border border-glass-900/10">
            <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="180" fill="url(#wd-sand)" />

              {active.id === "villa" && (
                <>
                  <rect x="30" y="30" width="120" height="110" rx="3" fill="url(#wd-frame-dark)" />
                  <rect x="44" y="44" width="92" height="82" fill="url(#wd-glass)" />
                  <rect x="180" y="60" width="110" height="80" rx="3" fill="url(#wd-frame-dark)" />
                  <rect x="192" y="72" width="86" height="56" fill="url(#wd-glass)" opacity="0.7" />
                </>
              )}

              {active.id === "apartment" && (
                <>
                  <rect x="60" y="20" width="200" height="120" rx="3" fill="url(#wd-frame-dark)" />
                  <rect x="74" y="34" width="86" height="92" fill="url(#wd-glass)" />
                  <rect x="166" y="34" width="80" height="92" fill="url(#wd-glass)" opacity="0.7" />
                  <rect x="60" y="146" width="200" height="8" fill="#8e97a8" />
                </>
              )}

              {active.id === "rental" && (
                <>
                  <rect x="90" y="30" width="140" height="120" rx="3" fill="url(#wd-frame-dark)" stroke="#c17f3e" strokeWidth="2" />
                  <rect x="104" y="44" width="112" height="92" fill="url(#wd-glass)" />
                  <circle cx="200" cy="90" r="4" fill="#c17f3e" />
                </>
              )}

              {active.id === "office" && (
                <>
                  <rect x="40" y="20" width="90" height="130" fill="url(#wd-frame-dark)" />
                  <rect x="140" y="20" width="150" height="130" rx="3" fill="url(#wd-frame-dark)" opacity="0.9" />
                  <rect x="152" y="32" width="126" height="106" fill="url(#wd-glass)" opacity="0.55" />
                  <line x1="215" y1="32" x2="215" y2="138" stroke="#1c2733" strokeWidth="3" />
                </>
              )}
            </svg>
          </div>

          <div>
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
              Typical door &amp; window concerns
            </p>
            <ul className="mt-3 space-y-2">
              {active.concerns.map((concern) => (
                <li key={concern} className="text-sm text-ink-700">
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

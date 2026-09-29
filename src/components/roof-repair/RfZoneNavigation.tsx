"use client";

import { useState } from "react";
import { rfZones } from "@/lib/roof-repair";

const positions: Record<string, { x: number; y: number; w: number; h: number; cx: number; cy: number }> = {
  edge: { x: 20, y: 20, w: 340, h: 24, cx: 47, cy: 16 },
  joints: { x: 20, y: 44, w: 24, h: 116, cx: 8, cy: 50 },
  structures: { x: 250, y: 54, w: 70, h: 46, cx: 79, cy: 39 },
  surface: { x: 60, y: 54, w: 170, h: 106, cx: 39, cy: 65 },
  drainage: { x: 60, y: 132, w: 270, h: 24, cx: 55, cy: 90 },
};

export default function RfZoneNavigation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = rfZones.find((z) => z.id === activeId);
  const focus = activeId ? positions[activeId] : null;
  const dx = focus ? (50 - focus.cx) * 0.6 : 0;
  const dy = focus ? (50 - focus.cy) * 0.6 : 0;

  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">Navigating the rooftop</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            One rooftop, several distinct areas.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-ink-700/40 bg-ink-900">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `scale(${focus ? 1.7 : 1}) translate(${dx}%, ${dy}%)` }}
            >
              <svg viewBox="0 0 380 180" className="h-auto w-full" role="img" aria-label="Top-down blueprint of a rooftop showing edge, joints, structures, surface and drainage areas">
                <defs>
                  <pattern id="rf-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0 L0 0 0 20" fill="none" stroke="#333a49" strokeWidth="0.5" opacity="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="380" height="180" fill="url(#rf-blueprint-grid)" />

                {rfZones.map((z) => {
                  const box = positions[z.id];
                  const isActive = activeId === z.id;
                  const isDimmed = activeId !== null && !isActive;
                  return (
                    <rect
                      key={z.id}
                      x={box.x}
                      y={box.y}
                      width={box.w}
                      height={box.h}
                      fill="none"
                      stroke={isActive ? "#8fc4c4" : "#69748a"}
                      strokeWidth={isActive ? 2.4 : 1}
                      style={{ opacity: isDimmed ? 0.25 : 1, transition: "opacity 250ms ease-out, stroke 250ms ease-out" }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          <div>
            <div role="group" aria-label="Rooftop area" className="flex flex-wrap gap-2">
              {rfZones.map((z) => {
                const isActive = activeId === z.id;
                return (
                  <button
                    key={z.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(isActive ? null : z.id)}
                    onMouseEnter={() => setActiveId(z.id)}
                    onMouseLeave={() => setActiveId((cur) => (cur === z.id ? null : cur))}
                    className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                      isActive ? "border-sand-50 bg-teal-700 text-sand-50" : "border-ink-700/50 text-ink-300 hover:border-sand-50"
                    }`}
                  >
                    {z.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 min-h-[6rem] rounded-md border border-ink-700/40 bg-ink-900/60 p-5">
              {active ? (
                <>
                  <h3 className="font-serif text-lg text-sand-50">{active.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{active.description}</p>
                </>
              ) : (
                <p className="text-sm text-ink-300">Select an area of the rooftop to zoom in.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

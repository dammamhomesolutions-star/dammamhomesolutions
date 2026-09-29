"use client";

import { useState } from "react";
import { gdPropertyParts } from "@/lib/gate-garage-repair";

const positions: Record<string, { x: number; y: number; w: number; h: number; cx: number; cy: number }> = {
  garage: { x: 20, y: 60, w: 120, h: 100, cx: 20, cy: 27 },
  gate: { x: 160, y: 90, w: 70, h: 70, cx: 45, cy: 40 },
  door: { x: 250, y: 70, w: 60, h: 90, cx: 68, cy: 33 },
  hardware: { x: 320, y: 100, w: 40, h: 40, cx: 87, cy: 47 },
};

export default function GdPropertyBlueprint() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = gdPropertyParts.find((p) => p.id === activeId);
  const focus = activeId ? positions[activeId] : null;
  const dx = focus ? (50 - focus.cx) * 0.6 : 0;
  const dy = focus ? (50 - focus.cy) * 0.6 : 0;

  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ink-300">The whole picture</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            One property, multiple moving parts.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-ink-700/40 bg-ink-900">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `scale(${focus ? 1.4 : 1}) translate(${dx}%, ${dy}%)` }}
            >
              <svg viewBox="0 0 400 200" className="h-auto w-full" role="img" aria-label="Blueprint diagram of garage, gate, door and hardware on one property">
                <defs>
                  <pattern id="gd-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0 L0 0 0 20" fill="none" stroke="#333a49" strokeWidth="0.5" opacity="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="400" height="200" fill="url(#gd-blueprint-grid)" />

                {Object.entries(positions).map(([id, box]) => {
                  const isActive = activeId === id;
                  const isDimmed = activeId !== null && !isActive;
                  return (
                    <rect
                      key={id}
                      x={box.x}
                      y={box.y}
                      width={box.w}
                      height={box.h}
                      fill="none"
                      stroke={isActive ? "#eef3f5" : "#69748a"}
                      strokeWidth={isActive ? 2.4 : 1}
                      style={{ opacity: isDimmed ? 0.25 : 1, transition: "opacity 250ms ease-out, stroke 250ms ease-out" }}
                    />
                  );
                })}

                <line x1="20" y1="50" x2="360" y2="50" stroke="#4a5468" strokeWidth="0.75" />
                <text x="190" y="46" textAnchor="middle" fontSize="8" fill="#69748a" fontFamily="monospace">
                  property frontage
                </text>
              </svg>
            </div>
          </div>

          <div>
            <div role="group" aria-label="Property components" className="flex flex-wrap gap-2">
              {gdPropertyParts.map((part) => {
                const isActive = activeId === part.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(isActive ? null : part.id)}
                    onMouseEnter={() => setActiveId(part.id)}
                    onMouseLeave={() => setActiveId((cur) => (cur === part.id ? null : cur))}
                    className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                      isActive ? "border-sand-50 bg-rust-700 text-sand-50" : "border-ink-700/50 text-ink-300 hover:border-sand-50"
                    }`}
                  >
                    {part.label}
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
                <p className="text-sm text-ink-300">Select a part of the property to zoom in.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

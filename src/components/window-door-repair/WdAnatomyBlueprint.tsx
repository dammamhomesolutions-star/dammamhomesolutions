"use client";

import { useState } from "react";
import { wdAnatomyParts, type WdAnatomyPart } from "@/lib/window-door-repair";

const positions: Record<string, { x: number; y: number; w: number; h: number }> = {
  frame: { x: 60, y: 30, w: 280, h: 220 },
  glass: { x: 80, y: 50, w: 130, h: 180 },
  handle: { x: 218, y: 130, w: 24, h: 14 },
  hinge: { x: 66, y: 60, w: 10, h: 24 },
  seal: { x: 72, y: 42, w: 216, h: 8 },
  track: { x: 60, y: 250, w: 280, h: 10 },
  hardware: { x: 220, y: 60, w: 100, h: 170 },
};

export default function WdAnatomyBlueprint() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active: WdAnatomyPart | undefined = wdAnatomyParts.find((p) => p.id === activeId);

  return (
    <section className="border-b border-glass-900/10 bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-300">The anatomy</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Know what you&rsquo;re looking at.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-glass-500/20 bg-glass-900">
            <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="Blueprint diagram of a window assembly">
              <defs>
                <pattern id="wd-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L0 0 0 20" fill="none" stroke="#3d5a6b" strokeWidth="0.5" opacity="0.4" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="400" height="300" fill="url(#wd-blueprint-grid)" />

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
                    stroke={isActive ? "#eef3f5" : "#7fa0b0"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={id === "seal" || id === "track" ? "3 3" : undefined}
                    style={{ opacity: isDimmed ? 0.25 : 1, transition: "opacity 250ms ease-out, stroke 250ms ease-out" }}
                  />
                );
              })}

              {/* dimension ticks for flavor */}
              <line x1="60" y1="20" x2="340" y2="20" stroke="#5b7d8f" strokeWidth="0.75" />
              <line x1="60" y1="16" x2="60" y2="24" stroke="#5b7d8f" strokeWidth="0.75" />
              <line x1="340" y1="16" x2="340" y2="24" stroke="#5b7d8f" strokeWidth="0.75" />
              <text x="200" y="14" textAnchor="middle" fontSize="8" fill="#7fa0b0" fontFamily="monospace">
                assembly width
              </text>
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Window and door components" className="flex flex-wrap gap-2">
              {wdAnatomyParts.map((part) => {
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
                      isActive
                        ? "border-glass-300 bg-glass-700 text-sand-50"
                        : "border-glass-500/30 text-glass-300 hover:border-glass-300"
                    }`}
                  >
                    {part.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 min-h-[6rem] rounded-md border border-glass-500/20 bg-glass-800/60 p-5">
              {active ? (
                <>
                  <h3 className="font-serif text-lg text-sand-50">{active.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-glass-200">{active.description}</p>
                </>
              ) : (
                <p className="text-sm text-glass-300">
                  Select a component to see a short explanation.
                </p>
              )}
            </div>
            <p className="mt-4 text-xs text-glass-500">
              A general reference — not a technical installation guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { kcAnatomyParts, type KcAnatomyPart } from "@/lib/kitchen-cabinet-repair";

const positions: Record<string, { x: number; y: number; w: number; h: number; dx: number; dy: number }> = {
  body: { x: 40, y: 20, w: 320, h: 260, dx: 0, dy: -14 },
  door: { x: 60, y: 40, w: 130, h: 220, dx: -22, dy: 0 },
  hinge: { x: 52, y: 60, w: 10, h: 24, dx: -34, dy: -10 },
  handle: { x: 168, y: 140, w: 16, h: 10, dx: 24, dy: -8 },
  drawer: { x: 210, y: 40, w: 130, h: 90, dx: 22, dy: -20 },
  runner: { x: 210, y: 132, w: 130, h: 10, dx: 22, dy: 20 },
  shelf: { x: 210, y: 160, w: 130, h: 90, dx: 30, dy: 16 },
  edge: { x: 186, y: 40, w: 6, h: 220, dx: -8, dy: 24 },
  panel: { x: 60, y: 40, w: 130, h: 60, dx: -16, dy: -24 },
};

export default function KcBlueprint() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active: KcAnatomyPart | undefined = kcAnatomyParts.find((p) => p.id === activeId);

  return (
    <section className="border-b border-walnut-900/10 bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-steel-300">The anatomy</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            What are you actually looking at?
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-steel-500/20 bg-ink-900">
            <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="Blueprint diagram of a kitchen cabinet">
              <defs>
                <pattern id="kc-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L0 0 0 20" fill="none" stroke="#4d545c" strokeWidth="0.5" opacity="0.4" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="400" height="300" fill="url(#kc-blueprint-grid)" />

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
                    stroke={isActive ? "#eceef0" : "#a67c5b"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={id === "runner" || id === "edge" ? "3 3" : undefined}
                    style={{
                      opacity: isDimmed ? 0.22 : 1,
                      transform: isActive ? `translate(${box.dx}px, ${box.dy}px)` : "translate(0px, 0px)",
                      transition: "opacity 250ms ease-out, transform 350ms cubic-bezier(0.34,1.56,0.64,1), stroke 250ms ease-out",
                    }}
                  />
                );
              })}

              <line x1="60" y1="14" x2="340" y2="14" stroke="#666f78" strokeWidth="0.75" />
              <line x1="60" y1="10" x2="60" y2="18" stroke="#666f78" strokeWidth="0.75" />
              <line x1="340" y1="10" x2="340" y2="18" stroke="#666f78" strokeWidth="0.75" />
              <text x="200" y="10" textAnchor="middle" fontSize="8" fill="#838d96" fontFamily="monospace">
                cabinet width
              </text>
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Kitchen cabinet components" className="flex flex-wrap gap-2">
              {kcAnatomyParts.map((part) => {
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
                      isActive ? "border-steel-100 bg-walnut-700 text-sand-50" : "border-steel-500/30 text-steel-300 hover:border-steel-100"
                    }`}
                  >
                    {part.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 min-h-[6rem] rounded-md border border-steel-500/20 bg-ink-900/60 p-5">
              {active ? (
                <>
                  <h3 className="font-serif text-lg text-sand-50">{active.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">{active.description}</p>
                </>
              ) : (
                <p className="text-sm text-steel-300">Select a component to see a short explanation.</p>
              )}
            </div>
            <p className="mt-4 text-xs text-steel-500">
              A general reference — not a technical installation guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

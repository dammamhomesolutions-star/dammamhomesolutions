"use client";

import { useState } from "react";
import { surfaceContexts } from "@/lib/tile-repair";

const shapeClasses: Record<string, string> = {
  wall: "aspect-[3/4] max-w-xs mx-auto skew-x-0",
  floor: "aspect-[16/9] max-w-lg mx-auto [transform:perspective(500px)_rotateX(35deg)]",
  "wet-area": "aspect-square max-w-xs mx-auto",
  kitchen: "aspect-[21/9] max-w-lg mx-auto",
};

export default function TrSurfaceSwitcher() {
  const [activeId, setActiveId] = useState(surfaceContexts[0].id);
  const active = surfaceContexts.find((s) => s.id === activeId)!;

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Surface context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where is the tile problem?
          </h2>
        </div>

        <div role="tablist" aria-label="Surface context" className="mt-8 flex flex-wrap gap-2.5">
          {surfaceContexts.map((ctx) => {
            const isActive = ctx.id === activeId;
            return (
              <button
                key={ctx.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(ctx.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                }`}
              >
                {ctx.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            key={active.id}
            className={`animate-fadeIn overflow-hidden rounded-sm border border-ink-900/10 ${shapeClasses[active.id]}`}
          >
            <div
              className="grid h-full w-full gap-[3px] bg-ink-300 p-[3px]"
              style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gridTemplateRows: "repeat(3, minmax(0, 1fr))" }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ background: "linear-gradient(135deg, #f2ede2, #e4dcc7)", filter: "url(#tile-noise)" }} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
              Typical surface concerns
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

"use client";

import { useState } from "react";
import { wlZones } from "@/lib/water-leak-repair";

const layout: Record<string, { x: number; y: number; w: number; h: number }> = {
  "overhead-tank": { x: 130, y: 10, w: 60, h: 30 },
  "exterior-line": { x: 10, y: 190, w: 40, h: 100 },
  "behind-wall": { x: 210, y: 60, w: 20, h: 220 },
  "under-sink": { x: 60, y: 90, w: 60, h: 50 },
  "water-heater": { x: 140, y: 150, w: 50, h: 60 },
  "under-slab": { x: 60, y: 260, w: 190, h: 30 },
};

export default function WlZoneSelector() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = wlZones.find((z) => z.id === activeId);

  return (
    <section id="where-it-hides" className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Where leaks tend to hide</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Tap a part of the property.
          </h2>
          <p className="mt-4 text-ink-600">
            A generic cross-section — not a plan of any specific property.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-3">
          <svg viewBox="0 0 300 300" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="300" height="300" fill="#f4f0e8" />
            {Object.entries(layout).map(([id, box]) => {
              const isActive = activeId === id;
              return (
                <rect
                  key={id}
                  x={box.x}
                  y={box.y}
                  width={box.w}
                  height={box.h}
                  fill={isActive ? "#c98246" : "#ded2ba"}
                  fillOpacity={isActive ? 0.6 : 1}
                  stroke={isActive ? "#8f4f2f" : "#9a968a"}
                  strokeWidth={isActive ? 2.2 : 1}
                  style={{ transition: "fill-opacity 200ms" }}
                />
              );
            })}
          </svg>

          {wlZones.map((z) => {
            const box = layout[z.id];
            const isActive = activeId === z.id;
            return (
              <button
                key={z.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(z.id)}
                style={{
                  left: `${(box.x / 300) * 100}%`,
                  top: `${(box.y / 300) * 100}%`,
                  width: `${(box.w / 300) * 100}%`,
                  height: `${(box.h / 300) * 100}%`,
                }}
                className="focus-ring absolute"
                aria-label={z.label}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-2xl">
          {active ? (
            <div key={active.id} className="animate-fadeIn rounded-md border border-ink-900/10 bg-sand-50 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.description}</p>
            </div>
          ) : (
            <p className="text-center text-sm text-ink-500">Select a part of the property to learn more.</p>
          )}
        </div>
      </div>
    </section>
  );
}

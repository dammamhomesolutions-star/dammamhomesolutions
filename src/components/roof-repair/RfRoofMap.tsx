"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { rfZones } from "@/lib/roof-repair";

const layout: Record<string, { x: number; y: number; w: number; h: number }> = {
  edge: { x: 10, y: 10, w: 280, h: 20 },
  joints: { x: 10, y: 30, w: 20, h: 140 },
  structures: { x: 210, y: 40, w: 60, h: 40 },
  surface: { x: 40, y: 40, w: 160, h: 100 },
  drainage: { x: 40, y: 150, w: 250, h: 20 },
};

export default function RfRoofMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = rfZones.find((z) => z.id === activeId);

  return (
    <section id="roof-map" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Where did the change start?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Tap a part of the rooftop.
          </h2>
          <p className="mt-4 text-ink-600">
            A generic top-down layout — not a plan of any specific property.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-md border border-ink-900/10 bg-concrete-100 p-3">
          <svg viewBox="0 0 300 180" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="300" height="180" fill="#eae7de" />
            {rfZones.map((z) => {
              const box = layout[z.id];
              const isActive = activeId === z.id;
              return (
                <rect
                  key={z.id}
                  x={box.x}
                  y={box.y}
                  width={box.w}
                  height={box.h}
                  fill={isActive ? "#4a9797" : "#c4c0b4"}
                  fillOpacity={isActive ? 0.55 : 1}
                  stroke={isActive ? "#1f5c5c" : "#78746a"}
                  strokeWidth={isActive ? 2.2 : 1}
                  style={{ transition: "fill-opacity 200ms" }}
                />
              );
            })}
          </svg>

          {rfZones.map((z) => {
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
                  top: `${(box.y / 180) * 100}%`,
                  width: `${(box.w / 300) * 100}%`,
                  height: `${(box.h / 180) * 100}%`,
                }}
                className="focus-ring absolute"
                aria-label={z.label}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-2xl">
          {active ? (
            <div key={active.id} className="animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.description}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I've noticed a change near the ${active.label.toLowerCase()} of my roof. `)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700"
              >
                Send us a photo
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : (
            <p className="text-center text-sm text-ink-500">Select a part of the rooftop to learn more.</p>
          )}
        </div>
      </div>
    </section>
  );
}

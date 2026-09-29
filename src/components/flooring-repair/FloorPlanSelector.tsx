"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { flRoomContexts, type FlRoomContext } from "@/lib/flooring-repair";

const layout: Record<string, { x: number; y: number; w: number; h: number }> = {
  living: { x: 10, y: 10, w: 140, h: 100 },
  bedroom: { x: 160, y: 10, w: 100, h: 60 },
  kitchen: { x: 160, y: 80, w: 100, h: 60 },
  bathroom: { x: 270, y: 10, w: 60, h: 60 },
  entry: { x: 270, y: 80, w: 60, h: 60 },
  other: { x: 10, y: 120, w: 320, h: 40 },
};

export default function FloorPlanSelector() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const count = selected.size;
  const selectedLabels = flRoomContexts.filter((r) => selected.has(r.id)).map((r) => r.label);

  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">More than one area?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Which areas need attention?
          </h2>
          <p className="mt-4 text-ink-600">Tap every room where you&rsquo;ve noticed a flooring problem.</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-md border border-concrete-900/10 bg-concrete-100 p-3">
          <svg viewBox="0 0 340 170" className="h-auto w-full" aria-hidden="true">
            {flRoomContexts.map((room: FlRoomContext) => {
              const box = layout[room.id];
              const isSelected = selected.has(room.id);
              return (
                <g key={room.id}>
                  <rect
                    x={box.x}
                    y={box.y}
                    width={box.w}
                    height={box.h}
                    fill={isSelected ? "#b8916c" : "url(#fl-tile)"}
                    fillOpacity={isSelected ? 0.5 : 1}
                    stroke={isSelected ? "#7a5a3f" : "#78746a"}
                    strokeWidth={isSelected ? 2.4 : 1}
                  />
                  <text x={box.x + box.w / 2} y={box.y + box.h / 2} textAnchor="middle" fontSize="11" fill="#35332e" fontWeight={isSelected ? 700 : 500}>
                    {room.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {flRoomContexts.map((room: FlRoomContext) => {
            const box = layout[room.id];
            const isSelected = selected.has(room.id);
            return (
              <button
                key={room.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggle(room.id)}
                style={{
                  left: `${(box.x / 340) * 100}%`,
                  top: `${(box.y / 170) * 100}%`,
                  width: `${(box.w / 340) * 100}%`,
                  height: `${(box.h / 170) * 100}%`,
                }}
                className="focus-ring absolute"
                aria-label={room.label}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-between gap-4 rounded-md border border-concrete-900/10 bg-sand-50 px-5 py-4">
          <p className="text-sm font-medium text-ink-800" aria-live="polite">
            {count === 0 ? "No areas selected yet" : `Areas selected: ${count}`}
          </p>
          <a
            href={buildWhatsAppLink(
              count > 0
                ? `Hello Dammam Home Solutions, I have flooring issues in these areas: ${selectedLabels.join(", ")}. Here's what I've noticed: `
                : "Hello Dammam Home Solutions, I have a flooring issue I'd like to report. "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Flooring Request
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-xs text-ink-500">
          This is a simple way to show us which areas are affected — not a booking system.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const cabinets = Array.from({ length: 6 }, (_, i) => `cabinet-${i + 1}`);

export default function KcMultiCabinetSelector() {
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

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">More than one issue?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            More than one cabinet needs attention?
          </h2>
          <p className="mt-4 text-ink-600">
            Tap every cabinet or drawer that has a problem, then send us the summary.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-2 rounded-md border border-walnut-900/10 bg-sand-50 p-3">
          {cabinets.map((id, i) => {
            const isSelected = selected.has(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => toggle(id)}
                aria-pressed={isSelected}
                aria-label={`Cabinet ${i + 1}${isSelected ? ", selected" : ""}`}
                className="focus-ring relative h-20 rounded-sm border shadow-sm transition-all sm:h-24"
                style={{
                  background: i < 3 ? "linear-gradient(135deg, #a67c5b, #6b4a35)" : "linear-gradient(135deg, #8a6248, #513825)",
                  borderColor: isSelected ? "#7fa0b0" : "rgba(61,43,31,0.25)",
                  borderWidth: isSelected ? 2 : 1,
                  boxShadow: isSelected ? "0 0 0 3px rgba(127,160,176,0.35)" : undefined,
                  transform: isSelected ? "scale(0.97)" : "scale(1)",
                }}
              >
                <span className="absolute right-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-steel-100" />
                {isSelected && (
                  <span className="absolute left-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-glass-500 text-[10px] font-bold text-ink-950">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-between gap-4 rounded-md border border-walnut-900/10 bg-sand-50 px-5 py-4">
          <p className="text-sm font-medium text-ink-800" aria-live="polite">
            {count === 0 ? "No cabinets selected yet" : `${count} area${count === 1 ? "" : "s"} selected`}
          </p>
          <a
            href={buildWhatsAppLink(
              count > 0
                ? `Hello Dammam Home Solutions, I have ${count} cabinet area${count === 1 ? "" : "s"} in my kitchen that need attention. Here's what I've noticed: `
                : "Hello Dammam Home Solutions, I have a few cabinet areas in my kitchen that need attention. "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Kitchen Repair Request
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-xs text-ink-500">
          This is a simple way to show us which areas need attention — not a booking system.
        </p>
      </div>
    </section>
  );
}

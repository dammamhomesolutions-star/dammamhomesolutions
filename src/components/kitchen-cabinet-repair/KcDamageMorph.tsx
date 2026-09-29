"use client";

import { useState } from "react";
import { kcDamageTypes, type KcDamageId } from "@/lib/kitchen-cabinet-repair";

export default function KcDamageMorph() {
  const [activeId, setActiveId] = useState<KcDamageId>("edge");

  const panelTransform =
    activeId === "door" ? "rotate(-3deg) translateX(-4px)" : activeId === "hinge" ? "rotate(2deg) translateY(3px)" : "none";

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">One cabinet, several conditions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The same cabinet, different problems.
          </h2>
        </div>

        <div role="group" aria-label="Damage type" className="mt-8 flex flex-wrap justify-center gap-2">
          {kcDamageTypes.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={activeId === d.id}
              onClick={() => setActiveId(d.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeId === d.id ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-walnut-900/15 text-ink-700 hover:border-walnut-600"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-xs justify-center overflow-visible rounded-sm border border-walnut-900/10 bg-sand-50 p-8">
          <div
            className="relative h-56 w-40 rounded-sm border border-walnut-900/30 shadow-md transition-transform duration-500"
            style={{ background: "linear-gradient(135deg, #a67c5b, #6b4a35)", transform: panelTransform }}
          >
            {/* handle, loosens for the handle case */}
            <span
              className="absolute right-3 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full bg-steel-100 transition-transform duration-500"
              style={{ transform: activeId === "handle" ? "translateY(-40%) rotate(22deg)" : "translateY(-50%) rotate(0deg)" }}
            />

            {/* edge chip */}
            {activeId === "edge" && (
              <span
                className="absolute -right-1 top-6 h-6 w-4 bg-sand-100"
                style={{ clipPath: "polygon(0 0, 100% 30%, 60% 100%, 0 70%)" }}
              />
            )}

            {/* surface damage */}
            {activeId === "surface" && (
              <span
                className="absolute left-6 top-8 h-14 w-14 rounded-sm"
                style={{ background: "repeating-linear-gradient(135deg, #94472a, #94472a 2px, transparent 2px, transparent 6px)", opacity: 0.75 }}
              />
            )}

            {/* hinge markers, highlight for hinge/door cases */}
            <span
              className="absolute -left-1 top-8 h-6 w-3 rounded-sm border border-steel-900/40"
              style={{ background: "#838d96", opacity: activeId === "hinge" || activeId === "door" ? 1 : 0.4 }}
            />
            <span
              className="absolute -left-1 bottom-8 h-6 w-3 rounded-sm border border-steel-900/40"
              style={{ background: "#838d96", opacity: activeId === "hinge" || activeId === "door" ? 1 : 0.4 }}
            />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-500">
          Illustrative condition changes — actual damage varies by cabinet.
        </p>
      </div>
    </section>
  );
}

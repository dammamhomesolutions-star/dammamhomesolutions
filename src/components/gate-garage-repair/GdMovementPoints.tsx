"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gdMovementPoints } from "@/lib/gate-garage-repair";

export default function GdMovementPoints() {
  const [activeId, setActiveId] = useState(gdMovementPoints[0].id);
  const shouldReduceMotion = useReducedMotion();
  const active = gdMovementPoints.find((p) => p.id === activeId)!;

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Along the path</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where does the movement change?
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-md border border-ink-900/10 bg-sand-100 p-6">
          <svg viewBox="0 0 320 160" className="h-auto w-full" aria-hidden="true">
            <rect x="30" y="10" width="180" height="140" fill="none" stroke="#8e97a8" strokeWidth="3" />
            {shouldReduceMotion ? (
              <rect x="44" y="90" width="152" height="46" fill="url(#gd-panel-dark)" />
            ) : (
              <motion.rect
                x="44"
                width="152"
                height="46"
                fill="url(#gd-panel-dark)"
                animate={{ y: [16, 100, 16] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* travel gauge with 4 tick points (decorative — real controls are the HTML buttons below) */}
            <line x1="240" y1="16" x2="240" y2="146" stroke="#b4bac6" strokeWidth="2" />
            {gdMovementPoints.map((p, i) => {
              const y = 16 + (i / (gdMovementPoints.length - 1)) * 130;
              const isActive = activeId === p.id;
              return (
                <circle
                  key={p.id}
                  cx="240"
                  cy={y}
                  r={isActive ? 7 : 5}
                  fill={isActive ? "#94472a" : "#69748a"}
                  style={{ transition: "r 200ms, fill 200ms" }}
                />
              );
            })}
          </svg>

          {gdMovementPoints.map((p, i) => {
            const topPct = (16 / 160) * 100 + (i / (gdMovementPoints.length - 1)) * ((130 / 160) * 100);
            const isActive = activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(p.id)}
                style={{ left: "75%", top: `${topPct}%` }}
                className={`focus-ring absolute -translate-y-1/2 rounded-full px-2 py-1 text-left text-xs font-medium transition-colors ${
                  isActive ? "text-rust-700" : "text-ink-600 hover:text-rust-700"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mx-auto mt-6 max-w-lg animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rust-700">What you may notice — {active.label}</p>
          <ul className="mt-3 space-y-1.5">
            {active.notes.map((n) => (
              <li key={n} className="text-sm text-ink-700">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { rfZones } from "@/lib/roof-repair";

const hotspots: Record<string, { x: number; y: number }> = {
  edge: { x: 40, y: 30 },
  joints: { x: 150, y: 45 },
  structures: { x: 220, y: 60 },
  surface: { x: 130, y: 100 },
  drainage: { x: 230, y: 140 },
};

export default function RfInspectionMode() {
  const [inspecting, setInspecting] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const open = rfZones.find((z) => z.id === openId);

  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="section-label !text-teal-300">Inspection mode</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Switch it on to see what an inspection looks for.
            </h2>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={inspecting}
            onClick={() => {
              setInspecting((v) => !v);
              setOpenId(null);
            }}
            className={`focus-ring flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              inspecting ? "border-teal-500 bg-teal-700 text-sand-50" : "border-sand-50/20 text-ink-300"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${inspecting ? "bg-teal-300" : "bg-ink-500"}`}
            />
            Inspection mode {inspecting ? "on" : "off"}
          </button>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-md border border-sand-50/10 bg-ink-900 p-4">
          <svg viewBox="0 0 280 170" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="280" height="170" fill="#2b2f33" />
            <rect x="10" y="10" width="260" height="150" fill="#464339" />
            <rect x="10" y="10" width="260" height="150" fill="none" stroke="#5c584f" strokeWidth="2" />
            <rect x="190" y="40" width="50" height="34" fill="#35332e" />

            {inspecting && !shouldReduceMotion && (
              <rect x="0" y="0" width="280" height="170" fill="#8fc4c4" filter="url(#rf-noise)" style={{ opacity: 0.05 }} />
            )}
          </svg>

          {rfZones.map((z) => {
            const pos = hotspots[z.id];
            const isOpen = openId === z.id;
            return (
              <AnimatePresence key={z.id}>
                {inspecting && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    onClick={() => setOpenId(isOpen ? null : z.id)}
                    aria-pressed={isOpen}
                    aria-label={z.label}
                    style={{ left: `${(pos.x / 280) * 100}%`, top: `${(pos.y / 170) * 100}%` }}
                    className={`focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                      isOpen ? "border-teal-300 bg-teal-500" : "border-teal-500/70 bg-teal-700/70"
                    }`}
                  >
                    <span className={`block h-3.5 w-3.5 rounded-full ${!shouldReduceMotion ? "animate-pulse" : ""}`} />
                  </motion.button>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-2xl min-h-[3.5rem]">
          {inspecting && open ? (
            <div key={open.id} className="animate-fadeIn rounded-md border border-sand-50/10 bg-ink-900/60 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-300">{open.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{open.description}</p>
            </div>
          ) : (
            <p className="text-center text-sm text-ink-400">
              {inspecting ? "Tap a marker to see what it's about." : "Turn on inspection mode to reveal marked areas."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

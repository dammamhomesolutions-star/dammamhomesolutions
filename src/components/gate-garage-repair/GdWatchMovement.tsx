"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gdMovementStates, type GdMovementId } from "@/lib/gate-garage-repair";

const TRACK_TOP = 20;
const TRACK_BOTTOM = 130;

const motionConfig: Record<
  GdMovementId,
  { y: number[]; times?: number[]; duration: number; x?: number[]; rotate?: number[] }
> = {
  normal: { y: [TRACK_TOP, TRACK_BOTTOM, TRACK_TOP], duration: 4.5 },
  sticking: {
    y: [TRACK_TOP, TRACK_TOP + 45, TRACK_TOP + 45, TRACK_BOTTOM, TRACK_TOP],
    times: [0, 0.35, 0.55, 0.8, 1],
    duration: 5.5,
  },
  misaligned: {
    y: [TRACK_TOP, TRACK_BOTTOM, TRACK_TOP],
    rotate: [0, 2.2, 0],
    duration: 4.5,
  },
  noisy: {
    y: [TRACK_TOP, TRACK_BOTTOM, TRACK_TOP],
    x: [0, 0, 1.5, -1.5, 1, 0, 0],
    duration: 4.5,
  },
  damaged: { y: [TRACK_TOP, TRACK_BOTTOM, TRACK_TOP], duration: 4.5 },
};

export default function GdWatchMovement() {
  const [activeId, setActiveId] = useState<GdMovementId>("normal");
  const shouldReduceMotion = useReducedMotion();
  const active = gdMovementStates.find((s) => s.id === activeId)!;
  const config = motionConfig[activeId];

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Watch the movement</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            An interactive engineering diagram.
          </h2>
        </div>

        <div role="group" aria-label="Movement state" className="mt-8 flex flex-wrap gap-2">
          {gdMovementStates.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={activeId === s.id}
              onClick={() => setActiveId(s.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.04em] transition-colors ${
                activeId === s.id ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-xs overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-6">
          <svg viewBox="0 0 160 170" className="h-auto w-full" aria-hidden="true">
            <rect x="10" y="10" width="140" height="150" fill="none" stroke="#8e97a8" strokeWidth="3" />
            <line x1="18" y1="16" x2="18" y2="154" stroke="#b4bac6" strokeWidth="2" strokeDasharray="3 4" />
            <line x1="142" y1="16" x2="142" y2="154" stroke="#b4bac6" strokeWidth="2" strokeDasharray="3 4" />

            {shouldReduceMotion ? (
              <rect x="24" y={config.y[0]} width="112" height="34" fill="url(#gd-panel-dark)" />
            ) : (
              <motion.g
                animate={{ y: config.y, x: config.x, rotate: config.rotate }}
                transition={{ duration: config.duration, times: config.times, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="24" y="0" width="112" height="34" fill="url(#gd-panel-dark)" />
                {activeId === "damaged" && (
                  <path d="M60 0 L80 0 L74 18 L92 34 L60 34 Z" fill="#94472a" opacity="0.85" />
                )}
                {activeId === "noisy" && (
                  <>
                    <circle cx="24" cy="8" r="3" fill="#c76a3f" />
                    <circle cx="136" cy="8" r="3" fill="#c76a3f" />
                  </>
                )}
              </motion.g>
            )}
          </svg>
        </div>

        <div key={active.id} className="mx-auto mt-6 max-w-md animate-fadeIn text-center">
          <p className="text-sm leading-relaxed text-ink-700">{active.note}</p>
        </div>
      </div>
    </section>
  );
}

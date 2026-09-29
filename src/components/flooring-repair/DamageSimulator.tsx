"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { flDamageTypes, type FlDamageId } from "@/lib/flooring-repair";

export default function DamageSimulator() {
  const [activeId, setActiveId] = useState<FlDamageId>("crack");

  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">One surface, several conditions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The same floor, different problems.
          </h2>
        </div>

        <div role="group" aria-label="Damage type" className="mt-8 flex flex-wrap justify-center gap-2">
          {flDamageTypes.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={activeId === d.id}
              onClick={() => setActiveId(d.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeId === d.id ? "border-clay-700 bg-clay-700 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-md overflow-hidden rounded-md border border-concrete-900/10 bg-concrete-100 p-6">
          <div
            className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm"
            style={{ transform: activeId === "uneven" ? "perspective(400px) rotateX(6deg)" : "none", transition: "transform 500ms ease-out" }}
          >
            <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="240" height="240" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`v${i}`} x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="240" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={(i + 1) * 40} x2="240" y2={(i + 1) * 40} stroke="#9a968a" strokeWidth="1" opacity="0.5" />
              ))}

              {activeId === "crack" && (
                <motion.path
                  key="crack"
                  d="M40 60 L90 110 L75 135 L130 170 L160 200"
                  fill="none"
                  stroke="#464339"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
                />
              )}

              {activeId === "chip" && (
                <motion.path
                  key="chip"
                  d="M180 20 L220 20 L220 55 L195 60 Z"
                  fill="#78746a"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ transformOrigin: "200px 40px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}

              {activeId === "wear" && (
                <motion.ellipse
                  key="wear"
                  cx="120"
                  cy="150"
                  rx="70"
                  ry="40"
                  fill="#78746a"
                  filter="url(#fl-worn-noise)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.7 }}
                />
              )}

              {activeId === "stain" && (
                <motion.ellipse
                  key="stain"
                  cx="150"
                  cy="90"
                  rx="45"
                  ry="32"
                  fill="#9c7752"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.8 }}
                />
              )}

              {activeId === "edge" && (
                <motion.rect
                  key="edge"
                  x="0"
                  y="0"
                  width="240"
                  height="14"
                  fill="#b8916c"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </svg>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-500">
          Illustrative condition changes — actual damage varies by surface and material.
        </p>
      </div>
    </section>
  );
}

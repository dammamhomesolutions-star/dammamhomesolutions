"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const conditions = [
  { id: "crack", label: "Crack" },
  { id: "stain", label: "Stain" },
  { id: "hole", label: "Hole" },
  { id: "sagging", label: "Sagging" },
  { id: "surface", label: "Surface damage" },
] as const;

type ConditionId = (typeof conditions)[number]["id"];

function ConditionOverlay({ id }: { id: ConditionId }) {
  if (id === "crack") {
    return (
      <motion.path
        key="crack"
        d="M60 40 L100 80 L85 100 L125 130 L140 165"
        fill="none"
        stroke="#333a49"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    );
  }
  if (id === "stain") {
    return (
      <motion.ellipse
        key="stain"
        cx="110"
        cy="110"
        rx="58"
        ry="40"
        fill="url(#ceiling-stain)"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "110px 110px" }}
      />
    );
  }
  if (id === "hole") {
    return (
      <motion.g key="hole" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <motion.rect
          x="65"
          y="75"
          width="90"
          height="70"
          fill="#8e97a8"
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "110px 110px" }}
        />
        <rect x="65" y="75" width="90" height="70" fill="none" stroke="#4a5468" strokeWidth="1.4" strokeDasharray="5 4" />
      </motion.g>
    );
  }
  if (id === "sagging") {
    return (
      <motion.path
        key="sagging"
        d="M50 70 Q110 70 170 70 L170 95 Q110 95 50 95 Z"
        fill="#ded2ba"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85, d: "M50 70 Q110 145 170 70 L170 92 Q110 160 50 92 Z" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    );
  }
  return (
    <motion.rect
      key="surface"
      x="30"
      y="30"
      width="160"
      height="160"
      fill="#c9bfa8"
      filter="url(#ceiling-noise)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    />
  );
}

export default function CrMorphGallery() {
  const [activeId, setActiveId] = useState<ConditionId>("crack");

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Damage simulator</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The same ceiling, showing different conditions.
          </h2>
        </div>

        <div className="mx-auto mt-10 aspect-square w-full max-w-md overflow-hidden rounded-md border border-ink-900/10">
          <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
            <rect x="0" y="0" width="220" height="220" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
            <circle cx="180" cy="35" r="13" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.1" />
            <circle cx="180" cy="35" r="7" fill="#faf8f4" stroke="#8e97a8" strokeWidth="0.7" />
            <AnimatePresence mode="wait">
              <ConditionOverlay key={activeId} id={activeId} />
            </AnimatePresence>
          </svg>
        </div>

        <div role="group" aria-label="Ceiling condition" className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2.5">
          {conditions.map((cond) => {
            const isActive = cond.id === activeId;
            return (
              <button
                key={cond.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(cond.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-rust-700 bg-rust-700 text-sand-50"
                    : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                }`}
              >
                {cond.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

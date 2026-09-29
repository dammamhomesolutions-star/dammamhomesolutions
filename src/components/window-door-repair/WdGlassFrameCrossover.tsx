"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const chain = [
  { id: "glass", label: "Glass", note: "Cracks, chips or surface damage." },
  { id: "frame", label: "Frame", note: "Alignment, wear or structural condition." },
  { id: "seal", label: "Seal", note: "Gaps that affect performance." },
  { id: "hardware", label: "Hardware", note: "Handles, hinges, locks and latches." },
];

export default function WdGlassFrameCrossover() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setActive((v) => (v + 1) % chain.length), 2200);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section className="border-b border-glass-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">One connected system</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Glass is only one part of the assembly.
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">
          {chain.map((node, i) => {
            const isActive = active === i;
            return (
              <div key={node.id} className="flex items-center gap-2 sm:gap-0">
                <div
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-500 ${
                    isActive
                      ? "border-glass-700 bg-glass-700 text-sand-50"
                      : "border-glass-900/15 bg-sand-50 text-ink-800"
                  }`}
                >
                  {node.label}
                </div>
                {i < chain.length - 1 && (
                  <svg width="64" height="20" viewBox="0 0 64 20" className="mx-2 hidden sm:block" aria-hidden="true">
                    <motion.line
                      x1="2"
                      y1="10"
                      x2="62"
                      y2="10"
                      stroke="#7fa0b0"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        <p key={chain[active].id} className="mx-auto mt-8 max-w-xl animate-fadeIn text-center text-ink-600">
          {chain[active].note}
        </p>
      </div>
    </section>
  );
}

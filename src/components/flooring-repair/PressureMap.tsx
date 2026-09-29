"use client";

import { motion, useReducedMotion } from "framer-motion";

const PATH = [
  { x: 15, y: 78 },
  { x: 32, y: 60 },
  { x: 50, y: 68 },
  { x: 66, y: 45 },
  { x: 50, y: 68 },
  { x: 32, y: 60 },
  { x: 15, y: 78 },
];

export default function PressureMap() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-concrete-900/10 bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-300">Everyday use</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Everyday movement changes how we experience a floor.
          </h2>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-md border border-concrete-500/20 bg-concrete-900">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            <rect x="0" y="0" width="100" height="100" fill="url(#fl-tile-dark)" />
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2="100" stroke="#9a968a" strokeWidth="0.2" opacity="0.4" />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={(i + 1) * 10} x2="100" y2={(i + 1) * 10} stroke="#9a968a" strokeWidth="0.2" opacity="0.4" />
            ))}

            {/* illustrative walking path */}
            <path
              d={`M${PATH.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
              fill="none"
              stroke="#b8916c"
              strokeWidth="0.5"
              strokeDasharray="1.5 1.5"
              opacity="0.5"
            />

            {/* problem zone that highlights when crossed */}
            <circle cx="66" cy="45" r="7" fill="none" stroke="#b3562f" strokeWidth="0.6" opacity="0.7" />
          </svg>

          {!shouldReduceMotion ? (
            <motion.div
              aria-hidden="true"
              className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundImage: "radial-gradient(circle, rgba(184,145,108,0.4), transparent 70%)" }}
              animate={{
                left: PATH.map((p) => `${p.x}%`),
                top: PATH.map((p) => `${p.y}%`),
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: "66%", top: "45%", backgroundImage: "radial-gradient(circle, rgba(184,145,108,0.4), transparent 70%)" }}
            />
          )}

          <span className="absolute bottom-3 left-4 text-xs font-medium text-clay-300">Illustrative visualization</span>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-steel-300">
          A floor is a surface people interact with constantly — this is a
          conceptual illustration, not a measurement of actual pressure.
        </p>
      </div>
    </section>
  );
}

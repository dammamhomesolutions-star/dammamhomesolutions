"use client";

import { motion } from "framer-motion";

const steps = ["Surface mark", "Affected area", "Repair assessment", "Surface restoration"];

const blobs = [
  { cx: 110, cy: 110, rx: 60, ry: 42, delay: 0 },
  { cx: 128, cy: 96, rx: 34, ry: 24, delay: 0.25 },
  { cx: 92, cy: 128, rx: 26, ry: 18, delay: 0.45 },
];

export default function CrWaterDamage() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Water damage</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A moisture mark develops gradually, not all at once.
          </h2>
        </div>

        <div className="mx-auto mt-10 aspect-[4/3] w-full max-w-lg overflow-hidden rounded-md border border-ink-900/10">
          <svg viewBox="0 0 220 165" className="h-full w-full" aria-hidden="true">
            <rect x="0" y="0" width="220" height="165" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
            {blobs.map((b, i) => (
              <motion.ellipse
                key={i}
                cx={b.cx}
                cy={b.cy}
                rx={b.rx}
                ry={b.ry}
                fill="url(#ceiling-stain)"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.1, delay: b.delay, ease: "easeOut" }}
                style={{ transformOrigin: `${b.cx}px ${b.cy}px` }}
              />
            ))}
          </svg>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {steps.map((step, i) => (
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
              className="flex items-center gap-2 text-[15px] font-medium text-ink-800"
            >
              {step}
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="text-ink-400">
                  →
                </span>
              )}
            </motion.span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-500">
          Not every mark means an active leak — the repair follows the
          assessment, not the other way around.
        </p>
      </div>
    </section>
  );
}

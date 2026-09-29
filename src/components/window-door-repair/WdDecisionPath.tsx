"use client";

import { motion } from "framer-motion";
import { wdDecisionSteps } from "@/lib/window-door-repair";

const outcomes = [
  { label: "Repair", x: 60 },
  { label: "Component replacement", x: 200 },
  { label: "Further assessment", x: 340 },
];

export default function WdDecisionPath() {
  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Repair or replace?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Repair the part. Replace the part. Or assess further.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ol className="space-y-3">
            {wdDecisionSteps.map((step, i) => (
              <li key={step.label} className="flex items-baseline gap-3 text-sm text-ink-700">
                <span className="font-mono text-xs text-glass-500">{String(i + 1).padStart(2, "0")}</span>
                {step.label}
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-md border border-glass-900/10 bg-glass-100/50 p-6">
            <svg viewBox="0 0 400 180" className="h-auto w-full" aria-hidden="true">
              <circle cx="200" cy="20" r="6" fill="#3d5a6b" />
              {outcomes.map((o, i) => (
                <motion.path
                  key={o.label}
                  d={`M200 26 L${o.x} 100`}
                  fill="none"
                  stroke="#7fa0b0"
                  strokeWidth="1.4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                />
              ))}
              {outcomes.map((o, i) => (
                <motion.g
                  key={o.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                >
                  <rect x={o.x - 55} y="100" width="110" height="52" rx="6" fill="#eef3f5" stroke="#5b7d8f" strokeWidth="1.2" />
                  <text x={o.x} y="130" textAnchor="middle" fontSize="10.5" fill="#1c2733" fontWeight="600">
                    {o.label.length > 14 ? o.label.split(" ")[0] : o.label}
                  </text>
                  {o.label.split(" ").length > 1 && (
                    <text x={o.x} y="144" textAnchor="middle" fontSize="10.5" fill="#1c2733" fontWeight="600">
                      {o.label.split(" ").slice(1).join(" ")}
                    </text>
                  )}
                </motion.g>
              ))}
            </svg>

            <div className="mt-4 rounded-md border border-glass-900/10 bg-sand-50 p-5">
              <p className="font-medium text-ink-950">Assessment determines the approach.</p>
              <p className="mt-1.5 text-sm text-ink-600">
                Not every component is repairable, and we don&rsquo;t
                automatically recommend replacement before the item is seen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

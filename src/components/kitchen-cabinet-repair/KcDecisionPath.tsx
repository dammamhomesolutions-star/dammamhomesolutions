"use client";

import { motion } from "framer-motion";
import { kcDecisionSteps } from "@/lib/kitchen-cabinet-repair";

export default function KcDecisionPath() {
  return (
    <section className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Repair or replace?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not every damaged cabinet needs replacing.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap items-stretch justify-center gap-y-6">
          {kcDecisionSteps.map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="w-36 rounded-md border border-walnut-900/15 bg-sand-100/60 px-3 py-4 text-center sm:w-40"
              >
                <span className="font-mono text-xs text-walnut-500">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-medium text-ink-800">{step}</p>
              </motion.div>
              {i < kcDecisionSteps.length - 1 && (
                <svg width="28" height="16" viewBox="0 0 28 16" className="mx-1 hidden shrink-0 sm:block" aria-hidden="true">
                  <motion.line
                    x1="2"
                    y1="8"
                    x2="26"
                    y2="8"
                    stroke="#8a6248"
                    strokeWidth="1.6"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-md border border-walnut-900/10 bg-ink-950 p-6 text-center">
          <p className="font-medium text-sand-50">
            The appropriate repair depends on the actual condition and scope of the job.
          </p>
          <p className="mt-1.5 text-sm text-steel-300">
            We don&rsquo;t promise every component is repairable, and we
            don&rsquo;t automatically recommend replacement before it&rsquo;s seen.
          </p>
        </div>
      </div>
    </section>
  );
}

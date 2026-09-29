"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Scenario = "idle" | "no-leak" | "leak";

const copy: Record<Scenario, { label: string; note: string }> = {
  idle: {
    label: "Turn off every tap and appliance, then watch the small dial.",
    note: "This is a simple self-check you can try before requesting a visit.",
  },
  "no-leak": {
    label: "The small leak-indicator dial stays still.",
    note: "If it doesn't move at all with everything off, that's a reassuring sign.",
  },
  leak: {
    label: "The small leak-indicator dial keeps turning.",
    note: "If it keeps moving even with everything off, water is flowing somewhere — worth having assessed.",
  },
};

export default function WlMeterTest() {
  const [scenario, setScenario] = useState<Scenario>("idle");
  const shouldReduceMotion = useReducedMotion();
  const spinning = scenario === "leak";

  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-300">Try the water meter self-test</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            One check you can do before calling anyone.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Most water meters have a small dial that only moves when water is
            flowing. Try the two scenarios below to see what that looks like.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-md border border-sand-50/10 bg-ink-900 p-6">
            <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden="true">
              <title>A water meter dial with a small leak-indicator wheel that only spins when water is flowing</title>
              <circle cx="100" cy="100" r="88" fill="#232833" stroke="#4a5468" strokeWidth="3" />
              <circle cx="100" cy="100" r="70" fill="#191d25" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const x1 = 100 + Math.cos(angle) * 62;
                const y1 = 100 + Math.sin(angle) * 62;
                const x2 = 100 + Math.cos(angle) * 68;
                const y2 = 100 + Math.sin(angle) * 68;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#69748a" strokeWidth="1.6" />;
              })}

              {/* small leak-indicator dial */}
              <circle cx="100" cy="100" r="20" fill="#2b2f33" stroke="#78746a" strokeWidth="1.4" />
              {shouldReduceMotion ? (
                <line x1="100" y1="100" x2="100" y2="84" stroke={spinning ? "#c98246" : "#69748a"} strokeWidth="2" strokeLinecap="round" />
              ) : (
                <motion.line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="84"
                  stroke={spinning ? "#c98246" : "#69748a"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ transformOrigin: "100px 100px" }}
                  animate={{ rotate: spinning ? 360 : 0 }}
                  transition={spinning ? { duration: 1.4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
                />
              )}

              <text x="100" y="150" textAnchor="middle" fontSize="9" fill="#69748a" fontFamily="monospace">
                LEAK INDICATOR
              </text>
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Try a scenario" className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={scenario === "no-leak"}
                onClick={() => setScenario("no-leak")}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  scenario === "no-leak" ? "border-copper-500 bg-copper-700 text-sand-50" : "border-sand-50/20 text-ink-300 hover:border-copper-500"
                }`}
              >
                Try it: everything off, no leak
              </button>
              <button
                type="button"
                aria-pressed={scenario === "leak"}
                onClick={() => setScenario("leak")}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  scenario === "leak" ? "border-copper-500 bg-copper-700 text-sand-50" : "border-sand-50/20 text-ink-300 hover:border-copper-500"
                }`}
              >
                Try it: everything off, hidden leak
              </button>
            </div>

            <div key={scenario} className="mt-6 max-w-md animate-fadeIn rounded-md border border-sand-50/10 bg-ink-900/60 p-6">
              <p className="text-sm font-semibold text-sand-50">{copy[scenario].label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{copy[scenario].note}</p>
            </div>

            <p className="mt-4 max-w-md text-xs text-ink-500">
              An illustrative simulation — meter designs vary, and this isn&rsquo;t a substitute for an in-person assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WdGlassReflection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-glass-900/10 bg-glass-900 py-20 sm:py-24">
      <div className="container-edge">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label !text-glass-300">Material quality</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Glass isn&rsquo;t just a pane. It&rsquo;s a surface.
          </h2>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-md border border-glass-500/20">
          {/* blurred architectural backdrop behind the glass */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-glass-700/60 via-glass-800 to-ink-950"
            style={{ filter: "blur(2px)" }}
          />
          <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <rect x="0" y="0" width="400" height="225" fill="url(#wd-frame-dark)" opacity="0.5" />
            <rect x="40" y="30" width="120" height="165" fill="#0f1720" opacity="0.4" />
            <rect x="200" y="30" width="160" height="165" fill="#0f1720" opacity="0.25" />
          </svg>

          {/* the glass pane itself */}
          <div className="absolute inset-6 overflow-hidden rounded-sm border border-white/10 bg-glass-500/10 backdrop-blur-[1px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5" />
            {/* edge reflections */}
            <div className="absolute inset-y-0 left-0 w-px bg-white/30" />
            <div className="absolute inset-x-0 top-0 h-px bg-white/25" />

            {/* moving light sweep */}
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                style={{ mixBlendMode: "screen" }}
                initial={{ x: "-120%" }}
                whileInView={{ x: "220%" }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
              />
            )}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-glass-300">
          Illustrative surface rendering — not a specific project.
        </p>
      </div>
    </section>
  );
}

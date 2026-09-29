"use client";

import { motion, useReducedMotion } from "framer-motion";

const TRACK_PATH = "M60 190 L60 60 Q60 40 80 40 L200 40";

const panels = [
  { id: "p1", closed: "2%", open: "62%" },
  { id: "p2", closed: "18%", open: "74%" },
  { id: "p3", closed: "34%", open: "86%" },
  { id: "p4", closed: "50%", open: "98%" },
];

export default function GdSectionalAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">How a sectional door moves</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Several connected panels, moving as one.
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-md overflow-hidden rounded-md border border-ink-900/10 bg-sand-100 p-6">
          <svg viewBox="0 0 220 210" className="h-auto w-full" aria-hidden="true">
            <path d={TRACK_PATH} fill="none" stroke="#b4bac6" strokeWidth="2" strokeDasharray="3 4" />
            <rect x="30" y="10" width="180" height="190" fill="none" stroke="#8e97a8" strokeWidth="2" opacity="0.5" />

            {panels.map((panel, i) =>
              shouldReduceMotion ? (
                <rect
                  key={panel.id}
                  width="26"
                  height="18"
                  rx="1.5"
                  fill="url(#gd-panel)"
                  style={{ offsetPath: `path('${TRACK_PATH}')`, offsetDistance: panel.open, offsetRotate: "0deg" }}
                />
              ) : (
                <motion.rect
                  key={panel.id}
                  width="26"
                  height="18"
                  rx="1.5"
                  fill="url(#gd-panel)"
                  style={{ offsetPath: `path('${TRACK_PATH}')`, offsetRotate: "0deg" }}
                  animate={{ offsetDistance: [panel.closed, panel.open, panel.closed] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                />
              )
            )}

            <text x="60" y="205" fontSize="8" fill="#69748a" textAnchor="middle">track</text>
            <text x="30" y="120" fontSize="8" fill="#69748a">panels</text>
            <text x="150" y="34" fontSize="8" fill="#69748a" textAnchor="middle">rollers</text>
            <text x="95" y="120" fontSize="8" fill="#69748a">hinges</text>
          </svg>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-ink-500">
          Illustrative sectional-door movement — actual mechanisms vary by manufacturer.
        </p>
      </div>
    </section>
  );
}

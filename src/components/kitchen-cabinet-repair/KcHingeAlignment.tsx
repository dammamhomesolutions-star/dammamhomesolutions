"use client";

import { useState } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function KcHingeAlignment() {
  const [value, setValue] = useState(100);
  const t = value / 100;

  const doorAngle = lerp(-9, 0, t);
  const doorSkew = lerp(4.5, 0, t);
  const gap = lerp(6, 1.5, t);
  const guideOffset = lerp(10, 0, t);
  const hingeGlow = lerp(1, 0.35, t);

  return (
    <section className="border-b border-walnut-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-steel-300">A closer look</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Alignment changes everything.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-steel-300">
            Move the slider to see why a cabinet door can look &ldquo;almost
            right&rdquo; but still not function properly.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-md flex-col items-center" style={{ perspective: "900px" }}>
          <svg viewBox="0 0 260 40" className="pointer-events-none absolute -top-2 h-10 w-56" aria-hidden="true">
            <line x1={130 - guideOffset} y1="0" x2={130 - guideOffset} y2="40" stroke="#666f78" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          <div className="relative flex h-56 w-40" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 rounded-sm bg-ink-900" />
            <div
              className="absolute inset-0 rounded-sm border border-walnut-900/40 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                transformOrigin: "left center",
                transform: `rotateY(${doorAngle}deg) skewY(${doorSkew}deg)`,
                marginRight: `${gap}px`,
              }}
            >
              <span
                className="absolute -left-1 top-1/4 h-7 w-3 rounded-sm border border-steel-900/50"
                style={{ background: "#838d96", boxShadow: `0 0 0 ${hingeGlow * 4}px rgba(131,141,150,${hingeGlow * 0.4})` }}
              />
              <span
                className="absolute -left-1 bottom-1/4 h-7 w-3 rounded-sm border border-steel-900/50"
                style={{ background: "#838d96", boxShadow: `0 0 0 ${hingeGlow * 4}px rgba(131,141,150,${hingeGlow * 0.4})` }}
              />
              <span className="absolute right-2 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full bg-steel-100" />
            </div>
          </div>

          <div className="mt-8 w-full max-w-xs">
            <div className="flex justify-between text-[11px] font-semibold uppercase tracking-[0.1em] text-steel-300">
              <span>Misaligned</span>
              <span>Aligned</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              aria-label="Alignment slider, misaligned to aligned"
              className="mt-2 w-full accent-glass-500"
            />
          </div>

          <p className="mt-6 max-w-xs text-center text-xs text-steel-500">
            Illustrative alignment visualization — not a DIY adjustment guide.
          </p>
        </div>
      </div>
    </section>
  );
}

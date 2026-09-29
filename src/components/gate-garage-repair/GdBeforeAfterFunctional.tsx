"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const MAX_TRAVEL = 90;
const PERIOD = 3.2;

export default function GdBeforeAfterFunctional() {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(50);
  const valueRef = useRef(50);
  const doorRef = useRef<SVGRectElement>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const tick = (time: number) => {
      const t = time / 1000;
      const roughness = (100 - valueRef.current) / 100;

      const phase = (t % PERIOD) / PERIOD;
      let p = (Math.sin(phase * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      // introduce a stutter plateau near mid-travel, proportional to roughness
      p -= roughness * 0.22 * Math.sin(p * Math.PI * 2);

      const jitterX = roughness * Math.sin(t * 45) * 2.2;

      if (doorRef.current) {
        doorRef.current.style.transform = `translate(${jitterX}px, ${-p * MAX_TRAVEL}px)`;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Try it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From interrupted movement to a smoother operating system.
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-sm overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-6">
          <svg viewBox="0 0 200 180" className="h-auto w-full" aria-hidden="true">
            <rect x="20" y="10" width="160" height="150" fill="none" stroke="#8e97a8" strokeWidth="3" />
            <line x1="28" y1="16" x2="28" y2="154" stroke="#b4bac6" strokeWidth="2" strokeDasharray="3 4" />
            <line x1="172" y1="16" x2="172" y2="154" stroke="#b4bac6" strokeWidth="2" strokeDasharray="3 4" />

            {shouldReduceMotion ? (
              <rect x="32" y="99" width="136" height="46" fill="url(#gd-panel)" filter="url(#gd-noise)" />
            ) : (
              <rect ref={doorRef} x="32" y="99" width="136" height="46" fill="url(#gd-panel)" filter="url(#gd-noise)" />
            )}
          </svg>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Adjust from interrupted to smooth movement"
            className="mt-4 w-full accent-rust-700"
          />
          <div className="mt-2 flex justify-between text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
            <span>Interrupted</span>
            <span>Smooth</span>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-sm text-ink-600">
          A live illustration, not a guaranteed result — actual outcomes depend on the specific condition of the door.
        </p>
      </div>
    </section>
  );
}

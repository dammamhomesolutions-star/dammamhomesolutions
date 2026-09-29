"use client";

import { useState } from "react";

type Mode = "normal" | "problem" | "damaged";

const CATCH_POINT = 55;

const modes: { id: Mode; label: string }[] = [
  { id: "normal", label: "Normal" },
  { id: "problem", label: "Problem" },
  { id: "damaged", label: "Damaged / misaligned" },
];

export default function KcDrawerSimulator() {
  const [mode, setMode] = useState<Mode>("normal");
  const [value, setValue] = useState(0);
  const [caught, setCaught] = useState(false);

  const handleChange = (raw: number) => {
    if (mode === "problem" && raw > CATCH_POINT) {
      setValue(CATCH_POINT);
      setCaught(true);
      window.setTimeout(() => setCaught(false), 260);
      return;
    }
    setValue(raw);
  };

  const wobble = mode === "damaged" ? Math.sin(value / 6) * 3 : 0;
  const tiltUneven = mode === "damaged" ? (value / 100) * 6 : 0;

  return (
    <section className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Try it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Pull the drawer.
          </h2>
          <p className="mt-4 text-ink-600">
            Drag the handle and feel the difference between smooth movement,
            a drawer that stops halfway, and one that moves unevenly.
          </p>
        </div>

        <div role="group" aria-label="Drawer condition" className="mt-8 flex flex-wrap justify-center gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={mode === m.id}
              onClick={() => {
                setMode(m.id);
                setValue(0);
              }}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                mode === m.id ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-walnut-900/15 text-ink-700 hover:border-walnut-600"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-xl" style={{ perspective: "1000px" }}>
          <div className="relative mx-auto h-40 w-64 sm:h-48 sm:w-80">
            <div className="absolute inset-x-6 top-3 h-full rounded-sm bg-ink-950/85" />
            <div
              className="absolute inset-x-6 top-3 h-full rounded-sm border border-walnut-900/30 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                transform: `translateZ(${value * 1.1}px) rotate(${wobble + tiltUneven}deg)`,
                transition: caught ? "transform 90ms ease-out" : "transform 60ms linear",
              }}
            >
              <span className="absolute left-1/2 top-1/2 h-2 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-100" />
            </div>
            {caught && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-ember-600">
                catches here
              </span>
            )}
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            aria-label="Pull the drawer open"
            className="mt-8 w-full accent-walnut-700"
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm font-medium text-ink-800">
          {["Assessment", "Repair", "Restored movement"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-walnut-900/15 bg-sand-100/60 px-4 py-2">{step}</span>
              {i < arr.length - 1 && <span aria-hidden="true" className="text-ink-400">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

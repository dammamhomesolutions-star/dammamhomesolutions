"use client";

import { useState } from "react";

const HINGE_X = 60;
const HINGE_Y = 180;
const GATE_LENGTH = 130;

export default function GdSwingGate() {
  const [value, setValue] = useState(0);
  const angle = -(value / 100) * 85;
  const rad = (angle * Math.PI) / 180;
  const tipX = HINGE_X + GATE_LENGTH * Math.cos(rad);
  const tipY = HINGE_Y + GATE_LENGTH * Math.sin(rad);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">From garage to gate</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A gate is a different kind of movement.
          </h2>
          <p className="mt-4 text-ink-600">Drag the control to swing the gate open and closed.</p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-lg overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 p-6">
          <svg viewBox="0 0 260 220" className="h-auto w-full" aria-hidden="true">
            {/* movement envelope */}
            <path
              d={`M ${HINGE_X} ${HINGE_Y} L ${HINGE_X + GATE_LENGTH} ${HINGE_Y} A ${GATE_LENGTH} ${GATE_LENGTH} 0 0 0 ${HINGE_X} ${HINGE_Y - GATE_LENGTH} Z`}
              fill="#c76a3f"
              opacity="0.06"
            />
            <path
              d={`M ${HINGE_X + GATE_LENGTH} ${HINGE_Y} A ${GATE_LENGTH} ${GATE_LENGTH} 0 0 0 ${HINGE_X} ${HINGE_Y - GATE_LENGTH}`}
              fill="none"
              stroke="#c76a3f"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.5"
            />

            {/* boundary wall + posts */}
            <rect x="0" y="170" width="260" height="14" fill="#ded2ba" />
            <rect x={HINGE_X - 6} y="150" width="12" height="40" fill="#69748a" />

            {/* clearance area */}
            <rect x={HINGE_X} y={HINGE_Y - 4} width={GATE_LENGTH} height="8" fill="#ebe4d6" opacity={value < 15 ? 0.9 : 0.3} style={{ transition: "opacity 300ms" }} />

            {/* gate leaf */}
            <line x1={HINGE_X} y1={HINGE_Y} x2={tipX} y2={tipY} stroke="#232833" strokeWidth="6" strokeLinecap="round" />
            <line x1={HINGE_X} y1={HINGE_Y} x2={tipX} y2={tipY} stroke="#4a5468" strokeWidth="2" opacity="0.7" />

            {/* hinge point */}
            <circle cx={HINGE_X} cy={HINGE_Y} r="5" fill="#94472a" />
            {/* latch, at gate tip when closed */}
            <circle cx={HINGE_X + GATE_LENGTH} cy={HINGE_Y} r="4" fill={value < 8 ? "#94472a" : "#b4bac6"} opacity={value < 8 ? 1 : 0.4} style={{ transition: "opacity 300ms" }} />

            <text x={HINGE_X - 4} y={HINGE_Y + 20} fontSize="8" fill="#94472a" textAnchor="middle">hinge</text>
            <text x={HINGE_X + GATE_LENGTH} y={HINGE_Y + 20} fontSize="8" fill="#94472a" textAnchor="middle">latch</text>
          </svg>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Swing the gate between closed and open"
            className="mt-4 w-full accent-rust-700"
          />
          <div className="mt-2 flex justify-between text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
            <span>Closed</span>
            <span>Open</span>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-ink-500">
          Illustrative movement envelope — not a bypass or security guide.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

function MisalignedDoor() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="180" fill="url(#wd-sand)" />
      <rect x="90" y="10" width="140" height="160" fill="#ebe4d6" filter="url(#wd-noise)" />
      <g style={{ transform: "translate(8px, -4px) rotate(2deg)" }}>
        <rect x="110" y="20" width="100" height="150" fill="url(#wd-frame-dark)" stroke="#c17f3e" strokeWidth="2" />
        <g style={{ transform: "rotate(18deg)", transformOrigin: "150px 100px" }}>
          <circle cx="150" cy="100" r="5" fill="#c17f3e" />
          <rect x="150" y="96" width="26" height="8" rx="4" fill="#c17f3e" />
        </g>
      </g>
      <text x="160" y="176" textAnchor="middle" fontSize="9" fill="#94472a">restricted movement</text>
    </svg>
  );
}

function AlignedDoor() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="180" fill="url(#wd-sand)" />
      <rect x="90" y="10" width="140" height="160" fill="#ebe4d6" filter="url(#wd-noise)" />
      <rect x="110" y="20" width="100" height="150" fill="url(#wd-frame-dark)" stroke="#5b7d8f" strokeWidth="2" />
      <circle cx="150" cy="100" r="5" fill="#eef3f5" />
      <rect x="150" y="96" width="26" height="8" rx="4" fill="#eef3f5" />
      <text x="160" y="176" textAnchor="middle" fontSize="9" fill="#3d5a6b">clean, consistent movement</text>
    </svg>
  );
}

export default function WdBeforeAfterFunctional() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-glass-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Before &amp; after</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not just how it looks. How it works.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-glass-900/10">
          <div className="absolute inset-0">
            <AlignedDoor />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <MisalignedDoor />
          </div>

          <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-sand-50">
            Before
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-semibold text-ink-800">
            After
          </span>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-sand-50 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
            style={{ left: `${value}%` }}
          >
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50 text-ink-800 shadow-md">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2L1 7L5 12M9 2L13 7L9 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Before and after functional comparison slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="mt-4 max-w-2xl text-xs text-ink-500">
          Representative, illustrative visuals — not a photo of an actual
          Dammam Home Solutions project.
        </p>
      </div>
    </section>
  );
}

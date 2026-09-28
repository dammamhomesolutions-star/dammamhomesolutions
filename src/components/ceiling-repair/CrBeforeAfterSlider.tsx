"use client";

import { useState } from "react";

function DamagedCeiling() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="180" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
      <circle cx="260" cy="45" r="14" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.2" />
      <ellipse cx="140" cy="100" rx="58" ry="38" fill="url(#ceiling-stain)" />
      <path d="M60 40 L95 75 L82 92 L115 118" fill="none" stroke="#333a49" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RestoredCeiling() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="180" fill="#faf9f5" />
      <circle cx="260" cy="45" r="14" fill="#fff8ea" stroke="#e4dcc7" strokeWidth="1.2" />
      <circle cx="260" cy="45" r="8" fill="#fffdf7" />
      <ellipse cx="260" cy="45" rx="70" ry="60" fill="url(#ceiling-spotlight)" opacity="0.5" />
    </svg>
  );
}

export default function CrBeforeAfterSlider() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Before &amp; after</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Damaged ceiling, restored.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-ink-900/10">
          <div className="absolute inset-0">
            <RestoredCeiling />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <DamagedCeiling />
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
            aria-label="Before and after comparison slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="mt-4 max-w-2xl text-xs text-ink-500">
          Representative illustration — not a photo of a completed Dammam
          Home Solutions project.
        </p>
      </div>
    </section>
  );
}

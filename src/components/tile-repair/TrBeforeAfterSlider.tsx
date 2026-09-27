"use client";

import { useState } from "react";

function WornGrid() {
  return (
    <div className="grid h-full w-full grid-cols-6 gap-[2px] bg-ink-400 p-[2px]">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="relative"
          style={{ background: "linear-gradient(135deg, #e4dcc7, #cfc4a8)", filter: "url(#tile-noise)" }}
        >
          {i === 8 && (
            <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M6 6 L20 20 L14 26 L30 34" fill="none" stroke="#333a49" strokeWidth="1.4" />
            </svg>
          )}
          {i === 15 && <div className="absolute inset-1 border border-dashed border-ink-600/50" />}
        </div>
      ))}
    </div>
  );
}

function RestoredGrid() {
  return (
    <div className="grid h-full w-full grid-cols-6 gap-[3px] bg-sand-200 p-[3px]">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} style={{ background: "linear-gradient(135deg, #f6f2e9, #ebe4d1)", filter: "url(#tile-noise)" }} />
      ))}
    </div>
  );
}

export default function TrBeforeAfterSlider() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Before &amp; after</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Worn surface, restored.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-ink-900/10">
          <div className="absolute inset-0">
            <RestoredGrid />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <WornGrid />
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

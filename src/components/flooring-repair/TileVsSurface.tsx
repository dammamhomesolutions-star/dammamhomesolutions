"use client";

import { useState } from "react";
import Link from "next/link";

function FloorBase() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="200" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`v${i}`} x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="200" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * 40} x2="320" y2={(i + 1) * 40} stroke="#9a968a" strokeWidth="1" opacity="0.5" />
      ))}
    </svg>
  );
}

function IndividualAreaOverlay() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="120" y="80" width="40" height="40" fill="none" stroke="#b3562f" strokeWidth="2.4" />
      <path d="M128 90 L150 108 L140 118" fill="none" stroke="#464339" strokeWidth="1.6" strokeLinecap="round" />
      <text x="140" y="70" textAnchor="middle" fontSize="9" fill="#94472a">one area</text>
    </svg>
  );
}

function WiderSurfaceOverlay() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="60" y="40" width="200" height="120" fill="none" stroke="#b3562f" strokeWidth="2.4" />
      <path d="M90 70 L130 100 L110 120 L160 145" fill="none" stroke="#464339" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="200" cy="90" rx="30" ry="18" fill="#78746a" opacity="0.5" />
      <text x="160" y="32" textAnchor="middle" fontSize="9" fill="#94472a">wider surface</text>
    </svg>
  );
}

export default function TileVsSurface() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Extent matters</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Is it a tile problem or a wider surface problem?
          </h2>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-concrete-900/10">
          <div className="absolute inset-0">
            <FloorBase />
            <div className="absolute inset-0">
              <WiderSurfaceOverlay />
            </div>
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <FloorBase />
            <div className="absolute inset-0">
              <IndividualAreaOverlay />
            </div>
          </div>

          <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-sand-50">
            Individual area
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-semibold text-ink-800">
            Wider surface
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
            aria-label="Compare an individual damaged area against a wider surface problem"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-600">
          The appropriate repair depends on the extent and condition of the affected area.
        </p>
        <p className="mt-2 text-center">
          <Link
            href="/tile-repair-grout/"
            className="focus-ring text-sm font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4 hover:text-clay-700"
          >
            Tile &amp; Grout Repair
          </Link>
        </p>
      </div>
    </section>
  );
}

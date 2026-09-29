"use client";

import { useState } from "react";

function ExteriorEdge() {
  return (
    <svg viewBox="0 0 200 320" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="200" height="320" fill="url(#rf-sky)" />
      <rect x="0" y="0" width="200" height="90" fill="#c4c0b4" />
      <rect x="0" y="70" width="200" height="20" fill="url(#rf-surface)" />
      <rect x="0" y="90" width="200" height="230" fill="#ebe4d6" />
    </svg>
  );
}

function ParapetCutaway() {
  return (
    <svg viewBox="0 0 200 320" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="200" height="320" fill="#464339" />
      {/* parapet wall */}
      <rect x="0" y="0" width="60" height="200" fill="#5c584f" />
      {/* roof surface meeting the parapet */}
      <rect x="60" y="150" width="140" height="14" fill="url(#rf-surface)" />
      {/* waterproofing turn-up along the wall */}
      <rect x="52" y="60" width="14" height="104" fill="url(#rf-water)" />
      {/* gap / drainage channel at the base */}
      <rect x="60" y="164" width="140" height="10" fill="#2f7a7a" opacity="0.6" />

      <text x="70" y="50" fontSize="9" fill="#e0f0f0" fontFamily="monospace">
        PARAPET WALL
      </text>
      <text x="70" y="230" fontSize="9" fill="#8fc4c4" fontFamily="monospace">
        WATERPROOFING TURN-UP
      </text>
      <text x="70" y="200" fontSize="9" fill="#c4c0b4" fontFamily="monospace">
        DRAINAGE GAP
      </text>
    </svg>
  );
}

export default function RfEdgeParapet() {
  const [value, setValue] = useState(45);

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="section-label !text-teal-700">Edges &amp; parapets</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Drag down to see what&rsquo;s behind the edge.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Edges and parapets are common places where waterproofing details
            matter. This is a generic illustration — actual construction
            varies by property.
          </p>
        </div>

        <div className="relative mx-auto aspect-[5/8] w-full max-w-xs select-none overflow-hidden rounded-md border border-ink-900/10">
          <div className="absolute inset-0">
            <ExteriorEdge />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 ${100 - value}% 0)` }}>
            <ParapetCutaway />
          </div>

          <span className="absolute left-3 top-3 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-semibold text-ink-800">
            Exterior
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-sand-50">
            Cutaway
          </span>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 h-[2px] bg-sand-50 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
            style={{ top: `${value}%` }}
          >
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50 text-ink-800 shadow-md">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 5L7 1L12 5M2 9L7 13L12 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Drag to reveal the parapet cutaway"
            style={{ writingMode: "vertical-lr", direction: "rtl" }}
            className="absolute inset-0 h-full w-full cursor-ns-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

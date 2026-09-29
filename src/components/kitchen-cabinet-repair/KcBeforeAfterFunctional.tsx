"use client";

import { useState } from "react";

function BeforeScene() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="200" fill="url(#kc-ivory)" />
      <rect x="30" y="20" width="120" height="150" fill="#3d2b1f" opacity="0.4" />
      <g style={{ transform: "rotate(-4deg) translate(4px, -3px)" }}>
        <rect x="34" y="24" width="112" height="142" fill="url(#kc-walnut)" stroke="#94472a" strokeWidth="2" filter="url(#kc-noise)" />
        <circle cx="130" cy="95" r="4" fill="#eceef0" />
        <rect x="130" y="91" width="24" height="8" rx="4" fill="#eceef0" style={{ transform: "rotate(18deg)", transformOrigin: "130px 95px" }} />
      </g>
      <rect x="170" y="60" width="120" height="110" fill="#3d2b1f" opacity="0.4" />
      <g style={{ transform: "translate(-8px, 4px) rotate(2deg)" }}>
        <rect x="174" y="64" width="112" height="100" fill="url(#kc-walnut-dark)" stroke="#94472a" strokeWidth="2" />
        <rect x="220" y="106" width="30" height="6" rx="3" fill="#eceef0" />
      </g>
      <text x="160" y="190" textAnchor="middle" fontSize="9" fill="#94472a">uneven · restricted</text>
    </svg>
  );
}

function AfterScene() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="200" fill="url(#kc-ivory)" />
      <rect x="30" y="20" width="120" height="150" fill="#3d2b1f" opacity="0.15" />
      <rect x="34" y="24" width="112" height="142" fill="url(#kc-walnut)" stroke="#513825" strokeWidth="2" filter="url(#kc-noise)" />
      <circle cx="130" cy="95" r="4" fill="#eceef0" />
      <rect x="130" y="91" width="24" height="8" rx="4" fill="#eceef0" />
      <rect x="170" y="60" width="120" height="110" fill="#3d2b1f" opacity="0.15" />
      <rect x="174" y="64" width="112" height="100" fill="url(#kc-walnut-dark)" stroke="#513825" strokeWidth="2" />
      <rect x="220" y="106" width="30" height="6" rx="3" fill="#eceef0" />
      <text x="160" y="190" textAnchor="middle" fontSize="9" fill="#3d2b1f">aligned · smooth movement</text>
    </svg>
  );
}

export default function KcBeforeAfterFunctional() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Before &amp; after</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not just how it looks. How it works.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-walnut-900/10">
          <div className="absolute inset-0">
            <AfterScene />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <BeforeScene />
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

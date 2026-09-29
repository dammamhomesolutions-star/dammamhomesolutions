"use client";

import { useState } from "react";

const CATCH_POINT = 58;

export default function WdSlidingTrack() {
  const [value, setValue] = useState(0);
  const [problemMode, setProblemMode] = useState(false);
  const [caught, setCaught] = useState(false);

  const handleChange = (raw: number) => {
    if (problemMode && raw > CATCH_POINT) {
      setValue(CATCH_POINT);
      setCaught(true);
      window.setTimeout(() => setCaught(false), 260);
      return;
    }
    setValue(raw);
  };

  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Try it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Slide the window.
          </h2>
          <p className="mt-4 text-ink-600">
            Drag the panel along the track and feel the difference between
            smooth movement and a panel that catches.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setProblemMode((v) => !v);
              setValue(0);
            }}
            aria-pressed={problemMode}
            className={`focus-ring rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              problemMode
                ? "border-ember-600 bg-ember-600 text-sand-50"
                : "border-glass-900/15 text-ink-700 hover:border-glass-700"
            }`}
          >
            {problemMode ? "Showing: sticking window" : "Show a sticking window"}
          </button>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-xl">
          <svg viewBox="0 0 400 160" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="400" height="160" fill="url(#wd-sand)" />
            <rect x="20" y="16" width="360" height="110" rx="4" fill="url(#wd-frame-dark)" />
            <rect x="36" y="30" width="328" height="82" fill="#0f1720" opacity="0.25" />
            {/* track */}
            <rect x="20" y="134" width="360" height="10" rx="2" fill="#8e97a8" />
            <line x1="30" y1="139" x2="370" y2="139" stroke="#5b7d8f" strokeWidth="1" strokeDasharray="4 6" />
            {caught && (
              <text x={36 + (value / 100) * 220} y="30" fontSize="11" fill="#c17f3e" fontWeight="600">
                catches here
              </text>
            )}
            {/* sliding panel */}
            <g style={{ transform: `translateX(${(value / 100) * 220}px)`, transition: caught ? "transform 90ms ease-out" : "transform 40ms linear" }}>
              <rect x="36" y="30" width="120" height="82" fill="url(#wd-glass)" stroke="#1c2733" strokeWidth="2" />
              <rect x="36" y="30" width="120" height="82" fill="url(#wd-glass-sheen)" opacity="0.4" style={{ mixBlendMode: "screen" }} />
              <circle cx="150" cy="71" r="4" fill="#26333f" />
            </g>
          </svg>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            aria-label="Slide the window panel along the track"
            className="mt-4 w-full accent-glass-700"
          />
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-sm text-ink-600">
          Track, hardware and alignment may all need assessment — this
          illustration doesn&rsquo;t diagnose a specific cause.
        </p>
      </div>
    </section>
  );
}

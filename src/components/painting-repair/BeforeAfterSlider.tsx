"use client";

import { useRef, useState } from "react";

function AfterSurface() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#faf7f0" />
      <rect width="400" height="300" fill="url(#after-sheen)" opacity="0.5" />
      <defs>
        <linearGradient id="after-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BeforeSurface() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#ece3d1" />
      <g fill="#c9b98f" opacity="0.55">
        {Array.from({ length: 46 }).map((_, i) => {
          const x = (i * 37) % 400;
          const y = (i * 61) % 300;
          return <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 2 : 1} />;
        })}
      </g>
      <path d="M60 40 L90 110 L70 150 L110 230" fill="none" stroke="#8f7c58" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="270" cy="170" rx="50" ry="26" fill="#a6926a" opacity="0.45" />
      <ellipse cx="285" cy="160" rx="28" ry="14" fill="#8f7c58" opacity="0.4" />
      <circle cx="200" cy="70" r="9" fill="#847252" opacity="0.5" />
    </svg>
  );
}

export default function BeforeAfterSlider() {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-ink-900/10"
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
      >
        <div className="absolute inset-0">
          <AfterSurface />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
          <BeforeSurface />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-px bg-sand-50/90"
          style={{ left: `${pct}%` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50 text-ink-900 shadow"
          style={{ left: `${pct}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3 L1 8 L5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3 L15 8 L11 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-sand-50">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-sand-50">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          aria-label="Before and after surface comparison slider"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-xs text-ink-500">
        Illustrative comparison — a representative surface condition, not a
        specific customer project.
      </p>
    </div>
  );
}

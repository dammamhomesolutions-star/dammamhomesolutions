"use client";

import { useRef, useState } from "react";

function CorrectedDoor() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#f4efe6" />
      <rect x="60" y="20" width="20" height="260" fill="#3a2e21" />
      <rect x="80" y="20" width="220" height="260" fill="#6b4f34" />
      <rect x="300" y="20" width="20" height="260" fill="#3a2e21" />
      {/* even gap on both sides */}
      <rect x="78" y="20" width="2" height="260" fill="#2a2118" opacity="0.5" />
      <rect x="298" y="20" width="2" height="260" fill="#2a2118" opacity="0.5" />
      <text x="140" y="292" fontSize="12" fill="#5c4a34" fontFamily="var(--font-poppins), sans-serif">
        even gap, closes flush
      </text>
    </svg>
  );
}

function MisalignedDoor() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#ece3d1" />
      <rect x="60" y="20" width="20" height="260" fill="#3a2e21" />
      <path d="M84 24 L292 20 L300 280 L92 284 Z" fill="#6b4f34" />
      <rect x="300" y="20" width="20" height="260" fill="#3a2e21" />
      {/* uneven gap, wider at bottom, touching at top */}
      <path d="M80 20 L84 24 L92 284 L80 280 Z" fill="#2a2118" opacity="0.55" />
      <circle cx="86" cy="30" r="4" fill="#c76a3f" />
      <text x="130" y="292" fontSize="12" fill="#8a6a3f" fontFamily="var(--font-poppins), sans-serif">
        catches at top, gap widens lower down
      </text>
    </svg>
  );
}

export default function DoorAlignmentSlider() {
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
          <CorrectedDoor />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
          <MisalignedDoor />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-sand-50/90" style={{ left: `${pct}%` }} />
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
          aria-label="Before and after door alignment comparison slider"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-xs text-ink-500">
        Illustrative comparison — a representative alignment issue, not a
        specific customer project.
      </p>
    </div>
  );
}

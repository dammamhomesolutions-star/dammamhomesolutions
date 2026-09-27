"use client";

import { useRef, useState } from "react";
import type { RoomId } from "@/lib/room-issues";

function BathroomAfter() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#faf7f0" />
      <g stroke="#dcd8d0" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={c * 50} y={r * 50} width="50" height="50" fill="none" />
          ))
        )}
      </g>
    </svg>
  );
}

function BathroomBefore() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#ece8de" />
      <g stroke="#c7c2b8" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={c * 50} y={r * 50} width="50" height="50" fill="none" />
          ))
        )}
      </g>
      <path d="M120 60 L160 140 L110 190" fill="none" stroke="#8a8375" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="220" y="150" width="50" height="50" fill="none" stroke="#c76a3f" strokeWidth="2" />
      <ellipse cx="300" cy="220" rx="40" ry="20" fill="#a6926a" opacity="0.4" />
    </svg>
  );
}

function KitchenAfter() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#faf7f0" />
      <rect x="30" y="60" width="150" height="180" rx="4" fill="#f0ece3" stroke="#dcd8d0" />
      <rect x="220" y="60" width="150" height="180" rx="4" fill="#f0ece3" stroke="#dcd8d0" />
      <line x1="105" y1="60" x2="105" y2="240" stroke="#dcd8d0" />
      <line x1="295" y1="60" x2="295" y2="240" stroke="#dcd8d0" />
    </svg>
  );
}

function KitchenBefore() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="300" fill="#ece8de" />
      <path d="M30 60 L182 55 L178 240 L30 240 Z" fill="#e0dccf" stroke="#c7c2b8" />
      <rect x="220" y="60" width="150" height="180" rx="4" fill="#f0ece3" stroke="#dcd8d0" />
      <line x1="103" y1="58" x2="103" y2="240" stroke="#c7c2b8" strokeDasharray="2 4" />
      <circle cx="150" cy="150" r="4" fill="#c76a3f" />
    </svg>
  );
}

export default function RoomBeforeAfterSlider() {
  const [room, setRoom] = useState<RoomId>("bathroom");
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

  const AfterView = room === "bathroom" ? BathroomAfter : KitchenAfter;
  const BeforeView = room === "bathroom" ? BathroomBefore : KitchenBefore;

  return (
    <div>
      <div className="mb-5 inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1">
        {(["bathroom", "kitchen"] as RoomId[]).map((r) => (
          <button
            key={r}
            onClick={() => setRoom(r)}
            aria-pressed={room === r}
            className={`focus-ring rounded-full px-6 py-2 text-sm font-semibold capitalize transition-colors ${
              room === r ? "bg-emerald-800 text-sand-50" : "text-ink-700 hover:text-ink-950"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

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
          <AfterView />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
          <BeforeView />
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
          aria-label={`Before and after ${room} comparison slider`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-xs text-ink-500">
        Illustrative comparison — a representative repair outcome, not a
        specific customer project. The focus is function restored, not a
        full remodel.
      </p>
    </div>
  );
}

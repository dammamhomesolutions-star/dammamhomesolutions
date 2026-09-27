"use client";

import { useState } from "react";

const COLS = 6;
const ROWS = 4;
const TILE_COUNT = COLS * ROWS;
const DAMAGED_INDEX = 15;
const GROUT_LINE_TOP_PERCENT = 25;

const inspectLabels = [
  { id: "tile", label: "Tile", top: "18%", left: "12%" },
  { id: "grout", label: "Grout", top: "18%", left: "40%" },
  { id: "joint", label: "Joint", top: "68%", left: "58%" },
  { id: "edge", label: "Edge", top: "68%", left: "88%" },
  { id: "surface", label: "Surface", top: "40%", left: "72%" },
];

export default function TrTileGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [inspect, setInspect] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
          Surface view
        </p>
        <div
          role="radiogroup"
          aria-label="Surface view"
          className="inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-0.5"
        >
          <button
            type="button"
            role="radio"
            aria-checked={!inspect}
            onClick={() => setInspect(false)}
            className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              !inspect ? "bg-ink-950 text-sand-50" : "text-ink-600"
            }`}
          >
            Normal
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={inspect}
            onClick={() => setInspect(true)}
            className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              inspect ? "bg-ink-950 text-sand-50" : "text-ink-600"
            }`}
          >
            Inspect
          </button>
        </div>
      </div>

      <div className="relative mt-4 overflow-x-auto pb-2 lg:overflow-visible">
        <div className="relative min-w-[640px] lg:min-w-0">
          <div
            role="group"
            aria-label="Interactive tile surface — hover or tap a tile"
            className="grid gap-[3px] rounded-sm bg-ink-300 p-[3px]"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {Array.from({ length: TILE_COUNT }).map((_, i) => {
              const isActive = activeIndex === i;
              const isDamaged = i === DAMAGED_INDEX;
              const showCrack = isDamaged && (isActive || inspect);
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={isDamaged ? "Tile with a hairline crack" : "Tile"}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={`focus-ring relative aspect-square transition-transform duration-300 ease-out ${
                    isActive ? "z-10 -translate-y-[3px] shadow-lg" : "shadow-sm"
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #f2ede2, #e4dcc7)",
                    filter: "url(#tile-noise)",
                  }}
                >
                  {isDamaged && (
                    <svg
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                    >
                      <path
                        d="M6 8 L16 17 L13 22 L24 30 L22 35"
                        fill="none"
                        stroke="#333a49"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        pathLength={1}
                        className="transition-[stroke-dashoffset] duration-500 ease-out"
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: showCrack ? 0 : 1,
                        }}
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* damaged grout line indicator */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 h-[3px] w-full bg-rust-600 transition-opacity duration-300 ${
              inspect ? "opacity-70" : "opacity-25"
            }`}
            style={{ top: `${GROUT_LINE_TOP_PERCENT}%` }}
          />

          {inspectLabels.map((tag) => (
            <span
              key={tag.id}
              aria-hidden={!inspect}
              className={`pointer-events-none absolute rounded-full border border-ink-900/20 bg-sand-50/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700 shadow-sm transition-opacity duration-300 ${
                inspect ? "opacity-100" : "opacity-0"
              }`}
              style={{ top: tag.top, left: tag.left }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-400">
        Hover or tap the surface. This is an illustrative material graphic,
        not a live inspection.
      </p>
    </div>
  );
}

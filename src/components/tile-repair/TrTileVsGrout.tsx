"use client";

import { useState } from "react";
import { groutExamples, tileExamples } from "@/lib/tile-repair";

export default function TrTileVsGrout() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Tile vs. grout</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Is the problem the tile — or the joint around it?
          </h2>
          <p className="mt-4 text-ink-600">Drag to compare.</p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-3xl select-none overflow-hidden rounded-md border border-ink-900/10">
          {/* Grout side (base layer) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink-950 p-8 text-center text-sand-100">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">Grout</p>
            <ul className="mt-4 space-y-1.5">
              {groutExamples.map((item) => (
                <li key={item} className="text-sm text-ink-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tile side (clipped layer) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-sand-50 p-8 text-center"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-700">Tile</p>
            <ul className="mt-4 space-y-1.5">
              {tileExamples.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* divider */}
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
            aria-label="Tile versus grout comparison slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="mt-6 max-w-2xl text-sm text-ink-500">
          Discolouration doesn&rsquo;t always mean the grout has failed — it
          can be cosmetic, or it can point to something worth assessing.
        </p>
      </div>
    </section>
  );
}

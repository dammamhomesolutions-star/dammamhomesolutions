"use client";

import { useState } from "react";
import { gdPropertyAreas, type GdPropertyArea } from "@/lib/gate-garage-repair";

const focusMap: Record<string, { scale: number; x: number }> = {
  garage: { scale: 1.6, x: 18 },
  gate: { scale: 1.6, x: -8 },
  entry: { scale: 1.6, x: -32 },
};

export default function GdPropertyScene() {
  const [activeId, setActiveId] = useState<GdPropertyArea["id"]>("garage");
  const focus = focusMap[activeId];

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">The property</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            One driveway, several moving systems.
          </h2>
        </div>

        <div role="tablist" aria-label="Property area" className="mt-8 flex flex-wrap gap-2.5">
          {gdPropertyAreas.map((area) => {
            const isActive = area.id === activeId;
            return (
              <button
                key={area.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(area.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                }`}
              >
                {area.label}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-md border border-ink-900/10">
          <div
            className="h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `scale(${focus.scale}) translateX(${focus.x}%)` }}
          >
            <svg viewBox="0 0 500 220" className="h-full w-full" aria-hidden="true">
              <rect x="0" y="0" width="500" height="220" fill="url(#gd-sky)" />
              <rect x="0" y="150" width="500" height="70" fill="#ebe4d6" />

              {/* villa wall */}
              <rect x="0" y="60" width="500" height="95" fill="#f4f0e8" />

              {/* garage, left */}
              <rect x="20" y="80" width="140" height="75" fill="#232833" />
              <rect x="20" y="80" width="140" height="75" fill="none" stroke="#8e97a8" strokeWidth="3" />

              {/* gate, middle */}
              <rect x="220" y="115" width="10" height="40" fill="#69748a" />
              <rect x="230" y="120" width="70" height="35" fill="none" stroke="#4a5468" strokeWidth="3" />
              <line x1="230" y1="120" x2="300" y2="155" stroke="#4a5468" strokeWidth="2" />
              <line x1="300" y1="120" x2="230" y2="155" stroke="#4a5468" strokeWidth="2" />

              {/* entry, right */}
              <rect x="390" y="85" width="70" height="70" fill="url(#gd-panel-dark)" />
              <circle cx="450" cy="122" r="3" fill="#eef3f5" />

              {/* boundary wall + lighting */}
              <rect x="0" y="150" width="500" height="8" fill="#ded2ba" />
              <circle cx="10" cy="140" r="3" fill="#fff8ea" />
              <circle cx="490" cy="140" r="3" fill="#fff8ea" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

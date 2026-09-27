"use client";

import { useState } from "react";
import Link from "next/link";
import { healthMapAreas, type PropertyAreaId } from "@/lib/property-maintenance";

const VIEW_W = 300;
const VIEW_H = 220;

export default function PmHealthMap() {
  const [activeId, setActiveId] = useState<PropertyAreaId>(healthMapAreas[0].id);
  const active = healthMapAreas.find((a) => a.id === activeId)!;

  return (
    <section id="health-map" className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Property health map</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            How is the property doing?
          </h2>
          <p className="mt-4 text-ink-600">
            Select an area to see what&rsquo;s worth keeping an eye on. This
            is a starting point for a conversation, not an inspection or a
            diagnosis.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="blueprint-grid rounded-md border border-ink-900/10 bg-sand-50 p-4">
              <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="presentation" aria-hidden="true" className="h-auto w-full">
                <rect x="20" y="70" width="260" height="120" fill="none" stroke="#191d25" strokeWidth="1.4" />
                <rect x="20" y="52" width="260" height="18" fill="#eaeee0" stroke="#191d25" strokeWidth="1.2" />
                <line x1="20" y1="190" x2="20" y2="204" stroke="#b4bac6" strokeDasharray="2 3" />
                <line x1="280" y1="190" x2="280" y2="204" stroke="#b4bac6" strokeDasharray="2 3" />
                <line x1="20" y1="204" x2="280" y2="204" stroke="#b4bac6" strokeDasharray="2 3" />

                {healthMapAreas.map((area) => {
                  const cx = 20 + (area.pin.x / 100) * 260;
                  const cy = 52 + (area.pin.y / 100) * 130;
                  const isActive = area.id === activeId;
                  return (
                    <circle
                      key={area.id}
                      cx={cx}
                      cy={cy}
                      r={isActive ? 7 : 5.5}
                      fill={isActive ? "#5f7050" : "#faf8f4"}
                      stroke="#4b5a3f"
                      strokeWidth="1.2"
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>
            <p className="mt-3 text-center text-xs text-ink-400 lg:text-left">
              A simplified property overview.
            </p>
          </div>

          <div>
            <div
              role="tablist"
              aria-label="Property areas"
              className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-ink-900/10 pb-5 sm:grid-cols-4"
            >
              {healthMapAreas.map((area) => {
                const isActive = area.id === activeId;
                return (
                  <button
                    key={area.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`health-panel-${area.id}`}
                    onClick={() => setActiveId(area.id)}
                    className="focus-ring rounded-sm py-2 text-left"
                  >
                    <span className="block font-mono text-[10px] tracking-wide text-ink-400">
                      {area.tag}
                    </span>
                    <span
                      className={`block text-sm font-medium transition-colors ${
                        isActive
                          ? "text-moss-700 underline decoration-moss-600 underline-offset-4"
                          : "text-ink-700 hover:text-moss-700"
                      }`}
                    >
                      {area.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id={`health-panel-${active.id}`}
              role="tabpanel"
              key={active.id}
              className="mt-6 animate-fadeIn rounded-md border border-ink-900/10 bg-sand-50 p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                What to keep an eye on
              </p>
              <ul className="mt-4 space-y-2.5">
                {active.watchFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-moss-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={active.ctaHref}
                className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700"
              >
                {active.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

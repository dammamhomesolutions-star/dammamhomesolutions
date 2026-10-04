"use client";

import { useState } from "react";
import { cvViews, type CvView } from "@/lib/cctv-intercom";
import CvCtas from "./CvCtas";
import CvIcon from "./CvIcon";

const principles = ["Field of view", "Lighting and glare", "Mounting height", "Obstructions", "Blind spots", "Privacy", "Weather exposure", "Cable and network access"];

const scenes: Record<CvView, { cam: [number, number]; cone: string; door: boolean; gate: boolean }> = {
  narrow: { cam: [40, 40], cone: "40,40 312,100 312,148", door: true, gate: false },
  wide: { cam: [40, 40], cone: "40,40 340,30 340,230 120,230", door: true, gate: true },
  obstruction: { cam: [40, 40], cone: "40,40 340,30 340,230 120,230", door: false, gate: true },
  poor: { cam: [40, 40], cone: "40,40 200,0 330,0", door: false, gate: false },
  better: { cam: [40, 210], cone: "40,210 340,70 340,180 230,240 130,240", door: true, gate: true },
};

function CoverageDemo({ view }: { view: CvView }) {
  const s = scenes[view];
  return (
    <svg viewBox="0 0 360 250" className="h-auto w-full" role="img" aria-labelledby="cv-fov-title">
      <title id="cv-fov-title">{`Camera coverage demo: ${cvViews.find((v) => v.key === view)?.label}. Entrance door ${s.door ? "in view" : "not in view"}, gate ${s.gate ? "in view" : "not in view"}.`}</title>
      <rect width="360" height="250" fill="#f2f4ee" />
      <polygon points={s.cone} fill="#5f7050" opacity="0.22" className="transition-all duration-500" />
      {view === "obstruction" && (
        <>
          <polygon points="170,95 196,95 340,150 340,230 270,230" fill="#c76a3f" opacity="0.18" />
          <rect x="166" y="84" width="30" height="22" rx="3" fill="#4b5a3f" />
          <text x="228" y="200" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="600" fill="#a34a28">BLIND SPOT</text>
        </>
      )}
      {/* entrance door */}
      <rect x="312" y="96" width="14" height="56" fill={s.door ? "#4b5a3f" : "#b4bac6"} />
      <text x="268" y="88" fontFamily="ui-monospace, monospace" fontSize="13" fontWeight="600" fill="#2c3524">DOOR {s.door ? "✓" : "✕"}</text>
      {/* gate */}
      <path d="M150 244h80" stroke={s.gate ? "#4b5a3f" : "#b4bac6"} strokeWidth="6" />
      <text x="150" y="232" fontFamily="ui-monospace, monospace" fontSize="13" fontWeight="600" fill="#2c3524">GATE {s.gate ? "✓" : "✕"}</text>
      {/* camera */}
      <circle cx={s.cam[0]} cy={s.cam[1]} r="9" fill="#2c3524" className="transition-all duration-500" />
      <circle cx={s.cam[0]} cy={s.cam[1]} r="3" fill="#c76a3f" className="cv-pulse" />
    </svg>
  );
}

export default function CvPlacement() {
  const [view, setView] = useState<CvView>("wide");
  const active = cvViews.find((v) => v.key === view)!;

  return (
    <section id="placement" aria-labelledby="cv-place" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-moss-700">Camera placement</p>
            <h2 id="cv-place" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where should CCTV cameras go?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Start with entrances, gates, driveways, parking and other access
              points — the places where knowing who came and went matters
              most. Then choose a mounting spot that suits:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-xl bg-moss-100/70 px-3 py-2 text-sm text-ink-800">
                  <CvIcon name="check" className="h-4 w-4 flex-none text-moss-700" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-900/10 bg-moss-100/40 p-5 sm:p-6">
              <h3 className="font-serif text-2xl text-ink-950" id="cv-fov">A camera only sees what&rsquo;s in its field of view</h3>
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-labelledby="cv-fov">
                {cvViews.map((v) => (
                  <button
                    key={v.key}
                    type="button"
                    aria-pressed={view === v.key}
                    onClick={() => setView(v.key)}
                    className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                      view === v.key ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-moss-600"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
              <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-ink-900/10">
                <CoverageDemo view={view} />
              </div>
              <p key={view} className="mt-4 animate-fadeIn text-[15px] leading-relaxed text-ink-700" aria-live="polite">
                <span className="font-semibold text-ink-950">{active.label}: </span>
                {active.body}
              </p>
            </div>
          </div>
        </div>
        <CvCtas className="mt-10" primaryLabel="Discuss Camera Placement" />
      </div>
    </section>
  );
}

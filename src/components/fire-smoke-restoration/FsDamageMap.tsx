"use client";

import { useState } from "react";
import Link from "next/link";
import { fsDamageLayers, type FsDamageKey } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";

// Section through a two-storey villa. The fire started in the ground-floor
// kitchen; each layer shows where that one type of damage tends to reach.
function Layer({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <g style={{ opacity: active ? 1 : 0, transition: "opacity 450ms ease-out" }} aria-hidden="true">
      {children}
    </g>
  );
}

export default function FsDamageMap() {
  const [active, setActive] = useState<FsDamageKey>("smoke");
  const layer = fsDamageLayers.find((l) => l.key === active)!;

  return (
    <section id="damage-map" aria-labelledby="fs-damage-map" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">The real problem</p>
          <h2 id="fs-damage-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The fire may be out. The damage may not be.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            A fire leaves several kinds of damage behind, and each one travels
            differently. Choose a layer to see where it typically reaches in
            a home where the fire started in the kitchen.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-3 sm:p-5">
            <svg viewBox="0 0 640 440" className="h-auto w-full" role="img" aria-labelledby="fs-map-title fs-map-desc">
              <title id="fs-map-title">Section through a two-storey villa after a kitchen fire</title>
              <desc id="fs-map-desc">
                Currently showing: {layer.label}. Reaches {layer.reaches.toLowerCase()}.
              </desc>
              <defs>
                <radialGradient id="fs-map-heat" cx="0.3" cy="0.75" r="0.7">
                  <stop offset="0" stopColor="#c17f3e" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#c17f3e" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="fs-map-smoke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#4a5468" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#4a5468" stopOpacity="0" />
                </linearGradient>
                <pattern id="fs-map-soot" width="7" height="7" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.1" fill="#232833" />
                  <circle cx="5.5" cy="5" r="0.7" fill="#232833" />
                </pattern>
                <linearGradient id="fs-map-water" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5b7d8f" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#3d5a6b" stopOpacity="0.65" />
                </linearGradient>
              </defs>

              {/* ground + sky guides */}
              <path d="M20 400h600" stroke="#9a968a" strokeWidth="1.5" />
              <path d="M20 412h600" stroke="#c4c0b4" strokeWidth="1" strokeDasharray="4 6" />

              {/* layer: fire / heat */}
              <Layer active={active === "fire"}>
                <rect x="72" y="250" width="178" height="150" fill="url(#fs-map-heat)" />
                <rect x="72" y="240" width="178" height="10" fill="#c17f3e" opacity="0.65" />
                <path d="M118 360c3-20 14-30 11-50 10 12 18 28 15 50" fill="#a8662a" opacity="0.8" />
                <path d="M80 300h150M90 330h40" stroke="#4a2f18" strokeWidth="2" strokeDasharray="10 5" />
              </Layer>

              {/* layer: smoke */}
              <Layer active={active === "smoke"}>
                <rect x="72" y="250" width="378" height="60" fill="url(#fs-map-smoke)" />
                <rect x="250" y="100" width="90" height="140" fill="url(#fs-map-smoke)" />
                <rect x="72" y="100" width="496" height="55" fill="url(#fs-map-smoke)" />
                <path
                  className="fs-flow"
                  d="M135 345C135 300 142 266 180 264H330C342 264 340 252 326 244V160C326 140 312 132 290 130H90M290 130H550"
                  fill="none"
                  stroke="#333a49"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path className="fs-flow" d="M90 258h470" fill="none" stroke="#333a49" strokeWidth="1.5" />
              </Layer>

              {/* layer: soot */}
              <Layer active={active === "soot"}>
                <rect x="72" y="250" width="178" height="80" fill="url(#fs-map-soot)" opacity="0.9" />
                <rect x="250" y="250" width="200" height="34" fill="url(#fs-map-soot)" opacity="0.7" />
                <rect x="250" y="100" width="90" height="50" fill="url(#fs-map-soot)" opacity="0.6" />
                <rect x="72" y="100" width="178" height="26" fill="url(#fs-map-soot)" opacity="0.45" />
                <rect x="80" y="280" width="120" height="20" fill="url(#fs-map-soot)" />
                <rect x="270" y="364" width="96" height="8" fill="url(#fs-map-soot)" />
              </Layer>

              {/* layer: firefighting water */}
              <Layer active={active === "water"}>
                <path d="M72 388c40-5 80 5 120 0s80 5 120 0 80 5 120 0 70 4 136 1v11H72z" fill="url(#fs-map-water)" />
                <rect x="72" y="340" width="10" height="50" fill="#5b7d8f" opacity="0.45" />
                <rect x="244" y="350" width="12" height="40" fill="#5b7d8f" opacity="0.4" />
                <rect x="80" y="360" width="120" height="30" fill="#5b7d8f" opacity="0.3" />
                <path d="M160 240v-6M190 240v-4" stroke="#3d5a6b" strokeWidth="2" strokeLinecap="round" />
                <path d="M300 370c20-4 40 4 60 0" stroke="#3d5a6b" strokeWidth="2" fill="none" className="fs-flow" />
              </Layer>

              {/* layer: odor */}
              <Layer active={active === "odor"}>
                <g fill="none" stroke="#4a5468" strokeWidth="1.6" strokeLinecap="round" className="fs-drift-slow">
                  <path d="M296 356c-6-8 6-12 0-20s6-12 0-20M326 356c-6-8 6-12 0-20s6-12 0-20M356 356c-6-8 6-12 0-20" />
                  <path d="M140 204c-6-8 6-12 0-20s6-12 0-20M180 204c-6-8 6-12 0-20" />
                  <path d="M520 144c-6-8 6-12 0-20M410 204c-6-8 6-12 0-20" />
                  <path d="M120 120c-5-6 5-10 0-14M330 120c-5-6 5-10 0-14M500 278c-5-6 5-10 0-14" />
                </g>
              </Layer>

              {/* base linework, always visible */}
              <g fill="none" stroke="#333a49" strokeWidth="2" strokeLinejoin="round">
                <path d="M60 400V90h520v310" />
                <path d="M60 76h520" />
                <path d="M60 76v14M580 76v14" />
                <path d="M60 240h520M60 250h520" strokeWidth="1.5" />
                <path d="M250 100v140M340 100v140M250 250v150M450 250v150" strokeWidth="1.5" />
                {/* stair */}
                <path d="M440 400v-25h-18v-25h-18v-25h-18v-25h-18v-25h-18v-25h-14" strokeWidth="1.3" />
                {/* AC duct lines */}
                <path d="M80 254h480M80 104h480" strokeWidth="1" strokeDasharray="2 4" />
                {/* kitchen counter, wall cabinets, cooker */}
                <path d="M80 360h120v40M80 360v40" strokeWidth="1.5" />
                <path d="M80 280h120v20H80z" strokeWidth="1.3" />
                <path d="M120 360h30" strokeWidth="3" />
                {/* sofa */}
                <path d="M276 372v-14a6 6 0 0 1 6-6h78a6 6 0 0 1 6 6v14M270 372h102v28H270z" strokeWidth="1.5" />
                {/* beds + wardrobe */}
                <path d="M96 240v-22h126v22M96 218v-14h22v14" strokeWidth="1.5" />
                <path d="M360 240v-22h110v22M360 218v-14h20v14" strokeWidth="1.5" />
                <path d="M500 240v-86h50v86M525 154v86" strokeWidth="1.3" />
                {/* curtains */}
                <path d="M560 260c-4 20 4 40 0 60s4 30 0 50" strokeWidth="1.2" />
              </g>

              {/* room labels */}
              <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.5" fill="#69748a">
                <text x="84" y="268">KITCHEN · ORIGIN</text>
                <text x="262" y="268">LIVING</text>
                <text x="462" y="268">MAJLIS</text>
                <text x="84" y="120">BEDROOM</text>
                <text x="262" y="120">HALL</text>
                <text x="352" y="120">BEDROOM</text>
                <text x="20" y="430" fontSize="9">SECTION · ILLUSTRATIVE, NOT A SPECIFIC PROPERTY</text>
              </g>
            </svg>
          </div>

          <div>
            <div role="radiogroup" aria-label="Damage layer" className="flex flex-wrap gap-2">
              {fsDamageLayers.map((l) => {
                const on = l.key === active;
                return (
                  <button
                    key={l.key}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setActive(l.key)}
                    onMouseEnter={() => setActive(l.key)}
                    onFocus={() => setActive(l.key)}
                    className={`focus-ring group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      on
                        ? "border-ink-950 bg-ink-950 text-sand-50"
                        : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                    }`}
                  >
                    <FsIcon name={l.icon} className="h-4 w-4" />
                    {l.label}
                  </button>
                );
              })}
            </div>

            <div key={layer.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-700">
                {layer.label} → {layer.reaches}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-800">{layer.explanation}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                <span className="font-semibold text-ink-900">Restoration response: </span>
                {layer.response}
              </p>
              {layer.link && (
                <Link
                  href={layer.link.href}
                  className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
                >
                  {layer.link.label}
                  <FsIcon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>

            <ul className="mt-6 space-y-2 text-sm text-ink-600">
              {fsDamageLayers.map((l) => (
                <li key={l.key}>
                  <span className="font-medium text-ink-900">{l.label}:</span> {l.reaches}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

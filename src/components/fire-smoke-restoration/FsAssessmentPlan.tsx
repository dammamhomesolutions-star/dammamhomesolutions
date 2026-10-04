"use client";

import { useState } from "react";
import Link from "next/link";
import { fsZones, type FsZoneKey } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";

const HI = "#c17f3e";

// Top-down plan of a small home. The chips are the accessible control; the
// plan shapes mirror them for mouse and touch.
export default function FsAssessmentPlan() {
  const [zone, setZone] = useState<FsZoneKey>("kitchen");
  const current = fsZones.find((z) => z.key === zone)!;
  const on = (k: FsZoneKey) => zone === k;

  const roomFill = (k: FsZoneKey) => (on(k) ? "rgba(193,127,62,0.18)" : "#faf8f4");
  const pick = (k: FsZoneKey) => () => setZone(k);

  return (
    <section id="assessment" aria-labelledby="fs-plan" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Walk through the property</p>
          <h2 id="fs-plan" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What gets checked during a fire damage assessment?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Pick an area to see what is typically looked for, why it matters,
            and the usual restoration response.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-3 sm:p-5">
            <svg viewBox="0 0 560 380" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              <defs>
                <pattern id="fs-plan-floor" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <path d="M0 0v12" stroke="#5b7d8f" strokeWidth="2" opacity="0.35" />
                </pattern>
                <pattern id="fs-plan-ceiling" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" fill="none" stroke={HI} strokeWidth="1" strokeDasharray="3 3" />
                </pattern>
              </defs>

              {/* rooms */}
              <g className="cursor-pointer">
                <rect x="20" y="20" width="180" height="150" fill={roomFill("kitchen")} onClick={pick("kitchen")} />
                <rect x="200" y="20" width="340" height="200" fill={roomFill("living")} onClick={pick("living")} />
                <rect x="20" y="170" width="220" height="190" fill={roomFill("bedroom")} onClick={pick("bedroom")} />
              </g>
              <rect x="240" y="220" width="300" height="140" fill="#faf8f4" />

              {/* floor layer */}
              <rect x="20" y="20" width="520" height="200" fill="url(#fs-plan-floor)" style={{ opacity: on("floor") ? 1 : 0, transition: "opacity 300ms" }} pointerEvents="none" />
              {/* ceiling layer */}
              <rect x="20" y="20" width="520" height="340" fill="url(#fs-plan-ceiling)" style={{ opacity: on("ceiling") ? 1 : 0, transition: "opacity 300ms" }} pointerEvents="none" />

              {/* kitchen fittings */}
              <path d="M30 30h160v24H30zM30 54v100h24V54" fill="none" stroke="#69748a" strokeWidth="1.5" pointerEvents="none" />
              <circle cx="100" cy="42" r="7" fill="none" stroke="#69748a" strokeWidth="1.5" pointerEvents="none" />
              <circle cx="126" cy="42" r="7" fill="none" stroke="#69748a" strokeWidth="1.5" pointerEvents="none" />

              {/* furniture */}
              <g
                onClick={pick("furniture")}
                className="cursor-pointer"
                fill={on("furniture") ? "rgba(193,127,62,0.35)" : "#ebe4d6"}
                stroke={on("furniture") ? HI : "#69748a"}
                strokeWidth="1.5"
              >
                <path d="M300 150h150v40H300z" />
                <path d="M300 150v-14h150v14" fill="none" />
                <rect x="340" y="90" width="70" height="36" rx="4" />
                <rect x="50" y="220" width="120" height="100" rx="4" />
                <path d="M50 236h120" fill="none" />
                <rect x="190" y="190" width="40" height="70" />
              </g>

              {/* AC duct */}
              <g onClick={pick("hvac")} className="cursor-pointer">
                <path d="M520 44H60M300 44v90M120 44v160" fill="none" stroke="transparent" strokeWidth="18" />
                <path
                  d="M520 44H60M300 44v90M120 44v160"
                  fill="none"
                  stroke={on("hvac") ? HI : "#9a968a"}
                  strokeWidth={on("hvac") ? 4 : 2}
                  strokeDasharray="6 5"
                  className={on("hvac") ? "fs-flow" : undefined}
                />
                <rect x="506" y="30" width="26" height="28" fill="#faf8f4" stroke={on("hvac") ? HI : "#69748a"} strokeWidth="1.5" />
              </g>

              {/* electrical board + sockets */}
              <g onClick={pick("electrical")} className="cursor-pointer">
                <rect x="250" y="320" width="34" height="28" fill={on("electrical") ? HI : "#faf8f4"} stroke={on("electrical") ? HI : "#333a49"} strokeWidth="1.5" />
                <path d="M262 326l-4 8h8l-4 8" fill="none" stroke={on("electrical") ? "#faf8f4" : "#333a49"} strokeWidth="1.5" />
                {[
                  [196, 100],
                  [236, 300],
                  [536, 160],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={on("electrical") ? HI : "#faf8f4"} stroke="#333a49" strokeWidth="1.3" />
                ))}
              </g>

              {/* walls */}
              <g
                fill="none"
                stroke={on("walls") ? HI : "#232833"}
                strokeWidth={on("walls") ? 7 : 5}
                strokeLinejoin="round"
                style={{ transition: "stroke 300ms" }}
                onClick={pick("walls")}
                className="cursor-pointer"
              >
                <path d="M20 20h520v340H20z" />
                <path d="M200 20v100M200 150v20H20M240 170v40M240 250v110M240 220h120M420 220h120" />
              </g>

              {/* labels */}
              <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.4" fill="#4a5468" pointerEvents="none">
                <text x="64" y="150">KITCHEN</text>
                <text x="460" y="205">LIVING</text>
                <text x="60" y="345">BEDROOM</text>
                <text x="380" y="300">ENTRANCE</text>
                <text x="292" y="314" fontSize="8">DB</text>
              </g>
            </svg>
            <p className="px-2 pt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">
              Illustrative plan — tap an area
            </p>
          </div>

          <div>
            <div role="radiogroup" aria-label="Area of the property" className="flex flex-wrap gap-2">
              {fsZones.map((z) => (
                <button
                  key={z.key}
                  type="button"
                  role="radio"
                  aria-checked={on(z.key)}
                  onClick={pick(z.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    on(z.key)
                      ? "border-ember-700 bg-ember-700 text-sand-50"
                      : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {z.label}
                </button>
              ))}
            </div>

            <div key={current.key} className="mt-6 animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{current.label}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Potential issue</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{current.issue}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why it matters</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{current.why}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Typical restoration response</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{current.response}</dd>
                </div>
              </dl>
              {current.link && (
                <Link
                  href={current.link.href}
                  className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
                >
                  {current.link.label}
                  <FsIcon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

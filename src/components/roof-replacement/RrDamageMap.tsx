"use client";

import { useState } from "react";
import { rrHotspots, type RrHotspotKey } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";

const HI = "#1f5c5c";

// Three-quarter view of a flat villa roof with a cutaway into the room below.
// Selecting a point "moves the camera" by scaling the scene around it.
export default function RrDamageMap() {
  const [active, setActive] = useState<RrHotspotKey | null>(null);
  const spot = rrHotspots.find((h) => h.key === active) ?? null;
  const on = (k: RrHotspotKey) => active === k;

  return (
    <section id="roof-map" aria-labelledby="rr-map" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-700">Roof damage map</p>
            <h2 id="rr-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Where do roof problems usually start?
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            Choose a point on the roof. These are the places an inspection
            looks at first — and most of them can fail without the whole roof
            being at the end of its life.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-50 lg:col-span-8">
            <svg viewBox="0 0 640 360" className="h-auto w-full touch-manipulation select-none" aria-hidden="true">
              <defs>
                <linearGradient id="rr-map-roof" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#eae7de" />
                  <stop offset="1" stopColor="#d9d3c3" />
                </linearGradient>
                <linearGradient id="rr-map-front" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#c4c0b4" />
                  <stop offset="1" stopColor="#9a968a" />
                </linearGradient>
              </defs>

              <g
                style={{
                  transform: spot ? "scale(1.45)" : "scale(1)",
                  transformOrigin: spot ? `${spot.x}px ${spot.y}px` : "320px 180px",
                  transition: "transform 650ms cubic-bezier(0.16,1,0.3,1), transform-origin 650ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {/* front facade */}
                <path d="M40 250h520v100H40z" fill="url(#rr-map-front)" />
                <path d="M560 250l50-140v100l-50 140z" fill="#9a968a" />

                {/* roof plane */}
                <path
                  d="M40 250L110 110h500l-50 140z"
                  fill={on("surface") ? "rgba(47,122,122,0.22)" : "url(#rr-map-roof)"}
                  stroke="#78746a"
                  strokeWidth="1.5"
                  style={{ transition: "fill 300ms" }}
                />
                {/* surface joints */}
                <path d="M190 250L240 110M340 250L370 110M480 250L500 110M75 180h510" stroke="#c4c0b4" strokeWidth="1" />

                {/* parapet */}
                <path d="M40 250L110 110h500l-50 140" fill="none" stroke="#5c584f" strokeWidth="5" strokeLinejoin="round" />
                <path
                  d="M40 250h520"
                  stroke={on("edge") ? HI : "#5c584f"}
                  strokeWidth={on("edge") ? 8 : 5}
                  strokeLinecap="round"
                  style={{ transition: "stroke 300ms" }}
                />

                {/* ponding + falls toward drain */}
                <ellipse cx="470" cy="222" rx="38" ry="10" fill="#4a9797" opacity={on("drain") ? 0.55 : 0.3} />
                <circle cx="470" cy="222" r="6" fill="#35332e" stroke={on("drain") ? HI : "#35332e"} strokeWidth="2" />
                {on("drain") && (
                  <g fill="none" stroke={HI} strokeWidth="1.5" strokeLinecap="round">
                    <path className="fs-flow" d="M300 160L455 216" />
                    <path className="fs-flow" d="M520 150L475 212" />
                    <path className="fs-flow" d="M380 230L458 224" />
                  </g>
                )}

                {/* waterproofing cutaway (peeled corner) */}
                <path d="M160 238l40-70h70l-30 70z" fill="#232833" />
                <path
                  d="M160 238l40-70h70l-30 70z"
                  fill="none"
                  stroke={on("waterproofing") ? HI : "#4a5468"}
                  strokeWidth={on("waterproofing") ? 3 : 1}
                />
                <path d="M200 168h70l-8 -12h-66z" fill="#c4c0b4" stroke="#78746a" />
                <path d="M170 228l30-52" stroke="#4a5468" strokeDasharray="6 4" />

                {/* stair room + wall junction */}
                <path d="M100 130V70h110v60" fill="#eae7de" stroke="#5c584f" strokeWidth="2" />
                <path d="M210 70l24-14v60l-24 14" fill="#c4c0b4" stroke="#5c584f" strokeWidth="2" />
                <path d="M100 130h110" stroke={on("junction") ? HI : "#5c584f"} strokeWidth={on("junction") ? 6 : 3} />
                <path d="M140 130V96h24v34" fill="#9a968a" />

                {/* pipe penetration */}
                <path d="M380 128V96" stroke={on("penetration") ? HI : "#78746a"} strokeWidth="7" strokeLinecap="round" />
                <ellipse cx="380" cy="129" rx="9" ry="3.5" fill="none" stroke={on("penetration") ? HI : "#5c584f"} strokeWidth="2" />

                {/* AC unit */}
                <g stroke={on("hvac") ? HI : "#5c584f"} strokeWidth={on("hvac") ? 2.5 : 1.5}>
                  <path d="M490 150v-34h56v34z" fill="#faf8f4" />
                  <path d="M546 116l14-8v34l-14 8z" fill="#c4c0b4" />
                  <path d="M490 116l14-8h56" fill="none" />
                  <circle cx="518" cy="133" r="11" fill="none" />
                  <path d="M490 150c-10 8-24 10-40 10" fill="none" strokeDasharray="3 3" />
                </g>

                {/* cutaway into the room below */}
                <path d="M220 262h170v80H220z" fill="#faf8f4" stroke="#5c584f" strokeWidth="2" />
                <path
                  d="M220 274h170"
                  stroke={on("ceiling") ? HI : "#9a968a"}
                  strokeWidth={on("ceiling") ? 4 : 2}
                />
                <ellipse cx="300" cy="282" rx="22" ry="6" fill="#b8916c" opacity="0.55" />
                <path d="M300 288v10" stroke="#4a9797" strokeWidth="2" strokeLinecap="round" />
                <path d="M240 342v-24h40v24" fill="none" stroke="#c4c0b4" />

                {/* hotspot markers */}
                {rrHotspots.map((h) => (
                  <g key={h.key} onClick={() => setActive(h.key)} className="cursor-pointer">
                    <circle cx={h.x} cy={h.y} r="16" fill="transparent" />
                    <circle
                      cx={h.x}
                      cy={h.y}
                      r={on(h.key) ? 8 : 6}
                      fill={on(h.key) ? HI : "#faf8f4"}
                      stroke={HI}
                      strokeWidth="2"
                      style={{ transition: "r 200ms" }}
                    />
                    {!active && <circle cx={h.x} cy={h.y} r="11" fill="none" stroke={HI} strokeWidth="1" opacity="0.4" />}
                  </g>
                ))}
              </g>
            </svg>

            {spot && (
              <button
                type="button"
                onClick={() => setActive(null)}
                className="focus-ring absolute right-3 top-3 rounded-full bg-ink-950/85 px-3 py-1.5 text-xs font-semibold text-sand-50"
              >
                Reset view
              </button>
            )}
            <p className="border-t border-ink-900/10 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">
              Illustrative roof — tap a point
            </p>
          </div>

          <div className="lg:col-span-4">
            <div role="radiogroup" aria-label="Roof area" className="flex flex-wrap gap-2">
              {rrHotspots.map((h) => (
                <button
                  key={h.key}
                  type="button"
                  role="radio"
                  aria-checked={on(h.key)}
                  onClick={() => setActive(h.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    on(h.key) ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-ink-900/10 bg-sand-50 p-6" aria-live="polite">
              {spot ? (
                <div key={spot.key} className="animate-fadeIn">
                  <h3 className="font-serif text-2xl text-ink-950">{spot.label}</h3>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Common concern</dt>
                      <dd className="mt-1 leading-relaxed text-ink-800">{spot.concern}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why it matters</dt>
                      <dd className="mt-1 leading-relaxed text-ink-700">{spot.why}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Typical next step</dt>
                      <dd className="mt-1 leading-relaxed text-ink-700">{spot.next}</dd>
                    </div>
                  </dl>
                </div>
              ) : (
                <p className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                  <RrIcon name="search" className="h-5 w-5 flex-none text-teal-700" />
                  Select an area on the roof or from the list to see what&rsquo;s
                  checked there.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

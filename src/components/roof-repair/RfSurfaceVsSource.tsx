"use client";

import { useCallback, useRef, useState } from "react";

const VIEW_W = 320;
const VIEW_H = 420;

// Fixed x-positions (in viewBox units) for the visible symptom and its
// possible source — deliberately offset to illustrate that what's seen
// and where it starts aren't always aligned.
const SOURCE_X = 210;
const SURFACE_X = 95;

function proximity(scanX: number, targetX: number) {
  return Math.max(0, 1 - Math.abs(scanX - targetX) / 60);
}

export default function RfSurfaceVsSource() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<SVGLineElement>(null);
  const sourceRef = useRef<SVGCircleElement>(null);
  const surfaceRef = useRef<SVGCircleElement>(null);
  const connectorRef = useRef<SVGPathElement>(null);
  const [locked, setLocked] = useState(false);

  const update = useCallback((scanX: number) => {
    if (scanRef.current) scanRef.current.setAttribute("x1", String(scanX));
    if (scanRef.current) scanRef.current.setAttribute("x2", String(scanX));

    const sourceGlow = 0.3 + proximity(scanX, SOURCE_X) * 0.7;
    const surfaceGlow = 0.3 + proximity(scanX, SURFACE_X) * 0.7;
    const connectorGlow = 0.15 + Math.max(proximity(scanX, SOURCE_X), proximity(scanX, SURFACE_X)) * 0.55;

    if (sourceRef.current) sourceRef.current.style.opacity = String(sourceGlow);
    if (surfaceRef.current) surfaceRef.current.style.opacity = String(surfaceGlow);
    if (connectorRef.current) connectorRef.current.style.opacity = String(connectorGlow);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (locked) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width;
      update(Math.max(0, Math.min(1, xPct)) * VIEW_W);
    },
    [locked, update]
  );

  const handleLeave = useCallback(() => {
    if (!locked) update(VIEW_W / 2);
  }, [locked, update]);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="section-label !text-teal-700">Surface vs. source</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What you see isn&rsquo;t always where it starts.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Move your cursor across the building. A change on a ceiling and
            its rooftop source aren&rsquo;t always in the same place — which
            is one reason a visual inspection matters.
          </p>
          <button
            type="button"
            onClick={() => setLocked((v) => !v)}
            aria-pressed={locked}
            className={`focus-ring mt-6 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              locked ? "border-teal-700 bg-teal-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-teal-600"
            }`}
          >
            {locked ? "Showing both" : "Show both at once"}
          </button>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="mx-auto w-full max-w-xs cursor-crosshair overflow-hidden rounded-md border border-ink-900/10 bg-sand-50"
        >
          <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="h-auto w-full" aria-hidden="true">
            <title>A vertical section of a property comparing a visible ceiling symptom with a possible rooftop source at a different position</title>
            {/* roof */}
            <rect x="0" y="0" width={VIEW_W} height="60" fill="url(#rf-sky)" />
            <rect x="0" y="40" width={VIEW_W} height="20" fill="url(#rf-surface)" />

            {/* building body */}
            <rect x="0" y="60" width={VIEW_W} height="300" fill="#eae7de" />
            <line x1="0" y1="260" x2={VIEW_W} y2="260" stroke="#c4c0b4" strokeWidth="2" />

            {/* room ceiling */}
            <rect x="20" y="260" width={VIEW_W - 40} height="130" fill="#faf8f4" stroke="#c4c0b4" strokeWidth="2" />

            {/* possible source, on the roof */}
            <circle ref={sourceRef} cx={SOURCE_X} cy="50" r="16" fill="url(#rf-stain)" style={{ opacity: 0.3, transition: "opacity 150ms" }} />
            <text x={SOURCE_X} y="20" textAnchor="middle" fontSize="9" fill="#164848" fontFamily="monospace">
              SOURCE?
            </text>

            {/* visible symptom, on the ceiling */}
            <circle ref={surfaceRef} cx={SURFACE_X} cy="290" r="20" fill="#7a5a3f" style={{ opacity: 0.3, transition: "opacity 150ms" }} />
            <text x={SURFACE_X} y="330" textAnchor="middle" fontSize="9" fill="#5c584f" fontFamily="monospace">
              VISIBLE
            </text>

            {/* connector between the two */}
            <path
              ref={connectorRef}
              d={`M${SOURCE_X} 66 C ${SOURCE_X} 150, ${SURFACE_X} 200, ${SURFACE_X} 270`}
              fill="none"
              stroke="#2f7a7a"
              strokeWidth="1.6"
              strokeDasharray="4 5"
              style={{ opacity: 0.15, transition: "opacity 150ms" }}
            />

            {/* scan line */}
            <line ref={scanRef} x1={VIEW_W / 2} y1="0" x2={VIEW_W / 2} y2={VIEW_H} stroke="#4a9797" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}

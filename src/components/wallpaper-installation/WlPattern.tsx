"use client";

import { useState } from "react";
import { wlPatterns, type WlPatternKey } from "@/lib/wallpaper-installation";

// Three panels of the same wall. "Misaligned" drops the middle panel so the
// design breaks at the seams.
function Content({ kind }: { kind: WlPatternKey }) {
  if (kind === "plain") return <rect x="0" y="-60" width="300" height="340" fill="#ebe4d6" />;
  if (kind === "mural")
    return (
      <>
        <rect x="0" y="-60" width="300" height="340" fill="#cfe6e6" />
        <circle cx="210" cy="50" r="22" fill="#f3e4d1" />
        <path d="M0 170l60-70 50 45 60-85 70 75 60-35v180H0z" fill="#2f7a7a" />
        <path d="M0 200l80-40 70 30 80-40 70 30v100H0z" fill="#164848" />
      </>
    );
  return <rect x="0" y="-60" width="300" height="340" fill={`url(#wl-pv-${kind})`} />;
}

export default function WlPattern() {
  const [kind, setKind] = useState<WlPatternKey>("large");
  const [matched, setMatched] = useState(true);
  const p = wlPatterns.find((x) => x.key === kind)!;
  const drop = matched || kind === "plain" ? 0 : kind === "small" ? 9 : 26;

  return (
    <section id="pattern-matching" aria-labelledby="wl-pattern" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Pattern matching</p>
          <h2 id="wl-pattern" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">See why pattern matching matters</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Patterned wallpaper has to be positioned so the design continues
            naturally across each seam. Switch the pattern, then compare matched
            and misaligned panels.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <svg viewBox="0 0 300 220" className="h-auto w-full rounded-2xl ring-1 ring-ink-900/10" role="img" aria-labelledby="wl-pv-title">
              <title id="wl-pv-title">{`Three wallpaper panels with a ${p.label.toLowerCase()} design, ${matched ? "matched across the seams" : "with the middle panel misaligned"}`}</title>
              <defs>
                <pattern id="wl-pv-small" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#e0f0f0" />
                  <circle cx="10" cy="10" r="3" fill="#2f7a7a" />
                </pattern>
                <pattern id="wl-pv-large" width="100" height="80" patternUnits="userSpaceOnUse" x="50">
                  <rect width="100" height="80" fill="#164848" />
                  <path d="M50 8c18 16 18 30 0 46-18-16-18-30 0-46z" fill="#4a9797" />
                  <circle cx="50" cy="64" r="6" fill="#e0b28a" />
                  <path d="M0 40c10 10 10 20 0 30M100 40c-10 10-10 20 0 30" fill="#4a9797" />
                </pattern>
                <pattern id="wl-pv-geo" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="#f4f0e8" />
                  <path d="M0 20L20 0l20 20-20 20z" fill="none" stroke="#1f5c5c" strokeWidth="2" />
                  <path d="M0 0h40" stroke="#c76a3f" strokeWidth="2" />
                </pattern>
                {[0, 1, 2].map((n) => (
                  <clipPath key={n} id={`wl-pv-clip-${n}`}>
                    <rect x={n * 100} y="0" width="100" height="220" />
                  </clipPath>
                ))}
              </defs>
              {[0, 1, 2].map((n) => (
                <g key={n} clipPath={`url(#wl-pv-clip-${n})`}>
                  <g style={{ transform: `translateY(${n === 1 ? drop : 0}px)`, transition: "transform 500ms ease" }}>
                    <Content kind={kind} />
                  </g>
                </g>
              ))}
              <path d="M100 0v220M200 0v220" stroke={matched ? "#0f3a3a" : "#c76a3f"} strokeWidth={matched ? 1 : 2} strokeDasharray={matched ? undefined : "5 4"} opacity="0.7" />
            </svg>
            <p className="mt-2 text-xs text-ink-500">Abstract illustration — exact matching depends on the product.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Pattern type">
              {wlPatterns.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={kind === x.key}
                  onClick={() => setKind(x.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    kind === x.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-teal-600"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div className="mt-4 inline-flex rounded-full bg-teal-100 p-1" role="group" aria-label="Alignment">
              {[true, false].map((m) => (
                <button
                  key={String(m)}
                  type="button"
                  aria-pressed={matched === m}
                  onClick={() => setMatched(m)}
                  className={`focus-ring rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${matched === m ? "bg-teal-800 text-sand-50" : "text-teal-800"}`}
                >
                  {m ? "Matched" : "Misaligned"}
                </button>
              ))}
            </div>
            <p key={kind} className="mt-5 animate-fadeIn text-[15px] leading-relaxed text-ink-700" aria-live="polite">
              <span className="font-semibold text-ink-950">{p.label}: </span>
              {p.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

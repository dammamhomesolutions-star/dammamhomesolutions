"use client";

import { useState } from "react";
import { fcParts, type FcPart } from "@/lib/false-ceiling";

const hi = "#c76a3f";

// Architectural cross-section of a false ceiling. Each part highlights when chosen.
function Section({ part }: { part: FcPart }) {
  const on = (p: FcPart) => part === p;
  return (
    <svg viewBox="0 0 480 270" className="h-auto w-full" role="img" aria-labelledby="fc-section-title">
      <title id="fc-section-title">{`False ceiling cross-section with this part highlighted: ${fcParts.find((x) => x.key === part)?.label}`}</title>
      <rect width="480" height="270" fill="#eef3f5" />
      {/* slab */}
      <rect width="480" height="34" fill={on("slab") ? "#e0b28a" : "#7fa0b0"} stroke={on("slab") ? hi : "none"} strokeWidth="3" />
      <text x="10" y="22" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1c2733">SLAB</text>
      {/* cavity */}
      <rect x="0" y="34" width="480" height="78" fill={on("cavity") ? "#f3e1d3" : "#d7e4ea"} stroke={on("cavity") ? hi : "none"} strokeWidth="3" strokeDasharray="6 4" />
      {/* duct */}
      <path d="M220 50h120v18h-50v32h-20V68h-50z" fill="#b8ccd4" stroke="#5b7d8f" strokeWidth="1.5" />
      {/* framing */}
      <g stroke={on("frame") ? hi : "#3d5a6b"} strokeWidth={on("frame") ? 3.5 : 2}>
        {[50, 130, 210, 370, 450].map((x) => <path key={x} d={`M${x} 34v66`} />)}
        <path d="M20 104h440" />
      </g>
      {/* board */}
      <path d="M0 112h400v28h80v8h-88v-28H0z" fill={on("board") ? "#e0b28a" : "#faf8f4"} stroke={on("board") ? hi : "#26333f"} strokeWidth={on("board") ? 3 : 1.5} />
      {/* cove light */}
      <rect x="406" y="122" width="10" height="10" rx="2" fill={on("cove") ? hi : "#f6dfb4"} />
      <path className={on("cove") ? "lt-beam" : undefined} d="M416 126c20-6 40-8 60-6" stroke="#f6dfb4" strokeWidth={on("cove") ? 6 : 3} fill="none" />
      {/* downlight */}
      <rect x="128" y="94" width="24" height="18" rx="3" fill={on("light") ? "#e0b28a" : "#b8ccd4"} stroke={on("light") ? hi : "#5b7d8f"} strokeWidth="1.5" />
      <rect x="130" y="112" width="20" height="4" fill="#fff6e3" />
      <path className="lt-beam" d="M132 116h16l40 140h-96z" fill="#f6dfb4" opacity={on("light") ? 0.55 : 0.25} />
      {/* diffuser */}
      <rect x="268" y="110" width="44" height="7" fill={on("diffuser") ? hi : "#5b7d8f"} />
      <path className={on("diffuser") ? "fs-flow" : undefined} d="M274 122l-10 32M290 122v36M306 122l10 32" stroke="#7fa0b0" strokeWidth="2" />
      {/* access panel */}
      <rect x="340" y="111" width="44" height="7" fill={on("access") ? "#e0b28a" : "#faf8f4"} stroke={on("access") ? hi : "#26333f"} strokeWidth={on("access") ? 3 : 1} strokeDasharray="4 3" />
      {/* floor */}
      <rect y="254" width="480" height="16" fill="#b8ccd4" />
    </svg>
  );
}

export default function FcSection() {
  const [part, setPart] = useState<FcPart>("cavity");
  const p = fcParts.find((x) => x.key === part)!;

  return (
    <section id="cross-section" aria-labelledby="fc-section" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Inside a false ceiling</p>
          <h2 id="fc-section" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What&rsquo;s above a false ceiling?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Tap each part to see what it does and why it&rsquo;s planned before the ceiling is closed.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10 lg:col-span-7">
            <Section part={part} />
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Ceiling parts">
              {fcParts.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={part === x.key}
                  onClick={() => setPart(x.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    part === x.key ? "border-glass-900 bg-glass-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-glass-600"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={part} className="mt-5 animate-fadeIn rounded-2xl bg-glass-100 p-5" aria-live="polite">
              <h3 className="font-serif text-xl text-ink-950">{p.label}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{p.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

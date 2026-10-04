"use client";

import { useState } from "react";
import { fcHeightFactors, fcHeightModes, type FcHeightMode } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

// Shows that deeper designs use more of the room height. Not to scale and not
// an engineering calculation.
export default function FcHeight() {
  const [mode, setMode] = useState<FcHeightMode>("simple");
  const m = fcHeightModes.find((x) => x.key === mode)!;
  const ceilingY = 30 + m.drop;

  return (
    <section id="ceiling-height" aria-labelledby="fc-height" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-glass-700">Ceiling height</p>
          <h2 id="fc-height" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How much ceiling height will a false ceiling use?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            There&rsquo;s no universal figure. The space needed comes from the
            specific system and site — we measure and confirm the finished
            ceiling level before any framing goes up.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {fcHeightFactors.map((f) => <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{f}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 sm:p-6">
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="Ceiling design">
              {fcHeightModes.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={mode === x.key}
                  onClick={() => setMode(x.key)}
                  className={`focus-ring rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors ${mode === x.key ? "border-glass-900 bg-glass-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-glass-600"}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <svg viewBox="0 0 360 230" className="mt-5 h-auto w-full" role="img" aria-labelledby="fc-h-title">
              <title id="fc-h-title">{`Room section: ${m.label} — the false ceiling sits lower as the cavity gets deeper`}</title>
              <rect width="360" height="230" fill="#eef3f5" />
              <rect width="360" height="30" fill="#7fa0b0" />
              <text x="10" y="20" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1c2733">ORIGINAL CEILING</text>
              <rect x="0" y="30" width="360" height={m.drop} fill="#d7e4ea" style={{ transition: "height 500ms ease" }} />
              {mode !== "simple" && <rect x="130" y="34" width="44" height={m.drop - 8} rx="3" fill="#b8ccd4" stroke="#5b7d8f" />}
              {mode === "services" && <rect x="210" y="36" width="110" height="18" rx="3" fill="#5b7d8f" />}
              <rect x="0" y={ceilingY} width="360" height="7" fill="#26333f" style={{ transition: "y 500ms ease" }} />
              <text x="10" y={ceilingY - 6} fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d5a6b" style={{ transition: "y 500ms ease" }}>CAVITY</text>
              <text x="10" y={ceilingY + 22} fontFamily="ui-monospace, monospace" fontSize="10" fill="#1c2733" style={{ transition: "y 500ms ease" }}>FALSE CEILING</text>
              {/* clearance */}
              <path d={`M300 ${ceilingY + 8}V214`} stroke="#c76a3f" strokeWidth="1.5" style={{ transition: "d 500ms ease" }} />
              <path d={`M294 ${ceilingY + 8}h12M294 214h12`} stroke="#c76a3f" strokeWidth="1.5" />
              <text x="248" y="150" fontFamily="ui-monospace, monospace" fontSize="10" fill="#c76a3f">ROOM</text>
              <text x="248" y="163" fontFamily="ui-monospace, monospace" fontSize="10" fill="#c76a3f">HEIGHT</text>
              <rect y="214" width="360" height="16" fill="#b8ccd4" />
              <text x="10" y="226" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1c2733">FINISHED FLOOR</text>
            </svg>
            <p key={mode} className="mt-3 flex animate-fadeIn gap-2 text-sm text-ink-700" aria-live="polite">
              <FcIcon name="height" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />
              {m.body}
            </p>
            <p className="mt-2 text-xs text-ink-500">Illustration only — not to scale and not an engineering calculation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

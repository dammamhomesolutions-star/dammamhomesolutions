"use client";

import { useState } from "react";
import { Tag } from "./ShUi";

// Drainage (good vs poor runoff) and cover tension (taut vs sagging).
export default function ShWater() {
  const [poor, setPoor] = useState(false);
  const [sag, setSag] = useState(false);

  const toggle = (on: boolean, set: (v: boolean) => void, a: string, b: string, label: string) => (
    <div className="inline-flex border border-steel-900/20 bg-sand-50" role="group" aria-label={label}>
      {[{ v: false, l: a }, { v: true, l: b }].map((o) => (
        <button key={o.l} type="button" aria-pressed={on === o.v} onClick={() => set(o.v)} className={`focus-ring px-4 py-2 text-sm font-semibold transition-colors ${on === o.v ? "bg-steel-900 text-sand-50" : "text-ink-700 hover:text-ink-950"}`}>{o.l}</button>
      ))}
    </div>
  );

  return (
    <section id="drainage" aria-labelledby="sh-water" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge grid gap-16 lg:grid-cols-2">
        <div>
          <Tag n="08">Drainage &amp; rainwater</Tag>
          <h2 id="sh-water" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where does the water go?</h2>
          <div className="mt-6">{toggle(poor, setPoor, "Good runoff", "Poor runoff", "Runoff")}</div>
          <figure className="mt-5 border border-steel-900/10 bg-sand-50">
            <svg viewBox="0 0 500 260" className="h-auto w-full" role="img" aria-label={poor ? "Poor runoff: the cover dips in the middle, water pools there and drips onto the parking area" : "Good runoff: a sloped, taut cover sheds water to a gutter at the low edge and away from the parking area"}>
              <path d="M0 240H500" stroke="#9a968a" strokeWidth="2" />
              <path d="M70 70V240M430 110V240" stroke="#666f78" strokeWidth="9" />
              {poor ? (
                <>
                  <path d="M60 66Q250 150 440 106" fill="none" stroke="#b7bfc6" strokeWidth="10" />
                  <ellipse cx="240" cy="116" rx="60" ry="8" fill="#5b7d8f" opacity="0.7" />
                  {[0, 1, 2].map((i) => <circle key={i} className="sh-run" cx="240" cy="128" r="4" fill="#5b7d8f" style={{ animationDelay: `${i * 0.8}s`, ["--sh-dx" as string]: "0px", ["--sh-dy" as string]: "100px" }} />)}
                  <ellipse cx="240" cy="238" rx="40" ry="5" fill="#5b7d8f" opacity="0.4" />
                </>
              ) : (
                <>
                  <path d="M60 66L440 106" stroke="#b7bfc6" strokeWidth="10" />
                  <path d="M440 100h18v14h-18zM450 114V240" stroke="#666f78" strokeWidth="5" fill="none" />
                  {[0, 1, 2].map((i) => <circle key={i} className="sh-run" cx="120" cy="64" r="4" fill="#5b7d8f" style={{ animationDelay: `${i * 0.8}s`, ["--sh-dx" as string]: "320px", ["--sh-dy" as string]: "34px" }} />)}
                </>
              )}
              <rect x="150" y="190" width="170" height="48" rx="10" fill="#4d545c" />
            </svg>
          </figure>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
            {poor ? "Water accumulates or drips where it shouldn't." : "Water moves off the cover and away from the covered area."}{" "}
            Possible concerns: sagging cover, blocked drainage, damaged edge, poor slope, or a gutter or downpipe problem where fitted.
          </p>
        </div>

        <div>
          <Tag n="08b">Cover tension</Tag>
          <h2 className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Taut or sagging?</h2>
          <div className="mt-6">{toggle(sag, setSag, "Properly tensioned", "Sagging", "Cover tension")}</div>
          <figure className="mt-5 border border-steel-900/10 bg-sand-50">
            <svg viewBox="0 0 500 260" className="h-auto w-full" role="img" aria-label={sag ? "Sagging cover: the fabric droops between the supports with loose edges and a hollow where water and dust can collect" : "Properly tensioned cover: the fabric is taut between the supports with even edges"}>
              <path d="M0 240H500" stroke="#9a968a" strokeWidth="2" />
              {[[60, 80], [440, 60]].map(([x, y]) => <path key={x} d={`M${x} ${y}V240`} stroke="#666f78" strokeWidth="9" />)}
              <path
                d={sag ? "M60 80C150 160 340 150 440 60L440 74C340 168 150 176 60 94Z" : "M60 80L440 60L440 74L60 94Z"}
                fill="#e0b28a"
                className="transition-all duration-700 motion-reduce:transition-none"
              />
              {sag && <path d="M180 140c20 6 60 8 100 2" stroke="#9a968a" strokeWidth="4" opacity="0.6" />}
              {[[60, 80], [440, 60]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="7" fill={sag ? "#b3652f" : "#2b2f33"} />)}
            </svg>
          </figure>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
            Sagging can affect appearance, water runoff, stress on the material and how well
            the shade performs. Not every sagging cover is dangerous — but it&rsquo;s worth
            finding out why it&rsquo;s sagging: stretched fabric, loose fixings, a damaged
            edge or something in the frame.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { shConnectionSigns, shCorrosion } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

const parts = [
  { key: "posts", label: "Posts", x: 20, y: 62 },
  { key: "beams", label: "Beams", x: 50, y: 22 },
  { key: "joints", label: "Joints", x: 82, y: 22 },
  { key: "brackets", label: "Brackets", x: 30, y: 31 },
  { key: "connections", label: "Cover connections", x: 62, y: 8 },
  { key: "base", label: "Base points", x: 82, y: 92 },
];

// Frame anatomy, connections and the corrosion progression.
export default function ShFrame() {
  const [stage, setStage] = useState(0);

  return (
    <section id="frame" aria-labelledby="sh-frame" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Tag n="06">Frame &amp; connections</Tag>
            <h2 id="sh-frame" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">The cover isn&rsquo;t the whole shade.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Visible cover damage can come with frame problems — or be completely
              separate from them. A new cover on a corroded frame, or a repainted
              frame with failing connections, only fixes half the job.
            </p>
            <h3 className="mt-10 font-serif text-2xl text-ink-950">Small connections matter.</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Joints, brackets, fasteners and cover fixing points carry the load. Visible signs worth reporting:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {shConnectionSigns.map((s) => <li key={s} className="bg-steel-100 px-3 py-1.5 text-sm text-ink-800">{s}</li>)}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-500">Please don&rsquo;t tighten, cut, drill or weld structural parts yourself. Frame and connection repairs are done by our team after assessment.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative border border-steel-900/10 bg-steel-100/50">
              <svg viewBox="0 0 600 420" className="h-auto w-full" role="img" aria-label="Frame anatomy of a pergola-style shade: two posts on base plates, main beams, cross rafters, corner joints, angled brackets and cover connection points">
                <g stroke="#4d545c" fill="none">
                  <path d="M120 80V380M480 80V380" strokeWidth="14" />
                  <path d="M80 80H520" strokeWidth="14" />
                  <path d="M80 60H520" strokeWidth="4" />
                  {[140, 220, 300, 380, 460].map((x) => <path key={x} d={`M${x} 52V88`} strokeWidth="6" />)}
                  <path d="M120 140L180 80M480 140L420 80" strokeWidth="6" />
                </g>
                {[[120, 80], [480, 80]].map(([x, y]) => <rect key={x} x={x - 12} y={y - 12} width="24" height="24" fill="#c98246" opacity="0.8" />)}
                {[[100, 380], [460, 380]].map(([x, y]) => <rect key={x} x={x} y={y} width="40" height="10" fill="#2b2f33" />)}
                {[140, 220, 300, 380, 460].map((x) => <circle key={x} cx={x} cy="52" r="5" fill="#c98246" />)}
                <path d="M0 390H600" stroke="#9a968a" strokeWidth="2" />
              </svg>
              {parts.map((p) => (
                <span key={p.key} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-steel-900 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-sand-50 sm:text-[10px]" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                  {p.label}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-500">Simplified anatomy — shades vary in design.</p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="max-w-3xl font-serif text-2xl tracking-tight text-ink-950 sm:text-4xl">Is it just surface rust — or something more?</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">The extent and the location matter. Rust on a decorative rafter is different from rust at the foot of a post.</p>
          <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4" role="group" aria-label="Corrosion stage">
            {shCorrosion.map((c, n) => (
              <button key={c.label} type="button" aria-pressed={stage === n} aria-controls="sh-rust-text" onClick={() => setStage(n)} className={`focus-ring flex flex-col text-left transition-transform ${stage === n ? "-translate-y-1" : ""}`}>
                <span
                  aria-hidden="true"
                  className={`block h-16 w-full border-b-4 ${stage === n ? "border-copper-600" : "border-transparent"}`}
                  style={{ background: ["linear-gradient(90deg,#838d96,#b7bfc6)", "radial-gradient(circle at 30% 50%,#b3652f 0 8%,transparent 9%),radial-gradient(circle at 65% 40%,#c98246 0 6%,transparent 7%),linear-gradient(90deg,#838d96,#b7bfc6)", "radial-gradient(circle at 40% 50%,#4a2c1e 0 12%,#8f4f2f 13% 22%,transparent 23%),radial-gradient(circle at 70% 60%,#6b3d27 0 8%,transparent 9%),linear-gradient(90deg,#8f4f2f,#b3652f)", "repeating-linear-gradient(45deg,#4a2c1e 0 6px,#8f4f2f 6px 12px)"][n] }}
                />
                <span className="mt-2 font-mono text-[10px] text-steel-600">{String(n + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold leading-tight text-ink-950">{c.label}</span>
              </button>
            ))}
          </div>
          <p id="sh-rust-text" aria-live="polite" className="mt-5 max-w-2xl border-l-4 border-copper-600 pl-4 text-[15px] leading-relaxed text-ink-800">{shCorrosion[stage].text}</p>
          <ul className="sr-only">{shCorrosion.map((c) => <li key={c.label}>{c.label}: {c.text}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

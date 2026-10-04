"use client";

import { useState } from "react";
import { rnSliderScenes, type RnSceneKey } from "@/lib/renovation";

// Drawn scenes, not photographs. Real project photos will replace them.
function Scene({ k, after }: { k: RnSceneKey; after: boolean }) {
  const wall = after ? "#ebe4d6" : "#d4ccb8";
  const floor = after ? "#a67c5b" : "#b4ad9c";
  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width="800" height="330" fill={wall} />
      <rect y="330" width="800" height="120" fill={floor} />
      {k === "living" && (
        <g>
          {after ? (
            <>
              <rect x="420" y="40" width="320" height="290" fill="#513825" />
              {Array.from({ length: 14 }, (_, i) => <rect key={i} x={428 + i * 22.6} y="48" width="16" height="282" fill="#6b4a35" />)}
              <rect x="0" y="0" width="800" height="14" fill="#d69a5f" opacity="0.5" />
              <path d="M300 0v70M280 70h40l-6 18h-28z" stroke="#333a49" strokeWidth="2" fill="#333a49" />
              <ellipse cx="300" cy="96" rx="80" ry="16" fill="#f3e4d1" opacity="0.6" />
              <rect x="450" y="250" width="260" height="70" rx="12" fill="#f4f0e8" />
              <rect x="470" y="232" width="56" height="36" rx="6" fill="#c98246" />
            </>
          ) : (
            <>
              <path d="M520 80l12 34-14 22 16 34" stroke="#78746a" strokeWidth="2.5" fill="none" />
              <circle cx="400" cy="40" r="10" fill="#eae7de" />
              <rect x="450" y="250" width="260" height="70" rx="3" fill="#8f8878" />
              {Array.from({ length: 6 }, (_, i) => <path key={i} d={`M${i * 140} 330L${i * 140 - 80} 450`} stroke="#9a968a" strokeWidth="2" />)}
            </>
          )}
          <rect x="70" y="70" width="200" height="190" fill={after ? "#eef3f5" : "#c4c9c6"} stroke={after ? "#faf8f4" : "#9a968a"} strokeWidth="8" />
        </g>
      )}
      {k === "bedroom" && (
        <g>
          {after ? (
            <>
              <rect x="40" y="30" width="260" height="300" fill="#cdab8f" />
              {Array.from({ length: 4 }, (_, i) => <path key={i} d={`M${105 + i * 65} 30v300`} stroke="#a67c5b" strokeWidth="2" />)}
              {[0, 1, 2, 3].map((i) => <circle key={i} cx={85 + i * 65} cy="180" r="3" fill="#6b4a35" />)}
              <rect x="320" y="60" width="440" height="270" fill="#f2e6d5" />
              {Array.from({ length: 11 }, (_, i) => <path key={i} d={`M${330 + i * 40} 60c10 30-10 60 0 90s-10 60 0 90 -10 50 0 90`} stroke="#cdab8f" strokeWidth="2" fill="none" />)}
              <rect x="420" y="240" width="260" height="90" rx="10" fill="#faf8f4" />
              <rect x="420" y="200" width="260" height="50" rx="10" fill="#8a6248" />
              <ellipse cx="400" cy="200" rx="30" ry="40" fill="#f3e4d1" opacity="0.7" />
              <ellipse cx="700" cy="200" rx="30" ry="40" fill="#f3e4d1" opacity="0.7" />
            </>
          ) : (
            <>
              <rect x="60" y="90" width="150" height="240" fill="#8f8878" />
              <path d="M135 90v240" stroke="#78746a" strokeWidth="2" />
              <rect x="420" y="240" width="260" height="90" rx="3" fill="#c4c0b4" />
              <rect x="420" y="210" width="260" height="34" fill="#9a968a" />
              <circle cx="550" cy="30" r="10" fill="#eae7de" />
            </>
          )}
        </g>
      )}
      {k === "kitchen" && (
        <g>
          <rect x="60" y="60" width="680" height="110" fill={after ? "#f4f0e8" : "#a49d8c"} />
          {Array.from({ length: 6 }, (_, i) => <rect key={i} x={70 + i * 112} y="68" width="104" height="94" fill="none" stroke={after ? "#ded2ba" : "#78746a"} strokeWidth="2" />)}
          {!after && <path d="M300 80l14 30M520 120l-8 26" stroke="#5c584f" strokeWidth="2" />}
          <rect x="60" y="170" width="680" height="80" fill={after ? "url(#rn-tile)" : "#c4c0b4"} />
          {after && (
            <defs>
              <pattern id="rn-tile" width="40" height="20" patternUnits="userSpaceOnUse">
                <rect width="40" height="20" fill="#eceef0" />
                <path d="M0 0h40M0 10h40M20 0v10M0 10v10M40 10v10" stroke="#b7bfc6" strokeWidth="1" />
              </pattern>
            </defs>
          )}
          {after && <rect x="60" y="170" width="680" height="6" fill="#f3e4d1" opacity="0.9" />}
          <rect x="50" y="250" width="700" height="16" fill={after ? "#333a49" : "#78746a"} />
          <rect x="60" y="266" width="680" height="64" fill={after ? "#4a5468" : "#8f8878"} />
          {Array.from({ length: 6 }, (_, i) => <path key={i} d={`M${170 + i * 112} 266v64`} stroke={after ? "#333a49" : "#69748a"} strokeWidth="2" />)}
        </g>
      )}
      {k === "bathroom" && (
        <g>
          {Array.from({ length: after ? 9 : 14 }, (_, c) => Array.from({ length: after ? 4 : 7 }, (_, r) => {
            const w = after ? 90 : 58;
            return <rect key={`${c}-${r}`} x={c * w} y={r * w * 0.9} width={w - 2} height={w * 0.9 - 2} fill={after ? "#eae7de" : (c + r) % 5 === 0 ? "#9fb3b0" : "#b9c7c4"} />;
          }))}
          {!after && <path d="M220 60l20 40-14 24M600 200l16 30" stroke="#35332e" strokeWidth="2.5" fill="none" />}
          {after ? (
            <>
              <rect x="300" y="60" width="200" height="130" rx="6" fill="#eef3f5" stroke="#c98246" strokeWidth="4" />
              <rect x="290" y="48" width="220" height="6" fill="#f3e4d1" />
              <rect x="280" y="220" width="240" height="60" fill="#6b4a35" />
              <ellipse cx="400" cy="222" rx="70" ry="10" fill="#faf8f4" />
            </>
          ) : (
            <>
              <rect x="320" y="80" width="160" height="110" fill="#c4c9c6" stroke="#9a968a" strokeWidth="4" />
              <path d="M330 220h140l-20 110h-100z" fill="#eae7de" />
            </>
          )}
        </g>
      )}
      {k === "exterior" && (
        <g>
          <rect width="800" height="250" fill={after ? "#d7e4ea" : "#cfd3d0"} />
          <rect x="0" y="150" width="800" height="180" fill={after ? "#ebe4d6" : "#c4b9a2"} />
          {Array.from({ length: 5 }, (_, i) => <rect key={i} x={i * 180 - 10} y="130" width="40" height="200" fill={after ? "#d9bfa0" : "#b0a58c"} />)}
          <rect x="0" y="140" width="800" height="14" fill={after ? "#faf8f4" : "#a49d8c"} />
          {!after && <path d="M250 170l16 40-12 30 20 40M560 200l-10 30 14 26" stroke="#5c584f" strokeWidth="3" fill="none" />}
          {!after && <rect x="380" y="220" width="120" height="60" fill="#9a968a" opacity="0.4" />}
          {after && [80, 440].map((x) => <g key={x}><rect x={x + 8} y="176" width="10" height="16" fill="#333a49" /><path d={`M${x + 13} 192l-26 70h52z`} fill="#f3e4d1" opacity="0.6" /></g>)}
          <rect y="330" width="800" height="120" fill={after ? "#9a968a" : "#8f8878"} />
        </g>
      )}
    </svg>
  );
}

export default function RnSlider() {
  const [k, setK] = useState<RnSceneKey>("living");
  const [pos, setPos] = useState(50);
  const s = rnSliderScenes.find((x) => x.key === k)!;

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label="Room">
        <div className="flex w-max gap-0 border-b border-ink-950/15 sm:w-auto">
          {rnSliderScenes.map((x) => (
            <button key={x.key} type="button" aria-pressed={k === x.key} onClick={() => { setK(x.key); setPos(50); }} className={`focus-ring -mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${k === x.key ? "border-ink-950 text-ink-950" : "border-transparent text-ink-500 hover:text-ink-900"}`}>
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-sand-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-4 sm:aspect-[16/8]">
        <Scene k={k} after />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Scene k={k} after={false} />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-sand-50" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sand-50 bg-ink-950/80 text-sand-50">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          </span>
        </span>
        <span className="pointer-events-none absolute left-3 top-3 max-w-[45%] bg-ink-950/80 px-2.5 py-1.5 text-[11px] leading-snug text-sand-50 sm:left-5 sm:top-5 sm:text-xs"><span className="font-mono uppercase tracking-[0.18em] text-clay-300">Before</span><br />{s.before}</span>
        <span className="pointer-events-none absolute bottom-3 right-3 max-w-[45%] bg-sand-50/90 px-2.5 py-1.5 text-right text-[11px] leading-snug text-ink-950 sm:bottom-5 sm:right-5 sm:text-xs"><span className="font-mono uppercase tracking-[0.18em] text-walnut-700">After</span><br />{s.after}</span>
        <label className="absolute inset-0">
          <span className="sr-only">Before and after divider for the {s.label.toLowerCase()} illustration</span>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-valuetext={`${pos}% before shown`}
            className="h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
          />
        </label>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Drag or use arrow keys · Illustrations, not completed projects — real project photos will be added</p>
    </div>
  );
}

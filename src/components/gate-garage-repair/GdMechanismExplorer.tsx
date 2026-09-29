"use client";

import { useState } from "react";
import { gdMechanismParts } from "@/lib/gate-garage-repair";

const positions: Record<string, { x: number; y: number; cx: number; cy: number }> = {
  frame: { x: 20, y: 20, cx: 20, cy: 50 },
  tracks: { x: 26, y: 25, cx: 30, cy: 50 },
  rollers: { x: 26, y: 30, cx: 30, cy: 35 },
  panels: { x: 30, y: 35, cx: 50, cy: 55 },
  hinges: { x: 30, y: 55, cx: 50, cy: 70 },
  handle: { x: 60, y: 60, cx: 75, cy: 62 },
  hardware: { x: 62, y: 62, cx: 78, cy: 70 },
  springs: { x: 20, y: 22, cx: 22, cy: 22 },
};

export default function GdMechanismExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = gdMechanismParts.find((p) => p.id === activeId);
  const focus = activeId ? positions[activeId] : null;
  const dx = focus ? (50 - focus.cx) * 0.5 : 0;
  const dy = focus ? (50 - focus.cy) * 0.5 : 0;

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">The mechanism</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A garage door is a system of connected parts.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-md border border-ink-900/10 bg-sand-100">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `scale(${focus ? 1.18 : 1}) translate(${dx}%, ${dy}%)` }}
            >
              <svg viewBox="0 0 300 260" className="h-auto w-full" role="img" aria-label="Garage door mechanism diagram">
                {/* frame */}
                <rect
                  x="30"
                  y="20"
                  width="240"
                  height="220"
                  fill="none"
                  stroke={activeId === "frame" ? "#94472a" : "#8e97a8"}
                  strokeWidth={activeId === "frame" ? 3 : 2}
                  style={{ opacity: activeId && activeId !== "frame" ? 0.3 : 1, transition: "opacity 300ms, stroke 300ms" }}
                />

                {/* tracks */}
                <line x1="46" y1="30" x2="46" y2="230" stroke={activeId === "tracks" ? "#94472a" : "#b4bac6"} strokeWidth={activeId === "tracks" ? 4 : 2.5} style={{ opacity: activeId && activeId !== "tracks" ? 0.3 : 1, transition: "opacity 300ms" }} />
                <line x1="254" y1="30" x2="254" y2="230" stroke={activeId === "tracks" ? "#94472a" : "#b4bac6"} strokeWidth={activeId === "tracks" ? 4 : 2.5} style={{ opacity: activeId && activeId !== "tracks" ? 0.3 : 1, transition: "opacity 300ms" }} />

                {/* panels */}
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x="52"
                    y={32 + i * 48}
                    width="196"
                    height="44"
                    fill="url(#gd-panel)"
                    filter="url(#gd-noise)"
                    stroke={activeId === "panels" ? "#94472a" : "#ded2ba"}
                    strokeWidth={activeId === "panels" ? 2.4 : 1}
                    style={{ opacity: activeId && activeId !== "panels" ? 0.3 : 1, transition: "opacity 300ms" }}
                  />
                ))}

                {/* rollers */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <circle cx="46" cy={30 + i * 48} r="6" fill={activeId === "rollers" ? "#94472a" : "#69748a"} style={{ opacity: activeId && activeId !== "rollers" ? 0.3 : 1, transition: "opacity 300ms" }} />
                    <circle cx="254" cy={30 + i * 48} r="6" fill={activeId === "rollers" ? "#94472a" : "#69748a"} style={{ opacity: activeId && activeId !== "rollers" ? 0.3 : 1, transition: "opacity 300ms" }} />
                  </g>
                ))}

                {/* hinges, at panel seams */}
                {[1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x="145"
                    y={30 + i * 48 - 4}
                    width="16"
                    height="8"
                    rx="2"
                    fill={activeId === "hinges" ? "#94472a" : "#4a5468"}
                    style={{ opacity: activeId && activeId !== "hinges" ? 0.3 : 1, transition: "opacity 300ms" }}
                  />
                ))}

                {/* springs, top corner */}
                <path
                  d="M60 26 q6 -8 12 0 q6 8 12 0 q6 -8 12 0"
                  fill="none"
                  stroke={activeId === "springs" ? "#94472a" : "#b4bac6"}
                  strokeWidth={activeId === "springs" ? 3 : 2}
                  style={{ opacity: activeId && activeId !== "springs" ? 0.3 : 1, transition: "opacity 300ms" }}
                />

                {/* handle */}
                <rect
                  x="180"
                  y="150"
                  width="30"
                  height="8"
                  rx="3"
                  fill={activeId === "handle" ? "#94472a" : "#232833"}
                  style={{ opacity: activeId && activeId !== "handle" ? 0.3 : 1, transition: "opacity 300ms" }}
                />

                {/* locking hardware */}
                <circle
                  cx="225"
                  cy="200"
                  r="7"
                  fill="none"
                  stroke={activeId === "hardware" ? "#94472a" : "#232833"}
                  strokeWidth={activeId === "hardware" ? 3 : 2}
                  style={{ opacity: activeId && activeId !== "hardware" ? 0.3 : 1, transition: "opacity 300ms" }}
                />
              </svg>
            </div>
          </div>

          <div>
            <div role="group" aria-label="Mechanism components" className="flex flex-wrap gap-2">
              {gdMechanismParts.map((part) => {
                const isActive = activeId === part.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(isActive ? null : part.id)}
                    onMouseEnter={() => setActiveId(part.id)}
                    onMouseLeave={() => setActiveId((cur) => (cur === part.id ? null : cur))}
                    className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                      isActive ? "border-rust-700 bg-rust-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                    }`}
                  >
                    {part.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 min-h-[6rem] rounded-md border border-ink-900/10 bg-sand-100/60 p-5">
              {active ? (
                <>
                  <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.description}</p>
                </>
              ) : (
                <p className="text-sm text-ink-600">Select a component to see a short explanation.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

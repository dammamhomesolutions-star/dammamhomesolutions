"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { kcProblems, type KcProblemId } from "@/lib/kitchen-cabinet-repair";

interface Visual {
  doorAngle: number;
  doorSkew: number;
  handleShift: number;
  drawerZ: number;
  drawerTilt: number;
  edgeGlow: boolean;
  surfaceDamage: boolean;
}

const visuals: Record<KcProblemId, Visual> = {
  door: { doorAngle: -14, doorSkew: 0, handleShift: 0, drawerZ: 0, drawerTilt: 0, edgeGlow: false, surfaceDamage: false },
  hinge: { doorAngle: -10, doorSkew: 4, handleShift: 0, drawerZ: 0, drawerTilt: 0, edgeGlow: false, surfaceDamage: false },
  handle: { doorAngle: 0, doorSkew: 0, handleShift: 6, drawerZ: 0, drawerTilt: 0, edgeGlow: false, surfaceDamage: false },
  drawer: { doorAngle: 0, doorSkew: 0, handleShift: 0, drawerZ: 18, drawerTilt: 0, edgeGlow: false, surfaceDamage: false },
  runner: { doorAngle: 0, doorSkew: 0, handleShift: 0, drawerZ: 22, drawerTilt: 5, edgeGlow: false, surfaceDamage: false },
  panel: { doorAngle: 0, doorSkew: 0, handleShift: 0, drawerZ: 0, drawerTilt: 0, edgeGlow: false, surfaceDamage: true },
  edge: { doorAngle: 0, doorSkew: 0, handleShift: 0, drawerZ: 0, drawerTilt: 0, edgeGlow: true, surfaceDamage: false },
  "not-sure": { doorAngle: 0, doorSkew: 0, handleShift: 0, drawerZ: 0, drawerTilt: 0, edgeGlow: false, surfaceDamage: false },
};

export default function KcProblemSelector() {
  const [activeId, setActiveId] = useState<KcProblemId>(kcProblems[0].id);
  const active = kcProblems.find((p) => p.id === activeId)!;
  const v = visuals[activeId];

  return (
    <section id="whats-not-working" className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Start with what you see</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What isn&rsquo;t working properly?
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-sm border border-walnut-900/10 bg-gradient-to-b from-sand-50 to-sand-100 p-6" style={{ perspective: "900px" }}>
            {activeId === "not-sure" ? (
              <p className="text-center text-sm text-ink-500">Send us a photo and we&rsquo;ll help point it in the right direction.</p>
            ) : (
              <div className="relative flex h-40 w-32 gap-2" style={{ transformStyle: "preserve-3d" }}>
                <div className="relative h-full flex-[1.3]">
                  <div className="absolute inset-0 rounded-sm bg-ink-950/80" />
                  <div
                    className="absolute inset-0 rounded-sm border border-walnut-900/30 shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                      transformOrigin: "left center",
                      transform: `rotateY(${v.doorAngle}deg) skewY(${v.doorSkew}deg)`,
                      transition: "transform 500ms cubic-bezier(0.65,0,0.35,1)",
                      filter: v.surfaceDamage ? "url(#kc-noise)" : undefined,
                    }}
                  >
                    <span
                      className="absolute top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-full bg-steel-100 transition-transform duration-500"
                      style={{ right: `${8 + v.handleShift}px`, transform: `translateY(-50%) rotate(${v.handleShift * 3}deg)` }}
                    />
                    {v.edgeGlow && (
                      <span className="absolute inset-y-0 right-0 w-1.5 rounded-r-sm bg-ember-500" style={{ boxShadow: "0 0 10px 2px rgba(214,154,95,0.7)" }} />
                    )}
                    {v.surfaceDamage && (
                      <span
                        className="absolute left-4 top-4 h-6 w-6 rounded-sm"
                        style={{ background: "repeating-linear-gradient(135deg, #94472a, #94472a 2px, transparent 2px, transparent 5px)", opacity: 0.8 }}
                      />
                    )}
                  </div>
                </div>
                <div className="relative h-full flex-1">
                  <div className="absolute inset-0 rounded-sm bg-ink-950/80" />
                  <div
                    className="absolute inset-0 rounded-sm border border-walnut-900/25 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                      transform: `translateZ(${v.drawerZ}px) rotate(${v.drawerTilt}deg)`,
                      transition: "transform 500ms cubic-bezier(0.65,0,0.35,1)",
                    }}
                  >
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-100" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div role="group" aria-label="Cabinet problems" className="flex flex-wrap gap-2.5">
              {kcProblems.map((problem) => {
                const isActive = problem.id === activeId;
                return (
                  <button
                    key={problem.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(problem.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-walnut-900/15 text-ink-700 hover:border-walnut-600"
                    }`}
                  >
                    {problem.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-walnut-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              {active.visualNote && <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-walnut-600">{active.visualNote}</p>}
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm noticing this issue: ${active.label}. `)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-walnut-600 decoration-2 underline-offset-4 hover:text-walnut-700"
              >
                Send us a photo
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

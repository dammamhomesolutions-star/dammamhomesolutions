"use client";

import { useState, type JSX } from "react";

type StageId = "look" | "feel" | "assess";

const stages: { id: StageId; label: string; copy: string }[] = [
  { id: "look", label: "Look", copy: "A crack, stain, chip or damaged finish that's visible on the surface." },
  { id: "feel", label: "Feel", copy: "Unevenness, movement, a loose-feeling area, or a change in surface level underfoot." },
  { id: "assess", label: "Assess", copy: "What's visible, where it occurs, and the condition of the surrounding surface." },
];

function LookVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="200" height="160" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
      <path d="M30 40 L70 70 L58 90 L95 115" fill="none" stroke="#464339" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="150" cy="55" rx="26" ry="18" fill="#9c7752" opacity="0.45" />
      <path d="M170 110 L190 110 L188 128 L170 132 Z" fill="#78746a" />
    </svg>
  );
}

function FeelVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="200" height="160" fill="url(#fl-ivory)" />
      {/* cross-section side profile showing a subtle rise */}
      <path
        d="M10 120 L70 120 Q90 120 95 104 Q100 90 120 90 L190 90"
        fill="none"
        stroke="#5c584f"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line x1="10" y1="130" x2="190" y2="130" stroke="#c4c0b4" strokeWidth="1" strokeDasharray="3 4" />
      <text x="100" y="60" textAnchor="middle" fontSize="10" fill="#78746a">
        change in level
      </text>
    </svg>
  );
}

function AssessVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="200" height="160" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
      <path d="M40 50 L80 80 L68 100" fill="none" stroke="#464339" strokeWidth="2" strokeLinecap="round" />
      <rect x="20" y="30" width="90" height="90" fill="none" stroke="#b8916c" strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="20" y="24" fontSize="9" fill="#7a5a3f">
        affected area
      </text>
      <rect x="120" y="30" width="60" height="90" fill="none" stroke="#9a968a" strokeWidth="1" strokeDasharray="2 3" />
      <text x="120" y="24" fontSize="9" fill="#5c584f">
        surrounding condition
      </text>
    </svg>
  );
}

const visuals: Record<StageId, () => JSX.Element> = {
  look: LookVisual,
  feel: FeelVisual,
  assess: AssessVisual,
};

export default function FlFeelLookAssess() {
  const [activeId, setActiveId] = useState<StageId>("look");
  const active = stages.find((s) => s.id === activeId)!;
  const Visual = visuals[activeId];

  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">How a problem shows up</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A floor problem can be seen, felt, or both.
          </h2>
        </div>

        <div role="tablist" aria-label="Stage" className="mt-8 flex flex-wrap gap-2">
          {stages.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={activeId === s.id}
              onClick={() => setActiveId(s.id)}
              className={`focus-ring rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeId === s.id ? "border-ink-950 bg-ink-950 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
          <div key={active.id} className="mx-auto aspect-[5/4] w-full max-w-sm animate-fadeIn overflow-hidden rounded-sm border border-concrete-900/10 bg-sand-50">
            <Visual />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-700">{active.copy}</p>
        </div>

        <p className="mt-8 max-w-2xl text-xs text-ink-500">
          Touch or appearance alone doesn&rsquo;t diagnose the underlying cause — this section is educational, not a substitute for an in-person assessment.
        </p>
      </div>
    </section>
  );
}

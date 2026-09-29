"use client";

import { useState } from "react";
import { wtTankTypes, type WtTankType } from "@/lib/water-tank-cleaning";

function TankVisual({ id }: { id: string }) {
  if (id === "underground-concrete") {
    return (
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="160" height="90" fill="#eae7de" />
        <rect x="30" y="90" width="100" height="60" fill="url(#wt-tank-body)" stroke="#9a968a" strokeWidth="2" />
        <rect x="40" y="98" width="80" height="44" fill="url(#wt-clean-water)" />
        <rect x="60" y="80" width="40" height="14" fill="#9a968a" />
      </svg>
    );
  }
  if (id === "steel") {
    return (
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="160" height="160" fill="url(#wt-clean-water)" opacity="0.2" />
        <rect x="45" y="20" width="70" height="120" rx="10" fill="#8e97a8" stroke="#69748a" strokeWidth="2" />
        <rect x="53" y="30" width="54" height="100" rx="6" fill="url(#wt-clean-water)" />
        {[1, 2, 3].map((i) => (
          <line key={i} x1="45" y1={20 + i * 30} x2="115" y2={20 + i * 30} stroke="#69748a" strokeWidth="1.4" />
        ))}
      </svg>
    );
  }
  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="160" height="160" fill="#eae7de" />
        <text x="80" y="96" textAnchor="middle" fontSize="40" fill="#94cabd" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="160" height="90" fill="url(#wt-clean-water)" opacity="0.25" />
      <rect x="45" y="20" width="70" height="110" rx="14" fill="url(#wt-tank-body)" stroke="#9a968a" strokeWidth="2" />
      <rect x="55" y="30" width="50" height="88" rx="8" fill="url(#wt-clean-water)" />
      <rect x="75" y="10" width="10" height="10" fill="#9a968a" />
      <rect x="0" y="130" width="160" height="30" fill="#c4c0b4" />
    </svg>
  );
}

export default function WtTankTypeSelector() {
  const [activeId, setActiveId] = useState(wtTankTypes[0].id);
  const active = wtTankTypes.find((t: WtTankType) => t.id === activeId)!;

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-mint-700">What kind of tank do you have?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Different tanks, different considerations.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm border border-ink-900/10 bg-sand-100">
            <TankVisual id={activeId} />
          </div>

          <div>
            <div role="group" aria-label="Tank type" className="flex flex-wrap gap-2.5">
              {wtTankTypes.map((t) => {
                const isActive = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(t.id)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "border-mint-700 bg-mint-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-mint-600"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-7 max-w-lg animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

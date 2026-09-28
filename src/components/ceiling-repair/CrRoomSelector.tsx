"use client";

import { useState } from "react";
import { roomContexts } from "@/lib/ceiling-repair";

export default function CrRoomSelector() {
  const [activeId, setActiveId] = useState(roomContexts[0].id);
  const active = roomContexts.find((r) => r.id === activeId)!;

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Room transformation</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The ceiling, in context.
          </h2>
        </div>

        <div role="tablist" aria-label="Room" className="mt-8 flex flex-wrap gap-2.5">
          {roomContexts.map((room) => {
            const isActive = room.id === activeId;
            return (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(room.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
                }`}
              >
                {room.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div key={active.id} className="w-full animate-fadeIn overflow-hidden rounded-sm border border-ink-900/10">
            <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="320" height="180" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
              <line x1="0" y1="60" x2="320" y2="60" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="0" y1="120" x2="320" y2="120" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="106" y1="0" x2="106" y2="180" stroke="#ded2ba" strokeWidth="1.2" />
              <line x1="213" y1="0" x2="213" y2="180" stroke="#ded2ba" strokeWidth="1.2" />
              <circle cx="240" cy="60" r="12" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.1" />

              {active.id === "living" && (
                <path d="M40 40 L70 70 L58 88" fill="none" stroke="#333a49" strokeWidth="1.8" strokeLinecap="round" />
              )}
              {active.id === "bedroom" && (
                <path d="M50 130 L80 145" fill="none" stroke="#333a49" strokeWidth="1.4" strokeLinecap="round" />
              )}
              {active.id === "bathroom" && <ellipse cx="90" cy="100" rx="40" ry="26" fill="url(#ceiling-stain)" />}
              {active.id === "kitchen" && <ellipse cx="180" cy="140" rx="30" ry="18" fill="url(#ceiling-stain)" opacity="0.7" />}
              {active.id === "corridor" && (
                <rect x="140" y="80" width="40" height="30" fill="none" stroke="#69748a" strokeWidth="1.4" strokeDasharray="3 3" />
              )}
            </svg>
          </div>

          <div>
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
              Typical ceiling concerns
            </p>
            <ul className="mt-3 space-y-2">
              {active.concerns.map((concern) => (
                <li key={concern} className="text-sm text-ink-700">
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

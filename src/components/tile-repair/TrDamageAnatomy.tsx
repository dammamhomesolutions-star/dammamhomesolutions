"use client";

import { useState } from "react";
import { damageSamples } from "@/lib/tile-repair";

function SampleVisual({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect x="6" y="6" width="108" height="108" fill="url(#tile-stone)" filter="url(#tile-noise)" stroke="#c9bfa8" strokeWidth="2" />
      {id === "crack" && (
        <path d="M24 30 L52 55 L44 68 L78 92" fill="none" stroke="#333a49" strokeWidth="2" strokeLinecap="round" />
      )}
      {id === "chip" && <path d="M96 6 L114 6 L114 24 Q96 24 96 6 Z" fill="#b4bac6" />}
      {id === "loose" && (
        <rect x="16" y="16" width="88" height="88" fill="none" stroke="#69748a" strokeDasharray="3 4" strokeWidth="1.4" />
      )}
      {id === "grout" && (
        <>
          <rect x="6" y="6" width="108" height="108" fill="none" stroke="#c76a3f" strokeWidth="4" strokeDasharray="8 5" />
        </>
      )}
    </svg>
  );
}

export default function TrDamageAnatomy() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Tile damage anatomy</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Different damage can look surprisingly similar.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {damageSamples.map((sample) => {
            const isOpen = openIds.has(sample.id);
            return (
              <div key={sample.id} className="rounded-md border border-ink-900/10 bg-sand-100/40">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`sample-${sample.id}`}
                  onClick={() => toggle(sample.id)}
                  className="focus-ring block w-full p-5 text-left"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-sm">
                    <SampleVisual id={sample.id} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-900">
                    {sample.label}
                  </h3>
                </button>
                <div
                  id={`sample-${sample.id}`}
                  className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                      What you may notice
                    </p>
                    <ul className="mt-1.5 space-y-1">
                      {sample.mayNotice.map((item) => (
                        <li key={item} className="text-sm text-ink-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                      What needs to be assessed
                    </p>
                    <p className="mt-1.5 text-sm text-ink-700">{sample.needsAssessing}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

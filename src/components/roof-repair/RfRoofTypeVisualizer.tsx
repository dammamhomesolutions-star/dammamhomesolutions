"use client";

import { buildWhatsAppLink } from "@/lib/site-config";
import { rfRoofTypes } from "@/lib/roof-repair";

const visuals: Record<string, { d: string; extra?: string }> = {
  flat: { d: "M10 40 H110 V60 H10 Z" },
  villa: { d: "M10 30 H110 V60 H10 Z", extra: "M10 30 H110 V38 H10 Z" },
  terrace: { d: "M10 40 H110 V60 H10 Z", extra: "M20 44 H100 V56 H20 Z" },
  utility: { d: "M10 40 H110 V60 H10 Z", extra: "M45 26 H75 V40 H45 Z" },
};

export default function RfRoofTypeVisualizer() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Rooftop types we work with</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Scroll through common Dammam rooftop shapes.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Rooftop types"
        >
          {rfRoofTypes.map((r) => {
            const v = visuals[r.id];
            return (
              <div
                key={r.id}
                role="listitem"
                className="w-60 flex-none snap-start overflow-hidden rounded-md border border-ink-900/10 bg-sand-100 shadow-sm"
              >
                <div className="h-28 w-full bg-sand-50">
                  <svg viewBox="0 0 120 70" className="h-full w-full" aria-hidden="true">
                    <rect x="0" y="0" width="120" height="70" fill="url(#rf-sky)" />
                    <path d={v.d} fill="url(#rf-surface)" stroke="#78746a" strokeWidth="1.5" />
                    {v.extra && <path d={v.extra} fill="none" stroke="#5c584f" strokeWidth="1.5" />}
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-ink-950">{r.label}</h3>
                  <a
                    href={buildWhatsAppLink(`Hello Dammam Home Solutions, I have a question about a ${r.label.toLowerCase()}. `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700"
                  >
                    Ask about this roof type <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

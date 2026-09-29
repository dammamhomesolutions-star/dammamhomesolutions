"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wtSigns, type WtSignId } from "@/lib/water-tank-cleaning";

function MicroScene({ id }: { id: WtSignId }) {
  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="120" height="100" fill="#eae7de" />
        <text x="60" y="62" textAnchor="middle" fontSize="30" fill="#94cabd" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="120" height="100" fill="#eae7de" />
      <rect x="30" y="10" width="60" height="80" rx="8" fill="url(#wt-tank-body)" stroke="#9a968a" strokeWidth="1.6" />
      {id === "smell" && (
        <>
          <path d="M78 30 q6 -6 0 -12" fill="none" stroke="#48a08f" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M84 34 q8 -8 0 -16" fill="none" stroke="#48a08f" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
        </>
      )}
      {id === "taste" && <circle cx="60" cy="50" r="4" fill="#48a08f" />}
      {id === "discolored" && <rect x="38" y="55" width="44" height="26" fill="#8a7550" opacity="0.7" />}
      {id === "low-flow" && (
        <>
          <line x1="60" y1="90" x2="60" y2="70" stroke="#94cabd" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 4" />
        </>
      )}
      {id === "visible-sediment" && <rect x="38" y="72" width="44" height="10" fill="#5c4a2e" />}
    </svg>
  );
}

export default function WtSignsWall() {
  const [openId, setOpenId] = useState<WtSignId | null>(null);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-mint-700">What are you noticing?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Common signs worth a closer look.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Water tank signs"
        >
          {wtSigns.map((sign) => (
            <div
              key={sign.id}
              role="listitem"
              className="w-56 flex-none snap-start overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === sign.id ? null : sign.id)}
                aria-pressed={openId === sign.id}
                className="focus-ring block h-28 w-full"
                aria-label={sign.label}
              >
                <MicroScene id={sign.id} />
              </button>
              <div className="p-4">
                <h3 className="font-serif text-base text-ink-950">{sign.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{sign.description}</p>
                {sign.id === "not-sure" && openId === "not-sure" && (
                  <a
                    href={buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure about my water tank but here's what I've noticed: ")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700"
                  >
                    Send a photo <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

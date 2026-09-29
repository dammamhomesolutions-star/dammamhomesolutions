"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wlSymptoms, type WlSymptomId } from "@/lib/water-leak-repair";

function MicroScene({ id, animate }: { id: WlSymptomId; animate: boolean }) {
  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="120" height="100" fill="#f4f0e8" />
        <text x="60" y="62" textAnchor="middle" fontSize="30" fill="#e0b28a" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="120" height="100" fill="#f4f0e8" />

      {id === "wall-patch" && <circle cx="60" cy="50" r="26" fill="url(#wl-damp)" />}

      {id === "ceiling-stain" && (
        <>
          <line x1="0" y1="20" x2="120" y2="20" stroke="#c4c0b4" strokeWidth="1.5" />
          <circle cx="60" cy="16" r="18" fill="url(#wl-stain)" />
        </>
      )}

      {id === "wet-floor" && (
        <>
          <line x1="0" y1="75" x2="120" y2="75" stroke="#c4c0b4" strokeWidth="1.5" />
          <ellipse cx="60" cy="86" rx="36" ry="10" fill="url(#wl-damp)" />
        </>
      )}

      {id === "high-bill" && (
        <>
          <rect x="42" y="20" width="36" height="50" fill="#eae7de" stroke="#9a968a" strokeWidth="1.4" />
          {[0, 1, 2].map((i) => (
            <line key={i} x1="48" y1={32 + i * 10} x2="72" y2={32 + i * 10} stroke="#9a968a" strokeWidth="1.4" />
          ))}
          {animate ? (
            <motion.path d="M78 60 L88 40" stroke="#b3652f" strokeWidth="2.4" strokeLinecap="round" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }} />
          ) : (
            <path d="M78 60 L88 40" stroke="#b3652f" strokeWidth="2.4" strokeLinecap="round" />
          )}
          <path d="M88 40 L82 42 M88 40 L86 46" stroke="#b3652f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </>
      )}

      {id === "running-sound" && (
        <>
          <rect x="50" y="50" width="20" height="10" fill="#78746a" />
          <rect x="56" y="40" width="8" height="12" fill="#78746a" />
          {[10, 16, 22].map((r, i) =>
            animate ? (
              <motion.circle key={r} cx="60" cy="60" r={r} fill="none" stroke="#c98246" strokeWidth="1.4" animate={{ opacity: [0, 0.7, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }} />
            ) : (
              <circle key={r} cx="60" cy="60" r={r} fill="none" stroke="#c98246" strokeWidth="1.4" opacity="0.4" />
            )
          )}
        </>
      )}
    </svg>
  );
}

export default function WlSymptomWall() {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<WlSymptomId | null>(null);

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">What are you seeing?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Six common ways a leak first shows up.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Water leak symptoms"
        >
          {wlSymptoms.map((symptom) => (
            <div
              key={symptom.id}
              role="listitem"
              className="w-56 flex-none snap-start overflow-hidden rounded-md border border-ink-900/10 bg-sand-100 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === symptom.id ? null : symptom.id)}
                aria-pressed={openId === symptom.id}
                className="focus-ring block h-28 w-full"
                aria-label={symptom.label}
              >
                <MicroScene id={symptom.id} animate={!shouldReduceMotion} />
              </button>
              <div className="p-4">
                <h3 className="font-serif text-base text-ink-950">{symptom.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{symptom.description}</p>
                {symptom.id === "not-sure" && openId === "not-sure" && (
                  <a
                    href={buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure what's causing this, but here's what I've noticed: ")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700"
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

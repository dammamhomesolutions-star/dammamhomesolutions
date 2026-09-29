"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { gdSymptoms, type GdSymptomId } from "@/lib/gate-garage-repair";

function MicroScene({ id, animate }: { id: GdSymptomId; animate: boolean }) {
  if (id === "not-sure") {
    return (
      <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
        <rect x="0" y="0" width="120" height="100" fill="#ebe4d6" />
        <text x="60" y="62" textAnchor="middle" fontSize="30" fill="#c4c0b4" fontFamily="serif">
          ?
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="120" height="100" fill="#ebe4d6" />
      <rect x="20" y="10" width="80" height="80" fill="none" stroke="#8e97a8" strokeWidth="2" />

      {id === "sticks" && (
        <>
          {animate ? (
            <motion.rect
              x="28"
              width="64"
              height="22"
              fill="url(#gd-panel)"
              animate={{ y: [18, 45, 45, 70] }}
              transition={{ duration: 3.4, times: [0, 0.4, 0.65, 1], repeat: Infinity }}
            />
          ) : (
            <rect x="28" y="45" width="64" height="22" fill="url(#gd-panel)" />
          )}
        </>
      )}

      {id === "sags" && <rect x="28" y="35" width="64" height="30" fill="url(#gd-panel)" style={{ transform: "skewY(-2.4deg)", transformOrigin: "28px 50px" }} />}

      {id === "shakes" &&
        (animate ? (
          <motion.rect
            x="28"
            y="35"
            width="64"
            height="30"
            fill="url(#gd-panel)"
            animate={{ x: [28, 30, 26, 29, 28] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        ) : (
          <rect x="28" y="35" width="64" height="30" fill="url(#gd-panel)" />
        ))}

      {id === "scrapes" && (
        <>
          <rect x="28" y="35" width="64" height="30" fill="url(#gd-panel)" />
          {animate ? (
            <motion.circle cx="24" cy="50" r="3" fill="#94472a" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} />
          ) : (
            <circle cx="24" cy="50" r="3" fill="#94472a" />
          )}
        </>
      )}

      {id === "wont-close" && (
        <>
          <rect x="28" y="30" width="64" height="35" fill="url(#gd-panel)" />
          <rect x="20" y="76" width="80" height="8" fill="none" stroke="#c76a3f" strokeWidth="1.4" strokeDasharray="3 3" />
        </>
      )}

      {id === "damaged" && (
        <>
          <rect x="28" y="35" width="64" height="30" fill="url(#gd-panel)" />
          <path d="M45 40 L60 40 L54 52 L68 64 L45 64 Z" fill="#94472a" opacity="0.8" />
        </>
      )}
    </svg>
  );
}

export default function GdSymptomWall() {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<GdSymptomId | null>(null);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">What are you seeing?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A wall of moving symptoms.
          </h2>
          <p className="mt-3 text-sm text-ink-500">Scroll through, or tap &ldquo;Not sure&rdquo; for a prompt.</p>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Garage door and gate symptoms"
        >
          {gdSymptoms.map((symptom) => (
            <div
              key={symptom.id}
              role="listitem"
              className="w-56 flex-none snap-start overflow-hidden rounded-md border border-ink-900/10 bg-sand-50 shadow-sm"
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
                    href={buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure what's wrong with my gate or garage door. Here's what I've noticed: ")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
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

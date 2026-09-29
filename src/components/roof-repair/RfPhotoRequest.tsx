"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

type SlotId = "wide" | "close" | "video";

const slots: { id: SlotId; label: string; hint: string; message: string }[] = [
  {
    id: "wide",
    label: "Wide shot",
    hint: "The general area of the rooftop where you noticed something.",
    message: "Hello Dammam Home Solutions, I'd like to send a wide photo of my rooftop. ",
  },
  {
    id: "close",
    label: "Close-up",
    hint: "A closer shot of the specific change — a stain, crack or pooling water.",
    message: "Hello Dammam Home Solutions, I'd like to send a close-up photo of a rooftop issue. ",
  },
  {
    id: "video",
    label: "Short video",
    hint: "Useful if water is actively collecting or moving.",
    message: "Hello Dammam Home Solutions, I'd like to send a short video of my rooftop issue. ",
  },
];

export default function RfPhotoRequest() {
  const [pinned, setPinned] = useState<Set<SlotId>>(new Set());
  const [openId, setOpenId] = useState<SlotId | null>(null);

  const toggle = (id: SlotId) => {
    setPinned((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setOpenId(id);
  };

  const active = slots.find((s) => s.id === openId);

  return (
    <section id="send-photos" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm rounded-md border border-ink-900/10 bg-sand-100 p-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Evidence board</p>
          <div className="grid grid-cols-1 gap-3">
            {slots.map((slot) => {
              const isPinned = pinned.has(slot.id);
              return (
                <button
                  key={slot.id}
                  type="button"
                  aria-pressed={isPinned}
                  onClick={() => toggle(slot.id)}
                  className={`focus-ring relative flex items-center gap-3 rounded-sm border bg-sand-50 p-3 text-left transition-colors ${
                    isPinned ? "border-teal-600" : "border-ink-900/10 hover:border-teal-600/50"
                  }`}
                >
                  <AnimatePresence>
                    {isPinned && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        aria-hidden="true"
                        className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-full bg-teal-600 shadow-sm"
                      />
                    )}
                  </AnimatePresence>
                  <svg viewBox="0 0 40 40" className="h-10 w-10 flex-none" aria-hidden="true">
                    <rect x="2" y="2" width="36" height="36" fill="url(#rf-sky)" stroke="#c4c0b4" strokeWidth="1.5" />
                    <path d="M8 28 L16 16 L22 24 L28 14 L34 28" fill="none" stroke="#5c584f" strokeWidth="1.6" />
                  </svg>
                  <span className="text-sm font-medium text-ink-800">{slot.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="section-label !text-teal-700">Show us what changed</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Build the evidence board.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-600">
            Tap each item as you prepare it. You don&rsquo;t need all three —
            even one clear photo is a useful starting point.
          </p>

          {active ? (
            <div key={active.id} className="mt-6 max-w-md animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-5">
              <p className="text-sm text-ink-700">{active.hint}</p>
              <a
                href={buildWhatsAppLink(active.message)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send via WhatsApp
              </a>
            </div>
          ) : (
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a rooftop issue. ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send via WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

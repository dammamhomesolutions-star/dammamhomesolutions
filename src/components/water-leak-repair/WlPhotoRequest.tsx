"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

type OptionId = "photo" | "video" | "bill" | "describe";

const options: { id: OptionId; label: string; hint: string; message: string }[] = [
  {
    id: "photo",
    label: "Photo",
    hint: "A wide view of the area plus a closer shot of what you've noticed.",
    message: "Hello Dammam Home Solutions, I'd like to send photos of a possible water leak. ",
  },
  {
    id: "video",
    label: "Video",
    hint: "Useful if you can hear running water or see active dripping.",
    message: "Hello Dammam Home Solutions, I'd like to send a short video of a possible water leak. ",
  },
  {
    id: "bill",
    label: "Water bill",
    hint: "A photo of a recent bill if usage seems higher than usual.",
    message: "Hello Dammam Home Solutions, my water bill seems higher than usual and I'd like it assessed. ",
  },
  {
    id: "describe",
    label: "Describe the issue",
    hint: "A few sentences about what you've noticed and when it started.",
    message: "Hello Dammam Home Solutions, here's what I've noticed about a possible water leak: ",
  },
];

export default function WlPhotoRequest() {
  const [selected, setSelected] = useState<OptionId | null>(null);
  const active = options.find((o) => o.id === selected);

  return (
    <section id="send-evidence" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-ink-900/10 bg-sand-100">
          <svg viewBox="0 0 240 200" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="240" height="200" fill="url(#wl-wall)" />
            <rect x="30" y="30" width="180" height="140" fill="none" stroke="#c4c0b4" strokeWidth="3" />
            <circle cx="130" cy="110" r="30" fill="url(#wl-damp)" />

            <AnimatePresence>
              {selected && (
                <motion.circle
                  key={selected}
                  cx="130"
                  cy="110"
                  r="4"
                  fill="#c98246"
                  initial={{ opacity: 0, r: 2, cy: 180 }}
                  animate={{ opacity: 1, r: 6, cy: 110 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </svg>
        </div>

        <div>
          <p className="section-label !text-copper-700">Show us what you&rsquo;ve found</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us what you&rsquo;ve found.
          </h2>

          <div role="group" aria-label="How would you like to describe the issue" className="mt-8 flex flex-wrap gap-2">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={selected === o.id}
                onClick={() => setSelected(o.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected === o.id ? "border-copper-700 bg-copper-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-copper-600"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          {active && (
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
          )}

          {!active && (
            <p className="mt-6 max-w-md text-sm text-ink-500">
              If you&rsquo;re not sure what to send, a photo or a short description is a good place to start.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

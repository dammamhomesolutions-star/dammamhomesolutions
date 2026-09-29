"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

type OptionId = "photo" | "video" | "describe";

const options: { id: OptionId; label: string; hint: string; message: string }[] = [
  {
    id: "photo",
    label: "Photo",
    hint: "A wide view plus a closer shot of the issue.",
    message: "Hello Dammam Home Solutions, I'd like to send photos of my gate or garage door. ",
  },
  {
    id: "video",
    label: "Video",
    hint: "A short clip showing the door or gate moving.",
    message: "Hello Dammam Home Solutions, I'd like to send a short video of my gate or garage door. ",
  },
  {
    id: "describe",
    label: "Describe the issue",
    hint: "A few sentences about what you've noticed.",
    message: "Hello Dammam Home Solutions, here's what I've noticed with my gate or garage door: ",
  },
];

export default function GdPhotoRequest() {
  const [selected, setSelected] = useState<OptionId | null>(null);
  const active = options.find((o) => o.id === selected);

  return (
    <section id="send-photos" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-ink-900/10 bg-sand-100">
          <svg viewBox="0 0 240 200" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="240" height="200" fill="url(#gd-sky)" />
            <rect x="30" y="30" width="180" height="150" fill="none" stroke="#8e97a8" strokeWidth="3" />
            <rect x="42" y="42" width="156" height="126" fill="url(#gd-panel)" filter="url(#gd-noise)" />
            {[1, 2, 3].map((i) => (
              <line key={i} x1="42" y1={42 + i * 31.5} x2="198" y2={42 + i * 31.5} stroke="#ded2ba" strokeWidth="1.5" />
            ))}

            <AnimatePresence>
              {selected && (
                <motion.circle
                  key={selected}
                  cx="120"
                  cy="100"
                  r="4"
                  fill="#94472a"
                  initial={{ opacity: 0, r: 2, cy: 180 }}
                  animate={{ opacity: 1, r: 6, cy: 100 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </svg>
        </div>

        <div>
          <p className="section-label !text-rust-700">Show us what changed</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us what changed.
          </h2>

          <div role="group" aria-label="How would you like to describe the issue" className="mt-8 flex flex-wrap gap-2">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={selected === o.id}
                onClick={() => setSelected(o.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected === o.id ? "border-rust-700 bg-rust-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-rust-600"
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
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send via WhatsApp
              </a>
            </div>
          )}

          {!active && (
            <p className="mt-6 max-w-md text-sm text-ink-500">
              If you&rsquo;re not sure what to call it, a photo or a short description is a good place to start.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

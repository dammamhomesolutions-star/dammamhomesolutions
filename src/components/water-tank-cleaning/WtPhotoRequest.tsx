"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

type OptionId = "photo" | "video" | "describe";

const options: { id: OptionId; label: string; hint: string; message: string }[] = [
  {
    id: "photo",
    label: "Photo",
    hint: "A photo of the tank, and inside if you can safely see it.",
    message: "Hello Dammam Home Solutions, I'd like to send a photo of my water tank. ",
  },
  {
    id: "video",
    label: "Video",
    hint: "Useful if you'd like to show the water flow or tank access point.",
    message: "Hello Dammam Home Solutions, I'd like to send a video of my water tank. ",
  },
  {
    id: "describe",
    label: "Describe it",
    hint: "Tank type, roughly how long since it was last cleaned, and anything you've noticed.",
    message: "Hello Dammam Home Solutions, here's what I know about my water tank: ",
  },
];

export default function WtPhotoRequest() {
  const [selected, setSelected] = useState<OptionId | null>(null);
  const active = options.find((o) => o.id === selected);

  return (
    <section id="send-photos" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-ink-900/10 bg-sand-100">
          <svg viewBox="0 0 240 200" className="h-auto w-full" aria-hidden="true">
            <rect x="0" y="0" width="240" height="200" fill="url(#wt-clean-water)" opacity="0.2" />
            <rect x="80" y="20" width="80" height="150" rx="10" fill="url(#wt-tank-body)" stroke="#9a968a" strokeWidth="2" />
            <rect x="90" y="30" width="60" height="120" rx="6" fill="url(#wt-clean-water)" />

            <AnimatePresence>
              {selected && (
                <motion.circle
                  key={selected}
                  cx="120"
                  cy="90"
                  r="4"
                  fill="#48a08f"
                  initial={{ opacity: 0, r: 2, cy: 170 }}
                  animate={{ opacity: 1, r: 6, cy: 90 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </svg>
        </div>

        <div>
          <p className="section-label !text-mint-700">Show us the tank</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the tank.
          </h2>

          <div role="group" aria-label="How would you like to describe the tank" className="mt-8 flex flex-wrap gap-2">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={selected === o.id}
                onClick={() => setSelected(o.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected === o.id ? "border-mint-700 bg-mint-700 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-mint-600"
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
              Not sure what to send? A photo of the tank from outside is a good place to start.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

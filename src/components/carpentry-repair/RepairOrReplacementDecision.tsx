"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

interface Option {
  id: string;
  label: string;
  prompt: string;
  panel: string;
}

const options: Option[] = [
  {
    id: "adjustment",
    label: "Adjustment",
    prompt: "When the existing door or hardware may simply need correction.",
    panel: "Often the quickest outcome — realigning what's already there rather than replacing anything.",
  },
  {
    id: "repair",
    label: "Repair",
    prompt: "When a supported component is damaged but repairable.",
    panel: "The component stays, but needs fixing — a hinge, a section of wood, a latch mechanism.",
  },
  {
    id: "hardware-replacement",
    label: "Hardware Replacement",
    prompt: "When a lock, handle, hinge or similar component needs replacing.",
    panel: "Sometimes the part itself has reached the end of its life and swapping it is more sensible than repairing it.",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "Send a photo and description.",
    panel: "That's the easiest option, honestly — this is usually clearer once we've seen it than from a description alone.",
  },
];

export default function RepairOrReplacementDecision() {
  const [activeId, setActiveId] = useState(options[0].id);
  const active = options.find((o) => o.id === activeId)!;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-amber-800">A guide, not a diagnosis</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Repair it, adjust it, or replace the hardware?
          </h2>
          <p className="mt-4 text-ink-700">
            We can&rsquo;t tell you which one is definitely right without
            seeing it — but this helps frame the conversation.
          </p>
        </div>

        <div role="tablist" aria-label="Repair or replacement" className="mt-10 flex flex-col overflow-hidden rounded-2xl border border-ink-900/15 sm:flex-row">
          {options.map((o, i) => {
            const isActive = o.id === activeId;
            return (
              <button
                key={o.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(o.id)}
                className={`focus-ring flex-1 border-ink-900/15 px-5 py-4 text-center text-sm font-semibold transition-colors sm:border-l ${
                  i === 0 ? "sm:border-l-0" : ""
                } ${isActive ? "bg-amber-800 text-sand-50" : "bg-sand-50 text-ink-800 hover:bg-stone-100"}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 animate-fadeUp rounded-2xl border border-ink-900/10 bg-stone-100/60 p-7 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm italic text-ink-500">&ldquo;{active.prompt}&rdquo;</p>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-700">{active.panel}</p>
            </div>
            <a
              href={buildWhatsAppLink(`Hello Dammam Home Solutions, I think this might be: ${active.label}. Here's what's happening: `)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              WhatsApp about this
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

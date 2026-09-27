"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

interface WorkType {
  id: string;
  label: string;
  prompt: string;
  panel: string;
}

const workTypes: WorkType[] = [
  {
    id: "repair-only",
    label: "Repair only",
    prompt: "Small wall damage, holes, surface imperfections.",
    panel:
      "No repainting planned — just fixing the surface itself. Useful when the existing paint is fine and only specific spots need attention.",
  },
  {
    id: "repair-paint",
    label: "Repair + Paint",
    prompt: "The wall needs preparation before repainting.",
    panel:
      "The most common combination — the surface has damage or imperfections that need addressing before the finish goes on.",
  },
  {
    id: "repaint",
    label: "Repaint",
    prompt: "The surface is generally suitable but the finish needs refreshing.",
    panel:
      "When the surface itself is in reasonable shape, this is mostly about refreshing the color or finish rather than repairing anything underneath.",
  },
  {
    id: "touch-up",
    label: "Touch-up",
    prompt: "A localized area needs attention.",
    panel:
      "A smaller job — matching an existing finish in one spot rather than redoing a whole wall or room.",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "Send photos and describe the problem.",
    panel:
      "That's fine — this distinction is often easier to make once we've seen a photo than by trying to categorize it yourself.",
  },
];

export default function WorkTypeSelector() {
  const [activeId, setActiveId] = useState(workTypes[0].id);
  const active = workTypes.find((w) => w.id === activeId)!;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Conversion bridge</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What kind of work do you need?
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Type of work needed"
          className="mt-10 flex flex-col overflow-hidden rounded-2xl border border-ink-900/15 sm:flex-row"
        >
          {workTypes.map((w, i) => {
            const isActive = w.id === activeId;
            return (
              <button
                key={w.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(w.id)}
                className={`focus-ring flex-1 border-ink-900/15 px-5 py-4 text-center text-sm font-semibold transition-colors sm:border-l ${
                  i === 0 ? "sm:border-l-0" : ""
                } ${isActive ? "bg-rust-700 text-sand-50" : "bg-sand-50 text-ink-800 hover:bg-stone-100"}`}
              >
                {w.label}
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
              href={buildWhatsAppLink(
                `Hello Dammam Home Solutions, I need help with: ${active.label}. Here's what's happening: `
              )}
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

"use client";

import { useState } from "react";
import { moistureAreas, type MoistureAreaId } from "@/lib/moisture-areas";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function MoistureLocationSelector() {
  const [activeId, setActiveId] = useState<MoistureAreaId>(moistureAreas[0].id);

  return (
    <section id="where-is-the-moisture" className="border-y border-ink-900/10 bg-stone-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-cyan-800">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where are you seeing the moisture?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Think of a property top to bottom — roof, ceiling, walls, wet
            areas, floor. Pick where it shows up first.
          </p>
        </div>

        <div className="mt-12 divide-y divide-ink-900/15 border-y border-ink-900/15">
          {moistureAreas.map((area) => {
            const isOpen = area.id === activeId;
            return (
              <div key={area.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`moisture-panel-${area.id}`}
                  onClick={() => setActiveId(isOpen ? activeId : area.id)}
                  className={`focus-ring flex w-full items-center gap-5 py-4 pl-4 text-left transition-colors ${
                    isOpen ? "border-l-4 border-cyan-700 bg-stone-50 pl-3" : "border-l-4 border-transparent hover:bg-stone-50/60"
                  }`}
                >
                  <span className={`font-serif text-lg sm:text-xl ${isOpen ? "text-cyan-900" : "text-ink-950"}`}>
                    {area.label}
                  </span>
                  <span className="hidden text-sm text-ink-500 sm:inline">{area.prompt}</span>
                  <span aria-hidden="true" className={`ml-auto text-ink-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <div
                  id={`moisture-panel-${area.id}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-6 bg-stone-50 px-4 pb-7 pt-1 sm:grid-cols-[1fr_auto] sm:items-start sm:pl-8">
                      <div>
                        <p className="text-sm italic text-ink-500 sm:hidden">&ldquo;{area.prompt}&rdquo;</p>
                        <p className="mt-2 max-w-xl leading-relaxed text-ink-700 sm:mt-0">{area.panel}</p>

                        {area.id === "wall" && (
                          <p className="mt-4 text-sm text-ink-500">
                            If the dampness is only near a wall-mounted AC
                            unit, it may be condensation or drainage from
                            the unit rather than the building itself — see{" "}
                            <a
                              href="/ac-repair/"
                              className="focus-ring rounded-sm text-cyan-800 underline underline-offset-4 hover:text-cyan-900"
                            >
                              AC repair &amp; maintenance
                            </a>
                            .
                          </p>
                        )}
                      </div>

                      <a
                        href={buildWhatsAppLink(area.whatsappMessage)}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-5 py-3 text-center text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02] sm:w-56"
                      >
                        Send Details on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

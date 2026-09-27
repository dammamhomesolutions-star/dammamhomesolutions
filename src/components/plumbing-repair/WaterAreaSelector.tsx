"use client";

import { useState } from "react";
import { waterAreas, type AreaId } from "@/lib/plumbing-areas";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WaterAreaSelector() {
  const [activeId, setActiveId] = useState<AreaId>(waterAreas[0].id);
  const active = waterAreas.find((a) => a.id === activeId)!;

  return (
    <section id="where-is-the-water" className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-teal-700">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Where are you seeing the problem?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            The visible spot isn&rsquo;t always the source, but it&rsquo;s
            the right place to start. Pick what&rsquo;s closest to what
            you&rsquo;re noticing.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
          <div
            role="tablist"
            aria-label="Where the water is appearing"
            aria-orientation="vertical"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-l lg:border-ink-900/15 lg:pb-0"
          >
            {waterAreas.map((area) => {
              const isActive = area.id === activeId;
              return (
                <button
                  key={area.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`area-panel-${area.id}`}
                  onClick={() => setActiveId(area.id)}
                  className={`focus-ring flex-none rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors lg:flex-auto lg:rounded-none lg:border-l-2 lg:py-2.5 lg:pl-5 ${
                    isActive
                      ? "bg-teal-700 text-sand-50 lg:-ml-px lg:border-teal-700 lg:bg-transparent lg:text-teal-800"
                      : "bg-sand-50 text-ink-700 lg:border-transparent lg:bg-transparent lg:text-ink-600 lg:hover:text-ink-900"
                  }`}
                >
                  {area.label}
                </button>
              );
            })}
          </div>

          <div
            id={`area-panel-${active.id}`}
            role="tabpanel"
            key={active.id}
            className="animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-7 sm:p-9"
          >
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-1 text-sm italic text-ink-500">&ldquo;{active.prompt}&rdquo;</p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-700">{active.panel}</p>

            {active.id === "wall" && (
              <p className="mt-4 text-sm text-ink-500">
                If the dampness doesn&rsquo;t seem linked to any plumbing
                nearby, it may be a wider moisture issue — see our{" "}
                <a
                  href="/waterproofing/"
                  className="focus-ring rounded-sm text-teal-700 underline underline-offset-4 hover:text-teal-800"
                >
                  waterproofing service
                </a>
                .
              </p>
            )}

            {active.id === "ceiling" && (
              <p className="mt-4 text-sm text-ink-500">
                Once the source is dealt with, the ceiling surface itself
                may still need attention — see{" "}
                <a
                  href="/general-home-repairs/"
                  className="focus-ring rounded-sm text-teal-700 underline underline-offset-4 hover:text-teal-800"
                >
                  general home repairs
                </a>
                .
              </p>
            )}

            <a
              href={buildWhatsAppLink(active.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send This Problem on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

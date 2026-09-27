"use client";

import { useState } from "react";
import { wallSurfaces, type SurfaceId, type LayerId } from "@/lib/wall-surfaces";
import { buildWhatsAppLink } from "@/lib/site-config";
import SurfaceIcon from "./SurfaceIcon";

const layers: { id: LayerId; label: string }[] = [
  { id: "paint", label: "Paint" },
  { id: "preparation", label: "Primer / preparation" },
  { id: "surface", label: "Surface" },
  { id: "wall", label: "Underlying wall" },
];

export default function WallSurfaceExplorer() {
  const [activeId, setActiveId] = useState<SurfaceId>(wallSurfaces[0].id);
  const active = wallSurfaces.find((s) => s.id === activeId)!;

  const isLayerActive = (layerId: LayerId) =>
    active.layer === "all" || active.layer === layerId;

  return (
    <section id="what-does-the-wall-look-like" className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What are you seeing on the wall?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Pick what&rsquo;s closest. This isn&rsquo;t a diagnosis — just
            a way to start the conversation with the right context.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div
              role="tablist"
              aria-label="Wall surface conditions"
              className="grid grid-cols-3 gap-2.5 sm:grid-cols-3"
            >
              {wallSurfaces.map((surface) => {
                const isActive = surface.id === activeId;
                return (
                  <button
                    key={surface.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`surface-panel-${surface.id}`}
                    onClick={() => setActiveId(surface.id)}
                    className={`focus-ring flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center transition-colors ${
                      isActive
                        ? "border-rust-700 bg-rust-700/5 text-rust-800"
                        : "border-ink-900/10 bg-sand-50 text-ink-700 hover:border-ink-900/25"
                    }`}
                  >
                    <SurfaceIcon id={surface.id} />
                    <span className="text-xs font-medium leading-tight sm:text-[13px]">
                      {surface.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id={`surface-panel-${active.id}`}
              role="tabpanel"
              key={active.id}
              className="mt-6 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-7"
            >
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-1 text-sm italic text-ink-500">&ldquo;{active.prompt}&rdquo;</p>
              <p className="mt-3 leading-relaxed text-ink-700">{active.panel}</p>

              {active.id === "damp-mark" && (
                <div className="mt-4 rounded-lg border border-cyan-800/25 bg-cyan-800/5 px-4 py-3 text-sm text-cyan-900">
                  The moisture source may need to be addressed before
                  repainting. See our{" "}
                  <a href="/waterproofing/" className="underline underline-offset-4 hover:text-cyan-950">
                    waterproofing
                  </a>{" "}
                  service.
                </div>
              )}

              {active.id === "damp-mark" && (
                <p className="mt-3 text-sm text-ink-500">
                  If the mark is only near a wall-mounted AC unit, it may be
                  condensation from the unit rather than the wall itself —
                  see{" "}
                  <a href="/ac-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-rust-600">
                    AC repair &amp; maintenance
                  </a>
                  .
                </p>
              )}

              {active.id === "holes" && (
                <p className="mt-3 text-sm text-ink-500">
                  If the damage is right around a socket or switch, mention
                  that too — see{" "}
                  <a href="/electrical-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-rust-600">
                    electrical repair &amp; maintenance
                  </a>
                  .
                </p>
              )}

              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center rounded-full bg-rust-700 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send a Photo on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-ink-950 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sand-300">
              Painting is not one layer
            </p>
            <p className="mt-2 text-sm text-ink-400">
              What&rsquo;s highlighted below is where this kind of problem
              usually needs attention first.
            </p>

            <div className="mt-6 space-y-2">
              {layers.map((layer) => {
                const on = isLayerActive(layer.id);
                return (
                  <div
                    key={layer.id}
                    className={`rounded-lg border px-4 py-3.5 text-sm font-medium transition-colors ${
                      on
                        ? "border-rust-500 bg-rust-500/15 text-sand-50"
                        : "border-sand-100/10 text-ink-400"
                    }`}
                  >
                    {layer.label}
                  </div>
                );
              })}
            </div>

            {active.layer === "none" && (
              <p className="mt-4 text-xs text-ink-500">
                This one depends on what&rsquo;s found, so no single layer
                is highlighted here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

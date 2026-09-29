"use client";

import { useState } from "react";
import { electricalFaults, type FaultId } from "@/lib/electrical-faults";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WhatStoppedWorking() {
  const [activeId, setActiveId] = useState<FaultId>(electricalFaults[0].id);
  const active = electricalFaults.find((f) => f.id === activeId)!;

  return (
    <section id="what-stopped-working" className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-blue-700">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What stopped working?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Pick what&rsquo;s closest to the fault. It helps us understand
            the problem before anyone visits — this isn&rsquo;t a remote
            diagnosis, just a starting point.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Electrical faults"
          className="relative mt-12 border-t border-ink-900/15"
        >
          <div className="flex flex-wrap gap-x-7 gap-y-7 pt-5">
            {electricalFaults.map((fault) => {
              const isActive = fault.id === activeId;
              return (
                <button
                  key={fault.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`fault-panel-${fault.id}`}
                  onClick={() => setActiveId(fault.id)}
                  className="focus-ring relative pt-3 text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -top-[7px] left-0 h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-blue-600" : "bg-ink-900/25"
                    }`}
                  />
                  <span
                    className={`block text-sm font-medium transition-colors ${
                      isActive ? "text-blue-700" : "text-ink-700 hover:text-ink-950"
                    }`}
                  >
                    {fault.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`fault-panel-${active.id}`}
          role="tabpanel"
          key={active.id}
          className="mt-8 animate-fadeUp rounded-2xl border border-ink-900/10 bg-sand-50 p-7 sm:p-9"
        >
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
              <p className="mt-1 text-sm italic text-ink-500">&ldquo;{active.prompt}&rdquo;</p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-700">{active.panel}</p>

              {active.id === "breaker" && (
                <p className="mt-4 text-sm text-ink-500">
                  If it trips specifically when the AC starts, the AC may
                  be more relevant than the property&rsquo;s wiring — see{" "}
                  <a
                    href="/ac-repair/"
                    className="focus-ring rounded-sm text-blue-700 underline underline-offset-4 hover:text-blue-800"
                  >
                    AC repair &amp; maintenance
                  </a>
                  .
                </p>
              )}
            </div>

            <div className="sm:w-56">
              <a
                href={buildWhatsAppLink(active.whatsappMessage)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-5 py-3 text-center text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Describe This Problem on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

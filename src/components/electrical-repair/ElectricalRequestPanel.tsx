"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function ElectricalRequestPanel() {
  const [problem, setProblem] = useState("");
  const [area, setArea] = useState("");

  const message = useMemo(() => {
    const issue = problem.trim() || "______";
    const where = area.trim() || "______";
    return `Hi, I need electrical repair in Dammam. The problem is ${issue}. It is happening in ${where}.`;
  }, [problem, area]);

  return (
    <section id="request-service" className="relative overflow-hidden bg-ink-950 py-20 text-sand-100 sm:py-24">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="circuit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 H60 M30 0 V60" stroke="#5c8cff" strokeWidth="1" />
            <circle cx="30" cy="30" r="2.5" fill="#5c8cff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      </svg>

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Request service
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Tell us what stopped working.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-300">
              Send the problem, the room or area, your Dammam location and
              a photo if it&rsquo;s safe to provide one.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-900 p-7">
            <label className="block text-sm font-medium text-sand-100">
              What stopped working?
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. the socket in the living room"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Room or area
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. living room"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
            >
              WhatsApp for Electrical Repair
            </a>
            <p className="mt-3 text-xs text-ink-400">
              Only include a photo or video if it&rsquo;s safe to take one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function CarpentryRequestPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");

  const message = useMemo(() => {
    const issue = problem.trim() || "______";
    const where = location.trim() || "______";
    return `Hi, I need door/carpentry repair in Dammam. The issue is ${issue}. It is located in ${where}.`;
  }, [problem, location]);

  return (
    <section id="request-service" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
              Request service
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              What&rsquo;s not closing, fitting or working?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-300">
              Send us a photo, your Dammam location and a short
              description of the problem.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-900 p-7">
            <label className="block text-sm font-medium text-sand-100">
              What&rsquo;s the issue?
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. bedroom door won't close"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Where is it located?
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. bedroom — neighborhood or area"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01]"
            >
              WhatsApp for Door &amp; Carpentry Repair
            </a>
            <p className="mt-3 text-xs text-ink-400">
              You can attach a photo or video once WhatsApp opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

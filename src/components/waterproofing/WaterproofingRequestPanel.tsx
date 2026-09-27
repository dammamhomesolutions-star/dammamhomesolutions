"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WaterproofingRequestPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");

  const message = useMemo(() => {
    const issue = problem.trim() || "______";
    const where = location.trim() || "______";
    return `Hi, I need help with a waterproofing/moisture problem in Dammam. The issue is ${issue}. It appears in ${where}.`;
  }, [problem, location]);

  return (
    <section id="request-service" className="bg-stone-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 rounded-3xl border border-ink-900/10 bg-sand-50 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="section-label text-cyan-800">Request service</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Show us where the moisture appears.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              Send your Dammam location, a short description and photos of
              the affected area. We&rsquo;ll use the information to
              understand what kind of assessment or service may be
              appropriate.
            </p>
          </div>

          <div className="rounded-2xl bg-stone-100/70 p-7">
            <label className="block text-sm font-medium text-ink-800">
              What&rsquo;s the problem?
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. a damp patch on the bedroom ceiling"
                className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-ink-800">
              Where does it appear?
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. bedroom ceiling, near the corner"
                className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
            >
              WhatsApp About Waterproofing
            </a>
            <p className="mt-3 text-xs text-ink-500">
              You can attach photos or a short video once WhatsApp opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

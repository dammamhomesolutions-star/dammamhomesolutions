"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function PlumbingRequestPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");

  const message = useMemo(() => {
    const base = "Hi, I need plumbing service in Dammam.";
    const issue = problem.trim()
      ? `I'm seeing a problem with ${problem.trim()}.`
      : "I'm seeing a problem with ______.";
    const loc = location.trim() ? `Location: ${location.trim()}.` : "";
    return [base, issue, loc].filter(Boolean).join(" ");
  }, [problem, location]);

  return (
    <section id="request-service" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
              Request service
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Tell us where the water is.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-300">
              Send the problem, your Dammam location and a photo or short
              video if useful — that&rsquo;s usually enough for us to
              understand what&rsquo;s needed next.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-900 p-7">
            <label className="block text-sm font-medium text-sand-100">
              What&rsquo;s the problem?
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. water under the kitchen sink"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Location in Dammam
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Neighborhood or area"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal-600 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01]"
            >
              WhatsApp Plumbing Request
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

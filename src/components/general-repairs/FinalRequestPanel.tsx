"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function FinalRequestPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");

  const message = useMemo(() => {
    const issue = problem.trim() || "______";
    const where = location.trim() || "______";
    return `Hi, I have something that needs fixing. What is happening: ${issue}. Where it is: ${where}.`;
  }, [problem, location]);

  return (
    <section id="request-service" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
              Request service
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Not sure what the job is called? Just show us.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-300">
              Tell us what is happening, where it is happening, and send
              a photo. We&rsquo;ll help you work out the right next step.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-900 p-7">
            <label className="block text-sm font-medium text-sand-100">
              What&rsquo;s happening?
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. cabinet door won't close"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Where is it?
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. kitchen — neighborhood or area"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-600 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
            >
              Send a Repair Request
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to ask about a home repair.")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-full border border-sand-100/20 px-6 py-3 text-sm font-semibold text-sand-100 hover:bg-sand-100/5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function AcRequestPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const message = useMemo(() => {
    const lines = ["Hi, I need AC repair/maintenance in Dammam."];
    lines.push(`Issue: ${problem.trim() || "(describe what the AC is doing)"}`);
    if (location.trim()) lines.push(`Location: ${location.trim()}`);
    if (preferredTime.trim()) lines.push(`Preferred time: ${preferredTime.trim()}`);
    return lines.join("\n");
  }, [problem, location, preferredTime]);

  return (
    <section id="request-service" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-100/70">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="section-label text-sky-700">Request service</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
                Tell us what your AC is doing.
              </h2>
              <p className="mt-4 text-ink-700">
                Send the symptom, your Dammam location and a photo or video
                if useful. We&rsquo;ll use it to understand what kind of
                service you need — the fields below are optional and just
                help shape the WhatsApp message.
              </p>
              <p className="mt-4 text-sm text-ink-500">
                Once WhatsApp opens, you can attach a photo or video directly
                in the chat.
              </p>
            </div>

            <div className="rounded-2xl bg-sand-50 p-7">
              <label className="block text-sm font-medium text-ink-800">
                What&rsquo;s the AC doing?
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={3}
                  placeholder="e.g. Bedroom AC running but not cooling"
                  className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
                />
              </label>

              <label className="mt-4 block text-sm font-medium text-ink-800">
                Location in Dammam
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Neighborhood or area"
                  className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
                />
              </label>

              <label className="mt-4 block text-sm font-medium text-ink-800">
                Preferred time
                <input
                  type="text"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  placeholder="e.g. Tomorrow afternoon"
                  className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
                />
              </label>

              <a
                href={buildWhatsAppLink(message)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
              >
                WhatsApp AC Repair Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

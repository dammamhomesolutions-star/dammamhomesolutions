"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function SendUsTheWallPanel() {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const message = useMemo(() => {
    const issue = problem.trim() || "______";
    const where = location.trim() || "______";
    const lines = [`Hi, I need painting/wall repair in Dammam. The problem is ${issue}. It is in ${where}.`];
    if (preferredTime.trim()) lines.push(`Preferred time: ${preferredTime.trim()}.`);
    return lines.join(" ");
  }, [problem, location, preferredTime]);

  return (
    <section id="request-service" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 rounded-3xl border border-ink-900/10 bg-stone-100/60 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="section-label">Request service</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              A photo is a better starting point than a guess.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              Send us a photo of the wall, ceiling or damaged surface along
              with your Dammam location. If the issue is related to
              moisture, include a wider photo showing the surrounding area.
            </p>
          </div>

          <div className="rounded-2xl bg-sand-50 p-7">
            <label className="block text-sm font-medium text-ink-800">
              What&rsquo;s the problem?
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                rows={3}
                placeholder="e.g. peeling paint and a small crack on the living room wall"
                className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-ink-800">
              Room &amp; location in Dammam
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. living room — neighborhood or area"
                className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-ink-800">
              Preferred time
              <input
                type="text"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                placeholder="e.g. this weekend"
                className="focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
            >
              WhatsApp a Photo
            </a>
            <p className="mt-3 text-xs text-ink-500">
              You can attach a photo or short video once WhatsApp opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

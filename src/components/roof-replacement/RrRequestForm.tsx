"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { rrDurations, rrProblems, rrPropertyTypes, rrRepairedBefore } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

// Builds a WhatsApp message, like the site's other request panels.
// Photos are attached in the WhatsApp chat.
export default function RrRequestForm() {
  const [problem, setProblem] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [repaired, setRepaired] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like to request a roof inspection.",
      `Problem: ${problem || "—"}`,
      `Property type: ${property || "—"}`,
      `Location: ${location.trim() || "—"}`,
    ];
    if (duration) lines.push(`How long: ${duration}`);
    if (repaired) lines.push(`Repaired before: ${repaired}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos in this chat.");
    return lines.join("\n");
  }, [problem, property, location, duration, repaired, name, phone]);

  return (
    <section id="request-inspection" aria-labelledby="rr-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-5">
          <p className="section-label !text-teal-300">Request a roof inspection</p>
          <h2 id="rr-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Tell us what you&rsquo;ve noticed
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-300">
            A few answers are enough to start. They&rsquo;re turned into a
            WhatsApp message you can check before sending.
          </p>
          <p className="mt-6 flex max-w-md items-start gap-3 rounded-xl bg-sand-50/5 p-4 text-sm leading-relaxed text-sand-100">
            <RrIcon name="search" className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
            Photos can help us understand the issue before an inspection —
            a ceiling stain, the roof surface, the drain. Only take roof
            photos if the roof is safe to access.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-teal-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>

        <form
          className="rounded-2xl bg-ink-900 p-6 sm:p-8 lg:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <fieldset>
            <legend className="text-sm font-medium text-sand-50">What problem are you experiencing?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {rrProblems.map((p) => (
                <label
                  key={p}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${
                    problem === p ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                  }`}
                >
                  <input type="radio" name="rr-problem" value={p} checked={problem === p} onChange={() => setProblem(p)} className="sr-only" />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {rrPropertyTypes.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Property location
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              How long has it been happening?
              <select value={duration} onChange={(e) => setDuration(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {rrDurations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Has the roof been repaired before?
              <select value={repaired} onChange={(e) => setRepaired(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {rrRepairedBefore.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Phone / WhatsApp <span className="font-normal text-ink-400">(optional)</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                inputMode="tel"
                placeholder="If different from this WhatsApp"
                className={inputClass}
              />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Roof Inspection
            <RrIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos there.</p>
        </form>
      </div>
    </section>
  );
}

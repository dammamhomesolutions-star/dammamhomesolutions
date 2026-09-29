"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const rooms = ["Living room", "Bedroom", "Bathroom", "Kitchen", "Entrance", "Exterior", "Utility area", "Other"];
const symptoms = ["Broken", "Loose", "Leaking", "Damaged", "Not working", "Difficult to use", "Needs adjustment", "Not sure"];
const contactMethods = ["WhatsApp", "Phone"];

export default function RepairIntakeFlow() {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState("");
  const [symptom, setSymptom] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("WhatsApp");

  const canAdvance = (s: number) => {
    if (s === 1) return Boolean(room);
    if (s === 2) return Boolean(symptom);
    return true;
  };

  const message = useMemo(() => {
    const lines = ["Hi, I'd like to request a home repair.", `Room / area: ${room || "______"}`, `What's happening: ${symptom || "______"}`];
    if (description.trim()) lines.push(`Details: ${description.trim()}`);
    lines.push(`Preferred contact: ${contact}`);
    return lines.join("\n");
  }, [room, symptom, description, contact]);

  const steps = [
    { n: 1, label: "Where" },
    { n: 2, label: "What" },
    { n: 3, label: "Show us" },
    { n: 4, label: "Contact" },
  ];

  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-indigo-700">A quicker way to describe it</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A few short questions instead of a long form.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-1 items-center gap-2">
                <span
                  className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-semibold ${
                    step >= s.n ? "bg-indigo-700 text-sand-50" : "bg-stone-200 text-ink-500"
                  }`}
                >
                  {s.n}
                </span>
                <span className={`text-xs ${step >= s.n ? "text-ink-900" : "text-ink-400"}`}>{s.label}</span>
                {s.n < steps.length && <span aria-hidden="true" className="h-px flex-1 bg-ink-900/10" />}
              </div>
            ))}
          </div>

          <div className="mt-7">
            {step === 1 && (
              <div>
                <p className="text-sm font-semibold text-ink-900">Where is the problem?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rooms.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRoom(r)}
                      aria-pressed={room === r}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        room === r ? "border-indigo-700 bg-indigo-700/10 text-indigo-800" : "border-ink-900/15 text-ink-700 hover:border-ink-900/35"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-sm font-semibold text-ink-900">What are you noticing?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {symptoms.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSymptom(s)}
                      aria-pressed={symptom === s}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        symptom === s ? "border-indigo-700 bg-indigo-700/10 text-indigo-800" : "border-ink-900/15 text-ink-700 hover:border-ink-900/35"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-sm font-semibold text-ink-900">Show us the problem</p>
                <p className="mt-1 text-sm text-ink-500">
                  Photos and video attach directly in WhatsApp — a short
                  description here is optional.
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Optional: add anything else worth mentioning"
                  className="focus-ring mt-3 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400"
                />
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-sm font-semibold text-ink-900">How should we contact you?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {contactMethods.map((c) => (
                    <button
                      key={c}
                      onClick={() => setContact(c)}
                      aria-pressed={contact === c}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                        contact === c ? "border-indigo-700 bg-indigo-700/10 text-indigo-800" : "border-ink-900/15 text-ink-700 hover:border-ink-900/35"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-7 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="focus-ring rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-900/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={() => canAdvance(step) && setStep((s) => Math.min(4, s + 1))}
                disabled={!canAdvance(step)}
                className="focus-ring rounded-full bg-ink-950 px-6 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            ) : (
              <a
                href={buildWhatsAppLink(message)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring rounded-full bg-rust-700 px-6 py-2.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

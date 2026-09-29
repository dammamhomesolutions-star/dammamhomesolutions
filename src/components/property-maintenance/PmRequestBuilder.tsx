"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const propertyOptions = ["Villa", "Apartment", "Rental property", "Other"];

const attentionOptions = [
  "AC",
  "Plumbing",
  "Electrical",
  "Bathroom",
  "Kitchen",
  "Walls",
  "Doors / Hardware",
  "General repairs",
  "Not sure",
];

const conditionOptions = [
  "Something is not working",
  "Something has changed",
  "Something looks damaged",
  "Something needs routine attention",
  "Several things need attention",
  "Not sure",
];

const steps = [
  { key: "property", label: "Property" },
  { key: "attention", label: "What needs attention?" },
  { key: "condition", label: "Condition" },
  { key: "photos", label: "Photos" },
  { key: "contact", label: "Contact" },
] as const;

export default function PmRequestBuilder() {
  const [step, setStep] = useState(0);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [attention, setAttention] = useState<Set<string>>(new Set());
  const [condition, setCondition] = useState<string | null>(null);
  const [photoCount, setPhotoCount] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const toggleAttention = (option: string) => {
    setAttention((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  };

  const message = useMemo(() => {
    const lines = ["Hello Dammam Home Solutions, I'd like to request property maintenance."];
    if (propertyType) lines.push(`Property: ${propertyType}`);
    if (attention.size > 0) lines.push(`Needs attention: ${Array.from(attention).join(", ")}`);
    if (condition) lines.push(`Condition: ${condition}`);
    if (photoCount > 0) lines.push(`Photos: ${photoCount} selected — I'll attach them here.`);
    if (name) lines.push(`Name: ${name}`);
    if (location) lines.push(`Location: ${location}`);
    return lines.join("\n");
  }, [propertyType, attention, condition, photoCount, name, location]);

  const canContinue = step === 0 ? !!propertyType : step === 1 ? attention.size > 0 : true;
  const isLast = step === steps.length - 1;

  const summaryFor = (index: number) => {
    switch (index) {
      case 0:
        return propertyType ?? "—";
      case 1:
        return attention.size > 0 ? Array.from(attention).join(", ") : "—";
      case 2:
        return condition ?? "—";
      case 3:
        return photoCount > 0 ? `${photoCount} photo${photoCount === 1 ? "" : "s"} selected` : "None yet";
      case 4:
        return name || location ? [name, location].filter(Boolean).join(" · ") : "—";
      default:
        return "—";
    }
  };

  return (
    <section id="request-maintenance" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-moss-500">
            Maintenance request builder
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Tell us about the property.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Five short steps. Skip anything that doesn&rsquo;t apply — you
            can finish with as little typing as possible.
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          {/* Completed steps collapse into a running summary, like a receipt. */}
          {steps.slice(0, step).map((s, i) => (
            <div
              key={s.key}
              className="flex items-center justify-between gap-4 border-b border-sand-100/10 py-3.5"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-ink-500">
                  STEP {String(i + 1).padStart(2, "0")} — {s.label.toUpperCase()}
                </p>
                <p className="mt-0.5 truncate text-sm text-sand-100">{summaryFor(i)}</p>
              </div>
              <button
                type="button"
                onClick={() => setStep(i)}
                className="focus-ring flex-none text-xs font-semibold text-moss-500 underline underline-offset-4 hover:text-moss-400"
              >
                Edit
              </button>
            </div>
          ))}

          {/* Active step */}
          <div className="border-b border-sand-100/10 py-7">
            <p className="font-mono text-[11px] text-moss-500">
              STEP {String(step + 1).padStart(2, "0")} — {steps[step].label.toUpperCase()}
            </p>

            {step === 0 && (
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {propertyOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={propertyType === option}
                    onClick={() => setPropertyType(option)}
                    className={`focus-ring rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                      propertyType === option
                        ? "border-moss-500 bg-moss-500/15 text-sand-50"
                        : "border-sand-100/15 text-sand-100 hover:border-sand-100/35"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {attentionOptions.map((option) => {
                  const selected = attention.has(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleAttention(option)}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        selected
                          ? "border-moss-500 bg-moss-500/15 text-sand-50"
                          : "border-sand-100/15 text-sand-100 hover:border-sand-100/35"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                {conditionOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={condition === option}
                    onClick={() => setCondition(option)}
                    className={`focus-ring rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors sm:text-center ${
                      condition === option
                        ? "border-moss-500 bg-moss-500/15 text-sand-50"
                        : "border-sand-100/15 text-sand-100 hover:border-sand-100/35"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="mt-5">
                <label
                  htmlFor="pm-photos"
                  className="focus-ring flex cursor-pointer flex-col items-start gap-2 rounded-md border border-dashed border-sand-100/25 px-5 py-6 text-sand-100 hover:border-moss-500"
                >
                  <span className="text-sm font-semibold">Add photos or a short video</span>
                  <span className="text-xs text-ink-400">
                    {photoCount > 0
                      ? `${photoCount} file${photoCount === 1 ? "" : "s"} selected`
                      : "Optional — you can also send these directly on WhatsApp"}
                  </span>
                </label>
                <input
                  id="pm-photos"
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
                />
              </div>
            )}

            {step === 4 && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="pm-name" className="text-xs text-ink-400">
                    Name (optional)
                  </label>
                  <input
                    id="pm-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus-ring mt-1.5 w-full rounded-md border border-sand-100/15 bg-transparent px-3.5 py-2.5 text-sm text-sand-50"
                  />
                </div>
                <div>
                  <label htmlFor="pm-location" className="text-xs text-ink-400">
                    Area in Dammam (optional)
                  </label>
                  <input
                    id="pm-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="focus-ring mt-1.5 w-full rounded-md border border-sand-100/15 bg-transparent px-3.5 py-2.5 text-sm text-sand-50"
                  />
                </div>
              </div>
            )}

            <div className="mt-7 flex items-center gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="focus-ring text-sm font-semibold text-ink-300 hover:text-sand-100"
                >
                  Back
                </button>
              )}

              {!isLast ? (
                <button
                  type="button"
                  disabled={!canContinue}
                  onClick={() => setStep((s) => s + 1)}
                  className="focus-ring ml-auto inline-flex items-center rounded-full bg-moss-600 px-6 py-3 text-sm font-semibold text-sand-50 transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                </button>
              ) : (
                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="focus-ring ml-auto inline-flex items-center rounded-full bg-moss-600 px-6 py-3 text-sm font-semibold text-sand-50"
                >
                  Send Maintenance Request
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

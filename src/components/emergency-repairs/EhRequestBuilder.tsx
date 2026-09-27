"use client";

import { useMemo, useRef, useState } from "react";
import { whatHappenedCategories } from "@/lib/emergency-repairs";
import { buildWhatsAppLink } from "@/lib/site-config";

const whereOptions = [
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Living room",
  "Ceiling",
  "Wall",
  "Utility area",
  "Exterior",
  "Other",
];

const whenOptions = ["Just now", "Today", "Recently", "Has been happening for a while"];

const TOTAL_STEPS = 5;

export default function EhRequestBuilder() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<string | null>(null);
  const [where, setWhere] = useState<string | null>(null);
  const [when, setWhen] = useState<string | null>(null);
  const [photoCount, setPhotoCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const selectAndAdvance = (setter: (v: string) => void, value: string) => {
    setter(value);
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(goNext, 200);
  };

  const message = useMemo(() => {
    const lines = ["Hello Dammam Home Solutions, I need help with a repair."];
    if (category) lines.push(`What happened: ${category}`);
    if (where) lines.push(`Where: ${where}`);
    if (when) lines.push(`When: ${when}`);
    if (photoCount > 0) lines.push(`Photos: ${photoCount} selected — I'll attach them here.`);
    if (name) lines.push(`Name: ${name}`);
    if (phone) lines.push(`Phone / WhatsApp: ${phone}`);
    if (location) lines.push(`Location: ${location}`);
    return lines.join("\n");
  }, [category, where, when, photoCount, name, phone, location]);

  return (
    <section id="request" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-xl">
        <p className="section-label !text-ember-700">Repair request</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Give us the information we need.
        </h2>

        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-medium text-ink-500">
            <span>
              Step {step + 1} of {TOTAL_STEPS}
            </span>
            {step > 0 && (
              <button type="button" onClick={goBack} className="focus-ring text-ink-600 underline underline-offset-4">
                Back
              </button>
            )}
          </div>
          <div className="mt-2 h-1 w-full rounded-full bg-ink-900/10">
            <div
              className="h-1 rounded-full bg-ember-600 transition-all duration-300"
              style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
            />
          </div>

          <div className="mt-7">
            {step === 0 && (
              <div>
                <p className="text-[15px] font-medium text-ink-900">What happened?</p>
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {whatHappenedCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      aria-pressed={category === cat.label}
                      onClick={() => selectAndAdvance(setCategory, cat.label)}
                      className={`focus-ring rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                        category === cat.label
                          ? "border-ember-700 bg-ember-100/60 text-ember-900"
                          : "border-ink-900/15 text-ink-800 hover:border-ember-600"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="text-[15px] font-medium text-ink-900">Where?</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {whereOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={where === option}
                      onClick={() => selectAndAdvance(setWhere, option)}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        where === option
                          ? "border-ember-700 bg-ember-700 text-sand-50"
                          : "border-ink-900/15 text-ink-800 hover:border-ember-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-[15px] font-medium text-ink-900">When?</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {whenOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={when === option}
                      onClick={() => selectAndAdvance(setWhen, option)}
                      className={`focus-ring rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        when === option
                          ? "border-ember-700 bg-ember-100/60 text-ember-900"
                          : "border-ink-900/15 text-ink-800 hover:border-ember-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-[15px] font-medium text-ink-900">Photo</p>
                <label
                  htmlFor="eh-photos"
                  className="focus-ring mt-4 flex cursor-pointer flex-col items-start gap-1.5 rounded-md border border-dashed border-ink-900/20 px-5 py-6 hover:border-ember-600"
                >
                  <span className="text-sm font-semibold text-ink-900">
                    Add a full-area photo, close-up, or short video
                  </span>
                  <span className="text-xs text-ink-500">
                    {photoCount > 0 ? `${photoCount} file(s) selected` : "Optional"}
                  </span>
                </label>
                <input
                  id="eh-photos"
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
                />
                <button
                  type="button"
                  onClick={goNext}
                  className="focus-ring mt-5 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-[15px] font-medium text-ink-900">Contact</p>
                <div className="mt-4 grid gap-3">
                  <div>
                    <label htmlFor="eh-name" className="text-xs text-ink-500">
                      Name (optional)
                    </label>
                    <input
                      id="eh-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="focus-ring mt-1.5 w-full rounded-md border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="eh-phone" className="text-xs text-ink-500">
                      Phone / WhatsApp (optional)
                    </label>
                    <input
                      id="eh-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="focus-ring mt-1.5 w-full rounded-md border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="eh-location" className="text-xs text-ink-500">
                      Area in Dammam (optional)
                    </label>
                    <input
                      id="eh-location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="focus-ring mt-1.5 w-full rounded-md border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-900"
                    />
                  </div>
                </div>

                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-ember-600 px-6 py-3.5 text-sm font-semibold text-ink-950"
                >
                  Send Repair Request
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

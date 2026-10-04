"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { rnLooks, rnMaterials, rnPhotoKinds, rnPropertyTypes, rnRooms } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Arrow, Check, Eyebrow } from "./RnUi";

const field = "focus-ring mt-2 w-full border border-ink-950/15 bg-sand-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400";
const lbl = "font-mono text-[10px] uppercase tracking-[0.22em] text-ink-600";

// Live plan summary + photo-based renovation request (sent via WhatsApp).
export default function RnRequest() {
  const plan = usePlan();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState("");
  const [change, setChange] = useState("");
  const [notes, setNotes] = useState("");
  const [kinds, setKinds] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const scope = [plan.scaleLabel, plan.depth].filter(Boolean).join(" · ");
  const mats = rnMaterials.filter((m) => plan.materials[m.key]).map((m) => `${m.label}: ${plan.materials[m.key]}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Dammam Home Solutions, I'd like a renovation assessment.",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      property && `Property: ${property}`,
      plan.roomLabels.length && `Rooms: ${plan.roomLabels.join(", ")}`,
      scope && `Scope: ${scope}`,
      plan.look && `Look: ${plan.look}`,
      plan.priorities.length && `Priority: ${plan.priorities.join(" + ")}`,
      plan.work.length && `Selected work: ${plan.work.join(", ")}`,
      mats.length && `Material ideas: ${mats.join("; ")}`,
      change && `What I'd like to change: ${change}`,
      notes && `Inspiration / notes: ${notes}`,
      (plan.photos || kinds.length) && `Photos: ${plan.photos ? `${plan.photos} photo${plan.photos === 1 ? "" : "s"}` : "some photos"}${kinds.length ? ` (${kinds.join(", ")})` : ""} — sending in this chat`,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="request" aria-labelledby="rn-request" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="14">Photo consultation</Eyebrow>
        <h2 id="rn-request" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Show us the home you want to change.</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Everything you chose above is collected in your renovation plan. Add your
          details and send it with photos — we&rsquo;ll come back with the right next step.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* live summary */}
          <aside aria-label="Renovation plan summary" className="lg:col-span-5">
            <div className="sticky top-24 bg-ink-950 text-sand-50">
              <div aria-hidden="true" className="flex h-3">
                {(rnLooks.find((l) => l.key === plan.look)?.swatch ?? ["#d69a5f", "#a67c5b", "#6b4a35", "#333a49"]).map((c, i) => <span key={i} className="flex-1" style={{ background: c }} />)}
              </div>
              <div className="p-6 sm:p-8" aria-live="polite">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-ember-500">Renovation plan</p>
                  <p className="font-mono text-[10px] text-sand-300">DHS / RN</p>
                </div>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Rooms</dt>
                    <dd className="mt-1 font-serif text-xl">{plan.roomLabels.length ? plan.roomLabels.join(" · ") : <span className="text-sand-300/70">Choose on the floor plan</span>}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Priority</dt>
                    <dd className="mt-1 font-serif text-xl">{plan.priorities.length ? plan.priorities.join(" + ") : <span className="text-sand-300/70">—</span>}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Scope</dt>
                    <dd className="mt-1 font-serif text-xl">{scope || <span className="text-sand-300/70">—</span>}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Selected work</dt>
                    <dd className="mt-2">
                      {plan.work.length ? (
                        <ul className="flex flex-wrap gap-1.5">{plan.work.map((w) => <li key={w} className="border border-sand-50/25 px-2 py-0.5 text-xs">{w}</li>)}</ul>
                      ) : <span className="font-serif text-xl text-sand-300/70">—</span>}
                    </dd>
                  </div>
                  {mats.length > 0 && (
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Materials</dt>
                      <dd className="mt-1 text-sm text-sand-100">{mats.join(" · ")}</dd>
                    </div>
                  )}
                  <div className="flex items-end justify-between border-t border-sand-50/15 pt-5">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Photos</dt>
                      <dd className="mt-1 font-serif text-4xl">{plan.photos}</dd>
                    </div>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => plan.changePhotos(-1)} className="focus-ring h-10 w-10 border border-sand-50/30 text-lg hover:bg-sand-50/10" aria-label="One photo fewer">−</button>
                      <button type="button" onClick={() => plan.changePhotos(1)} className="focus-ring h-10 w-10 border border-sand-50/30 text-lg hover:bg-sand-50/10" aria-label="One photo more">+</button>
                    </div>
                  </div>
                </dl>
                <a href="#rn-form" className="focus-ring group mt-7 flex items-center justify-between bg-ember-500 px-5 py-4 text-sm font-semibold text-ink-950 hover:bg-ember-600">
                  Request Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </aside>

          {/* form */}
          <form id="rn-form" onSubmit={onSubmit} className="scroll-mt-24 space-y-7 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="rn-name" className={lbl}>Name</label>
                <input id="rn-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
              </div>
              <div>
                <label htmlFor="rn-phone" className={lbl}>Phone / WhatsApp</label>
                <input id="rn-phone" required type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} />
              </div>
            </div>

            <fieldset>
              <legend className={lbl}>Property type</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {rnPropertyTypes.map((p) => (
                  <label key={p} className={`cursor-pointer border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2 ${property === p ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-800 hover:border-ink-950/50"}`}>
                    <input type="radio" name="rn-property" checked={property === p} onChange={() => setProperty(p)} className="sr-only" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={lbl}>Rooms</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {rnRooms.map((r) => {
                  const on = plan.hasRoom(r.key);
                  return (
                    <label key={r.key} className={`inline-flex cursor-pointer items-center gap-1.5 border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2 ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/15 text-ink-800 hover:border-ink-950/50"}`}>
                      <input type="checkbox" checked={on} onChange={() => plan.toggleRoom(r.key)} className="sr-only" />
                      {on && <Check className="h-3 w-3" />}{r.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="rn-change-text" className={lbl}>What would you like to change?</label>
              <textarea id="rn-change-text" rows={4} value={change} onChange={(e) => setChange(e.target.value)} placeholder="e.g. The kitchen cabinets are damaged and the living room feels dated — new floor, better lighting." className={field} />
            </div>

            <fieldset>
              <legend className={lbl}>Photos you can send</legend>
              <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                {rnPhotoKinds.map((k) => {
                  const on = kinds.includes(k);
                  return (
                    <label key={k} className="flex cursor-pointer items-center gap-3 py-1.5 text-sm text-ink-800 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600">
                      <input type="checkbox" checked={on} onChange={() => setKinds((x) => (on ? x.filter((y) => y !== k) : [...x, k]))} className="sr-only" />
                      <span aria-hidden="true" className={`flex h-4 w-4 flex-none items-center justify-center border ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/30"}`}>{on && <Check className="h-3 w-3" />}</span>
                      {k}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-ink-500">You&rsquo;ll attach the photos in WhatsApp after sending.</p>
            </fieldset>

            <div>
              <label htmlFor="rn-notes" className={lbl}>Inspiration / notes</label>
              <textarea id="rn-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Links or a description of the look you like, things to keep, timing, access…" className={field} />
            </div>

            <div className="border-l-2 border-walnut-600 bg-sand-100 p-5">
              <p className="font-serif text-lg text-ink-950">Inspiration vs actual scope</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">
                Inspiration images show the appearance you want. The actual
                renovation scope depends on the existing property, its dimensions,
                materials, condition and installation requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="focus-ring group inline-flex items-center justify-center gap-3 bg-ink-950 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-walnut-900">
                Send Renovation Request <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="max-w-xs text-xs leading-relaxed text-ink-500">Opens WhatsApp with your plan. Photos help us plan the next step — they aren&rsquo;t enough for an exact quote on their own.</p>
            </div>
            {sent && <p role="status" className="text-sm font-semibold text-moss-700">WhatsApp opened with your renovation plan — attach your photos there.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { shMainIssues, shPhotoShots, shProperties, shTypes } from "@/lib/shade-pergola";
import { condParts, useShade, type Cond } from "./ShPlan";
import { Arrow, Tag, opt, optOff, optOn } from "./ShUi";

const field = "focus-ring mt-1.5 w-full border border-steel-900/20 bg-sand-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400";
const lbl = "font-mono text-[10px] uppercase tracking-[0.2em] text-steel-700";
const condTone: Record<Cond, string> = { Good: "bg-moss-600", Attention: "bg-copper-600", Unknown: "bg-steel-500" };

// Photo request, condition panel and the live assessment report.
export default function ShRequest() {
  const s = useShade();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [shots, setShots] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const type = shTypes.find((t) => t.key === s.type)?.label;
  const capacity = s.vehicles ? `${s.vehicles} vehicle${s.vehicles === "1" ? "" : "s"}` : null;
  const extra = s.issues.filter((i) => !s.mainIssue || !i.startsWith(s.mainIssue));
  const condList = condParts.filter((p) => s.cond[p]).map((p) => `${p}: ${s.cond[p]}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Dammam Home Solutions, I'd like a shade assessment.",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      s.property && `Property: ${s.property}`,
      type && `Shade type: ${type}`,
      capacity && `Vehicles: ${capacity}`,
      s.mainIssue && `Main problem: ${s.mainIssue}${s.severity ? ` (${s.severity.toLowerCase()})` : ""}`,
      s.issues.length && `Noticed: ${s.issues.join(", ")}`,
      condList.length && `Condition: ${condList.join("; ")}`,
      notes && `Notes: ${notes}`,
      (s.photos || shots.length) && `Photos: ${s.photos ? `${s.photos} photo${s.photos === 1 ? "" : "s"}` : "some photos"}${shots.length ? ` (${shots.join(", ")})` : ""} — sending in this chat`,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="request" aria-labelledby="sh-request" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="15">Photo assessment</Tag>
        <h2 id="sh-request" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Send photos of your shade</h2>

        <ol className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="Photos that help">
          {shPhotoShots.map((p, i) => {
            const on = shots.includes(p);
            return (
              <li key={p}>
                <label className={`flex h-full cursor-pointer flex-col justify-between gap-6 border-2 border-dashed p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 ${on ? "border-copper-600 bg-copper-100" : "border-steel-900/20 hover:border-steel-600"}`}>
                  <input type="checkbox" checked={on} onChange={() => setShots((x) => (on ? x.filter((y) => y !== p) : [...x, p]))} className="sr-only" />
                  <span className="font-mono text-2xl text-steel-500">{i + 1}</span>
                  <span className="text-sm font-semibold text-ink-950">{p}{on && <span className="ml-1 text-copper-700">✓</span>}</span>
                </label>
              </li>
            );
          })}
        </ol>
        <p className="mt-2 text-xs text-ink-500">Tick the shots you can send — photos are attached in WhatsApp after you submit.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <form onSubmit={onSubmit} className="space-y-6 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="sh-name" className={lbl}>Name</label>
                <input id="sh-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
              </div>
              <div>
                <label htmlFor="sh-phone" className={lbl}>Phone / WhatsApp</label>
                <input id="sh-phone" required type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} />
              </div>
            </div>
            <fieldset>
              <legend className={lbl}>Property type</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {shProperties.map((p) => (
                  <label key={p} className={`${opt} ${s.property === p ? optOn : optOff}`}>
                    <input type="radio" name="sh-f-prop" checked={s.property === p} onChange={() => s.setProperty(p)} className="sr-only" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="sh-f-type" className={lbl}>Shade type</label>
                <select id="sh-f-type" value={s.type ?? ""} onChange={(e) => e.target.value && s.setType(e.target.value as (typeof shTypes)[number]["key"])} className={field}>
                  <option value="">Choose…</option>
                  {shTypes.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="sh-f-veh" className={lbl}>Vehicles</label>
                <select id="sh-f-veh" value={s.vehicles ?? ""} onChange={(e) => e.target.value && s.setVehicles(e.target.value as "1" | "2" | "3+")} className={field}>
                  <option value="">Choose…</option>
                  <option value="1">1</option><option value="2">2</option><option value="3+">3+</option>
                </select>
              </div>
              <div>
                <label htmlFor="sh-f-issue" className={lbl}>Main problem</label>
                <select id="sh-f-issue" value={s.mainIssue ?? ""} onChange={(e) => e.target.value && s.setMainIssue(e.target.value)} className={field}>
                  <option value="">Choose…</option>
                  {shMainIssues.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className={lbl}>Condition, as far as you can see</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {condParts.map((p) => (
                  <div key={p} className="flex items-center justify-between gap-2 border border-steel-900/10 px-3 py-2">
                    <span className="text-sm font-semibold text-ink-900">{p}</span>
                    <div className="flex gap-1" role="radiogroup" aria-label={`${p} condition`}>
                      {(["Good", "Attention", "Unknown"] as Cond[]).map((c) => {
                        const on = s.cond[p] === c;
                        return (
                          <label key={c} className={`cursor-pointer px-2 py-1 text-xs transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 ${on ? `${condTone[c]} text-sand-50` : "bg-steel-100 text-ink-700 hover:bg-steel-300/60"}`}>
                            <input type="radio" name={`sh-f-cond-${p}`} checked={on} onChange={() => s.setCond(p, c)} className="sr-only" />
                            {c}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-wrap items-center justify-between gap-4 border border-steel-900/10 bg-steel-100/50 px-4 py-3">
              <span className={lbl}>Number of photos</span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => s.changePhotos(-1)} className="focus-ring h-10 w-10 border border-steel-900/25 text-lg" aria-label="One photo fewer">−</button>
                <span className="w-8 text-center font-mono text-xl" aria-live="polite">{s.photos}</span>
                <button type="button" onClick={() => s.changePhotos(1)} className="focus-ring h-10 w-10 border border-steel-900/25 text-lg" aria-label="One photo more">+</button>
              </div>
            </div>

            <div>
              <label htmlFor="sh-notes" className={lbl}>Additional notes</label>
              <textarea id="sh-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Cover tore in last week's wind; one post looks rusty at the bottom." className={field} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" className="focus-ring group inline-flex items-center justify-center gap-2 bg-copper-600 px-6 py-4 text-sm font-semibold text-sand-50 hover:bg-copper-700">
                Request Shade Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs leading-relaxed text-ink-500">Opens WhatsApp with your request. Photos help define the scope; structural condition is confirmed on site.</p>
            </div>
            {sent && <p role="status" className="text-sm font-semibold text-copper-700">WhatsApp opened with your request — attach your photos there.</p>}
          </form>

          <aside aria-label="Shade assessment request" className="order-first lg:order-last lg:col-span-5">
            <div className="sticky top-24 bg-steel-900 text-sand-50">
              <div className="flex items-center justify-between bg-copper-600 px-6 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em]">Shade assessment request</p>
                <p className="font-mono text-[10px]">DHS / SH</p>
              </div>
              <dl className="grid grid-cols-2 gap-px bg-steel-300/10" aria-live="polite">
                {[
                  ["Structure", type],
                  ["Capacity", capacity],
                  ["Main issue", s.mainIssue ? `${s.mainIssue}${s.severity ? ` · ${s.severity}` : ""}` : null],
                  ["Property", s.property],
                ].map(([k, v]) => (
                  <div key={k} className="bg-steel-900 px-5 py-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">{k}</dt>
                    <dd className={`mt-1 font-serif text-lg leading-snug ${v ? "" : "text-steel-500"}`}>{v ?? "—"}</dd>
                  </div>
                ))}
                <div className="col-span-2 bg-steel-900 px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">Additional issues</dt>
                  <dd className="mt-2">{extra.length ? <ul className="flex flex-wrap gap-1.5">{extra.map((x) => <li key={x} className="border border-steel-300/30 px-2 py-0.5 text-xs">{x}</li>)}</ul> : <span className="text-steel-500">—</span>}</dd>
                </div>
                <div className="col-span-2 bg-steel-900 px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">Condition</dt>
                  <dd className="mt-2 grid grid-cols-4 gap-1.5">
                    {condParts.map((p) => {
                      const c = s.cond[p];
                      return (
                        <span key={p} className="text-center">
                          <span aria-hidden="true" className={`block h-1.5 ${c ? condTone[c] : "bg-steel-700"}`} />
                          <span className="mt-1 block text-[11px] text-steel-300">{p}</span>
                          <span className="block text-xs">{c ?? "—"}</span>
                        </span>
                      );
                    })}
                  </dd>
                </div>
                <div className="bg-steel-900 px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">Photos</dt>
                  <dd className="mt-1 font-serif text-3xl">{s.photos}</dd>
                </div>
                <div className="bg-steel-900 px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">Overall</dt>
                  <dd className="mt-1 text-sm font-semibold text-copper-300">Assessment recommended</dd>
                </div>
              </dl>
              <div className="border-t border-steel-300/20 px-6 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">Next step</p>
                <p className="mt-1 font-serif text-xl">Professional assessment</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-500">A summary of what you&rsquo;ve told us. We never label a shade &ldquo;safe&rdquo; from photos or form answers.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

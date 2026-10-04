"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { mdAppearances, mdDuration, mdHistory, mdLocations, mdPhotoTips, mdProperties } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Arrow, Drop, Spec, chip, chipOff, chipOn } from "./MdUi";

const field = "focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400";
const lbl = "text-sm font-semibold text-ink-950";

// Dampness report builder + live assessment summary (sent via WhatsApp).
export default function MdRequest() {
  const r = useReport();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [tips, setTips] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const extraLoc = r.locations.filter((l) => !mdLocations.includes(l));
  const extraSigns = r.signs.filter((s) => !mdAppearances.includes(s));
  const recurring = r.duration === "Recurring" || (r.history && r.history !== "No");
  const next =
    !r.locations.length && !r.signs.length
      ? "Add a location or sign to see a next step"
      : r.material === "Fabric / soft furnishing"
        ? "We treat building surfaces — we'll advise on the rest"
        : recurring || r.locations.length > 1 || r.source
          ? "On-site damp assessment"
          : "Photo review, then on-site assessment";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Dammam Home Solutions, I'd like a damp / mold assessment.",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      r.property && `Property: ${r.property}`,
      r.locations.length && `Location: ${r.locations.join(", ")}`,
      r.signs.length && `What I'm seeing: ${r.signs.join(", ")}`,
      r.source && `Possible source I noticed: ${r.source}`,
      r.material && `Surface: ${r.material}`,
      r.duration && `How long: ${r.duration}`,
      r.history && `Repaired before: ${r.history}`,
      notes && `Notes: ${notes}`,
      (r.photos || tips.length) && `Photos: ${r.photos ? `${r.photos} photo${r.photos === 1 ? "" : "s"}` : "some photos"}${tips.length ? ` (${tips.join(", ")})` : ""} — sending in this chat`,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const rows: [string, string][] = [
    ["Location", r.locations.join(" + ")],
    ["Visible signs", r.signs.join(" + ")],
    ["Possible source", r.source ?? ""],
    ["Surface", r.material ?? ""],
    ["Duration", r.duration ?? ""],
    ["History", r.history ?? ""],
    ["Property", r.property ?? ""],
  ];

  return (
    <section id="report" aria-labelledby="md-report" className="scroll-mt-20 bg-glass-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-14">Dampness report</Spec>
        <h2 id="md-report" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Build your dampness report</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Your choices from the page are already here. Add what&rsquo;s missing, then
          send it with photos. This is an assessment request — not a diagnosis.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <form onSubmit={onSubmit} className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className={lbl}>Location</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[...mdLocations, ...extraLoc].map((l) => (
                  <label key={l} className={`${chip} ${r.locations.includes(l) ? chipOn : chipOff}`}>
                    <input type="checkbox" checked={r.locations.includes(l)} onChange={() => r.toggle("locations", l)} className="sr-only" />
                    {l}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={lbl}>Appearance</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[...mdAppearances, ...extraSigns].map((s) => (
                  <label key={s} className={`${chip} ${r.signs.includes(s) ? chipOn : chipOff}`}>
                    <input type="checkbox" checked={r.signs.includes(s)} onChange={() => r.toggle("signs", s)} className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="md-dur-select" className={lbl}>Duration</label>
                <select id="md-dur-select" value={r.duration ?? ""} onChange={(e) => r.set("duration", e.target.value || null)} className={field}>
                  <option value="">Choose…</option>
                  {[...mdDuration, "Unknown"].map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="md-hist-select" className={lbl}>Repaired before?</label>
                <select id="md-hist-select" value={r.history ?? ""} onChange={(e) => r.set("history", e.target.value || null)} className={field}>
                  <option value="">Choose…</option>
                  {mdHistory.map((h) => <option key={h}>{h}</option>)}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className={lbl}>Property type</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {mdProperties.map((p) => (
                  <label key={p.key} className={`${chip} text-center ${r.property === p.key ? chipOn : chipOff}`}>
                    <input type="radio" name="md-property" checked={r.property === p.key} onChange={() => r.set("property", p.key)} className="sr-only" />
                    {p.key}
                  </label>
                ))}
              </div>
              <p className="mt-2 min-h-[1.25rem] text-xs text-ink-600" aria-live="polite">{mdProperties.find((p) => p.key === r.property)?.note}</p>
            </fieldset>

            <fieldset className="rounded-2xl border-2 border-dashed border-glass-700/40 bg-sand-50 p-5">
              <legend className="px-2 text-sm font-semibold text-ink-950">Photos</legend>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="flex items-center gap-2 text-sm text-ink-700"><Drop className="h-4 w-4 text-glass-700" /> Photos are attached in WhatsApp after you send.</p>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => r.changePhotos(-1)} className="focus-ring h-10 w-10 rounded-lg border border-ink-900/20 text-lg" aria-label="One photo fewer">−</button>
                  <span className="w-10 text-center font-mono text-xl text-ink-950" aria-live="polite" aria-label={`${r.photos} photos`}>{r.photos}</span>
                  <button type="button" onClick={() => r.changePhotos(1)} className="focus-ring h-10 w-10 rounded-lg border border-ink-900/20 text-lg" aria-label="One photo more">+</button>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-500">Most helpful shots</p>
              <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                {mdPhotoTips.map((t) => {
                  const on = tips.includes(t);
                  return (
                    <label key={t} className="flex cursor-pointer items-center gap-3 py-1 text-sm text-ink-800 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600">
                      <input type="checkbox" checked={on} onChange={() => setTips((x) => (on ? x.filter((y) => y !== t) : [...x, t]))} className="sr-only" />
                      <span aria-hidden="true" className={`flex h-4 w-4 flex-none items-center justify-center rounded border text-[10px] ${on ? "border-glass-800 bg-glass-800 text-sand-50" : "border-ink-900/30"}`}>{on && "✓"}</span>
                      {t}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="md-notes" className={lbl}>Notes</label>
              <textarea id="md-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Appears after the AC has been running; came back three months after repainting." className={field} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="md-name" className={lbl}>Name</label>
                <input id="md-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
              </div>
              <div>
                <label htmlFor="md-phone" className={lbl}>Phone / WhatsApp</label>
                <input id="md-phone" required type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-lg bg-glass-900 px-6 py-4 text-sm font-semibold text-sand-50 hover:bg-ink-950">
                Request a Damp Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs leading-relaxed text-ink-500">Opens WhatsApp with your report. Photos help us plan — they can&rsquo;t confirm the source on their own.</p>
            </div>
            {sent && <p role="status" className="text-sm font-semibold text-glass-800">WhatsApp opened with your report — attach your photos there.</p>}
          </form>

          <aside aria-label="Assessment summary" className="order-first lg:order-last lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-2xl bg-glass-900 text-sand-50 shadow-[0_30px_60px_-30px_rgba(28,39,51,0.7)]">
              <div className="flex items-center justify-between border-b border-glass-300/20 px-6 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-glass-300">Your assessment</p>
                <Drop className="h-4 w-4 text-glass-300" />
              </div>
              <dl className="divide-y divide-glass-300/10 px-6" aria-live="polite">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7rem_1fr] gap-3 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-glass-300">{k}</dt>
                    <dd className={`text-sm ${v ? "text-sand-50" : "text-glass-500"}`}>{v || "—"}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-3 py-4">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-glass-300">Photos</dt>
                    <dd className="font-serif text-3xl">{r.photos}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-glass-300">Notes</dt>
                    <dd className="font-serif text-3xl">{notes.trim() ? notes.trim().split(/[.!?]+\s*/).filter(Boolean).length : 0}</dd>
                  </div>
                </div>
              </dl>
              <div className="bg-glass-300 px-6 py-5 text-glass-900">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]">Next step</p>
                <p className="mt-1 font-serif text-xl leading-snug">{next}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-500">A summary of what you told us — not a diagnosis.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

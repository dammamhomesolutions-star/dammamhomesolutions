"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { hmFormProperty, hmPhotoTips, hmTasks } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-xl border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400";

// Job summary + photo-first request form. Everything goes out as one WhatsApp message.
export default function HmRequest() {
  const { jobs, setQty, remove, total } = useJobs();
  const [property, setProperty] = useState("");
  const [extra, setExtra] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const rooms = new Set(jobs.flatMap((j) => (hmTasks.find((t) => t.id === j.id)?.rooms.slice(0, 1) ?? [])));

  const message = useMemo(() => {
    const lines = ["Hello Dammam Home Solutions, here's my handyman job list:"];
    jobs.forEach((j, i) => lines.push(`${i + 1}. ${j.label}${j.qty > 1 ? ` × ${j.qty}` : ""}`));
    if (extra.trim()) lines.push(`${jobs.length + 1}. ${extra.trim()}`);
    if (!jobs.length && !extra.trim()) lines.push("(I'll describe the jobs here)");
    lines.push(`Property: ${property || "—"}`, `Area of Dammam: ${area.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push(photos.length ? `I'll send photos: ${photos.join(", ").toLowerCase()}.` : "I can send photos in this chat.");
    return lines.join("\n");
  }, [jobs, extra, property, area, date, note, name, phone, photos]);

  const stats: [string, string | number][] = [
    ["Tasks", total + (extra.trim() ? 1 : 0)],
    ["Rooms", rooms.size || "—"],
    ["Property", property || "—"],
    ["Photos", photos.length || "—"],
  ];

  return (
    <section id="job-request" aria-labelledby="hm-request" className="scroll-mt-20 bg-sand-100 py-20 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Send your list</p>
        <h2 id="hm-request" className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Not sure what to call it? Show us.</h2>
        <p className="mt-4 max-w-xl text-[15px] text-ink-600">Review your job list, tick the photos you can send, and it goes to us as one WhatsApp message. We may need to see some jobs before an exact quote.</p>

        <form
          className="mt-10 grid gap-6 lg:grid-cols-12"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          {/* summary */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-ink-950 p-6 text-sand-50 lg:sticky lg:top-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-500">My request</p>
              <dl className="mt-4 grid grid-cols-4 gap-2" aria-live="polite">
                {stats.map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-ink-900 p-2.5 text-center">
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink-400">{k}</dt>
                    <dd className="mt-1 truncate font-mono text-lg text-sand-50">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5">
                {jobs.length ? (
                  <ol className="space-y-1.5">
                    {jobs.map((j, i) => (
                      <li key={j.id} className="flex items-center gap-2 rounded-xl bg-ink-900 px-3 py-2 text-sm">
                        <span className="font-mono text-[11px] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                        <span className="flex-1 leading-tight">{j.label}</span>
                        {!j.custom && (
                          <span className="flex items-center gap-1">
                            <button type="button" aria-label={`Fewer: ${j.label}`} onClick={() => setQty(j.id, j.qty - 1)} className="focus-ring flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-sand-100/20"><HmIcon name="minus" className="h-3 w-3" /></button>
                            <output className="w-5 text-center font-mono text-xs">{j.qty}</output>
                            <button type="button" aria-label={`More: ${j.label}`} onClick={() => setQty(j.id, j.qty + 1)} className="focus-ring flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-sand-100/20"><HmIcon name="plus" className="h-3 w-3" /></button>
                          </span>
                        )}
                        <button type="button" onClick={() => remove(j.id)} aria-label={`Remove ${j.label}`} className="focus-ring rounded px-1 text-ink-400 hover:text-sand-50">×</button>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="rounded-xl bg-ink-900 p-4 text-sm text-ink-300">Your list is empty — add tasks above, or just type them below.</p>
                )}
              </div>
              <label className="mt-4 block text-sm font-medium text-sand-50">
                Anything else to add?
                <input type="text" value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="e.g. bathroom towel rail is loose" className="focus-ring mt-1.5 w-full rounded-xl border border-sand-100/15 bg-ink-900 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400" />
              </label>
              <p className="mt-4 text-xs text-ink-400">Final scope depends on the number, complexity, materials, access and condition of each task.</p>
            </div>
          </div>

          {/* details */}
          <div className="rounded-[2rem] bg-sand-50 p-6 shadow-sm ring-1 ring-ink-900/10 sm:p-8 lg:col-span-7">
            <fieldset>
              <legend className="flex items-center gap-2 text-sm font-semibold text-ink-950"><HmIcon name="camera" className="h-5 w-5 text-ember-700" />Photos you can send</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {hmPhotoTips.map((t) => {
                  const on = photos.includes(t);
                  return (
                    <label key={t} className={`flex aspect-square cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed p-2 text-center text-xs transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-600 ${on ? "border-ember-600 bg-ember-100 text-ink-950" : "border-ink-900/15 text-ink-600 hover:border-ember-600"}`}>
                      <input type="checkbox" checked={on} onChange={() => setPhotos((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))} className="sr-only" />
                      <HmIcon name={on ? "check" : "camera"} className="h-5 w-5" />
                      {t}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-ink-500">Attach them in WhatsApp after sending.</p>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-950">
                Property type
                <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  {hmFormProperty.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-ink-950">
                Area of Dammam
                <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Neighbourhood" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-950">
                Preferred date <span className="font-normal text-ink-500">(optional)</span>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-950">
                Name <span className="font-normal text-ink-500">(optional)</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-950 sm:col-span-2">
                Phone / WhatsApp <span className="font-normal text-ink-500">(optional)</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-950 sm:col-span-2">
                Additional notes <span className="font-normal text-ink-500">(optional)</span>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. 3rd floor, parking at the back, furniture is still boxed" className={inputClass} />
              </label>
            </div>

            <div className="mt-6 rounded-2xl bg-sand-100 p-4 text-xs leading-relaxed text-ink-600">
              <p className="font-semibold text-ink-900">Helpful to mention</p>
              <p className="mt-1">Item sizes where known · number of items · existing hardware · access or parking restrictions · whether furniture needs moving.</p>
            </div>

            <button type="submit" className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:-translate-y-0.5">
              Send My Job List
              <HmIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="mt-3 text-center text-xs text-ink-500">
              Opens WhatsApp with your list ready. Prefer to talk?{" "}
              <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-ink-950 underline underline-offset-4">Call {siteConfig.phoneDisplay}</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

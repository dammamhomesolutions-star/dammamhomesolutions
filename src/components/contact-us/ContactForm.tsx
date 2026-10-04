"use client";

import { useState, type FormEvent } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { serviceGroups } from "@/lib/services-catalog";

const times = ["Morning", "Afternoon", "Evening", "Any time", "As soon as possible"];
const field = "focus-ring mt-1.5 w-full rounded-xl border border-ink-900/15 bg-sand-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400";
const lbl = "text-sm font-semibold text-ink-950";

// Short request form → opens WhatsApp with the details filled in. Photos
// are attached in WhatsApp (no upload to our servers).
export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: "", area: "", problem: "", date: "", time: "" });
  const [photos, setPhotos] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((x) => ({ ...x, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Dammam Home Solutions, I'd like to request a service.",
      "",
      `Name: ${f.name}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.service && `Service: ${f.service}`,
      f.area && `Area: ${f.area}`,
      f.problem && `Problem: ${f.problem}`,
      f.date && `Preferred date: ${f.date}`,
      f.time && `Preferred time: ${f.time}`,
      photos && "I'll send photos in this chat.",
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="request" aria-labelledby="ct-form" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="ct-form" className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Request home repair service</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">Fill in what you can — only your name and number are required. The form opens WhatsApp with your details ready to send.</p>
          <div className="mt-6 flex flex-col gap-2">
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-5 py-3 text-sm font-semibold text-ink-950 hover:border-ink-900/50">Call {siteConfig.phoneDisplay}</a>
            <a href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a repair.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50">WhatsApp directly</a>
          </div>
          <p className="mt-4 text-xs text-ink-500">Available 24/7.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-ink-900/10 bg-sand-100/60 p-6 sm:grid-cols-2 sm:p-8 lg:col-span-8">
          <div>
            <label htmlFor="ct-name" className={lbl}>Name</label>
            <input id="ct-name" required autoComplete="name" value={f.name} onChange={set("name")} className={field} />
          </div>
          <div>
            <label htmlFor="ct-phone" className={lbl}>Phone / WhatsApp</label>
            <input id="ct-phone" required type="tel" inputMode="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} className={field} />
          </div>
          <div>
            <label htmlFor="ct-service" className={lbl}>Service required</label>
            <select id="ct-service" value={f.service} onChange={set("service")} className={field}>
              <option value="">Not sure / choose…</option>
              {serviceGroups.map((g) => (
                <optgroup key={g.key} label={g.title}>
                  {g.services.map((s) => <option key={s.href}>{s.label}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="ct-area" className={lbl}>Area</label>
            <select id="ct-area" value={f.area} onChange={set("area")} className={field}>
              <option value="">Choose…</option>
              {siteConfig.areas.map((a) => <option key={a}>{a}</option>)}
              <option>Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ct-problem" className={lbl}>Problem description</label>
            <textarea id="ct-problem" rows={4} value={f.problem} onChange={set("problem")} placeholder="e.g. The split AC in the bedroom is running but not cooling, and water drips from the indoor unit." className={field} />
          </div>
          <div>
            <label htmlFor="ct-date" className={lbl}>Preferred date</label>
            <input id="ct-date" type="date" value={f.date} onChange={set("date")} className={field} />
          </div>
          <div>
            <label htmlFor="ct-time" className={lbl}>Preferred time</label>
            <select id="ct-time" value={f.time} onChange={set("time")} className={field}>
              <option value="">Choose…</option>
              {times.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-800 sm:col-span-2">
            <input type="checkbox" checked={photos} onChange={(e) => setPhotos(e.target.checked)} className="h-4 w-4 accent-rust-700" />
            I have photos or a video to send (you&rsquo;ll attach them in WhatsApp)
          </label>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
            <button type="submit" className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-rust-600">Request Service</button>
            {sent && <p role="status" className="text-sm font-semibold text-moss-700">WhatsApp opened with your request — press send there.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

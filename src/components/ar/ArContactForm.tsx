"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { arServiceGroups } from "@/lib/ar/catalog";
import { arabicAreas } from "@/lib/ar/areas";

const times = ["صباحاً", "ظهراً", "مساءً", "أي وقت", "في أقرب وقت"];
const field = "focus-ring mt-1.5 w-full rounded-xl border border-ink-900/15 bg-sand-50 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400";
const lbl = "text-sm font-semibold text-ink-950";

// Arabic request form → opens WhatsApp with the details in Arabic.
export default function ArContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: "", area: "", problem: "", date: "", time: "" });
  const [photos, setPhotos] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((x) => ({ ...x, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "السلام عليكم، أرغب في طلب خدمة.",
      "",
      `الاسم: ${f.name}`,
      `الجوال / واتساب: ${f.phone}`,
      f.service && `الخدمة: ${f.service}`,
      f.area && `المنطقة: ${f.area}`,
      f.problem && `المشكلة: ${f.problem}`,
      f.date && `التاريخ المفضل: ${f.date}`,
      f.time && `الوقت المفضل: ${f.time}`,
      photos && "سأرسل الصور في هذه المحادثة.",
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form id="request" onSubmit={onSubmit} className="grid scroll-mt-24 gap-5 rounded-3xl border border-ink-900/10 bg-sand-100/60 p-6 sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="act-name" className={lbl}>الاسم</label>
        <input id="act-name" required autoComplete="name" value={f.name} onChange={set("name")} className={field} />
      </div>
      <div>
        <label htmlFor="act-phone" className={lbl}>الجوال / واتساب</label>
        <input id="act-phone" required type="tel" inputMode="tel" dir="ltr" autoComplete="tel" value={f.phone} onChange={set("phone")} className={`${field} text-right`} />
      </div>
      <div>
        <label htmlFor="act-service" className={lbl}>الخدمة المطلوبة</label>
        <select id="act-service" value={f.service} onChange={set("service")} className={field}>
          <option value="">غير متأكد / اختر…</option>
          {arServiceGroups.map((g) => (
            <optgroup key={g.key} label={g.title}>
              {g.services.map((s) => <option key={s.en}>{s.label}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="act-area" className={lbl}>المنطقة</label>
        <select id="act-area" value={f.area} onChange={set("area")} className={field}>
          <option value="">اختر…</option>
          {arabicAreas.map((a) => <option key={a.slug}>{a.name}</option>)}
          <option>أخرى</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="act-problem" className={lbl}>وصف المشكلة</label>
        <textarea id="act-problem" rows={4} value={f.problem} onChange={set("problem")} placeholder="مثال: مكيف غرفة النوم يشتغل لكن لا يبرّد، وينقط ماء من الوحدة الداخلية." className={field} />
      </div>
      <div>
        <label htmlFor="act-date" className={lbl}>التاريخ المفضل</label>
        <input id="act-date" type="date" value={f.date} onChange={set("date")} className={field} />
      </div>
      <div>
        <label htmlFor="act-time" className={lbl}>الوقت المفضل</label>
        <select id="act-time" value={f.time} onChange={set("time")} className={field}>
          <option value="">اختر…</option>
          {times.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-800 sm:col-span-2">
        <input type="checkbox" checked={photos} onChange={(e) => setPhotos(e.target.checked)} className="h-4 w-4 accent-rust-700" />
        لدي صور أو فيديو (ترفقها في واتساب)
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-rust-600">إرسال الطلب</button>
        {sent && <p role="status" className="text-sm font-semibold text-moss-700">فُتح واتساب ومعه تفاصيل طلبك — اضغط إرسال هناك.</p>}
      </div>
    </form>
  );
}

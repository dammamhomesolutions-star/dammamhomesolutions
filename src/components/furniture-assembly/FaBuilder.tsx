"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { faBuilderItems, faBuilderRooms } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

// Lists several items with quantities and turns them into a WhatsApp request.
export default function FaBuilder() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [property, setProperty] = useState("");
  const [note, setNote] = useState("");

  const chosen = faBuilderItems.filter((i) => (qty[i] ?? 0) > 0);
  const total = chosen.reduce((s, i) => s + qty[i], 0);
  const change = (item: string, d: number) => setQty((s) => ({ ...s, [item]: Math.max(0, Math.min(20, (s[item] ?? 0) + d)) }));

  const href = useMemo(() => {
    const lines = ["Hello Dammam Home Solutions, I'd like furniture assembled:", ...chosen.map((i) => `- ${qty[i]} × ${i}`)];
    if (property) lines.push(`Property: ${property}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    lines.push("I can send photos of the furniture or boxes in this chat.");
    return buildWhatsAppLink(lines.join("\n"));
  }, [chosen, qty, property, note]);

  return (
    <section id="multiple-items" aria-labelledby="fa-builder" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Request builder</p>
          <h2 id="fa-builder" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Have several items to assemble?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Add each piece and how many — we&rsquo;ll plan one visit around the list.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {faBuilderItems.map((item) => {
              const n = qty[item] ?? 0;
              return (
                <li key={item} className={`flex items-center justify-between gap-3 rounded-xl border p-3 transition-colors ${n ? "border-walnut-600 bg-walnut-100/60" : "border-ink-900/10"}`}>
                  <span className="text-sm font-medium text-ink-900" id={`fa-b-${item.replace(/\W+/g, "-")}`}>{item}</span>
                  <span className="flex items-center gap-1.5" role="group" aria-labelledby={`fa-b-${item.replace(/\W+/g, "-")}`}>
                    <button type="button" aria-label={`Remove one ${item}`} disabled={!n} onClick={() => change(item, -1)} className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-ink-900/20 text-ink-800 disabled:opacity-30">−</button>
                    <output className="w-5 text-center font-mono text-sm text-ink-950">{n}</output>
                    <button type="button" aria-label={`Add one ${item}`} onClick={() => change(item, 1)} className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-ink-900/20 text-ink-800">+</button>
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-walnut-300">Your assembly request</p>
              <div aria-live="polite">
                {chosen.length ? (
                  <ul className="mt-4 space-y-1.5">
                    {chosen.map((i) => (
                      <li key={i} className="flex justify-between border-b border-sand-100/10 pb-1.5 text-sm">
                        <span>{i}</span>
                        <span className="font-mono text-walnut-300">× {qty[i]}</span>
                      </li>
                    ))}
                    <li className="flex justify-between pt-1 text-sm font-semibold"><span>Total items</span><span className="font-mono">{total}</span></li>
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-ink-300">Nothing added yet — use + to add items.</p>
                )}
              </div>
              <fieldset className="mt-6">
                <legend className="text-sm font-semibold">Property</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {faBuilderRooms.map((p) => (
                    <label key={p} className={`cursor-pointer rounded-full border px-3 py-1 text-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-300 ${property === p ? "border-walnut-300 bg-walnut-300 text-ink-950" : "border-sand-100/20 text-sand-100"}`}>
                      <input type="radio" name="fa-b-property" checked={property === p} onChange={() => setProperty(p)} className="sr-only" />
                      {p}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="mt-5 block text-sm font-semibold">
                Notes <span className="font-normal text-ink-400">(optional)</span>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder="e.g. 3rd floor, lift available" className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-900 px-3 py-2 text-sm font-normal text-sand-50 placeholder:text-ink-400" />
              </label>
              {chosen.length ? (
                <a
                  href={href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-walnut-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
                >
                  Request Assembly
                  <FaIcon name="arrow" className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-6 rounded-full border border-sand-100/15 px-6 py-3.5 text-center text-sm text-ink-400">Add at least one item to send the request</p>
              )}
              <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp — attach photos there.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

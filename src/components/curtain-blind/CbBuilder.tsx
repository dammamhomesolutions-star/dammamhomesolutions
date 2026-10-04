"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { cbBuilderCover, cbBuilderRooms } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

interface Row {
  id: number;
  room: string;
  windows: number;
  cover: string;
  size: string;
}

// A room-by-room list that becomes a WhatsApp request. No price is calculated.
export default function CbBuilder() {
  const [rows, setRows] = useState<Row[]>([{ id: 1, room: "Living room", windows: 1, cover: "Curtain", size: "" }]);
  const [nextId, setNextId] = useState(2);

  const update = (id: number, patch: Partial<Row>) => setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const add = () => {
    setRows((r) => [...r, { id: nextId, room: "Bedroom", windows: 1, cover: "Curtain", size: "" }]);
    setNextId(nextId + 1);
  };
  const total = rows.reduce((s, r) => s + r.windows, 0);

  const href = useMemo(() => {
    const lines = ["Hello Dammam Home Solutions, I'd like curtains / blinds installed:"];
    rows.forEach((r) => lines.push(`- ${r.room}: ${r.windows} window${r.windows > 1 ? "s" : ""}, ${r.cover}${r.size.trim() ? `, approx. ${r.size.trim()}` : ""}`));
    lines.push(`Total windows: ${total}`, "I can send photos of each window in this chat.");
    return buildWhatsAppLink(lines.join("\n"));
  }, [rows, total]);

  const field = "focus-ring mt-1 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3 py-2 text-sm text-ink-900";

  return (
    <section id="whole-home" aria-labelledby="cb-builder" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Room builder</p>
          <h2 id="cb-builder" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Installing curtains or blinds throughout your home?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">List each room and we&rsquo;ll plan one assessment visit.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <ol className="space-y-3 lg:col-span-7">
            {rows.map((r, i) => (
              <li key={r.id} className="animate-fadeIn rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-clay-700">ROOM {i + 1}</p>
                  {rows.length > 1 && (
                    <button type="button" onClick={() => setRows((x) => x.filter((y) => y.id !== r.id))} className="focus-ring rounded-sm text-xs text-ink-500 underline underline-offset-2 hover:text-rust-700">
                      Remove
                    </button>
                  )}
                </div>
                <div className="mt-2 grid gap-3 sm:grid-cols-4">
                  <label className="block text-xs font-medium text-ink-700">
                    Room
                    <select value={r.room} onChange={(e) => update(r.id, { room: e.target.value })} className={field}>
                      {cbBuilderRooms.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className="block text-xs font-medium text-ink-700">
                    Windows
                    <select value={r.windows} onChange={(e) => update(r.id, { windows: Number(e.target.value) })} className={field}>
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </label>
                  <label className="block text-xs font-medium text-ink-700">
                    Covering
                    <select value={r.cover} onChange={(e) => update(r.id, { cover: e.target.value })} className={field}>
                      {cbBuilderCover.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className="block text-xs font-medium text-ink-700">
                    Approx. size
                    <input type="text" value={r.size} onChange={(e) => update(r.id, { size: e.target.value })} placeholder="e.g. 2 × 1.5 m" className={field} />
                  </label>
                </div>
              </li>
            ))}
            <li>
              <button type="button" onClick={add} className="focus-ring inline-flex items-center gap-2 rounded-full border border-dashed border-clay-600 px-5 py-2.5 text-sm font-semibold text-clay-700 hover:bg-sand-50">
                + Add another room
              </button>
            </li>
          </ol>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-300">Your installation request</p>
              <ul className="mt-4 space-y-1.5" aria-live="polite">
                {rows.map((r) => (
                  <li key={r.id} className="flex justify-between gap-3 border-b border-sand-100/10 pb-1.5 text-sm">
                    <span>{r.room} · {r.cover}</span>
                    <span className="font-mono text-clay-300">× {r.windows}</span>
                  </li>
                ))}
                <li className="flex justify-between pt-1 text-sm font-semibold"><span>Total windows</span><span className="font-mono">{total}</span></li>
              </ul>
              <a
                href={href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                Request an Assessment
                <CbIcon name="arrow" className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp — attach window photos there.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

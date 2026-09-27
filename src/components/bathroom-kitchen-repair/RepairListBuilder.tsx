"use client";

import { useMemo, useState } from "react";
import { roomChecklist, type RoomId } from "@/lib/room-issues";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function RepairListBuilder() {
  const [room, setRoom] = useState<RoomId>("bathroom");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const changeRoom = (next: RoomId) => {
    setRoom(next);
    setChecked(new Set());
  };

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const selected = Array.from(checked);
  const roomLabel = room === "bathroom" ? "Bathroom" : "Kitchen";

  const message = useMemo(() => {
    const base = `Hi, I have a few things to fix in the ${roomLabel.toLowerCase()}:`;
    if (selected.length === 0) return `${base} (add your items here)`;
    return `${base}\n${selected.map((s) => `- ${s}`).join("\n")}`;
  }, [roomLabel, selected]);

  return (
    <section className="border-y border-ink-900/10 bg-zinc-100/70 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label text-emerald-800">One message, several jobs</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Have more than one thing to fix?
          </h2>
          <p className="mt-4 text-ink-700">
            Pick the room, tick what needs attention, and send it as one
            list instead of separate requests.
          </p>

          <div className="mt-6 inline-flex rounded-full border border-ink-900/15 bg-sand-50 p-1">
            {(["bathroom", "kitchen"] as RoomId[]).map((r) => (
              <button
                key={r}
                onClick={() => changeRoom(r)}
                aria-pressed={room === r}
                className={`focus-ring rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
                  room === r ? "bg-emerald-800 text-sand-50" : "text-ink-700 hover:text-ink-950"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2">
            {roomChecklist[room].map((item) => {
              const isChecked = checked.has(item);
              return (
                <li key={item}>
                  <label
                    className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-3 text-sm transition-colors ${
                      isChecked ? "border-emerald-800 bg-emerald-800/10 text-emerald-900" : "border-ink-900/10 text-ink-700 hover:border-ink-900/25"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(item)}
                      className="focus-ring h-4 w-4 flex-none rounded border-ink-900/30 text-emerald-800 accent-emerald-800"
                    />
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-xl bg-zinc-100 px-4 py-3.5">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
              Your repair list
            </p>
            <p className="mt-1 text-sm text-ink-800">
              {selected.length > 0 ? `${roomLabel} — ${selected.join(" + ")}` : `${roomLabel} — nothing selected yet`}
            </p>
          </div>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            Send My Repair List on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { RoomId } from "@/lib/room-issues";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function RoomRequestPanel() {
  const [room, setRoom] = useState<RoomId>("bathroom");
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");

  const message = useMemo(() => {
    const roomLabel = room === "bathroom" ? "Bathroom" : "Kitchen";
    const issue = problem.trim() || "______";
    const where = location.trim() || "______";
    return `Hi, I need bathroom/kitchen repair in Dammam.\nRoom: ${roomLabel}\nProblem: ${issue}\nLocation: ${where}`;
  }, [room, problem, location]);

  return (
    <section id="request-service" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Request service
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Which room needs fixing?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-300">
              Tell us the room, the problem and your Dammam location.
              Photos are welcome.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-900 p-7">
            <p className="text-sm font-medium text-sand-100">Room</p>
            <div className="mt-1.5 inline-flex rounded-full border border-sand-100/15 bg-ink-950 p-1">
              {(["bathroom", "kitchen"] as RoomId[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRoom(r)}
                  aria-pressed={room === r}
                  className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                    room === r ? "bg-emerald-700 text-sand-50" : "text-ink-300 hover:text-sand-50"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Problem
              <input
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. sink is leaking under the cabinet"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-sand-100">
              Location in Dammam
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Neighborhood or area"
                className="focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400"
              />
            </label>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-600 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01]"
            >
              WhatsApp for Home Repair
            </a>
            <p className="mt-3 text-xs text-ink-400">
              You can attach photos once WhatsApp opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

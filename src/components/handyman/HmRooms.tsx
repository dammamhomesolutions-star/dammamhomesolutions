"use client";

import { useState } from "react";
import { hmRooms, hmTasks, type HmRoom } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { AddButton, useJobs } from "./HmJobList";

// Floor-plan grid: each room is a button; its tasks appear alongside.
const layout: Record<HmRoom, string> = {
  living: "col-span-2 row-span-1",
  kitchen: "col-span-1",
  bedroom: "col-span-1",
  bathroom: "col-span-1",
  entry: "col-span-1",
  office: "col-span-2",
};

export default function HmRooms() {
  const [room, setRoom] = useState<HmRoom>("living");
  const { jobs } = useJobs();
  const tasks = hmTasks.filter((t) => t.rooms.includes(room));
  const countFor = (r: HmRoom) => jobs.filter((j) => hmTasks.find((t) => t.id === j.id)?.rooms.includes(r)).length;

  return (
    <section id="rooms" aria-labelledby="hm-rooms" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">Room by room</p>
        <h2 id="hm-rooms" className="mt-4 max-w-2xl font-serif text-3xl tracking-tight sm:text-5xl">Walk through the house</h2>
        <p className="mt-4 max-w-xl text-[15px] text-ink-300">Pick a room to see the jobs that usually come up there.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 rounded-[1.75rem] border-2 border-sand-100/20 p-2" role="group" aria-label="Rooms">
              {hmRooms.map((r) => {
                const n = countFor(r.key);
                return (
                  <button
                    key={r.key}
                    type="button"
                    aria-pressed={room === r.key}
                    onClick={() => setRoom(r.key)}
                    className={`focus-ring relative flex min-h-[88px] flex-col justify-between rounded-2xl border p-4 text-left transition-colors ${layout[r.key]} ${room === r.key ? "border-ember-500 bg-ember-500 text-ink-950" : "border-sand-100/15 bg-ink-900 text-sand-50 hover:border-sand-100/40"}`}
                  >
                    <span className="font-semibold">{r.label}</span>
                    <span className={`text-xs ${room === r.key ? "text-ink-800" : "text-ink-400"}`}>{n ? `${n} on your list` : "Tap to see jobs"}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-ink-400">A simplified floor plan.</p>
          </div>
          <ul key={room} className="grid animate-fadeIn content-start gap-2 sm:grid-cols-2 lg:col-span-7" aria-live="polite">
            {tasks.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-3 rounded-2xl bg-ink-900 p-3.5">
                <span className="flex items-center gap-3 text-sm">
                  <HmIcon name={t.icon} className="h-5 w-5 flex-none text-ember-500" />
                  <span><span className="block font-semibold">{t.label}</span><span className="text-xs text-ink-400">{t.verb}</span></span>
                </span>
                <AddButton id={t.id} className="flex-none !bg-sand-50 !text-ink-950 aria-pressed:!bg-ember-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

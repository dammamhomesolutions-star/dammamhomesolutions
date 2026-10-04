"use client";

import { useState } from "react";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

const exampleIds = ["mirror", "curtains", "furniture", "cabinet-repair"];

// "Can you handle this?" — a scripted example conversation that adds the
// mentioned tasks to the list.
export default function HmChat() {
  const { add } = useJobs();
  const [done, setDone] = useState(false);

  return (
    <section aria-labelledby="hm-chat" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Can you handle this?</p>
          <h2 id="hm-chat" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Tell us the whole list — even the small jobs</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">This is how most requests start: a few things, in plain words.</p>
        </div>
        <div className="space-y-4 lg:col-span-7">
          <div className="ml-auto max-w-md rounded-[1.5rem] rounded-br-md bg-ink-950 px-5 py-4 text-sand-50 shadow-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-500">You</p>
            <p className="mt-1">&ldquo;I have a mirror, two curtain rods, a TV unit, and a loose cabinet door.&rdquo;</p>
          </div>
          <div className="max-w-md rounded-[1.5rem] rounded-bl-md bg-sand-100 px-5 py-4 text-ink-900 shadow-sm ring-1 ring-ink-900/10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-700">Dammam Home Solutions</p>
            <p className="mt-1">&ldquo;Those can usually be handled together in one handyman visit — subject to the items, the walls, access and any materials needed.&rdquo;</p>
            <button
              type="button"
              onClick={() => { exampleIds.forEach((id) => add(id, id === "curtains" ? 2 : 1)); setDone(true); }}
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-sand-50"
            >
              <HmIcon name={done ? "check" : "plus"} className="h-4 w-4" />
              {done ? "Added to my job list" : "Add these tasks"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

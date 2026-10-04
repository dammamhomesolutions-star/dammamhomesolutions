"use client";

import { useState } from "react";
import { hmIntents, hmWhere } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

const examples = ["The cabinet door doesn't close.", "I bought curtains but need them installed.", "The mirror needs mounting.", "The new furniture needs assembly.", "There are several small things around the house."];

// For people who don't know the trade name: describe it, and it joins the list.
export default function HmDescribe() {
  const { addCustom } = useJobs();
  const [intent, setIntent] = useState("");
  const [where, setWhere] = useState("");
  const [text, setText] = useState("");
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!text.trim()) return;
    addCustom(`${intent || "Task"}${where ? ` (${where.toLowerCase()})` : ""}: ${text.trim()}`);
    setText("");
    setAdded(true);
  };

  return (
    <section id="describe" aria-labelledby="hm-describe" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Not sure which service?</p>
          <h2 id="hm-describe" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Describe the problem, not the service</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">You don&rsquo;t need to know what it&rsquo;s called. Tell us the whole list — even the small things — in your own words:</p>
          <ul className="mt-5 space-y-2">
            {examples.map((e) => (
              <li key={e} className="rounded-2xl rounded-bl-sm bg-sand-50 px-4 py-2.5 text-sm italic text-ink-700 shadow-sm">&ldquo;{e}&rdquo;</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-[2rem] bg-sand-50 p-6 shadow-sm ring-1 ring-ink-900/10 sm:p-8">
            <fieldset>
              <legend className="text-sm font-semibold text-ink-950">1. What are you trying to do?</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hmIntents.map((o) => (
                  <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-600 ${intent === o ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-ember-600"}`}>
                    <input type="radio" name="hm-intent" checked={intent === o} onChange={() => setIntent(o)} className="sr-only" />{o}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-ink-950">2. Where is it?</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hmWhere.map((o) => (
                  <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-600 ${where === o ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-ember-600"}`}>
                    <input type="radio" name="hm-where" checked={where === o} onChange={() => setWhere(o)} className="sr-only" />{o}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="mt-5 block text-sm font-semibold text-ink-950">
              3. What&rsquo;s happening?
              <textarea value={text} onChange={(e) => { setText(e.target.value); setAdded(false); }} rows={3} placeholder="e.g. the wardrobe door hangs lower than the other one" className="focus-ring mt-2 w-full rounded-xl border border-ink-900/15 bg-sand-50 px-3.5 py-2.5 text-sm font-normal text-ink-950 placeholder:text-ink-400" />
            </label>
            <button type="button" onClick={add} disabled={!text.trim()} className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50 disabled:opacity-40">
              <HmIcon name="plus" className="h-4 w-4" /> Add to my job list
            </button>
            <p className="mt-3 text-sm text-ink-600" aria-live="polite">
              {added ? "Added. Add photos when you send the list — we'll assess the right service." : "Add photos and describe the problem; we'll assess the appropriate service."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

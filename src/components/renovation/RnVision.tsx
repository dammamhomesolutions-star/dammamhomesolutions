"use client";

import { rnLooks, rnPriorities, rnVisionRooms, rnVisionScopes, type RnRoomKey } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Eyebrow } from "./RnUi";

const roomKey: Record<(typeof rnVisionRooms)[number], RnRoomKey> = { Living: "living", Kitchen: "kitchen", Bedroom: "bedroom", Bathroom: "bathroom", Multiple: "multiple" };
const depthLabel: Record<(typeof rnVisionScopes)[number], string> = { Small: "Refresh", Medium: "Partial renovation", Extensive: "Larger renovation", "Not sure": "To be defined together" };

const chip = "focus-ring cursor-pointer select-none border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 has-[:focus-visible]:ring-offset-2";

export default function RnVision() {
  const { look, setLook, priorities, togglePriority, hasRoom, toggleRoom, roomLabels, depth, setDepth } = usePlan();
  const swatch = rnLooks.find((l) => l.key === look)?.swatch ?? ["#ebe4d6", "#ded2ba", "#c4c0b4", "#9a968a"];

  const next =
    !depth && !roomLabels.length
      ? "Make a few choices to see a next step"
      : depth === "To be defined together" || depth === "Larger renovation" || hasRoom("multiple") || roomLabels.length > 2
        ? "Professional assessment on site"
        : depth === "Refresh" && roomLabels.length <= 1
          ? "Photos and a short conversation"
          : "Photos first, then an assessment";

  return (
    <section id="vision" aria-labelledby="rn-vision" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="04">Vision board</Eyebrow>
        <h2 id="rn-vision" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Build your renovation vision</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Four quick choices. They don&rsquo;t commit you to anything — they help us
          understand the direction before we see the home.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-9 lg:col-span-7">
            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">01 · Look</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {rnLooks.map((l) => (
                  <label key={l.key} className={`${chip} flex items-center gap-3 ${look === l.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                    <input type="radio" name="rn-look" value={l.key} checked={look === l.key} onChange={() => setLook(l.key)} className="sr-only" />
                    <span aria-hidden="true" className="flex h-5 w-8 flex-none overflow-hidden">
                      {l.swatch.map((c) => <span key={c} className="flex-1" style={{ background: c }} />)}
                    </span>
                    {l.key}
                  </label>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-500">Moods, not fixed architectural styles — a starting point for the conversation.</p>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">02 · Priority — choose any</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {rnPriorities.map((p) => {
                  const on = priorities.includes(p);
                  return (
                    <label key={p} className={`${chip} ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                      <input type="checkbox" checked={on} onChange={() => togglePriority(p)} className="sr-only" />
                      {p}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">03 · Rooms</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {rnVisionRooms.map((r) => {
                  const on = hasRoom(roomKey[r]);
                  return (
                    <label key={r} className={`${chip} ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                      <input type="checkbox" checked={on} onChange={() => toggleRoom(roomKey[r])} className="sr-only" />
                      {r}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-ink-500">Linked to the floor plan above — rooms you add there appear here too.</p>
            </fieldset>

            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">04 · Scope</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {rnVisionScopes.map((s) => {
                  const on = depth === depthLabel[s];
                  return (
                    <label key={s} className={`${chip} text-center ${on ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-950/15 text-ink-900 hover:border-ink-950/50"}`}>
                      <input type="radio" name="rn-depth" checked={on} onChange={() => setDepth(depthLabel[s])} className="sr-only" />
                      {s}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <aside aria-label="Your renovation vision" className="lg:col-span-5">
            <div className="sticky top-24 bg-ink-950 text-sand-50 shadow-[0_40px_80px_-40px_rgba(20,24,31,0.6)]">
              <div aria-hidden="true" className="flex h-20">
                {swatch.map((c, i) => <span key={i} className="flex-1 transition-colors duration-500" style={{ background: c }} />)}
              </div>
              <div className="p-6 sm:p-8" aria-live="polite">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500">Your renovation vision</p>
                <dl className="mt-6 divide-y divide-sand-50/10 border-y border-sand-50/10">
                  {[
                    ["Style", look ?? "—"],
                    ["Priority", priorities.length ? priorities.join(" + ") : "—"],
                    ["Rooms", roomLabels.length ? roomLabels.join(" + ") : "—"],
                    ["Scope", depth ?? "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">{k}</dt>
                      <dd className="font-serif text-lg leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-sand-300">Next step</p>
                <p className="mt-1 font-serif text-xl text-ember-500">{next}</p>
                <a href="#request" className="focus-ring mt-6 inline-flex items-center gap-2 border border-sand-50/40 px-5 py-3 text-sm font-semibold hover:bg-sand-50/10">
                  Use this in my request
                </a>
                <p className="mt-4 text-xs leading-relaxed text-sand-300">No price is generated here — cost depends on the actual scope.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

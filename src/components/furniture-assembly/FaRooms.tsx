"use client";

import { useState } from "react";
import { faPlacement, faRooms } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

const sizes = ["Small (chair, side table)", "Medium (desk, dresser)", "Large (wardrobe, bed)", "Very large / modular"];
const routes = ["Narrow doorway", "Stairs only", "Lift available", "Tight hallway or turn", "Ground floor", "Furniture already in the room"];

function Chips({ options, value, onToggle, multi }: { options: string[]; value: string[]; onToggle: (v: string) => void; multi?: boolean }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <label
            key={o}
            className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600 ${
              on ? "border-walnut-800 bg-walnut-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-walnut-600"
            }`}
          >
            <input type={multi ? "checkbox" : "radio"} name={multi ? undefined : "fa-size"} checked={on} onChange={() => onToggle(o)} className="sr-only" />
            {o}
          </label>
        );
      })}
    </div>
  );
}

export default function FaRooms() {
  const [room, setRoom] = useState("bedroom");
  const [size, setSize] = useState("");
  const [route, setRoute] = useState<string[]>([]);
  const r = faRooms.find((x) => x.key === room)!;

  const big = size.startsWith("Large") || size.startsWith("Very");
  const notes: string[] = [];
  if (big) notes.push("Large items are best assembled in the room where they'll stand — boxed panels travel through doors far more easily than finished furniture.");
  if (size.startsWith("Very")) notes.push("Modular pieces may need a plan for the order sections go in, and two people to handle.");
  if (route.includes("Narrow doorway") || route.includes("Tight hallway or turn")) notes.push("Measure the doorway and the turn, and compare with the box size — the assembled size may not fit through at all.");
  if (route.includes("Stairs only")) notes.push("Stairs mean carrying boxes up by hand; tell us the floor so we bring enough help.");
  if (route.includes("Lift available")) notes.push("Check the lift's door and depth against the largest box.");
  if (route.includes("Furniture already in the room")) notes.push("Good — assembly can happen in place. Clear enough floor to lay out the panels.");
  if (route.includes("Ground floor") && !big) notes.push("Ground-floor access with a smaller item is usually straightforward.");

  return (
    <section id="rooms" aria-label="Room, access and placement" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-walnut-700">Placement</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where will the furniture go?</h2>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a room">
              {faRooms.map((x) => (
                <button
                  key={x.key}
                  type="button"
                  aria-pressed={room === x.key}
                  onClick={() => setRoom(x.key)}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    room === x.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-walnut-600"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
            <div key={room} className="mt-5 animate-fadeIn rounded-2xl bg-walnut-100/60 p-5" aria-live="polite">
              <h3 className="font-semibold text-ink-950">{r.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">{r.note}</p>
            </div>
            <h3 className="mt-8 font-serif text-xl text-ink-950">Think about final placement before assembly</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {faPlacement.map((p) => <li key={p} className="rounded-full border border-ink-900/10 px-3 py-1 text-xs text-ink-700">{p}</li>)}
            </ul>
            <p className="mt-2 text-xs text-ink-500">Follow any clearances the manufacturer specifies.</p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-900/10 bg-walnut-100/40 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <FaIcon name="door" className="h-7 w-7 text-walnut-700" />
                <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Will it fit where you want it?</h2>
              </div>
              <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-ink-950">Furniture size</legend>
                <Chips options={sizes} value={[size]} onToggle={setSize} />
              </fieldset>
              <fieldset className="mt-5">
                <legend className="text-sm font-semibold text-ink-950">Access route (pick any)</legend>
                <Chips multi options={routes} value={route} onToggle={(v) => setRoute((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]))} />
              </fieldset>
              <div className="mt-6 rounded-xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
                {notes.length ? (
                  <ul className="space-y-2">
                    {notes.map((n) => (
                      <li key={n} className="flex gap-2 text-sm leading-relaxed text-ink-300"><FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-300" />{n}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-ink-300">Choose a size and access route to see what to check.</p>
                )}
                <p className="mt-4 border-t border-sand-100/10 pt-3 text-xs text-ink-400">
                  Assembly covers putting the furniture together where it will
                  stand. Carrying very heavy items through difficult access, or
                  moving between homes, is quoted as moving work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

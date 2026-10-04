import Link from "next/link";
import BwIcon from "./BwIcon";

const gate = ["Cracks at the opening corners", "Damaged corners and piers", "Impact damage", "Worn finishes", "Movement around the opening", "Damaged gate-side masonry"];
const local = [
  { t: "Heat", b: "Exterior surfaces get very hot in summer, and the daily heat cycle moves plaster and coatings." },
  { t: "Dust and sand", b: "Wind-blown sand weathers finishes and settles on wall tops and ledges." },
  { t: "Irrigation", b: "Garden sprinklers and drip lines often wet the same section of wall every day." },
  { t: "Exposure", b: "Boundary walls take sun and weather on both faces, with nothing to shelter them." },
];
const residential = [
  { t: "Villas", items: ["Perimeter walls", "Entrance walls", "Garden walls", "Exterior plaster"] },
  { t: "Townhouses", items: ["Shared and exterior walls", "Entrance areas", "Finish deterioration"] },
  { t: "Private homes", items: ["Garden boundaries", "Side walls", "Outdoor structures"] },
  { t: "Renovations", items: ["Pre-paint repairs", "Exterior refresh", "Preparing damaged walls"] },
];
const commercial = ["Offices", "Retail", "Warehouses", "Apartment buildings", "Compounds", "Commercial boundaries"];

export default function BwContext() {
  return (
    <section aria-label="Gates, local conditions, residential and commercial walls" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <BwIcon name="gate" className="h-8 w-8 text-clay-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Wall damage around gates &amp; openings</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Openings concentrate stress, and gates add impact and vibration.
              We repair the wall and piers around them; the gate itself is
              handled through{" "}
              <Link href="/gate-garage-door-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-clay-600 decoration-2 underline-offset-4">gate &amp; garage door repair</Link>.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-1.5">{gate.map((g) => <li key={g} className="flex gap-2 text-sm text-ink-800"><BwIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-700" />{g}</li>)}</ul>
          </div>
          <div className="lg:col-span-6">
            <BwIcon name="sun" className="h-8 w-8 text-clay-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Outdoor walls in Dammam properties</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {local.map((l) => (
                <li key={l.t} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <h3 className="font-semibold text-ink-950">{l.t}</h3>
                  <p className="mt-1 text-sm text-ink-600">{l.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Homes</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {residential.map((r) => (
                <div key={r.t} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
                  <h3 className="flex items-center gap-2 font-semibold text-ink-950"><BwIcon name="home" className="h-5 w-5 text-clay-700" />{r.t}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-600">{r.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <BwIcon name="building" className="h-8 w-8 text-clay-300" />
              <h2 className="mt-3 font-serif text-3xl tracking-tight">Commercial &amp; property maintenance</h2>
              <p className="mt-3 text-sm text-ink-300">{commercial.join(" · ")}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">Long wall runs, appearance for visitors and tenants, access, working around occupants and keeping disruption low — planned as part of a maintenance programme where that helps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

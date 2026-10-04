import LtIcon from "./LtIcon";

const residential = ["Fixture replacement", "Room upgrades", "Decorative fixtures", "Kitchen, bedroom and bathroom lighting", "Entrance and outdoor lighting", "Multi-room projects"];
const commercial = ["Offices and reception areas", "Retail shops", "Restaurants and cafés", "Common areas", "Small commercial properties and warehouses"];
const commercialNeeds = ["Task light for staff", "Consistent illumination", "Customer experience", "Durable fixtures", "Maintenance access", "Zoned controls", "Work planned around opening hours"];
const local = [
  { t: "Heat and sun", b: "Outdoor fixtures take strong sun and summer heat; choose ones made for it." },
  { t: "Dust", b: "Dust builds up on outdoor fittings and lenses, so maintenance access matters." },
  { t: "Villa ceilings", b: "Double-height entrances and gypsum false ceilings are common — both affect mounting and layout." },
  { t: "Renovations", b: "The best moment to add points and switching is before ceilings are closed." },
];

export default function LtProperties() {
  return (
    <section aria-label="Residential and commercial lighting" className="border-b border-ink-900/10 bg-ember-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <LtIcon name="home" className="h-7 w-7 text-ember-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Lighting for villas, apartments &amp; homes</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {residential.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-ink-800"><LtIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-700" />{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <LtIcon name="building" className="h-7 w-7 text-ember-500" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Lighting installation for commercial spaces</h2>
            <p className="mt-3 text-sm text-ink-300">{commercial.join(" · ")}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {commercialNeeds.map((n) => (
                <li key={n} className="rounded-full bg-sand-100/10 px-3 py-1.5 text-xs text-sand-100">{n}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Lighting in Dammam homes</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {local.map((l) => (
              <li key={l.t} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
                <h3 className="font-semibold text-ink-950">{l.t}</h3>
                <p className="mt-1 text-sm text-ink-600">{l.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

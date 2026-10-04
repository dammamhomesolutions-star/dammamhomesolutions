import AiIcon from "./AiIcon";
import type { AiIconName } from "@/lib/ac-installation";

const blocks: { title: string; icon: AiIconName; intro: string; points: string[] }[] = [
  {
    title: "AC installation for villas in Dammam",
    icon: "villa",
    intro: "Villas usually mean several units planned together, not one at a time.",
    points: ["Multiple rooms and units", "Different sun exposure per room", "Large living spaces and majlis", "Bedrooms upstairs under the roof", "Kitchens with extra heat", "Where several outdoor units can go", "Reusing existing infrastructure"],
  },
  {
    title: "AC installation for apartments",
    icon: "apartment",
    intro: "Space and building rules shape what's possible.",
    points: ["Limited outdoor space", "Building or landlord requirements", "Existing wall openings", "Drainage routes", "Access for equipment", "Noise for neighbours"],
  },
  {
    title: "Commercial AC installation in Dammam",
    icon: "building",
    intro: "Offices, shops, restaurants, clinics and warehouses.",
    points: ["Occupancy and opening hours", "Cooling zones", "Equipment placement", "Access and working hours", "Keeping disruption low", "Maintenance access later"],
  },
];

const climate = [
  { title: "High outdoor temperatures", body: "Outdoor units work hardest in summer, so they need space to reject heat." },
  { title: "Solar heat gain", body: "Sun on roofs and west-facing walls adds a lot of heat to some rooms." },
  { title: "Building orientation", body: "Two identical rooms on different sides of a villa can need different cooling." },
  { title: "Insulation", body: "Top-floor rooms under an uninsulated roof often need more capacity." },
  { title: "Occupancy & windows", body: "People, equipment and glass all add to the cooling load." },
];

export default function AiProperties() {
  return (
    <section aria-label="Villas, apartments, commercial and Dammam climate" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((b) => (
            <article key={b.title} className="group rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <AiIcon name={b.icon} />
              </span>
              <h2 className="mt-5 font-serif text-2xl tracking-tight text-ink-950">{b.title}</h2>
              <p className="mt-2 text-sm text-ink-600">{b.intro}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-800">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 flex-none bg-teal-600" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-ember-700">Local conditions</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">AC installation in Dammam&rsquo;s climate</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Equipment selection should be based on the property, the
              required capacity, the manufacturer&rsquo;s specifications and
              local operating conditions — not on one brand or one rule of
              thumb.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              We install units supplied by you, or supply suitable equipment
              ourselves. We don&rsquo;t represent a single brand.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {climate.map((c) => (
              <li key={c.title} className="group flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ember-100 text-ember-700">
                  <AiIcon name="thermometer" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

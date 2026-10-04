import FsIcon from "./FsIcon";

const homeQuestions: { q: string; a: string }[] = [
  {
    q: "Can my furniture be saved?",
    a: "Some of it, often. Hard furniture with light residue is usually easier than sofas, mattresses or anything close to the fire. Each piece is looked at individually.",
  },
  {
    q: "Do I need to replace the whole room?",
    a: "Not necessarily. Burned or soaked materials are usually replaced; lightly affected surfaces may only need cleaning and refinishing.",
  },
  {
    q: "Will the smoke smell disappear?",
    a: "It can usually be reduced a lot, sometimes completely, once the materials holding it are treated or removed. Results depend on how far the smoke got in.",
  },
  {
    q: "Can damaged walls be repaired?",
    a: "Yes, in most cases — by cleaning, replacing damaged gypsum sections, then finishing and painting.",
  },
  {
    q: "Can the affected room be isolated, and the rest of the house stay usable?",
    a: "Often, yes, if the damage is contained and the property is safe. Whether that's realistic is decided during the assessment.",
  },
];

const homeSpaces = ["Villas", "Apartments", "Townhouses", "Kitchens", "Bedrooms", "Living rooms", "Garages", "Storage areas"];
const businessSpaces = ["Offices", "Retail shops", "Restaurants", "Warehouses", "Clinics", "Workshops", "Commercial buildings"];

const businessFocus = [
  "Securing affected areas",
  "Cleaning smoke and soot where applicable",
  "Protecting unaffected areas so they stay usable",
  "Assessing stock, furniture and equipment",
  "Repairs to ceilings, walls, floors and fittings",
  "Coordinating restoration stages around your operations",
];

export default function FsPropertyTypes() {
  return (
    <section aria-label="Homes and businesses" className="border-b border-ink-900/10 bg-sand-100/60">
      <div className="container-edge grid lg:grid-cols-2">
        {/* Residential */}
        <div className="py-20 sm:py-24 lg:pr-12">
          <div className="flex items-center gap-3 text-ember-700">
            <FsIcon name="house" />
            <p className="section-label !text-ember-700">Residential</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">
            Fire &amp; smoke restoration for homes in Dammam
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Home spaces we restore">
            {homeSpaces.map((s) => (
              <li key={s} className="rounded-full border border-ink-900/15 px-3 py-1 text-xs text-ink-700">{s}</li>
            ))}
          </ul>
          <div className="mt-8 space-y-6">
            {homeQuestions.map((item) => (
              <div key={item.q}>
                <h3 className="text-base font-semibold text-ink-950">{item.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial */}
        <div className="border-t border-ink-900/10 py-20 sm:py-24 lg:border-l lg:border-t-0 lg:pl-12">
          <div className="flex items-center gap-3 text-ember-700">
            <FsIcon name="building" />
            <p className="section-label !text-ember-700">Commercial</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">
            Fire &amp; smoke restoration for Dammam businesses
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Business premises we restore">
            {businessSpaces.map((s) => (
              <li key={s} className="rounded-full border border-ink-900/15 px-3 py-1 text-xs text-ink-700">{s}</li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-700">
            For a business, the damage isn&rsquo;t the only cost —{" "}
            <strong className="font-semibold text-ink-950">downtime</strong> is
            too. A small kitchen fire in a restaurant or a smoke-affected
            storeroom in a shop can stop trading even when most of the
            premises is untouched. The aim is to separate what is damaged
            from what isn&rsquo;t, and plan the work around that.
          </p>
          <ul className="mt-6 space-y-3">
            {businessFocus.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink-800">
                <FsIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-600">
            Timelines depend on the extent of damage and what has to be
            rebuilt, so reopening dates are discussed after the assessment
            rather than promised upfront.
          </p>
        </div>
      </div>
    </section>
  );
}

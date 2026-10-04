import PcIcon from "./PcIcon";

const homeAreas = ["Kitchen", "Bathrooms", "Bedrooms", "Garages", "Storage", "Gardens", "Outdoor areas"];

const homeConcerns: { q: string; a: string }[] = [
  { q: "Children and pets", a: "Tell us who lives in the home. Precautions and re-entry timing are explained for the treatment used." },
  { q: "Food and kitchen items", a: "You'll be told what to store away or cover before treatment." },
  { q: "Sleeping areas and furniture", a: "Beds and sofas are inspected closely for bed bugs and treated only where needed." },
  { q: "Odor and re-entry", a: "Some treatments have a smell for a while. Ventilation and when to return are part of the instructions." },
];

const businessTypes = ["Offices", "Restaurants", "Shops", "Warehouses", "Clinics", "Hospitality", "Commercial buildings", "Property managers"];

const businessFocus = [
  "Pest sightings in front of customers or staff",
  "Hygiene in food preparation and storage areas",
  "Waste management and bin areas",
  "Stock and storage rooms",
  "Deliveries bringing pests in",
  "Preventive monitoring between visits",
];

export default function PcPropertyTypes() {
  return (
    <section aria-label="Homes and businesses" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid lg:grid-cols-2">
        <div className="py-20 sm:py-24 lg:pr-12">
          <div className="flex items-center gap-3 text-moss-700">
            <PcIcon name="house" />
            <p className="section-label !text-moss-700">Residential</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Pest control for homes, villas and apartments</h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas covered in homes">
            {homeAreas.map((a) => (
              <li key={a} className="rounded-full border border-ink-900/15 px-3 py-1 text-xs text-ink-700">{a}</li>
            ))}
          </ul>
          <dl className="mt-8 space-y-5">
            {homeConcerns.map((c) => (
              <div key={c.q}>
                <dt className="text-base font-semibold text-ink-950">{c.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-600">{c.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-ink-600">
            In apartment buildings, pests often travel between units through
            shared walls, drains and service shafts. If neighbours are also
            affected, treating one unit alone may not be enough.
          </p>
        </div>

        <div className="border-t border-ink-900/10 py-20 sm:py-24 lg:border-l lg:border-t-0 lg:pl-12">
          <div className="flex items-center gap-3 text-moss-700">
            <PcIcon name="building" />
            <p className="section-label !text-moss-700">Commercial</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Pest control for Dammam businesses</h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Business types">
            {businessTypes.map((b) => (
              <li key={b} className="rounded-full border border-ink-900/15 px-3 py-1 text-xs text-ink-700">{b}</li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-700">
            For a business, a pest problem is also a customer-experience and
            reputation problem. One sighting in a dining area or shop floor
            can matter more than the pest itself.
          </p>
          <ul className="mt-6 space-y-3">
            {businessFocus.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink-800">
                <PcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-moss-100 p-5">
            <h3 className="flex items-center gap-2 text-base font-semibold text-moss-900">
              <PcIcon name="calendar" className="h-5 w-5" />
              Recurring service plans
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-moss-900">
              We offer scheduled visits for businesses — inspection,
              treatment where needed, and monitoring of problem areas. The
              visit frequency is set after an initial inspection, based on the
              type of business and the activity found.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

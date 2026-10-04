import ScIcon from "./ScIcon";

const homeQs: { q: string; a: string }[] = [
  { q: "Can I use the sofa straight away?", a: "Usually not until it's dry. Low-moisture cleaning shortens the wait; the technician will tell you when it's ready." },
  { q: "Will the carpet stay wet?", a: "It will be damp for a while. Extraction removes most of the moisture, and airflow speeds up the rest." },
  { q: "Can old stains be removed?", a: "Some can, some lighten, and some are permanent. We'll say which before we start." },
  { q: "Will the fabric colour change?", a: "Colour is tested first to reduce the risk. Cleaning often brightens colours that were dulled by soil." },
];

const familyCauses = ["Food spills", "Children's mess", "Everyday traffic", "Dust", "Pet-related dirt", "Frequent use"];

const commercial = ["High-traffic areas and entrances", "Scheduling around opening hours", "Access and security arrangements", "Drying before staff and customers return", "Keeping disruption to a minimum"];

export default function ScHomeCommercial() {
  return (
    <section aria-label="Homes and commercial spaces" className="border-b border-ink-900/10 bg-sand-100/60">
      <div className="container-edge grid lg:grid-cols-2">
        <div className="py-20 sm:py-24 lg:pr-12">
          <div className="flex items-center gap-3 text-glass-700">
            <ScIcon name="home" />
            <p className="section-label !text-glass-700">Residential</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Professional cleaning for homes and villas</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Sofas, chairs, carpets and rugs in living rooms, bedrooms, family
            rooms and guest rooms. In busy family homes, the usual causes are:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {familyCauses.map((c) => (
              <li key={c} className="rounded-full border border-ink-900/15 bg-sand-50 px-3 py-1 text-xs text-ink-700">{c}</li>
            ))}
          </ul>
          <dl className="mt-8 space-y-5">
            {homeQs.map((x) => (
              <div key={x.q}>
                <dt className="text-base font-semibold text-ink-950">{x.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-600">{x.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="border-t border-ink-900/10 py-20 sm:py-24 lg:border-l lg:border-t-0 lg:pl-12">
          <div className="flex items-center gap-3 text-glass-700">
            <ScIcon name="office" />
            <p className="section-label !text-glass-700">Commercial</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Commercial carpet cleaning in Dammam</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Offices, hotels, shops, waiting areas and other commercial
            properties. Carpets in these spaces take far more foot traffic
            than at home, and the work has to fit around the business.
          </p>
          <ul className="mt-6 space-y-3">
            {commercial.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-ink-800">
                <ScIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

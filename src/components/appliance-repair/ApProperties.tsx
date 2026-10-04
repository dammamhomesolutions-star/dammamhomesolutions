import ApIcon from "./ApIcon";

export default function ApProperties() {
  return (
    <section aria-labelledby="ap-props" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Who we help</p>
          <h2 id="ap-props" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Homes, rentals and commercial kitchens</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6">
            <ApIcon name="home" className="h-7 w-7 text-copper-700" />
            <h3 className="mt-3 font-serif text-xl text-ink-950">Homeowners &amp; tenants</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Villas and apartments. Tenants: check with your landlord who
              arranges and pays for appliance repairs before booking.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6">
            <ApIcon name="checklist" className="h-7 w-7 text-copper-700" />
            <h3 className="mt-3 font-serif text-xl text-ink-950">Landlords &amp; property managers</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Repairs on furnished rentals and between tenancies, with a clear
              note of what was found and done for your records.
            </p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <ApIcon name="building" className="h-7 w-7 text-copper-300" />
            <h3 className="mt-3 font-serif text-xl">Commercial appliances</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
              Restaurants, cafés, offices, staff accommodation and laundries.
              Tell us the equipment, model and how it&rsquo;s used so we can
              confirm whether we can help and discuss a visit time that suits your
              operating hours.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-steel-100 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl text-ink-950">Appliances in Dammam&rsquo;s climate</h3>
          </div>
          <ul className="grid gap-3 text-sm leading-relaxed text-ink-700 sm:grid-cols-3 lg:col-span-8">
            <li><span className="font-semibold text-ink-950">Heat.</span> Fridges and freezers work harder in hot kitchens and summer months — keep space around them for ventilation.</li>
            <li><span className="font-semibold text-ink-950">Dust.</span> Dust on condenser coils and vents reduces cooling and dryer airflow.</li>
            <li><span className="font-semibold text-ink-950">Hard water.</span> Scale can build up in washing machines and dishwashers over time.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

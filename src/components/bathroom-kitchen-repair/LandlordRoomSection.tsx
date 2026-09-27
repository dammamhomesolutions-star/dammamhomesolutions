const bathroomJobs = ["Leaking fixture", "Damaged tile", "Door issue"];
const kitchenJobs = ["Cabinet hinge", "Sink", "Drawer", "Wall repair"];

export default function LandlordRoomSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-emerald-800">Landlords &amp; property managers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            One repair request can contain several small jobs.
          </h2>
          <p className="mt-4 text-ink-700">
            Between tenants, or during general upkeep, bathroom and kitchen
            issues tend to show up together. Send a combined repair list
            rather than handling each one separately.
          </p>
          <a
            href="/property-maintenance/"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Discuss Property Maintenance
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-zinc-100/70 p-6">
            <h3 className="font-serif text-lg text-ink-950">Bathroom</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              {bathroomJobs.map((j) => (
                <li key={j} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
                  {j}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-zinc-100/70 p-6">
            <h3 className="font-serif text-lg text-ink-950">Kitchen</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              {kitchenJobs.map((j) => (
                <li key={j} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
                  {j}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const canHelp = [
  "Household fixtures and fittings",
  "Loose hardware and small adjustments",
  "Minor wall and surface repairs",
  "Doors, handles and cabinets",
  "Small property maintenance jobs",
];

export default function ServiceBoundariesSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-label text-indigo-700">What we can help with</p>
          <ul className="mt-5 space-y-2.5">
            {canHelp.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-ink-800">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label text-indigo-700">When another service is more appropriate</p>
          <p className="mt-5 leading-relaxed text-ink-700">
            Major construction, structural work and large renovations sit
            outside what a general repair visit covers. Where a problem
            is clearly one trade — an{" "}
            <a href="/ac-repair/" className="underline decoration-ink-900/20 underline-offset-4 hover:decoration-indigo-700">
              AC fault
            </a>
            , an{" "}
            <a href="/electrical-repair/" className="underline decoration-ink-900/20 underline-offset-4 hover:decoration-indigo-700">
              electrical issue
            </a>
            , or{" "}
            <a href="/waterproofing/" className="underline decoration-ink-900/20 underline-offset-4 hover:decoration-indigo-700">
              moisture ingress
            </a>{" "}
            — we&rsquo;ll point you to the right specialist page rather
            than treating it as a generic job.
          </p>
        </div>
      </div>
    </section>
  );
}

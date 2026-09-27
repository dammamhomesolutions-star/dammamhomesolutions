const prepWork = [
  "Cleaning",
  "Removing loose material",
  "Filling appropriate holes",
  "Repairing minor surface damage",
  "Smoothing",
  "Preparing the surface",
  "Appropriate priming, where needed",
];

export default function GoodPaintStartsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label">Before the color goes on</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Good paint starts before the paint goes on.
          </h2>
          <p className="mt-4 text-ink-700">
            There&rsquo;s a difference between preparing a surface and
            finishing it. The condition of the surface affects how the
            finish turns out and how long it holds up.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            Not every wall needs the same preparation, or primer at all —
            it depends on the surface in front of us.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink-900">Preparation can include</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {prepWork.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-ink-900/10 bg-stone-100/60 px-4 py-3 text-sm text-ink-700">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

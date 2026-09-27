const covered = [
  "Minor household repairs",
  "Fixtures and fittings",
  "Loose hardware",
  "Small wall repairs",
  "Doors and handles",
  "Cabinets and drawers",
  "Minor tile / surface issues",
  "Household adjustments",
  "Small property maintenance jobs",
  "Other practical repairs, depending on the job",
];

export default function DefineServiceSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label text-indigo-700">What this covers</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          For the repairs that don&rsquo;t need a whole project.
        </h2>
        <p className="mt-4 text-ink-700">
          General home repair covers practical household issues rather
          than large-scale work:
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {covered.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg bg-sand-50 px-4 py-3 text-sm text-ink-800">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const localizedProblems = [
  "One leaking fixture",
  "A damaged tile",
  "A cabinet hinge",
  "A peeling surface",
  "A faulty drain",
  "A loose handle",
];

export default function RepairBeforeRenovation() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-emerald-800">Repair vs. renovation</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Not every tired room needs a renovation.
        </h2>
        <p className="mt-4 text-ink-700">
          Sometimes the problem is localized rather than affecting the
          whole room:
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {localizedProblems.map((p) => (
            <li key={p} className="flex gap-3 rounded-lg border border-ink-900/10 bg-zinc-100/70 px-4 py-3 text-sm text-ink-700">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-ink-700">
          A targeted repair may be more appropriate than treating the
          entire room as a renovation project. That&rsquo;s not to say
          repair is always cheaper, or that renovation is the wrong call
          — just that it&rsquo;s worth knowing the difference before
          deciding which one you need.
        </p>
      </div>
    </section>
  );
}

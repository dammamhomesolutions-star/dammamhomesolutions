const steps = [
  "What is damaged?",
  "Tile, grout, or both",
  "Condition of the affected area",
  "Can the affected area be repaired?",
  "Does a tile or component need replacing?",
  "Does the surrounding surface also need attention?",
];

export default function TrRepairOrReplace() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-xl">
        <p className="section-label !text-rust-700">Repair or replace?</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Repair the surface. Replace the damaged part.
        </h2>
        <p className="mt-4 text-ink-600">
          We don&rsquo;t default to replacement. The right approach follows
          from a few questions.
        </p>

        <ol className="mt-10 border-l border-ink-900/10 pl-8">
          {steps.map((step, i) => (
            <li key={step} className="relative pb-7">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 border-rust-600 bg-sand-50"
              />
              <p className="text-sm text-ink-800">{step}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
          <p className="font-medium text-ink-950">
            Assessment determines the appropriate repair approach.
          </p>
          <p className="mt-1.5 text-sm text-ink-600">
            No fixed promises up front — it depends on what&rsquo;s found.
          </p>
        </div>
      </div>
    </section>
  );
}

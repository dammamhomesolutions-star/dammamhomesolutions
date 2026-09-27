const steps = [
  "What is happening?",
  "Can the existing item be repaired or adjusted?",
  "Is the damaged component replaceable?",
  "Would replacement make more practical sense?",
];

export default function RepairOrReplaceFlow() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-indigo-700">A practical way to think about it</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Repair first. Replace when it makes sense.
        </h2>
        <p className="mt-4 text-ink-700">
          Some household problems can be solved through adjustment,
          repair, replacing a small component, replacing a fixture, or a
          surface repair — not every case points to the same answer.
        </p>

        <ol className="relative mt-10 border-l border-ink-900/15 pl-8">
          {steps.map((step, i) => (
            <li key={step} className="relative pb-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full border border-indigo-700 bg-sand-50 text-xs font-semibold text-indigo-800">
                {i + 1}
              </span>
              <p className="text-ink-800">{step}</p>
            </li>
          ))}
        </ol>

        <p className="mt-4 text-sm text-ink-500">
          The right answer depends on the condition of the item and the
          actual job — not a fixed rule.
        </p>
      </div>
    </section>
  );
}

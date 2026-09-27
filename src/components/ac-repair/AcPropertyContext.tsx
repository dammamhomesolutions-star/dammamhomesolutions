const contexts = [
  "Apartments",
  "Villas",
  "Family homes",
  "Rental properties",
  "Residential buildings",
];

export default function AcPropertyContext() {
  return (
    <section className="border-y border-ink-900/10 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-sky-700">Property context</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Different homes. Different AC problems.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            An AC problem in a villa with several split units isn&rsquo;t
            quite the same as one in a single-unit apartment. Tell us about
            the property along with the symptom — it helps us understand
            what we&rsquo;re walking into.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {contexts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink-900/15 bg-sand-100/70 px-4 py-2 text-sm text-ink-700"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

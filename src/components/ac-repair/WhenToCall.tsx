const situations = [
  "Water repeatedly appearing around the unit",
  "Unusual electrical behavior",
  "A burning smell",
  "Repeated shutdowns",
  "Sudden loss of cooling",
  "Unusual mechanical noise",
];

export default function WhenToCall() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="border-l-2 border-rust-500 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
            Worth acting on early
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Some AC problems are better dealt with early.
          </h2>
          <ul className="mt-6 space-y-2.5 text-[15px] text-ink-300">
            {situations.map((s) => (
              <li key={s} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-500" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-ink-900 p-7">
          <p className="text-sm font-semibold text-sand-50">
            If it looks electrical
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            If you notice a burning smell or anything that seems electrical,
            switch the unit off at the breaker if you can do so safely, and
            avoid using it again until it&rsquo;s been checked. This isn&rsquo;t
            something to work around — it&rsquo;s worth a professional look
            before the AC is switched back on.
          </p>
        </div>
      </div>
    </section>
  );
}

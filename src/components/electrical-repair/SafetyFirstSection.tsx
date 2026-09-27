const situations = [
  "A burning smell",
  "Smoke",
  "Visible sparking",
  "Damaged electrical equipment",
  "Exposed wiring",
  "Repeated breaker trips",
  "Heat around a socket or switch",
];

export default function SafetyFirstSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label text-blue-700">Worth knowing first</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Some electrical problems are not DIY problems.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Most electrical faults are perfectly safe to describe and wait
            on. A smaller number are worth treating differently — not out
            of alarm, just good sense.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            If water is involved near an electrical point, that&rsquo;s
            worth treating separately too — see our{" "}
            <a
              href="/plumbing-repair/"
              className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-blue-600"
            >
              plumbing and water-leak repair
            </a>{" "}
            service.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-sand-100/70 p-7">
          <p className="text-sm font-semibold text-ink-900">
            If you notice any of the following, avoid interacting with
            that electrical point and arrange a professional look:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
            {situations.map((s) => (
              <li key={s} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

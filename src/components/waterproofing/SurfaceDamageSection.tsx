const effects = ["Damaged paint", "Peeling finish", "Damp-looking surfaces", "Damaged plaster or finishes"];

export default function SurfaceDamageSection() {
  return (
    <section className="bg-stone-100/70 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label text-cyan-800">Beyond the source</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Water can leave more than a stain.
          </h2>
          <p className="mt-4 text-ink-700">
            Depending on how long moisture has been reaching a surface, it
            can leave behind more than just a mark — without this meaning
            the property has suffered structural damage.
          </p>
        </div>

        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {effects.map((e) => (
              <li key={e} className="rounded-lg border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm text-ink-700">
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-600">
            Once the source is addressed, affected surfaces may need
            separate restoration — see our{" "}
            <a href="/painting-wall-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-cyan-700">
              painting &amp; wall repair
            </a>{" "}
            service.
          </p>
        </div>
      </div>
    </section>
  );
}

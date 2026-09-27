const factors = ["Surface condition", "Moisture", "Previous coating", "Inadequate preparation", "Environmental exposure"];
const sequence = ["Peeling surface", "Preparation", "Repair", "Finish"];

export default function PeelingPaintSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label">Peeling paint</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            If the paint keeps coming off, repainting may not solve the
            problem.
          </h2>
          <p className="mt-4 text-ink-700">
            Possible contributing factors can include:
          </p>
          <ul className="mt-4 space-y-2">
            {factors.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] text-ink-700">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-500">
            When moisture may be involved, painting over it isn&rsquo;t
            usually the fix — see our{" "}
            <a href="/waterproofing/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-rust-600">
              waterproofing
            </a>{" "}
            service.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-stone-100/60 p-7">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {sequence.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2 text-sm text-ink-800">
                  {step}
                </span>
                {i < sequence.length - 1 && (
                  <span aria-hidden="true" className="text-rust-600">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

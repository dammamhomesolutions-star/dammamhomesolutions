export default function DammamLocal() {
  return (
    <section id="dammam" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
            Local to Dammam
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Built around properties in Dammam.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-300">
            Dammam&rsquo;s residential properties — villas, apartments and
            family homes — each come with their own layout, plumbing and
            electrical setup, and maintenance history. Rental properties and
            residential buildings often add landlord and tenant
            considerations on top of that. We work with what&rsquo;s
            actually in front of us, rather than a standard checklist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-sand-100/10 sm:grid-cols-3 lg:grid-cols-2">
          {["Villas", "Apartments", "Family homes", "Rental properties", "Residential buildings", "Commercial properties"].map(
            (label) => (
              <div key={label} className="bg-ink-900 px-5 py-6">
                <p className="text-sm text-ink-300">{label}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

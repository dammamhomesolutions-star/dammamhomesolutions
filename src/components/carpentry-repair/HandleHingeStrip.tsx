const items = [
  { label: "Handle", body: "Loose, disconnected, or just past its best." },
  { label: "Hinge", body: "Squeaking, sagging, or visibly worn." },
  { label: "Latch", body: "Not catching, or catching unevenly." },
  { label: "Lock", body: "Stiff, inconsistent, or not turning properly." },
];

export default function HandleHingeStrip() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-amber-800">Hardware</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Sometimes the smallest hardware causes the biggest annoyance.
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="bg-sand-50 p-6">
              <h3 className="font-serif text-lg text-ink-950">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const examples = [
  {
    see: "“The door is difficult to close.”",
    understand: ["Hinge alignment", "Frame alignment", "Latch", "Handle", "Lock", "General door adjustment"],
  },
  {
    see: "“There is a wet patch on my wall.”",
    understand: ["Plumbing", "Waterproofing", "Condensation", "Another moisture source"],
  },
];

export default function NoRightWordsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-indigo-700">Reducing the friction</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            You don&rsquo;t need to know what the repair is called.
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {examples.map((ex) => (
            <div key={ex.see} className="grid gap-6 rounded-2xl border border-ink-900/10 bg-stone-100/60 p-7 sm:grid-cols-2 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">What you see</p>
                <p className="mt-3 font-serif text-xl italic text-ink-950">{ex.see}</p>
              </div>
              <div className="border-t border-ink-900/10 pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">What we need to understand</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ex.understand.map((u) => (
                    <li key={u} className="rounded-full bg-sand-50 px-3.5 py-1.5 text-sm text-ink-700">
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

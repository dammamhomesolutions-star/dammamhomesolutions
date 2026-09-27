const links = [
  { symptom: "Cabinet door", goesTo: "Carpentry", href: "/carpentry-doors-locks/" },
  { symptom: "Loose handle", goesTo: "Hardware repair", href: "/carpentry-doors-locks/" },
  { symptom: "Sink leak", goesTo: "Plumbing", href: "/plumbing-repair/" },
  { symptom: "Wall damage", goesTo: "Painting / wall repair", href: "/painting-wall-repair/" },
  { symptom: "Electrical fixture issue", goesTo: "Electrical", href: "/electrical-repair/" },
];

export default function KitchenCrossoverSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Kitchen crossover</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Sometimes the kitchen problem isn&rsquo;t the kitchen itself.
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.symptom}
              href={l.href}
              className="focus-ring group rounded-xl border border-ink-900/10 bg-zinc-100/70 p-5 transition-colors hover:border-emerald-800/40"
            >
              <p className="text-sm text-ink-600">{l.symptom}</p>
              <p className="mt-2 flex items-center gap-2 font-serif text-base text-ink-950 group-hover:text-emerald-800">
                <span aria-hidden="true" className="text-emerald-700">→</span>
                {l.goesTo}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

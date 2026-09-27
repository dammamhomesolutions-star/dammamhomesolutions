const symptoms = [
  { title: "Water around the sink", body: "Possible plumbing or fixture issue." },
  { title: "Slow drainage", body: "May need drainage attention." },
  { title: "Water around the floor", body: "Could have different sources and needs assessment." },
  { title: "Damaged or loose tiles", body: "May require surface or tile repair." },
  { title: "Damp wall", body: "Could overlap with plumbing or waterproofing." },
  {
    title: "Door / lock issue",
    body: "Usually a carpentry or hardware matter.",
    href: "/carpentry-doors-locks/",
    linkLabel: "Carpentry, doors & locks",
  },
];

export default function BathroomSymptomsSection() {
  return (
    <section id="bathroom" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
            Bathroom
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            If the bathroom is telling you something, start with the
            symptom.
          </h2>
        </div>

        <ol className="relative mt-12 max-w-2xl border-l border-sand-100/15 pl-8">
          {symptoms.map((s) => (
            <li key={s.title} className="relative pb-9 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[37px] h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-ink-950" />
              <h3 className="font-serif text-lg text-sand-50">{s.title}</h3>
              <p className="mt-1.5 text-ink-300">{s.body}</p>
              {s.href && (
                <a href={s.href} className="mt-2 inline-block text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300">
                  {s.linkLabel} →
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

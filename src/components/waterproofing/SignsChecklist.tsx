const signs = [
  "Recurring damp marks",
  "Peeling paint",
  "Bubbling or damaged surface finish",
  "Ceiling staining",
  "Moisture returning after repainting",
  "Water appearing after rain",
  "Persistent dampness around wet areas",
];

export default function SignsChecklist() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/70 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-cyan-800">Worth mentioning</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What you&rsquo;re seeing matters.
          </h2>
          <p className="mt-4 text-ink-700">
            None of these automatically mean serious damage — but they&rsquo;re
            useful details to include when you reach out.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {signs.map((s) => (
            <li key={s} className="flex gap-3 border-b border-ink-900/10 py-3 text-[15px] text-ink-800">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-700" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const jobs = ["Minor wood repairs", "Door adjustments", "Cabinet issues", "Trim-related repairs", "Supported household carpentry"];

export default function CarpentrySection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-amber-800">Carpentry, in practice</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Not every carpentry job needs a workshop.
        </h2>
        <p className="mt-4 text-ink-700">
          Most of what we handle is smaller than people expect — repairs
          and adjustments around the property, not furniture manufacturing.
        </p>

        <ul className="mt-6 space-y-2.5">
          {jobs.map((j) => (
            <li key={j} className="flex gap-3 text-[15px] text-ink-800">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-700" />
              {j}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-ink-500">
          If moisture is affecting a wooden area, that&rsquo;s worth
          treating as its own question — see{" "}
          <a href="/waterproofing/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-amber-700">
            waterproofing
          </a>{" "}
          or{" "}
          <a href="/plumbing-repair/" className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-amber-700">
            plumbing &amp; water leak repair
          </a>{" "}
          depending on the source.
        </p>
      </div>
    </section>
  );
}

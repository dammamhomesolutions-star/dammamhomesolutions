import { bwProblems } from "@/lib/boundary-wall";

export default function BwProblems() {
  return (
    <section aria-labelledby="bw-problems" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Common problems</p>
          <h2 id="bw-problems" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Common outdoor wall problems</h2>
          <p className="mt-4 text-[15px] text-ink-600">What you see → what it may indicate → what should be assessed.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bwProblems.map((p) => (
            <div key={p.see} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 transition-shadow hover:shadow-md">
              <h3 className="font-semibold text-ink-950">{p.see}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div><dt className="text-xs uppercase tracking-[0.1em] text-clay-700">May indicate</dt><dd className="text-ink-700">{p.may}</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.1em] text-clay-700">Assess</dt><dd className="text-ink-700">{p.assess}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

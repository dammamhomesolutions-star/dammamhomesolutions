import { ltQuality, ltTemps } from "@/lib/lighting-installation";

export default function LtQuality() {
  return (
    <section aria-label="Lighting quality and colour temperature" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-ember-700">Lighting quality</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Good lighting is about more than brightness</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              More lumens don&rsquo;t automatically mean better light. A very
              bright fixture in the wrong place can cause glare and still leave
              the worktop in shadow. What a space needs depends on how it&rsquo;s
              used, and on:
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
            {ltQuality.map((q) => (
              <li key={q} className="rounded-full bg-ember-100/60 px-4 py-2 text-sm text-ink-800 ring-1 ring-ember-600/20">{q}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Choosing the right light appearance</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">
            Colour temperature is how warm or cool white light looks. None is
            universally right — it depends on the room, the finishes and
            personal preference. Keeping it consistent within a room usually
            looks best.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ltTemps.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
                <div className="relative h-28" style={{ background: `radial-gradient(circle at 50% 0%, ${t.swatch} 0%, ${t.swatch} 30%, #232833 100%)` }} aria-hidden="true">
                  <span className="absolute left-1/2 top-3 h-2 w-10 -translate-x-1/2 rounded-full bg-sand-50" />
                </div>
                <div className="bg-sand-50 p-5">
                  <h3 className="font-semibold text-ink-950">{t.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{t.feel}</p>
                  <p className="mt-2 text-xs text-ember-700">Often used in: {t.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

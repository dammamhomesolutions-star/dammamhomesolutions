import { fsDamageTypes } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";

export default function FsDamageTypes() {
  return (
    <section aria-labelledby="fs-types" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Know what you&rsquo;re dealing with</p>
          <h2 id="fs-types" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Fire damage, smoke damage and soot damage are not the same
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Each needs a different response, and most fires leave all four.
            Treating them as one problem is how parts of the damage get missed.
          </p>
        </div>

        {/* Comparison laid out as one continuous chain: heat → smoke → soot → water */}
        <ol className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {fsDamageTypes.map((t, i) => (
            <li
              key={t.title}
              className="group relative flex flex-col border-ink-900/10 bg-sand-50 p-6 max-xl:rounded-2xl max-xl:border xl:border-y xl:border-r xl:first:rounded-l-2xl xl:first:border-l xl:last:rounded-r-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-ember-500">
                  <FsIcon name={t.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-ink-400" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-950">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.whatItIs}</p>
              <dl className="mt-5 space-y-3 border-t border-ink-900/10 pt-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Where you see it</dt>
                  <dd className="mt-1 text-ink-800">{t.whereYouSeeIt}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why it matters</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{t.whyItMatters}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

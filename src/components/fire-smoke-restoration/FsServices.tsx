import Link from "next/link";
import { fsServices } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";
import FsCtas from "./FsCtas";

export default function FsServices() {
  return (
    <section id="services" aria-labelledby="fs-services" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="section-label !text-ember-700">What we handle</p>
            <h2 id="fs-services" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Complete fire &amp; smoke restoration services
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600">
            From the first walk-through to the final coat of paint. Items
            marked <span className="font-semibold text-ink-900">&ldquo;Available where applicable&rdquo;</span>{" "}
            depend on the situation and are confirmed after the assessment.
          </p>
        </div>

        <ol className="mt-12 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {fsServices.map((s, i) => (
            <li key={s.title} className="group grid gap-4 py-7 md:grid-cols-[3.5rem_1.1fr_2fr] md:gap-8">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-900/10 bg-sand-100 text-ink-900 transition-colors group-hover:border-ember-600 group-hover:text-ember-700">
                  <FsIcon name={s.icon} />
                </span>
                <span className="font-mono text-xs text-ink-400" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-ink-950">{s.title}</h3>
                {s.availability === "where-applicable" ? (
                  <p className="mt-2 inline-flex rounded-full border border-ink-900/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-500">
                    Available where applicable
                  </p>
                ) : null}
                {s.link && (
                  <p className="mt-2">
                    <Link
                      href={s.link.href}
                      className="focus-ring rounded-sm text-sm font-medium text-ink-700 underline decoration-ember-600/60 underline-offset-4 hover:text-ember-700"
                    >
                      {s.link.label}
                    </Link>
                  </p>
                )}
              </div>

              <dl className="grid gap-4 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">The problem</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-700">{s.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What we do</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-700">{s.whatWeDo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What to expect</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-700">{s.expect}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <FsCtas className="mt-10" />
      </div>
    </section>
  );
}

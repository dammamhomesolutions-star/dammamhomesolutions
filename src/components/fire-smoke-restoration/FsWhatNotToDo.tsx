import Link from "next/link";
import { fsMistakes } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";

export default function FsWhatNotToDo() {
  return (
    <section aria-labelledby="fs-mistakes" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Before you start cleaning</p>
          <h2 id="fs-mistakes" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            After a fire, avoid these common mistakes
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The urge to clean up straight away is understandable. Some of the
            most common reactions make restoration harder, or are unsafe.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fsMistakes.map((m, i) => (
            <li key={m.title} className="flex flex-col rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-rust-100 text-rust-700">
                  <FsIcon name="alert" className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-ink-950">
                  <span className="sr-only">Mistake {i + 1}: </span>
                  {m.title}
                </h3>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What happens</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{m.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why it can make things worse</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{m.why}</dd>
                </div>
                <div className="rounded-xl bg-moss-100 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-moss-800">
                    <FsIcon name="check" className="h-3.5 w-3.5" />
                    Do this instead
                  </dt>
                  <dd className="mt-1 leading-relaxed text-moss-900">{m.instead}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-600">
          Damaged sockets, wiring or the distribution board should be checked
          by a qualified electrician before power is restored — see{" "}
          <Link href="/electrical-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700">
            electrical repair
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

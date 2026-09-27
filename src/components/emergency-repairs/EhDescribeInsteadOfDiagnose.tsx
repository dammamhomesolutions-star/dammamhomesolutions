import Link from "next/link";
import { describeExamples } from "@/lib/emergency-repairs";

export default function EhDescribeInsteadOfDiagnose() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Don&rsquo;t know what to call it?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            You don&rsquo;t need the technical name.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {describeExamples.map((example) => (
            <div key={example.customerSays} className="rounded-md border border-ink-900/10 bg-sand-50 p-6">
              <p className="font-serif text-base italic text-ink-900">
                &ldquo;{example.customerSays}&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
                Possible service areas may include
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {example.mayInvolve.map((item) => (
                  <li key={item} className="text-sm text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/general-home-repairs/"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
          >
            Not sure? Send a photo.
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

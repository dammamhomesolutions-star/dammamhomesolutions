import Link from "next/link";
import { nonEmergencyExamples } from "@/lib/emergency-repairs";

export default function EhNotEmergencyBridge() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-md">
            <p className="section-label !text-ember-700">Not everything is urgent</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Not urgent? That&rsquo;s still worth fixing.
            </h2>
            <p className="mt-4 text-ink-600">
              Some problems don&rsquo;t need emergency treatment but should
              still be addressed.
            </p>
            <Link
              href="/general-home-repairs/"
              className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-ember-600 hover:text-ember-700"
            >
              Explore General Home Repairs
            </Link>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {nonEmergencyExamples.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2 text-sm text-ink-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

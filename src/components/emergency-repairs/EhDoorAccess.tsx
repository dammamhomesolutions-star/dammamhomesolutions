import Link from "next/link";
import { doorAccessIssues } from "@/lib/emergency-repairs";

export default function EhDoorAccess() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-ember-700">Doors &amp; hardware</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          When a door suddenly becomes a problem.
        </h2>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {doorAccessIssues.map((item) => (
            <li key={item} className="text-sm text-ink-700">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-ink-600">
          If you&rsquo;re dealing with a genuine access or security
          emergency, use the appropriate emergency or security support for
          that — this page covers door and hardware repair, not entry
          assistance.
        </p>

        <Link
          href="/carpentry-doors-locks/"
          className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Doors &amp; Locks Repair
        </Link>
      </div>
    </section>
  );
}

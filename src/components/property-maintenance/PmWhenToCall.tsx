import Link from "next/link";
import { specialistRoutes } from "@/lib/property-maintenance";

export default function PmWhenToCall() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">When to call a specialist</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Maintenance doesn&rsquo;t mean doing everything the same way.
          </h2>
          <p className="mt-4 text-ink-600">
            Different issues call for different specialists. Here&rsquo;s
            roughly where each one tends to go.
          </p>
        </div>

        <div className="mt-10 max-w-2xl divide-y divide-ink-900/10 border-y border-ink-900/10">
          {specialistRoutes.map((route) => (
            <div
              key={route.issue}
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4"
            >
              <span className="text-[15px] text-ink-800">{route.issue}</span>
              <Link
                href={route.href}
                className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700"
              >
                <span aria-hidden="true">→</span>
                {route.serviceLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

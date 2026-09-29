import Link from "next/link";
import { wdLandlordFlow } from "@/lib/window-door-repair";

export default function WdLandlordSection() {
  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-md">
            <p className="section-label !text-glass-700">Landlords &amp; property managers</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              A door or window problem is often reported before it becomes visible to you.
            </h2>
            <p className="mt-4 text-ink-600">
              We work directly with tenants, landlords and property managers
              to assess and resolve reported issues in occupied properties.
            </p>
            <Link
              href="/property-maintenance/"
              className="focus-ring mt-6 inline-flex items-center rounded-full border border-glass-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-glass-700 hover:text-glass-700"
            >
              Property Maintenance
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-[15px] font-medium text-ink-800">
            {wdLandlordFlow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-glass-900/15 bg-glass-100/60 px-4 py-2">{step}</span>
                {i < wdLandlordFlow.length - 1 && (
                  <span aria-hidden="true" className="text-glass-500">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

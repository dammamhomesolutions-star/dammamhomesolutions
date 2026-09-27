import Link from "next/link";
import { landlordExamples } from "@/lib/tile-repair";

const flow = ["Reported", "Photographed", "Assessed", "Repaired"];

export default function TrLandlordSection() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-md">
            <p className="section-label !text-rust-700">Landlords &amp; rentals</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              A small surface problem can become a bigger tenant complaint.
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {landlordExamples.map((item) => (
                <li key={item} className="rounded-full border border-ink-900/15 bg-sand-50 px-3.5 py-1.5 text-[13px] text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/property-maintenance/"
              className="focus-ring mt-6 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-rust-600 hover:text-rust-700"
            >
              Request Property Repair
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-[15px] font-medium text-ink-800">
            {flow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2">{step}</span>
                {i < flow.length - 1 && (
                  <span aria-hidden="true" className="text-ink-400">
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

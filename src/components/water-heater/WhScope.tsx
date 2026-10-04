import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import { whScope } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

const landlordInfo = ["Property address", "Heater type", "The symptom", "Photos", "Previous repairs", "Any leak details", "When we can get access"];

export default function WhScope() {
  return (
    <section aria-label="Service scope, property types and service area" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Scope</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we do</h2>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whScope.map((s) => (
            <li key={s.service} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <h3 className="text-base font-semibold text-ink-950">{s.service}</h3>
              <p className="mt-1 text-sm text-ink-600">{s.purpose}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-600">
          Wider plumbing or electrical work beyond the heater is quoted separately — see{" "}
          <Link href="/plumbing-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            plumbing
          </Link>{" "}
          and{" "}
          <Link href="/electrical-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            electrical repair
          </Link>
          .
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <WhIcon name="home" className="h-7 w-7 text-rust-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Homes</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Apartments, villas, family homes and rental properties — from a
              single bathroom heater to several units across a villa.
            </p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <WhIcon name="building" className="h-7 w-7 text-rust-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Commercial</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Offices, shops, staff accommodation and small commercial
              properties. Commercial systems can have different capacity,
              installation and maintenance needs.
            </p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <WhIcon name="checklist" className="h-7 w-7 text-ember-500" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight">Managing a rental property?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Hot-water problems turn into tenant complaints quickly. Sending
              these details up front speeds things up:
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {landlordInfo.map((l) => (
                <li key={l} className="rounded-full bg-sand-50/10 px-2.5 py-0.5 text-xs">{l}</li>
              ))}
            </ul>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I manage a rental property and need water heater service.")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-ink-950"
            >
              Request Property Service
              <WhIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Water heater services for Dammam properties</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Many homes here use electric storage heaters in bathrooms,
              ceiling voids or on the roof, and some villas use solar or gas
              systems. Larger families and villas with several bathrooms often
              outgrow the heaters that came with the property, so matching
              capacity to real demand matters as much as fixing faults.
            </p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 lg:col-span-5">
            <h3 className="font-serif text-xl text-ink-950">Service area</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              We serve homes and businesses across Dammam, in the Eastern
              Province of Saudi Arabia. Tell us your neighbourhood and we&rsquo;ll
              confirm we can reach you. More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                about us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

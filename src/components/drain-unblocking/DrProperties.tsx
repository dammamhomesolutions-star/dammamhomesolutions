import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import DrIcon from "./DrIcon";

const landlord = ["Property location", "Affected fixtures", "Blockage history", "Photos or videos", "Previous plumbing work", "Access arrangements"];

export default function DrProperties() {
  return (
    <section aria-label="Homes, businesses, landlords and service area" className="border-b border-ink-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <DrIcon name="house" className="h-7 w-7 text-teal-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Residential</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Apartments, villas, family homes and rental properties — from a single slow basin to a blocked main line.</p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <DrIcon name="building" className="h-7 w-7 text-teal-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Commercial</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Offices, shops, restaurants and commercial buildings. Larger
              properties have bigger networks, more branches, higher volumes
              and harder access — and restaurant kitchen lines need regular
              attention because of grease.
            </p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <DrIcon name="checklist" className="h-7 w-7 text-teal-300" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight">Managing a rental property with a drainage problem?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Repeated complaints from the same unit usually mean a problem that
              shouldn&rsquo;t just be cleared again. These details help:
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {landlord.map((l) => (
                <li key={l} className="rounded-full bg-sand-50/10 px-2.5 py-0.5 text-xs">{l}</li>
              ))}
            </ul>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I manage a property with a drainage problem.")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-ink-950"
            >
              Request Drain Service
              <DrIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Drain &amp; sewer services for Dammam properties</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Drainage systems vary a lot between properties — by age, layout,
              pipe sizes and the modifications made over the years. A villa
              that has had bathrooms added, or an older building with long
              horizontal runs, often behaves very differently from a new
              apartment. That&rsquo;s why we look at how your system is laid out
              before deciding how to clear it.
            </p>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 lg:col-span-5">
            <h3 className="font-serif text-xl text-ink-950">Service area</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              We serve homes and businesses across Dammam, in the Eastern
              Province of Saudi Arabia. Tell us your neighbourhood and we&rsquo;ll
              confirm we can reach you. More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
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

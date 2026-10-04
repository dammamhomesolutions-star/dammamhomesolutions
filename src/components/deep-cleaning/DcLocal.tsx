import Link from "next/link";
import DcIcon from "./DcIcon";
import type { DcIconName } from "@/lib/deep-cleaning";

const factors: { title: string; body: string; icon: DcIconName }[] = [
  { title: "Dust", body: "Fine dust settles on every surface, including in closed-up rooms.", icon: "cloth" },
  { title: "Sand tracked indoors", body: "Entrances, stairs and floors collect sand from outside.", icon: "floor" },
  { title: "Frequent AC use", body: "Vent covers and the areas around them gather dust.", icon: "window" },
  { title: "Kitchen buildup", body: "Cooking grease collects on cabinet tops, extractor areas and backsplashes.", icon: "kitchen" },
  { title: "Bathroom mineral residue", body: "Water marks and deposits build up on fixtures, glass and tiles.", icon: "sink" },
  { title: "Empty-property dust", body: "Properties left empty between tenants collect a layer of dust quickly.", icon: "key" },
];

export default function DcLocal() {
  return (
    <section aria-label="Dammam context and service area" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-mint-700">Local conditions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why detailed cleaning matters in Dammam properties</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {factors.map((f) => (
              <li key={f.title} className="group flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink-900/15 bg-sand-50 text-mint-700">
                  <DcIcon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <p className="section-label !text-mint-700">Service area</p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Deep cleaning services in Dammam</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              We clean apartments, villas, houses, rental properties and
              commercial spaces in Dammam, in the Eastern Province of Saudi
              Arabia — including move-in and move-out cleans for tenants,
              landlords and property managers handling turnovers. Tell us your
              neighbourhood and we&rsquo;ll confirm we can reach you.
            </p>
            <p className="mt-4 text-sm text-ink-600">
              More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-mint-600 decoration-2 underline-offset-4 hover:text-mint-700">
                about Dammam Home Solutions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

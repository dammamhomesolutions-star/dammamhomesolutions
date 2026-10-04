import Link from "next/link";
import PcIcon from "./PcIcon";
import type { PcIconName } from "@/lib/pest-control";

const factors: { title: string; body: string; icon: PcIconName }[] = [
  { title: "Warm climate", body: "Many insects stay active for much of the year in warm conditions.", icon: "pin" },
  { title: "Moisture indoors", body: "AC condensate, leaks and bathrooms create damp spots pests rely on.", icon: "droplet" },
  { title: "Food availability", body: "Kitchens, restaurants and waste areas supply food all year.", icon: "food" },
  { title: "Outdoor vegetation", body: "Irrigated gardens and plants against walls give shelter close to the building.", icon: "leaf" },
  { title: "Building openings", body: "Gaps around pipes, AC lines, doors and windows let pests in.", icon: "crack" },
  { title: "Water sources", body: "Standing water from irrigation, roofs and drains supports breeding.", icon: "droplet" },
  { title: "Waste areas", body: "Shared bins and waste rooms attract flies, cockroaches and rodents.", icon: "trash" },
  { title: "Seasonal changes", body: "Activity can rise or move indoors as temperatures change.", icon: "calendar" },
];

export default function PcLocal() {
  return (
    <section aria-label="Dammam conditions and service area" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-moss-700">Local conditions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Why pest problems can be persistent in Dammam
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {factors.map((f) => (
              <li key={f.title} className="group flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink-900/15 bg-sand-50 text-moss-700">
                  <PcIcon name={f.icon} className="h-5 w-5" />
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
            <p className="section-label !text-moss-700">Service area</p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Pest control services in Dammam</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              We provide pest inspection and treatment for homes and
              businesses in Dammam, in the Eastern Province of Saudi Arabia.
              Tell us your neighbourhood when you get in touch and we&rsquo;ll
              confirm we can reach you.
            </p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Why property owners choose us</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-ink-800">
              {[
                "Inspection before treatment, every time",
                "Clear safety and re-entry instructions",
                "Prevention advice, not just spraying",
                "A local team you can reach by phone or WhatsApp",
                "Related repairs — leaks, gaps, drains — handled by the same company",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <PcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-600">
              More{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700">
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

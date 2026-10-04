import Link from "next/link";
import RrIcon from "./RrIcon";

const homeConcerns: { title: string; body: string }[] = [
  { title: "Water getting into bedrooms", body: "Top-floor rooms are usually the first affected, often after the first heavy rain of the season." },
  { title: "Ceiling stains that keep coming back", body: "Repainting a stain hides it until the next rain. The source on the roof has to be dealt with first." },
  { title: "Paying for the same repair again", body: "If the same area has been patched several times, it's worth comparing that against a defined replacement." },
  { title: "Heat in upstairs rooms", body: "Damaged or missing insulation shows up as hot ceilings and an AC that struggles." },
];

const businessPoints = [
  "Planning work to keep disruption low",
  "Access planning and safety",
  "Material staging on and around the roof",
  "Phased work where appropriate",
  "Drainage across larger roof areas",
  "Working around AC units and other rooftop equipment",
];

export default function RrPropertyTypes() {
  return (
    <section aria-label="Homes and commercial buildings" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid lg:grid-cols-2">
        <div className="py-20 sm:py-24 lg:pr-12">
          <div className="flex items-center gap-3 text-teal-700">
            <RrIcon name="house" />
            <p className="section-label !text-teal-700">Residential</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">
            Roof replacement for homes and villas in Dammam
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Villas, houses, apartment buildings, extensions, and garages or
            outbuildings with their own roofs.
          </p>
          <ul className="mt-8 space-y-6">
            {homeConcerns.map((c) => (
              <li key={c.title}>
                <h3 className="text-base font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-ink-600">
            Once the roof is sorted, a stained or damaged ceiling can be
            restored through{" "}
            <Link href="/ceiling-gypsum-board-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
              ceiling &amp; gypsum board repair
            </Link>
            .
          </p>
        </div>

        <div className="border-t border-ink-900/10 py-20 sm:py-24 lg:border-l lg:border-t-0 lg:pl-12">
          <div className="flex items-center gap-3 text-teal-700">
            <RrIcon name="building" />
            <p className="section-label !text-teal-700">Commercial</p>
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Commercial roof replacement in Dammam</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Offices, shops, warehouses, workshops and commercial buildings —
            including for property managers looking after several sites.
            Commercial roofs are usually larger, carry more equipment, and
            sit above people who need to keep working.
          </p>
          <ul className="mt-8 space-y-3">
            {businessPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink-800">
                <RrIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-ink-600">
            For ongoing upkeep across buildings, see{" "}
            <Link href="/property-maintenance/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
              property maintenance
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

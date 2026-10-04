import type { CvIconName } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const types: { icon: CvIconName; title: string; items: string[] }[] = [
  { icon: "house", title: "Villa", items: ["Gate", "Driveway", "Entrances", "Perimeter", "Multiple floors", "Gate or door intercom"] },
  { icon: "apartment", title: "Apartment", items: ["Apartment door", "Building main entrance", "Shared areas (with approval)", "Unit or building intercom"] },
  { icon: "office", title: "Office", items: ["Entrance", "Reception", "Access points", "Common areas", "Visitor intercom"] },
  { icon: "shop", title: "Shop", items: ["Entrance", "Customer area", "Stock / storage area", "Cash-handling area where appropriate"] },
  { icon: "warehouse", title: "Warehouse", items: ["Gates and loading areas", "Perimeter", "Storage areas", "Vehicle access"] },
];

export default function CvProperties() {
  return (
    <section aria-labelledby="cv-props" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">By property</p>
          <h2 id="cv-props" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Security planning for homes and businesses</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Residential and commercial installations across Dammam. Typical
            areas to consider — not a list of cameras to buy:
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {types.map((t) => (
            <div key={t.title} className="group rounded-2xl bg-moss-100/50 p-5 ring-1 ring-ink-900/5 transition-colors hover:ring-moss-600">
              <CvIcon name={t.icon} className="h-7 w-7 text-moss-700" />
              <h3 className="mt-3 font-serif text-xl text-ink-950">{t.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                {t.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-ink-600">
          Landlords and property managers: we can plan systems for rented
          villas and buildings, and set up separate access for owners,
          managers and tenants where the system supports it.
        </p>
      </div>
    </section>
  );
}

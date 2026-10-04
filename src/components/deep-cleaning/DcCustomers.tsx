import DcIcon from "./DcIcon";
import type { DcIconName } from "@/lib/deep-cleaning";

const types: { title: string; line: string; icon: DcIconName }[] = [
  { title: "New tenants", line: "Clean before the boxes arrive.", icon: "movein" },
  { title: "Tenants moving out", line: "Prepare the property before handover.", icon: "moveout" },
  { title: "Landlords", line: "Prepare a property for the next occupant.", icon: "key" },
  { title: "Property managers", line: "Turn over properties between occupants.", icon: "building" },
  { title: "Homeowners", line: "Reset a home after renovation, long occupancy or heavy use.", icon: "house" },
  { title: "Families", line: "A detailed clean before settling in.", icon: "villa" },
];

export default function DcCustomers() {
  return (
    <section aria-labelledby="dc-who" className="border-b border-ink-900/10 bg-sand-100/60 py-16 sm:py-20">
      <div className="container-edge">
        <h2 id="dc-who" className="font-serif text-3xl tracking-tight text-ink-950">Who uses deep cleaning and move-out cleaning?</h2>
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <li key={t.title} className="group flex gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-sand-50 text-mint-700 ring-1 ring-ink-900/10">
                <DcIcon name={t.icon} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-950">{t.title}</h3>
                <p className="mt-1 text-sm text-ink-600">{t.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

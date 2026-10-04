import DcIcon from "./DcIcon";
import type { DcIconName } from "@/lib/deep-cleaning";

const types: { title: string; icon: DcIconName; focus: string[] }[] = [
  { title: "Apartments", icon: "apartment", focus: ["Kitchen", "Bathrooms", "Rooms", "Floors", "Cabinets"] },
  { title: "Villas & houses", icon: "villa", focus: ["Multiple rooms", "Stairs", "Kitchens", "Bathrooms", "Living areas", "Storage"] },
  { title: "Rental properties", icon: "key", focus: ["Move-out", "Handover", "Empty-property cleaning", "Turnover between tenants"] },
  { title: "Commercial spaces", icon: "building", focus: ["Office areas", "Common areas", "Floors", "Washrooms", "Kitchens & pantries"] },
];

export default function DcPropertyTypes() {
  return (
    <section aria-label="Property types and post-renovation cleaning" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Cleaning for different property types</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <li key={t.title} className="group rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-50 text-mint-700 ring-1 ring-ink-900/10">
                <DcIcon name={t.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{t.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {t.focus.map((f) => (
                  <li key={f} className="rounded-full bg-sand-50 px-2.5 py-0.5 text-xs text-ink-700 ring-1 ring-ink-900/10">{f}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Post-renovation */}
        <div className="mt-12 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-mint-300">
              <DcIcon name="vacuum" />
              <p className="section-label !text-mint-300">After building work</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Post-renovation deep cleaning</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              Renovation dust is fine and gets everywhere — inside cabinets,
              on fixtures, along skirting and in window tracks. Cleaning
              starts once builders have finished and removed their debris.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-300">Cleaning covers</p>
              <ul className="mt-3 space-y-1.5 text-sm text-sand-100">
                {["Fine construction dust", "Surface residue", "Cabinets", "Floors", "Fixtures", "Accessible windows"].map((x) => (
                  <li key={x} className="flex gap-2">
                    <DcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-mint-300" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Not the same as</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-300">
                {["Construction debris removal", "Removing paint, cement or adhesive from surfaces (only if agreed in the scope)", "Repairing damage left by the works"].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 flex-none bg-ink-500" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

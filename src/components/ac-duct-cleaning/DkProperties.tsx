import { dkDustCauses, dkOdorCauses } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

export default function DkProperties() {
  return (
    <section aria-label="Homes, businesses, renovation, odour and dust" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-copper-700">
              <DkIcon name="home" />
              <p className="section-label !text-copper-700">Residential</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Duct cleaning for villas &amp; apartments</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-ink-950">Villas</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-700">
                  {["Larger duct networks", "Several zones", "Ceiling access", "Many rooms", "Central or ducted systems"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-950">Apartments</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-700">
                  {["Compact layouts", "Limited access", "Possible shared or central HVAC", "Ceiling-mounted systems"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink-600">Townhouses and private homes too. The approach always depends on the HVAC design.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3 text-copper-300">
              <DkIcon name="office" />
              <p className="section-label !text-copper-300">Commercial</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">Commercial duct cleaning</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              Offices, shops, restaurants, clinics, retail spaces and larger
              buildings. System size, access, operating hours and duct
              configuration change the scope significantly, so commercial work
              is planned around your schedule after an inspection.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["Offices", "Shops", "Restaurants", "Clinics", "Retail", "Larger buildings"].map((x) => (
                <li key={x} className="rounded-full bg-sand-50/10 px-3 py-1 text-xs">{x}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Renovation */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-copper-700">After building work</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Renovating your home? Don&rsquo;t forget the ducts.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Sanding, cutting gypsum and demolition create very fine dust that
              the AC can pull straight into the return ducts — especially if it
              ran during the work. Not every renovation means the ducts need
              cleaning, but after major work an inspection is worthwhile.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-6">
            {["Gypsum dust", "Sanding dust", "Debris", "Fibres", "Fine particles"].map((x) => (
              <li key={x} className="flex items-center gap-2 rounded-full bg-copper-100 px-4 py-2 text-sm text-copper-900">
                <DkIcon name="debris" className="h-4 w-4" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        {/* Odour + dust */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6 sm:p-8">
            <DkIcon name="odor" className="h-7 w-7 text-copper-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Why does my AC smell strange?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Possible causes include the following. Duct cleaning doesn&rsquo;t
              remove every odour — finding the source may mean checking the
              wider system.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dkOdorCauses.map((x) => (
                <li key={x} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6 sm:p-8">
            <DkIcon name="debris" className="h-7 w-7 text-copper-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Why does dust keep coming back?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Returning dust has many possible sources, and ducts are only one
              of them:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dkDustCauses.map((x) => (
                <li key={x} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

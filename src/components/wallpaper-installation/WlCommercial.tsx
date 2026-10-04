import WlIcon from "./WlIcon";

const places = ["Offices", "Reception areas", "Retail", "Hospitality", "Restaurants", "Showrooms", "Feature walls"];
const needs = ["Consistent patterns across repeated walls", "Larger surfaces and multiple rooms", "Rolls from the same batch", "Access and protection of the space", "Scheduling around opening hours", "Surface preparation at scale", "Keeping disruption low"];
const rental = ["Feature-wall updates", "Room refreshes between tenants", "Replacing damaged wallpaper", "A consistent look across units", "Multi-room projects"];

export default function WlCommercial() {
  return (
    <section aria-label="Commercial and rental properties" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <WlIcon name="building" className="h-8 w-8 text-teal-300" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Wallpaper installation for offices &amp; commercial spaces</h2>
          <p className="mt-3 text-sm text-ink-300">{places.join(" · ")}</p>
          <ul className="mt-5 space-y-1.5">
            {needs.map((n) => <li key={n} className="flex gap-2 text-sm text-sand-100"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{n}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl bg-teal-100/60 p-6 sm:p-8">
          <WlIcon name="key" className="h-8 w-8 text-teal-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Wallpaper installation for rental properties</h2>
          <p className="mt-3 text-sm text-ink-600">For landlords and property managers:</p>
          <ul className="mt-5 space-y-1.5">
            {rental.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-800"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />{n}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

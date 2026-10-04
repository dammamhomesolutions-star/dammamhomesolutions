import CbIcon from "./CbIcon";

const places = ["Offices", "Meeting rooms", "Reception areas", "Retail", "Hospitality", "Commercial interiors"];
const needs = ["Many windows at once", "A consistent appearance", "Privacy for meeting rooms", "Glare and daylight control", "Scheduling around working hours", "Repeated fixture types", "Access to high windows"];
const rental = ["Replacing damaged curtains and blinds", "Preparing for new tenants", "Standard coverings across units", "Several rooms in one visit", "A consistent look between properties"];

export default function CbCommercial() {
  return (
    <section aria-label="Commercial and rental properties" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <CbIcon name="building" className="h-8 w-8 text-clay-300" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Curtain &amp; blind installation for offices &amp; commercial spaces</h2>
          <p className="mt-3 text-sm text-ink-300">{places.join(" · ")}</p>
          <ul className="mt-5 space-y-1.5">
            {needs.map((n) => <li key={n} className="flex gap-2 text-sm text-sand-100"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{n}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl bg-clay-100/60 p-6 sm:p-8">
          <CbIcon name="key" className="h-8 w-8 text-clay-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Curtain &amp; blind installation for rental properties</h2>
          <p className="mt-3 text-sm text-ink-600">For landlords and property managers:</p>
          <ul className="mt-5 space-y-1.5">
            {rental.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-800"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-700" />{n}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

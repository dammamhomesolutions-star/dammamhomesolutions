import FcIcon from "./FcIcon";

const homes = ["Living rooms and majlis", "Bedrooms", "Dining rooms", "Hallways", "Entrances", "Home offices", "Selected feature areas"];
const homeFocus = ["Appearance", "Lighting", "Room proportions", "AC coordination", "Access", "Maintenance"];
const commercial = ["Offices", "Reception areas", "Retail", "Restaurants", "Hospitality", "Clinics", "Common areas"];
const commercialFocus = ["Lighting layouts", "AC integration", "Service access through grid tiles or panels", "Repeated layouts", "Maintenance", "Larger areas", "Coordination with other trades"];

export default function FcSpaces() {
  return (
    <section aria-label="Residential and commercial false ceilings" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-glass-100 p-6 sm:p-8">
          <FcIcon name="home" className="h-8 w-8 text-glass-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">False ceilings for villas &amp; apartments</h2>
          <ul className="mt-5 flex flex-wrap gap-2">{homes.map((h) => <li key={h} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{h}</li>)}</ul>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">We focus on</p>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">{homeFocus.map((h) => <li key={h} className="flex gap-2 text-sm text-ink-800"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />{h}</li>)}</ul>
        </div>
        <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <FcIcon name="building" className="h-8 w-8 text-glass-300" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight">False ceiling installation for offices &amp; commercial spaces</h2>
          <p className="mt-3 text-sm text-ink-300">{commercial.join(" · ")}</p>
          <ul className="mt-5 grid grid-cols-2 gap-1.5">{commercialFocus.map((h) => <li key={h} className="flex gap-2 text-sm text-sand-100"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />{h}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

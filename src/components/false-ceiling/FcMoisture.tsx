import FcIcon from "./FcIcon";

const signs = ["Water staining", "Bubbling", "Discolouration", "Recurring damp patches", "Peeling finish", "Soft or damaged board", "A persistent odour"];
const wet = ["Moisture exposure", "Ventilation and extract fans", "Moisture-resistant board", "Suitable light fittings", "Access to heaters and valves", "Easy-clean finishes"];
const local = [
  { t: "AC everywhere", b: "Ceilings often carry ducts and diffusers, so coordination with the AC is a big part of most projects." },
  { t: "Condensation", b: "Poorly insulated ducts or drain lines above a ceiling can drip — worth checking before closing it." },
  { t: "Dust", b: "Dust in the cavity and on fittings means access for cleaning and filter changes matters." },
  { t: "Villa construction", b: "Concrete slabs, double-height majlis and entrances, and renovations of older ceilings are all common." },
];

export default function FcMoisture() {
  return (
    <section aria-label="Moisture, wet areas and local conditions" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-8">
            <FcIcon name="drop" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What if the ceiling has moisture problems?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
              A false ceiling shouldn&rsquo;t be used to hide an active leak or
              damp. The cause needs assessing and fixing first — otherwise the
              new ceiling will stain, sag or fail.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">{signs.map((s) => <li key={s} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800">{s}</li>)}</ul>
            <p className="mt-4 text-sm text-ink-700">We can&rsquo;t diagnose the source remotely; leaks are traced through our water leak repair service.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight">False ceilings in kitchens &amp; bathrooms</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">Standard gypsum isn&rsquo;t suitable for every wet area. We use moisture-resistant board where it&rsquo;s needed and plan around:</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">{wet.map((w) => <li key={w} className="flex gap-2 text-sm text-sand-100"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />{w}</li>)}</ul>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">False ceilings in Dammam</h2>
            <p className="mt-3 text-sm text-ink-600">Material and design should suit the actual room and how it&rsquo;s used.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {local.map((l) => (
              <li key={l.t} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
                <h3 className="font-semibold text-ink-950">{l.t}</h3>
                <p className="mt-1 text-sm text-ink-600">{l.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import WlIcon from "./WlIcon";

const signs = ["Recurring damp patches", "Peeling paint", "Bubbling", "Staining", "A musty smell", "Persistent moisture"];
const wet = ["Product specification", "Moisture exposure", "Ventilation", "Wall condition", "Splash zones", "Manufacturer guidance"];
const local = [
  { t: "Dust", b: "Walls are cleaned thoroughly before hanging — dust stops paste bonding properly." },
  { t: "Heat and AC", b: "Air-conditioned rooms are fine; very hot, unventilated rooms during installation can affect drying, so we plan around it." },
  { t: "New and renovated villas", b: "Fresh gypsum and paint need to be fully dry and cured before papering." },
  { t: "Bathrooms and kitchens", b: "Moisture in specific rooms needs the right product and ventilation." },
];

export default function WlMoisture() {
  return (
    <section aria-label="Moisture, kitchens and bathrooms, and local conditions" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-8">
            <WlIcon name="drop" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What if the wall has moisture problems?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
              Wallpaper shouldn&rsquo;t be used to hide active damp. The cause
              needs assessing and fixing first — otherwise the paper will stain,
              bubble or lift, and the problem keeps going underneath.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {signs.map((s) => <li key={s} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800">{s}</li>)}
            </ul>
            <p className="mt-4 text-sm text-ink-700">We can&rsquo;t diagnose the cause remotely — see the related services below for leaks and waterproofing.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight">Can wallpaper be used in kitchens or bathrooms?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Ordinary wallpaper isn&rsquo;t suitable for every kitchen or
              bathroom. Some products are designed for humid rooms — whether one
              suits your space depends on:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {wet.map((w) => <li key={w} className="flex gap-2 text-sm text-sand-100"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{w}</li>)}
            </ul>
            <p className="mt-4 text-xs text-ink-400">Wallpaper isn&rsquo;t waterproofing — keep it away from direct splashing unless the product is made for it.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Wallpaper installation in Dammam homes</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {local.map((l) => (
              <li key={l.t} className="rounded-2xl bg-teal-100/50 p-5">
                <h3 className="font-semibold text-ink-950">{l.t}</h3>
                <p className="mt-1 text-sm text-ink-700">{l.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { faMaterials } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

const commercial = ["Office desks", "Workstations", "Chairs", "Storage cabinets", "Shelving", "Reception furniture", "Meeting tables", "Retail fixtures"];
const commercialNeeds = ["Multiple identical units built consistently", "Layout and workspace planning", "A sensible order of installation", "Access and lift booking", "Packaging cleared as we go"];
const fragile = ["Glass doors", "Mirrors", "Glass shelves", "Glass table tops", "Decorative panels"];

export default function FaMaterials() {
  return (
    <section aria-label="Commercial furniture, materials and fragile components" className="border-b border-ink-900/10 bg-walnut-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FaIcon name="office" className="h-8 w-8 text-walnut-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Furniture assembly for offices &amp; commercial spaces</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Fitting out an office, clinic or shop means many units built the
              same way, in an order that keeps the space usable.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {commercial.map((c) => <li key={c} className="rounded-full bg-sand-100/10 px-3 py-1 text-xs text-sand-100">{c}</li>)}
            </ul>
          </div>
          <ul className="grid content-start gap-2 sm:grid-cols-2 lg:col-span-7">
            {commercialNeeds.map((n) => (
              <li key={n} className="flex gap-2 rounded-xl bg-ink-900 p-3.5 text-sm text-sand-100"><FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-300" />{n}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What your furniture is made of matters</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">Material affects handling, weight, how fasteners hold, and how easily it gets damaged.</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {faMaterials.map((m) => (
                <li key={m.name} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <h3 className="font-semibold text-ink-950">{m.name}</h3>
                  <p className="mt-0.5 text-sm text-ink-600">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border-2 border-walnut-600/30 bg-sand-50 p-6">
              <FaIcon name="glass" className="h-7 w-7 text-walnut-700" />
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Furniture with glass or fragile parts</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {fragile.map((f) => <li key={f} className="rounded-full bg-walnut-100 px-2.5 py-1 text-xs text-ink-800">{f}</li>)}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">These take extra care in unpacking, handling and fitting, and are usually fitted last — let us know they&rsquo;re included when you book.</p>
            </div>
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
              <h2 className="font-serif text-2xl tracking-tight text-ink-950">Bought it yourself?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Customer-supplied furniture can be assembled where the item,
                instructions, components and site conditions are suitable —
                from any store or online seller. We aren&rsquo;t affiliated with
                any furniture brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

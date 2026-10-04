import { scMethods } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";
import ScCtas from "./ScCtas";

const sofaConsider = ["Fabric type", "Cushion construction", "Seams", "Backing", "Colourfastness", "Moisture sensitivity", "Stain type"];
const carpetConsider = ["Fibre type", "Construction", "Backing", "Pile", "Stain location", "Moisture tolerance", "Overall condition"];

const sofaItems = ["Fabric sofas", "Sectional & L-shaped sofas", "Couches", "Leather sofas", "Upholstered chairs", "Cushions", "Armrests, backrests & seats"];
const carpetItems = ["Fitted carpets", "Area rugs", "Wool rugs", "Bedroom & living-room carpets", "Hallways", "Office & commercial carpets"];

export default function ScSofaVsCarpet() {
  return (
    <section aria-label="Sofa and carpet cleaning approaches" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Two different jobs</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Sofa cleaning and carpet cleaning need different approaches
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The right cleaning method depends on the material and condition of
            the item.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-glass-800 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glass-300 text-ink-950">
                <ScIcon name="sofa" />
              </span>
              <h2 className="font-serif text-2xl">Sofa &amp; upholstery cleaning in Dammam</h2>
            </div>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-glass-300">What we consider</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sofaConsider.map((c) => (
                <li key={c} className="rounded-full bg-sand-50/10 px-3 py-1 text-xs">{c}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-glass-300">What we clean</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-glass-100">
              {sofaItems.map((c) => (
                <li key={c} className="flex gap-2">
                  <ScIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />
                  {c}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glass-100 text-glass-800">
                <ScIcon name="carpet" />
              </span>
              <h2 className="font-serif text-2xl text-ink-950">Professional carpet cleaning in Dammam</h2>
            </div>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-glass-700">What we consider</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {carpetConsider.map((c) => (
                <li key={c} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{c}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-glass-700">What we clean</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink-800">
              {carpetItems.map((c) => (
                <li key={c} className="flex gap-2">
                  <ScIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />
                  {c}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <h2 className="mt-16 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">The cleaning methods we use</h2>
        <p className="mt-2 max-w-2xl text-[15px] text-ink-600">One is chosen per item, after inspection — not the same method for everything.</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {scMethods.map((m) => (
            <li key={m.title} className="group rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-glass-300">
                <ScIcon name={m.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700"><span className="font-semibold">Suits: </span>{m.suits}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-600">Leather is cleaned and conditioned with leather-appropriate products rather than wet extraction.</p>
        <ScCtas className="mt-8" />
      </div>
    </section>
  );
}

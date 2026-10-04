import { scMatrixItems, scMatrixServices } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

const problems = ["Dust", "General soil", "Stains", "Odour", "Heavy buildup"];

// Cell note for combinations that work differently.
function cell(item: string, service: string) {
  if (item === "Leather sofa" && (service === "Cleaning" || service === "Spot treatment")) return "Leather-specific";
  return "yes";
}

export default function ScMatrix() {
  return (
    <section aria-labelledby="sc-matrix" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-glass-700">Coverage</p>
            <h2 id="sc-matrix" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we clean, and what&rsquo;s included</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Problems we deal with</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {problems.map((p) => (
                <li key={p} className="rounded-full bg-glass-100 px-3 py-1 text-xs text-glass-900">{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: one card per item */}
        <ul className="mt-10 space-y-3 md:hidden">
          {scMatrixItems.map((item) => (
            <li key={item} className="rounded-2xl border border-ink-900/10 bg-sand-100/50 p-4">
              <h3 className="text-base font-semibold text-ink-950">{item}</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {scMatrixServices.map((s) => {
                  const v = cell(item, s);
                  return (
                    <li key={s} className="inline-flex items-center gap-1 rounded-full bg-sand-50 px-2.5 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">
                      <ScIcon name="check" className="h-3.5 w-3.5 text-glass-700" />
                      {s}
                      {v !== "yes" && <span className="text-ink-500"> ({v.toLowerCase()})</span>}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>

        {/* Tablet and up: full table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-ink-900/10 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Services included for each type of item</caption>
            <thead className="bg-glass-100">
              <tr>
                <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-glass-900">Item</th>
                {scMatrixServices.map((s) => (
                  <th key={s} scope="col" className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-glass-900">{s}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10">
              {scMatrixItems.map((item) => (
                <tr key={item} className="hover:bg-sand-100/60">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink-950">{item}</th>
                  {scMatrixServices.map((s) => {
                    const v = cell(item, s);
                    return (
                      <td key={s} className="px-4 py-3 text-center">
                        {v === "yes" ? (
                          <span className="inline-flex items-center justify-center text-glass-700">
                            <ScIcon name="check" className="h-5 w-5" />
                            <span className="sr-only">Included</span>
                          </span>
                        ) : (
                          <span className="text-xs text-ink-600">{v}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-600">Odour treatment is provided where an odour source is found; how far it can be reduced depends on the material and source.</p>
      </div>
    </section>
  );
}

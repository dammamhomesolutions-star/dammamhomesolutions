import { hmMatrix } from "@/lib/handyman";

const cols = ["install", "assemble", "repair", "adjust"] as const;
const mark = (v: boolean) => (v ? "✓" : "—");

export default function HmMatrix() {
  return (
    <section aria-labelledby="hm-matrix" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">At a glance</p>
        <h2 id="hm-matrix" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we can do with each item</h2>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:hidden">
          {hmMatrix.map((r) => (
            <li key={r.task} className="rounded-2xl bg-sand-100 p-4">
              <p className="font-semibold text-ink-950">{r.task}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {cols.filter((c) => r[c]).map((c) => <li key={c} className="rounded-full bg-ink-950 px-2.5 py-1 text-xs capitalize text-sand-50">{c}</li>)}
              </ul>
            </li>
          ))}
        </ul>
        <table className="mt-8 hidden w-full overflow-hidden rounded-2xl text-left text-sm ring-1 ring-ink-900/10 md:table">
          <thead className="bg-ink-950 text-sand-50">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Item</th>
              {cols.map((c) => <th key={c} scope="col" className="px-5 py-3 text-center font-semibold capitalize">{c}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-900/10 bg-sand-50">
            {hmMatrix.map((r) => (
              <tr key={r.task} className="hover:bg-sand-100">
                <th scope="row" className="px-5 py-3 font-medium text-ink-950">{r.task}</th>
                {cols.map((c) => (
                  <td key={c} className={`px-5 py-3 text-center ${r[c] ? "font-bold text-ember-700" : "text-ink-300"}`}>
                    <span aria-hidden="true">{mark(r[c])}</span>
                    <span className="sr-only">{r[c] ? "Yes" : "No"}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

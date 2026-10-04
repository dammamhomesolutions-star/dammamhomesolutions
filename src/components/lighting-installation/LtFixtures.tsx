import { ltComparison, ltFixtures } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

export default function LtFixtures() {
  return (
    <section id="fixtures" aria-labelledby="lt-fix" className="border-b border-ink-900/10 bg-ember-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Lighting options</p>
          <h2 id="lt-fix" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Fixture types we install</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ltFixtures.map((f) => (
            <div key={f.name} className="group rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-ember-600">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-ember-500">
                <LtIcon name={f.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950">{f.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{f.body}</p>
              <p className="mt-2 text-xs text-ember-700">{f.use}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950">Comparing common fixtures</h2>
        {/* Cards on mobile, table from md, so nothing widens the viewport. */}
        <ul className="mt-6 space-y-2 md:hidden">
          {ltComparison.map((r) => (
            <li key={r.fixture} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
              <p className="text-sm font-semibold text-ink-950">{r.fixture}</p>
              <p className="mt-0.5 text-sm text-ink-600">{r.use}</p>
              <p className="mt-1 text-xs font-medium text-ember-700">Consider: {r.consider}</p>
            </li>
          ))}
        </ul>
        <table className="mt-6 hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
          <thead className="bg-ink-950 text-sand-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Fixture</th>
              <th scope="col" className="px-4 py-3 font-semibold">Typical use</th>
              <th scope="col" className="px-4 py-3 font-semibold">Main consideration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-900/10 bg-sand-50">
            {ltComparison.map((r) => (
              <tr key={r.fixture}>
                <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.fixture}</th>
                <td className="px-4 py-3 text-ink-700">{r.use}</td>
                <td className="px-4 py-3 text-ink-700">{r.consider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

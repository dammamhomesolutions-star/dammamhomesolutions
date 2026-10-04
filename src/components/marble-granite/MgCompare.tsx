import { mgCompare } from "@/lib/marble-granite";
import MgSlab from "./MgSlab";

export default function MgCompare() {
  return (
    <section aria-labelledby="mg-compare" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="section-label !text-concrete-700">Know your stone</p>
            <h2 id="mg-compare" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Marble and granite are not the same surface</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Treatment should follow the actual stone and its condition — one
              generic process for every surface is how stone gets damaged.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-6">
            {(["marble", "granite"] as const).map((t) => (
              <figure key={t} className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
                <div className="h-28"><MgSlab tone={t} uid={`cmp-${t}`} /></div>
                <figcaption className="bg-concrete-900 px-4 py-2 text-sm font-semibold capitalize text-sand-50">{t}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <ul className="mt-10 space-y-2 md:hidden">
          {mgCompare.map((r) => (
            <li key={r.aspect} className="rounded-xl bg-concrete-100/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-concrete-700">{r.aspect}</p>
              <p className="mt-2 text-sm text-ink-800"><span className="font-semibold">Marble:</span> {r.marble}</p>
              <p className="mt-1 text-sm text-ink-800"><span className="font-semibold">Granite:</span> {r.granite}</p>
            </li>
          ))}
        </ul>
        <table className="mt-10 hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
          <thead className="bg-ink-950 text-sand-50">
            <tr>
              <th scope="col" className="px-4 py-3"><span className="sr-only">Aspect</span></th>
              <th scope="col" className="px-4 py-3 font-semibold">Marble</th>
              <th scope="col" className="px-4 py-3 font-semibold">Granite</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-900/10 bg-sand-50">
            {mgCompare.map((r) => (
              <tr key={r.aspect}>
                <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.aspect}</th>
                <td className="px-4 py-3 text-ink-700">{r.marble}</td>
                <td className="px-4 py-3 text-ink-700">{r.granite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

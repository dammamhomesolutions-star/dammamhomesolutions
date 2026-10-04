import { cbCompare, cbTypes } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

export default function CbTypes() {
  return (
    <section id="coverings" aria-label="Curtain and blind types" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label !text-clay-700">Curtain or blind?</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Curtains vs blinds</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Neither is better everywhere — many homes use both, even in the same room.</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-2 md:hidden">
              {cbCompare.map((r) => (
                <li key={r.aspect} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-clay-700">{r.aspect}</p>
                  <p className="mt-2 text-sm text-ink-800"><span className="font-semibold">Curtain:</span> {r.curtain}</p>
                  <p className="mt-1 text-sm text-ink-800"><span className="font-semibold">Blind:</span> {r.blind}</p>
                </li>
              ))}
            </ul>
            <table className="hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
              <thead className="bg-ink-950 text-sand-50">
                <tr>
                  <th scope="col" className="px-4 py-3"><span className="sr-only">Aspect</span></th>
                  <th scope="col" className="px-4 py-3 font-semibold">Curtain</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Blind</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10 bg-sand-50">
                {cbCompare.map((r) => (
                  <tr key={r.aspect}>
                    <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.aspect}</th>
                    <td className="px-4 py-3 text-ink-700">{r.curtain}</td>
                    <td className="px-4 py-3 text-ink-700">{r.blind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we install and supply</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {cbTypes.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-clay-600 sm:p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-900 text-clay-100">
                <CbIcon name={t.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950">{t.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{t.body}</p>
              <p className="mt-2 text-xs text-ink-500">{t.use}</p>
              <p className="mt-1 text-xs font-medium text-clay-700">Consider: {t.consider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

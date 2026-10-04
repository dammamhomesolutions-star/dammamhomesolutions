import { fcCompare, fcSystems } from "@/lib/false-ceiling";
import FcStylePreview from "./FcStylePreview";

export default function FcSystems() {
  return (
    <section id="ceiling-systems" aria-labelledby="fc-systems" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Ceiling systems</p>
          <h2 id="fc-systems" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Ceiling systems we install</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {fcSystems.map((s) => (
            <div key={s.name} className="group overflow-hidden rounded-2xl bg-sand-50 ring-1 ring-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-glass-600">
              <div className="h-20"><FcStylePreview style={s.style} /></div>
              <div className="p-4">
                <h3 className="font-semibold text-ink-950">{s.name}</h3>
                <p className="mt-1 text-sm text-ink-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Which false ceiling system is right for your space?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-ink-600">No system is best everywhere — it depends on the room, the services above and the look you want.</p>
        <ul className="mt-6 space-y-2 md:hidden">
          {fcCompare.map((r) => (
            <li key={r.type} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
              <p className="text-sm font-semibold text-ink-950">{r.type}</p>
              <p className="mt-0.5 text-sm text-ink-600">{r.use}</p>
              <p className="mt-1 text-xs font-medium text-glass-700">Key point: {r.consider}</p>
            </li>
          ))}
        </ul>
        <table className="mt-6 hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
          <thead className="bg-ink-950 text-sand-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Ceiling type</th>
              <th scope="col" className="px-4 py-3 font-semibold">Typical use</th>
              <th scope="col" className="px-4 py-3 font-semibold">Key consideration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-900/10 bg-sand-50">
            {fcCompare.map((r) => (
              <tr key={r.type}>
                <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.type}</th>
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

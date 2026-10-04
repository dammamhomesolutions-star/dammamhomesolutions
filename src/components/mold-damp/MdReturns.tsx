import { mdCauses, mdMatrix } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// Why the problem returns, and a sign → possible considerations matrix.
export default function MdReturns() {
  return (
    <section aria-labelledby="md-returns" className="border-t border-ink-900/10 bg-concrete-100 py-20 sm:py-28">
      <div className="container-edge grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Spec code="S-06">Why it comes back</Spec>
          <h2 id="md-returns" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">If the moisture remains, the problem may return.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
            Wiping growth away or repainting a stained wall changes how the
            surface looks. It doesn&rsquo;t change the conditions underneath. If
            moisture is still reaching the wall, the mark — or the mold — can
            come back, sometimes within weeks.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">Common contributors include:</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {mdCauses.map((c) => (
              <li key={c} className="rounded-md border border-ink-900/10 bg-sand-50 px-3 py-2 text-sm text-ink-800">{c}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-500">Which of these applies can only be confirmed on inspection.</p>
        </div>

        <div className="lg:col-span-7">
          <h3 className="font-serif text-2xl text-ink-950">Dampness source matrix</h3>
          <p className="mt-1 text-sm text-ink-600">Possible considerations — not a diagnosis.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-50">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Visible signs and their possible considerations</caption>
              <thead className="bg-glass-900 text-sand-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.2em] sm:px-6">Visible sign</th>
                  <th scope="col" className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.2em] sm:px-6">Possible considerations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10">
                {mdMatrix.map((m) => (
                  <tr key={m.sign}>
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-ink-950 sm:px-6">{m.sign}</th>
                    <td className="px-4 py-4 text-ink-700 sm:px-6">{m.consider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

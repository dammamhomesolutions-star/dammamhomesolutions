import Link from "next/link";
import { dkCompare } from "@/lib/ac-duct-cleaning";

export default function DkCompare() {
  return (
    <section aria-labelledby="dk-compare" className="border-b border-ink-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Related, not interchangeable</p>
          <h2 id="dk-compare" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Duct cleaning vs AC cleaning vs filter cleaning</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Each one cleans a different part of the system. Duct cleaning on
            its own doesn&rsquo;t clean the whole AC.
          </p>
        </div>

        {/* Cards on mobile */}
        <ul className="mt-10 space-y-3 md:hidden">
          {dkCompare.map((r) => (
            <li key={r.service} className={`rounded-2xl p-4 ${r.service === "AC duct cleaning" ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50"}`}>
              <h3 className="text-base font-semibold">{r.service}</h3>
              <p className="mt-1 text-sm"><span className="opacity-70">Focus: </span>{r.focus}</p>
              <p className="mt-1 text-sm opacity-80">{r.note}</p>
            </li>
          ))}
        </ul>

        {/* Table from md up */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-ink-900/10 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of AC cleaning services and what each focuses on</caption>
            <thead className="bg-steel-100">
              <tr>
                <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-700">Service</th>
                <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-700">Main focus</th>
                <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-700">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10 bg-sand-50">
              {dkCompare.map((r) => (
                <tr key={r.service} className={r.service === "AC duct cleaning" ? "bg-copper-100/60" : ""}>
                  <th scope="row" className="px-5 py-4 font-semibold text-ink-950">{r.service}</th>
                  <td className="px-5 py-4 text-ink-800">{r.focus}</td>
                  <td className="px-5 py-4 text-ink-600">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-ink-600">
          We clean filters, coils and ducts. For a full check of the AC itself,
          see{" "}
          <Link href="/ac-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
            AC repair &amp; maintenance
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

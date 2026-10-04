import { cvAskCctv, cvAskIntercom, cvBefore, cvScope } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

export default function CvChecklists() {
  return (
    <section aria-label="Planning checklists and service scope" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-moss-700">Before you buy</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What should you decide before installing CCTV?</h2>
          </div>
          <ol className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {cvBefore.map((q, i) => (
              <li key={q} className="flex gap-3 rounded-xl bg-sand-50 p-3.5 text-sm text-ink-800 ring-1 ring-ink-900/10">
                <span className="font-mono text-xs text-moss-700">{String(i + 1).padStart(2, "0")}</span>
                {q}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <CvIcon name="camera" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Questions to ask a CCTV installer</h2>
            <ul className="mt-5 space-y-2">
              {cvAskCctv.map((q) => (
                <li key={q} className="flex gap-2 text-sm text-ink-800"><span aria-hidden="true" className="font-semibold text-moss-700">?</span>{q}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <CvIcon name="intercom" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Questions to ask an intercom installer</h2>
            <ul className="mt-5 space-y-2">
              {cvAskIntercom.map((q) => (
                <li key={q} className="flex gap-2 text-sm text-ink-800"><span aria-hidden="true" className="font-semibold text-moss-700">?</span>{q}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-600">We&rsquo;re happy to answer every one of these in your quote.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we do</h2>
          <ul className="mt-6 space-y-2 md:hidden">
            {cvScope.map((r) => (
              <li key={r.service} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                <p className="text-sm font-semibold text-ink-950">{r.service}</p>
                <p className="mt-0.5 text-sm text-ink-600">{r.purpose}</p>
              </li>
            ))}
          </ul>
          <table className="mt-6 hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
            <thead className="bg-ink-950 text-sand-50">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Service</th>
                <th scope="col" className="px-4 py-3 font-semibold">Main purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10 bg-sand-50">
              {cvScope.map((r) => (
                <tr key={r.service}>
                  <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.service}</th>
                  <td className="px-4 py-3 text-ink-700">{r.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

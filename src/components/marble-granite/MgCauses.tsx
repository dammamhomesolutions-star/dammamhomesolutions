import { mgCauses, mgProblemTypes } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

export default function MgCauses() {
  return (
    <section aria-label="Why stone looks dull, and etching versus scratches versus stains" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-concrete-700">Causes</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why does marble look dull?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Usually it&rsquo;s the very top of the surface that has worn or been
              coated — not the stone itself that&rsquo;s ruined. Common causes:
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
            {mgCauses.map((c) => <li key={c} className="rounded-full bg-sand-50 px-3.5 py-1.5 text-sm text-ink-800 ring-1 ring-ink-900/10">{c}</li>)}
          </ul>
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Etching vs scratches vs stains vs residue</h2>
        <p className="mt-3 max-w-2xl rounded-xl bg-sand-50 p-4 text-[15px] leading-relaxed text-ink-800 ring-1 ring-ink-900/10">
          A stain, scratch, etch mark and dull finish may look similar at first,
          but they can need very different treatment.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mgProblemTypes.map((p) => (
            <div key={p.title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-concrete-900 text-concrete-100"><MgIcon name={p.icon} className="h-6 w-6" /></span>
              <h3 className="mt-4 font-serif text-xl text-ink-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

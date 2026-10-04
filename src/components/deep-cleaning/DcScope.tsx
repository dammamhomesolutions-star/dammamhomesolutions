import Link from "next/link";
import { dcAddOns, dcSeparate } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";

const pillars = [
  { title: "What's included", body: "Clearly defined cleaning tasks for each room, agreed before the job." },
  { title: "What needs special attention", body: "Areas with heavy buildup or delicate materials, flagged in advance." },
  { title: "What requires extra work", body: "Add-ons and services outside the standard scope, quoted separately." },
];

export default function DcScope() {
  return (
    <section id="scope" aria-label="Cleaning scope, add-ons and separate services" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-mint-700">Transparency</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Clear cleaning scope. Clear expectations.</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <span className="font-serif text-3xl text-mint-700">{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-mint-800 p-6 text-sand-50 sm:p-8">
            <h2 className="font-serif text-2xl">Optional add-ons</h2>
            <p className="mt-2 text-sm text-mint-100">Not included automatically — add them to your quote request below.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {dcAddOns.map((a) => (
                <li key={a.key} className="group flex items-center gap-3 rounded-xl bg-mint-900/60 p-3 text-sm">
                  <DcIcon name={a.icon} className="h-5 w-5 text-mint-300" />
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-ink-950">Services that may need separate arrangements</h2>
            <p className="mt-2 text-sm text-ink-600">Outside a standard cleaning scope. Some are other services we provide.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-800">
              {dcSeparate.map((s) => (
                <li key={s.label} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-3 flex-none bg-ink-400" aria-hidden="true" />
                  {s.href ? (
                    <Link href={s.href} className="focus-ring rounded-sm underline decoration-mint-600 underline-offset-4 hover:text-mint-700">
                      {s.label}
                    </Link>
                  ) : (
                    s.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

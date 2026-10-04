import Link from "next/link";
import { rnSpecialist } from "@/lib/renovation";
import { Check, Eyebrow } from "./RnUi";

// What the renovation covers, and what needs a specialist.
export default function RnSpecialist() {
  return (
    <section id="specialists" aria-labelledby="rn-spec" className="scroll-mt-20 bg-concrete-900 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="16" dark>Specialist boundaries</Eyebrow>
        <h2 id="rn-spec" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight sm:text-5xl">Some renovation work needs the right specialist.</h2>

        <div className="mt-12 grid gap-px bg-sand-50/10 lg:grid-cols-12">
          <div className="bg-concrete-900 p-6 sm:p-8 lg:col-span-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500">Within our renovation scope</h3>
            <ul className="mt-5 space-y-3">
              {rnSpecialist.weDo.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] text-sand-100">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center bg-ember-500 text-ink-950"><Check className="h-3 w-3" /></span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-concrete-800 p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-clay-300">Needs a specialist</h3>
            <dl className="mt-5 divide-y divide-sand-50/10">
              {rnSpecialist.specialist.map((s) => (
                <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="font-serif text-xl">{s.label}</dt>
                  <dd className="text-sm leading-relaxed text-sand-200">
                    {s.text}
                    {"href" in s && s.href && (
                      <>
                        {" "}
                        <Link href={s.href} className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-ember-500 underline-offset-4">{s.linkLabel}</Link>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sand-300">
          If an assessment shows structural concerns, we&rsquo;ll tell you before any work is
          agreed. Please don&rsquo;t remove walls, open up structure or alter gas or
          electrical systems yourself — these need qualified professionals.
        </p>
      </div>
    </section>
  );
}

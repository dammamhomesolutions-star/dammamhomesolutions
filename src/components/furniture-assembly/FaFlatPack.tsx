import { faBeforeBox, faDamaged, faFlatPack, faMissing } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

export default function FaFlatPack() {
  return (
    <section id="flat-pack" aria-label="Flat-pack assembly, missing parts and damaged parts" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-walnut-700">Flat-pack</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Flat-pack furniture assembly</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Small pieces are manageable on your own. Large wardrobes,
              multi-section units and anything with many doors and drawers are
              where an experienced pair of hands saves time and avoids
              misaligned doors, stripped holes and wobbly frames.
            </p>
          </div>
          <ol className="grid gap-2 sm:grid-cols-3 lg:col-span-7">
            {faFlatPack.map((s, i) => (
              <li key={s} className="flex items-center gap-3 rounded-xl bg-walnut-100/60 p-3.5 text-sm text-ink-800">
                <span className="font-mono text-xs text-walnut-700">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10">
          <div className="flex items-center gap-3">
            <FaIcon name="box" className="h-8 w-8 text-walnut-300" />
            <h2 className="font-serif text-3xl tracking-tight">Before starting furniture assembly</h2>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {faBeforeBox.map((b) => (
              <li key={b} className="flex gap-2 rounded-xl bg-ink-900 p-3 text-sm text-sand-100">
                <FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-300" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <FaIcon name="screw" className="h-7 w-7 text-walnut-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What if parts or hardware are missing?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {faMissing.map((m) => <li key={m} className="rounded-full bg-walnut-100 px-3 py-1 text-sm text-ink-800">{m}</li>)}
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
              Assembly may need to pause if a required or safety-critical part
              is missing. We won&rsquo;t improvise structural hardware or swap
              manufacturer-specific fittings for random alternatives — we&rsquo;ll
              help you identify exactly what to request from the seller.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <FaIcon name="alert" className="h-7 w-7 text-walnut-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What if a furniture part arrives damaged?</h2>
            <ul className="mt-4 space-y-1.5">
              {faDamaged.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-ink-800"><FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-600" />{d}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-600">
              Assembly doesn&rsquo;t automatically include repair, but we do repair
              furniture — if a minor fix is suitable, we&rsquo;ll quote it separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

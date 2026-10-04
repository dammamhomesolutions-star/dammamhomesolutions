import ScIcon from "./ScIcon";
import type { ScIconName } from "@/lib/sofa-carpet-cleaning";

const odorSources = ["Spilled liquids", "Food residue", "Moisture", "Pet-related contamination", "Embedded dirt", "Residue from previous cleaning", "Material condition"];

const dryChain: { label: string; icon: ScIconName }[] = [
  { label: "Cleaning", icon: "machine" },
  { label: "Moisture removal", icon: "drop" },
  { label: "Airflow", icon: "wind" },
  { label: "Drying", icon: "calendar" },
  { label: "Ready to use", icon: "check" },
];

const dryFactors = ["Cleaning method", "Material", "Moisture level", "Room ventilation", "Temperature", "Humidity", "Fabric or carpet construction"];

const overWet = ["Longer drying", "Moisture left in the backing or foam", "Material distortion", "Odour", "Colour problems", "Secondary damage"];

export default function ScOdorDrying() {
  return (
    <section aria-label="Odour, drying and moisture" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-16">
        {/* Odour */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-glass-700">Odour</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Why does the sofa or carpet still smell after cleaning?
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-ink-600">
              Smells usually come from something inside the material — a spill
              that reached the foam or underlay, residue, or moisture that
              hasn&rsquo;t dried. Odour treatment starts with finding the source
              rather than covering the smell with fragrance. It can often be
              greatly reduced, but complete removal isn&rsquo;t possible in
              every case.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {odorSources.map((o) => (
                <li key={o} className="flex items-center gap-1.5 rounded-full bg-glass-100 px-3 py-1 text-sm text-glass-900">
                  <ScIcon name="odor" className="h-3.5 w-3.5" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drying */}
        <div className="rounded-2xl bg-glass-800 p-6 text-sand-50 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="section-label !text-glass-300">Drying</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight">How long will a sofa or carpet take to dry?</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-glass-100">
                There&rsquo;s no single drying time. We&rsquo;ll give you
                guidance for your item on the day. It depends on:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dryFactors.map((f) => (
                  <li key={f} className="rounded-full bg-sand-50/10 px-3 py-1 text-xs">{f}</li>
                ))}
              </ul>
            </div>
            <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:col-span-7">
              {dryChain.map((d, i) => (
                <li key={d.label} className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center">
                  <span className="group flex h-14 w-14 flex-none items-center justify-center rounded-full border border-glass-300/50 bg-glass-900 text-glass-300">
                    <ScIcon name={d.icon} />
                  </span>
                  <span className="text-sm">
                    <span className="mr-1 font-mono text-xs text-glass-300">{i + 1}</span>
                    {d.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Over-wetting */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-glass-700">Moisture</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">More water doesn&rsquo;t mean a better clean</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-ink-600">
              Too much moisture can cause problems for some upholstery and
              carpet constructions. It doesn&rsquo;t always happen, but it&rsquo;s
              why the method and moisture level are matched to the material —
              and why we use low-moisture cleaning where it suits better.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Possible concerns with over-wetting</p>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-ink-800">
              {overWet.map((o) => (
                <li key={o} className="flex gap-2">
                  <ScIcon name="drop" className="mt-0.5 h-4 w-4 flex-none text-glass-600" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

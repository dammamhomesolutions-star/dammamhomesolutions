import DcIcon from "./DcIcon";

const regular = ["Everyday dust", "Floors", "Visible surfaces", "Routine bathroom cleaning", "Kitchen surfaces", "General upkeep"];
const deep = [
  "Buildup",
  "Corners and edges",
  "Cabinet fronts and tops",
  "Fixtures and fittings",
  "Hard-to-reach accessible areas",
  "Detailed kitchen cleaning",
  "Detailed bathroom cleaning",
  "Areas not cleaned often",
];

export default function DcDeepVsRegular() {
  return (
    <section aria-labelledby="dc-dvr" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-mint-700">Frequency vs depth</p>
          <h2 id="dc-dvr" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What&rsquo;s the difference between regular cleaning and deep cleaning?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Regular cleaning works — it keeps a home in good order week to
            week. Deep cleaning is a less frequent, more detailed job that
            reaches the buildup and places regular cleaning isn&rsquo;t meant
            to cover. Most homes need both, on different schedules.
          </p>
        </div>

        {/* Depth gauge: regular covers the surface layer, deep reaches further */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink-950">Regular cleaning</h3>
              <DcIcon name="cloth" className="h-6 w-6 text-mint-700" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-sand-300" aria-hidden="true">
              <div className="h-2 w-2/5 rounded-full bg-mint-500" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500">Usually weekly · surface level</p>
            <ul className="mt-5 space-y-2 text-sm text-ink-700">
              {regular.map((r) => (
                <li key={r} className="flex gap-2">
                  <DcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-mint-600" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-mint-800 p-6 text-sand-50">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Deep cleaning</h3>
              <DcIcon name="brush" className="h-6 w-6 text-mint-300" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-mint-900" aria-hidden="true">
              <div className="h-2 w-full rounded-full bg-mint-300" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-mint-300">Occasional · detailed</p>
            <ul className="mt-5 space-y-2 text-sm text-mint-100">
              {deep.map((d) => (
                <li key={d} className="flex gap-2">
                  <DcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-mint-300" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

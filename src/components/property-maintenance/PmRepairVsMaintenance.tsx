const repairExamples = [
  "A leaking tap",
  "A broken switch",
  "AC not cooling",
  "A damaged wall",
  "A door that won't close",
];

const maintenanceExamples = [
  "Recurring AC issues",
  "Worn fixtures",
  "Early moisture signs",
  "Loose hardware",
  "Deteriorating surfaces",
  "Property items that need periodic attention",
];

export default function PmRepairVsMaintenance() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Repair vs. maintenance</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Repair fixes today&rsquo;s problem. Maintenance looks at what
            comes next.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-wide text-ink-400">R.</p>
            <h3 className="mt-2 font-serif text-xl text-ink-950">Repair</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Something has already gone wrong.
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-ink-900/10 pt-5">
              {repairExamples.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-ink-900/10 lg:pl-10">
            <p className="font-mono text-xs tracking-wide text-moss-700">M.</p>
            <h3 className="mt-2 font-serif text-xl text-ink-950">Maintenance</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Something needs attention before it becomes an urgent repair.
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-ink-900/10 pt-5">
              {maintenanceExamples.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm italic text-ink-500">
          Not every maintenance visit catches every hidden fault. The aim is
          to give small issues a better chance of being noticed early — not
          to promise that nothing will go wrong.
        </p>
      </div>
    </section>
  );
}

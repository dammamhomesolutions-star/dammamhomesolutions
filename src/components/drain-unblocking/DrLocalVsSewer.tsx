import DrIcon from "./DrIcon";
import DrCtas from "./DrCtas";

const local = ["One fixture affected", "Slow drainage from one place", "Build-up close to the fixture", "Hair, debris or grease near the drain", "Problem confined to one branch"];
const deeper = ["Several fixtures affected", "Repeated backups", "Wastewater coming back up", "Gurgling from several drains", "Persistent sewer odour", "Outdoor or main drain problems", "Blockage returns soon after clearing"];

export default function DrLocalVsSewer() {
  return (
    <section aria-labelledby="dr-lvs" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">The key question</p>
          <h2 id="dr-lvs" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">One blocked drain or a sewer line problem?</h2>
        </div>
        <div className="relative mt-10 grid gap-6 lg:grid-cols-2 lg:gap-0">
          <div className="rounded-2xl border border-ink-900/10 bg-teal-100/40 p-6 sm:p-8 lg:rounded-r-none">
            <div className="flex items-center gap-3 text-teal-800">
              <DrIcon name="drain" className="h-8 w-8" />
              <h3 className="font-serif text-2xl text-ink-950">Local drain blockage</h3>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">Typical signs</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-800">
              {local.map((l) => (
                <li key={l} className="flex gap-2">
                  <DrIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:rounded-l-none">
            <div className="flex items-center gap-3 text-ember-500">
              <DrIcon name="sewer" className="h-8 w-8" />
              <h3 className="font-serif text-2xl">Deeper drainage / sewer problem</h3>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-ember-500">Potential signs</p>
            <ul className="mt-4 space-y-2 text-sm text-sand-100">
              {deeper.map((l) => (
                <li key={l} className="flex gap-2">
                  <DrIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-sand-50 bg-teal-700 font-serif text-sm text-sand-50 lg:flex"
          >
            or
          </span>
        </div>
        <p className="mt-6 text-sm font-medium text-ink-700">These are warning patterns, not a remote diagnosis.</p>
        <DrCtas className="mt-6" primaryLabel="Request an Assessment" />
      </div>
    </section>
  );
}

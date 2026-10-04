import DcIcon from "./DcIcon";

const before = [
  "Put away valuables and important documents",
  "Clear personal belongings where possible",
  "Point out fragile or delicate surfaces",
  "Tell the team about any areas needing special care",
  "Remove food from exposed surfaces",
  "Keep pets away from active work areas",
  "Make sure we have access, water and electricity",
  "Confirm any add-ons you've requested",
];

const moveOut = [
  "Remove all personal belongings",
  "Remove rubbish",
  "Empty cabinets if they're being cleaned inside",
  "Empty and switch off the fridge and freezer if included",
  "Make sure every room is accessible",
];

const walkthrough = ["Kitchen", "Bathrooms", "Floors", "Cabinets", "Doors", "Visible surfaces", "Requested add-ons"];

export default function DcPrepare() {
  return (
    <section aria-label="Preparing for the clean and checking afterwards" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-mint-700">Before</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How to prepare your property for deep cleaning</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Any clean</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-800">
                {before.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 text-mint-700">
                      <DcIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Move-out, additionally</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-800">
                {moveOut.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 text-mint-700">
                      <DcIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-mint-100/70 p-6">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950">Cleaning that fits the property</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              The products and methods used depend on the surface, the type of
              buildup and what&rsquo;s needed. Marble, natural stone, wood and
              some finishes need gentler handling than tiles or stainless
              steel, so tell us about them in advance. If anyone in the home
              has allergies or sensitivities, mention it when you book.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <p className="section-label !text-mint-300">After</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">What should you check before the team leaves?</h2>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {walkthrough.map((w) => (
                <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50/5 px-3 py-2 text-sm">
                  <DcIcon name="search" className="h-4 w-4 text-mint-300" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-300">
              Walk through against the agreed scope, and tell the team if a
              requested area needs more attention before the job is closed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

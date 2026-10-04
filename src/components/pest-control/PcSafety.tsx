import PcIcon from "./PcIcon";
import PcCtas from "./PcCtas";

const dependsOn = [
  "The product used",
  "How it's applied",
  "Where it's applied",
  "Concentration",
  "How people or pets could be exposed",
  "Ventilation",
  "Re-entry instructions",
];

const youShould = [
  "Follow the technician's instructions",
  "Follow the product-label directions",
  "Keep children and pets away from treated areas for as long as instructed",
  "Store food, dishes and utensils as advised",
  "Avoid touching treated surfaces until told it's okay",
  "Ask before cleaning treated areas",
];

export default function PcSafety() {
  return (
    <section id="safety" aria-labelledby="pc-safety" className="border-b border-ink-900/10 bg-moss-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-moss-200">Safety</p>
          <h2 id="pc-safety" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            Is pest control safe around children and pets?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-moss-100/90">
            There&rsquo;s no honest one-word answer, and you should be wary of
            anyone who says &ldquo;100% safe&rdquo;. Safety depends on the
            treatment and on following its precautions. We explain those for
            your treatment before we start, including when it&rsquo;s okay to
            return.
          </p>
          <p className="mt-6 rounded-xl bg-moss-800 p-4 text-sm leading-relaxed text-moss-100">
            Tell us in advance about babies, pregnancy, pets, fish tanks,
            allergies or breathing conditions in the home so the approach can
            take them into account.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          <div className="rounded-2xl bg-moss-800/70 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">Safety depends on</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dependsOn.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-moss-200" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 text-ink-900">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-moss-700">What you should do</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {youShould.map((y) => (
                <li key={y} className="flex gap-2">
                  <PcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                  {y}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-relaxed text-moss-100/90 sm:col-span-2">
            Treatment precautions and re-entry guidance depend on the treatment
            used. Follow the technician&rsquo;s instructions and the product label.
          </p>
          <PcCtas tone="dark" className="sm:col-span-2" />
        </div>
      </div>
    </section>
  );
}

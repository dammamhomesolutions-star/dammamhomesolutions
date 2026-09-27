import { propertyProblemExamples, safetyEmergencyExamples } from "@/lib/emergency-repairs";

export default function EhEmergencyVsProperty() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Two different situations</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not every urgent repair is a life-safety emergency.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
          <div className="bg-sand-50 p-7">
            <h3 className="font-serif text-lg text-ink-950">Property problem</h3>
            <ul className="mt-5 space-y-2.5">
              {propertyProblemExamples.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-ember-600 bg-sand-50 p-7 sm:border-t-0 sm:border-l-2">
            <h3 className="font-serif text-lg text-ink-950">Immediate safety emergency</h3>
            <ul className="mt-5 space-y-2.5">
              {safetyEmergencyExamples.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-500">
          If you&rsquo;re dealing with the right-hand list, prioritise safety
          and contact the appropriate emergency service — this page isn&rsquo;t
          a substitute for that.
        </p>
      </div>
    </section>
  );
}

export default function PcDirectAnswer() {
  return (
    <section aria-labelledby="pc-know" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid gap-8 py-14 sm:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label !text-moss-700">Short answer</p>
          <h2 id="pc-know" className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
            How do I know if I have a pest infestation?
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="border-l-4 border-moss-600 pl-5 text-[17px] leading-relaxed text-ink-900">
            Repeated sightings, droppings, nesting evidence, damaged
            materials, unusual odors or activity in several areas can indicate
            an infestation. A professional inspection can identify the pest
            and find where the activity is coming from.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-600">
            Pest control is the work of identifying a pest, treating the
            places it lives and feeds, and reducing the conditions — food,
            water, shelter and entry points — that let it come back. The last
            part is what makes the difference between a quiet few weeks and a
            lasting result.
          </p>
        </div>
      </div>
    </section>
  );
}

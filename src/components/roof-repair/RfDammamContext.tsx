export default function RfDammamContext() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
          <div>
            <p className="section-label !text-teal-700">Local context</p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
              Rooftop repair for existing properties in Dammam
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-ink-700">
            <p>
              Many villas and buildings across Dammam have a flat or
              lightly-sloped rooftop that&rsquo;s rarely looked at closely
              until something changes — a stain appears on a ceiling below,
              water starts collecting after rain, or the surface looks
              different than it used to.
            </p>
            <p>
              Because a rooftop isn&rsquo;t something most residents check
              regularly, changes can go unnoticed for a while. That&rsquo;s
              part of why we work from what you&rsquo;ve noticed — a photo, a
              description, a rough sense of when it started — rather than
              asking you to climb up and inspect it yourself.
            </p>
            <p>
              The first useful step is usually the same: tell us what
              changed, where, and roughly when.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

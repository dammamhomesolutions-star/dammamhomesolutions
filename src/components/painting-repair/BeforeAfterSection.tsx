import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Surface, prepared, finished</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Drag to compare.
          </h2>
          <p className="mt-4 text-ink-700">
            A damaged surface, and the same surface once it&rsquo;s been
            prepared and finished.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}

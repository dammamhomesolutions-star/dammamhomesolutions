import PlumbingPathVisual from "./PlumbingPathVisual";

export default function FollowTheWaterSection() {
  return (
    <section className="bg-ink-950 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
            How we think about a leak
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Follow the water, not just the stain.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            A plumbing problem can travel before it becomes visible — along
            a pipe run, across a floor, up inside a wall. What you see is
            real, but it isn&rsquo;t always where the issue actually is.
            Not every leak follows the same path, so this is one example
            rather than a fixed rule.
          </p>
          <p className="mt-4 text-sm text-ink-400">
            Not all indoor moisture is plumbing, either — a damp patch near
            a wall-mounted unit can be condensation or drainage from the
            AC rather than a pipe. See{" "}
            <a
              href="/ac-repair/"
              className="text-teal-400 underline underline-offset-4 hover:text-teal-300"
            >
              AC repair &amp; maintenance
            </a>{" "}
            if that looks more likely.
          </p>
        </div>

        <div className="mt-10">
          <PlumbingPathVisual />
          <p className="mt-4 text-sm text-ink-400">
            Visible moisture is a symptom. The source needs to be assessed.
          </p>
        </div>
      </div>
    </section>
  );
}

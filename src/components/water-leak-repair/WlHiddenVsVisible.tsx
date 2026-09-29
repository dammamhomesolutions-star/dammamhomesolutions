export default function WlHiddenVsVisible() {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-300">A small sign, a bigger picture</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            What you can see is rarely the whole story.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-md border border-sand-50/10 bg-ink-900/60 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-400">What you notice</p>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-200">
              <li>A small damp patch</li>
              <li>A faint stain</li>
              <li>A slightly higher bill</li>
              <li>A sound you can&rsquo;t quite place</li>
            </ul>
          </div>
          <div className="rounded-md border border-copper-600/40 bg-copper-900/20 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-copper-300">What might actually be happening</p>
            <ul className="mt-4 space-y-3 text-[15px] text-sand-100">
              <li>Water moving along a pipe or joist</li>
              <li>A leak that&rsquo;s been active for a while</li>
              <li>A source some distance from the sign</li>
              <li>Something worth confirming before it grows</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-400">
          None of this means every small sign is a serious leak — many aren&rsquo;t.
          It just means the visible sign isn&rsquo;t enough on its own to say
          where the problem is, or how far it&rsquo;s gone.
        </p>
      </div>
    </section>
  );
}

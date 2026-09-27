const signs = [
  {
    tag: "S-01",
    title: "A new stain",
    body: "Could be worth investigating rather than simply painting over it.",
  },
  {
    tag: "S-02",
    title: "A door slowly becoming harder to close",
    body: "Could indicate a change in alignment, hardware or the door itself.",
  },
  {
    tag: "S-03",
    title: "A tap that has started dripping",
    body: "A small issue that deserves attention.",
  },
  {
    tag: "S-04",
    title: "AC performance gradually changing",
    body: "A useful reason to review the system rather than waiting for complete failure.",
  },
  {
    tag: "S-05",
    title: "Paint beginning to peel",
    body: "The surface condition may matter before repainting.",
  },
];

export default function PmSmallSigns() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Worth noticing</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not every problem announces itself.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {signs.map((sign) => (
            <div key={sign.tag} className="grid gap-2 py-6 sm:grid-cols-[100px_1fr] sm:gap-8">
              <span className="font-mono text-xs text-moss-600">{sign.tag}</span>
              <div>
                <h3 className="font-serif text-lg text-ink-950">{sign.title}</h3>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-600">
                  {sign.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-xl text-sm text-ink-500">
          None of this points to a specific cause without a closer look — it&rsquo;s
          simply worth checking rather than waiting.
        </p>
      </div>
    </section>
  );
}

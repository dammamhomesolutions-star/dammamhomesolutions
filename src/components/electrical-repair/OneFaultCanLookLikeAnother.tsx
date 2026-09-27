const examples = [
  {
    symptom: "A light is off",
    cause:
      "the issue may involve the fixture, the switch, a connection, or the supply to that point.",
  },
  {
    symptom: "A socket has no power",
    cause:
      "the cause may be local to that socket or related to another part of the same circuit.",
  },
  {
    symptom: "A breaker keeps tripping",
    cause:
      "the underlying cause needs to be assessed rather than repeatedly reset and hoped away.",
  },
];

export default function OneFaultCanLookLikeAnother() {
  return (
    <section className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-blue-700">Why we ask before we assume</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The thing that stopped working isn&rsquo;t always the thing
            that failed.
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {examples.map((ex) => (
            <div key={ex.symptom} className="grid gap-2 sm:grid-cols-[280px_1fr] sm:items-baseline sm:gap-8">
              <p className="font-serif text-xl text-ink-950">{ex.symptom}</p>
              <p className="text-ink-700">
                <span aria-hidden="true" className="mr-2 text-blue-600">
                  →
                </span>
                {ex.cause}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-500">
          Occasionally a socket or switch near a damp wall is affected by
          moisture rather than the electrics themselves — if that seems
          more likely, our{" "}
          <a
            href="/waterproofing/"
            className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-blue-600"
          >
            waterproofing
          </a>{" "}
          service may be the more relevant place to start.
        </p>
      </div>
    </section>
  );
}

const answers = [
  {
    q: "What is deep cleaning?",
    a: "A more detailed cleaning service that focuses on buildup, less frequently cleaned areas and surfaces beyond routine housekeeping.",
  },
  {
    q: "What is move-in cleaning?",
    a: "Cleaning that prepares a property for occupancy before the new resident brings in their belongings.",
  },
  {
    q: "What is move-out cleaning?",
    a: "Cleaning that prepares a vacated property for handover, inspection or the next occupant.",
  },
];

export default function DcAnswers() {
  return (
    <section aria-label="Short answers" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge py-14 sm:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {answers.map((x) => (
            <div key={x.q} className="border-l-4 border-mint-600 pl-5">
              <h2 className="font-serif text-xl tracking-tight text-ink-950">{x.q}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-ink-600">
          Deep cleaning focuses on areas routine cleaning may not cover.
          Move-in and move-out cleaning focus on preparing a property before
          or after someone lives there, and making the handover easier. They
          overlap in method but solve different problems.
        </p>
      </div>
    </section>
  );
}

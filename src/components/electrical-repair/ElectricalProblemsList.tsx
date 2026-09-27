const problems = [
  {
    title: "Lighting problems",
    body: "Lights not working, flickering, or otherwise in need of repair.",
    size: "text-3xl sm:text-4xl",
  },
  {
    title: "Switches & sockets",
    body: "Faulty, damaged or non-functioning switches and outlets.",
    size: "text-2xl sm:text-3xl",
  },
  {
    title: "Breaker-related problems",
    body: "Recurring trips or loss of power that need a professional look before anything else.",
    size: "text-xl sm:text-2xl",
  },
  {
    title: "Electrical fixtures",
    body: "Installation or repair of supported household fixtures.",
    size: "text-lg sm:text-xl",
  },
  {
    title: "General electrical maintenance",
    body: "Everyday electrical faults that don't fit one specific category.",
    size: "text-base sm:text-lg",
  },
];

export default function ElectricalProblemsList() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label text-blue-700">Electrical problems we handle</p>

        <div className="mt-10 space-y-7">
          {problems.map((p) => (
            <div key={p.title} className="border-b border-ink-900/10 pb-7 last:border-b-0">
              <h3 className={`font-serif tracking-tight text-ink-950 ${p.size}`}>{p.title}</h3>
              <p className="mt-2 max-w-xl text-ink-600">{p.body}</p>
              {p.title === "Electrical fixtures" && (
                <p className="mt-2 text-sm text-ink-500">
                  If a fixture change leaves a mark on the wall or ceiling
                  around it, our{" "}
                  <a
                    href="/general-home-repairs/"
                    className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-blue-600"
                  >
                    general home repairs
                  </a>{" "}
                  service covers that part.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

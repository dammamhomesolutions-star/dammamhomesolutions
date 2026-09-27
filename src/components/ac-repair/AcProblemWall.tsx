interface Problem {
  title: string;
  body: string;
}

const problems: Problem[] = [
  {
    title: "AC not cooling",
    body: "Air still moves, but the room doesn't reach a comfortable temperature.",
  },
  {
    title: "Weak airflow",
    body: "The unit runs, but very little air actually reaches the room.",
  },
  {
    title: "Water leakage",
    body: "Water appears on or under the indoor unit, or on the wall beneath it.",
  },
  {
    title: "Unusual noise",
    body: "Buzzing, rattling or clicking that wasn't there before.",
  },
  {
    title: "Bad smell",
    body: "A smell that appears specifically when the AC is running.",
  },
  {
    title: "Frequent stopping",
    body: "The unit switches off and restarts on its own.",
  },
  {
    title: "Poor cooling performance",
    body: "The room cools, but slower or less effectively than it used to.",
  },
  {
    title: "Thermostat / control issues",
    body: "Settings that don't respond the way they should.",
  },
  {
    title: "Filter / cleaning-related issues",
    body: "Reduced performance linked to a dirty or blocked filter.",
  },
  {
    title: "General AC maintenance",
    body: "Routine cleaning and checks, with no active fault yet.",
  },
];

export default function AcProblemWall() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-sky-700">AC problems we handle</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Most AC calls come down to one of these.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`border-t border-ink-900/15 pt-5 ${
                i % 2 === 1 ? "sm:mt-10" : ""
              }`}
            >
              <h3 className="font-serif text-lg text-ink-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
              {p.title === "Water leakage" && (
                <p className="mt-2 text-sm text-ink-500">
                  If the water is coming from a wall or ceiling rather than
                  the unit itself, that&rsquo;s more likely a{" "}
                  <a
                    href="/plumbing-repair/"
                    className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-sky-600"
                  >
                    plumbing
                  </a>{" "}
                  or{" "}
                  <a
                    href="/waterproofing/"
                    className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-sky-600"
                  >
                    waterproofing
                  </a>{" "}
                  issue.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

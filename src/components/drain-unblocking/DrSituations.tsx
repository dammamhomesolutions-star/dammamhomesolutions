import Link from "next/link";
import { drSituations } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

export default function DrSituations() {
  return (
    <section aria-labelledby="dr-situations" className="border-b border-ink-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">By situation</p>
          <h2 id="dr-situations" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What you&rsquo;re dealing with — and what it usually means</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {drSituations.map((s, i) => {
            const dark = s.key === "backup" || s.key === "multiple";
            return (
              <article
                key={s.key}
                id={`drain-${s.key}`}
                className={`rounded-2xl p-6 sm:p-7 ${dark ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50"}`}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${dark ? "bg-teal-300 text-ink-950" : "bg-teal-100 text-teal-800"}`}>
                    <DrIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight">{s.title}</h3>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>{s.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className={`rounded-full px-3 py-1 text-xs ${dark ? "bg-sand-50/10" : "bg-concrete-100 text-ink-800"}`}>{p}</li>
                  ))}
                </ul>
                {s.key === "backup" && (
                  <p className="mt-4 text-sm text-ink-300">
                    If water has already damaged floors or walls, see{" "}
                    <Link href="/water-leak-repair/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-teal-300 underline-offset-4">
                      water damage &amp; leak repair
                    </Link>
                    .
                  </p>
                )}
                {i === 0 && (
                  <a href="#drain-service" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-ink-950">
                    Request a Drainage Assessment
                    <DrIcon name="arrow" className="h-4 w-4" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

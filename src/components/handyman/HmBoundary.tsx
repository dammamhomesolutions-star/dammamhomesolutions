import Link from "next/link";
import { hmCostFactors, hmSpecialist } from "@/lib/handyman";
import HmIcon from "./HmIcon";

const linkClass = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700";

export default function HmBoundary() {
  return (
    <section aria-label="Handyman versus specialist, and cost" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-ember-100/60 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Handyman</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Good for the list of smaller jobs</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">Installing, assembling, adjusting and minor repairs and swaps — several of them in one visit.</p>
          </div>
          <div className="rounded-[2rem] bg-ink-950 p-6 text-sand-50 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">Specialist</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Better for bigger, technical work</h2>
            <ul className="mt-4 grid gap-1.5 text-sm text-ink-300 sm:grid-cols-2">{hmSpecialist.map((s) => <li key={s} className="flex gap-2"><HmIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />{s}</li>)}</ul>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-700">
          If something on your list needs more than a handyman, we&rsquo;ll say so
          and point it to the right service — such as{" "}
          <Link href="/electrical-repair/" className={linkClass}>electrical repair</Link>,{" "}
          <Link href="/plumbing-repair/" className={linkClass}>plumbing repair</Link>{" "}
          or{" "}
          <Link href="/ac-repair/" className={linkClass}>AC repair</Link>. Bigger single jobs have their own pages too:{" "}
          <Link href="/furniture-assembly-dammam/" className={linkClass}>furniture assembly</Link>,{" "}
          <Link href="/curtain-blind-installation-dammam/" className={linkClass}>curtains &amp; blinds</Link>,{" "}
          <Link href="/lighting-fixture-installation-dammam/" className={linkClass}>lighting installation</Link>{" "}
          and{" "}
          <Link href="/painting-wall-repair/" className={linkClass}>painting &amp; wall repair</Link>.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Cost</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What determines handyman service cost?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">We don&rsquo;t publish hourly rates or guesses. We review your full list and quote it as a whole.</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:col-span-7">
            {hmCostFactors.map((f, i) => (
              <li key={f} className="flex min-h-[96px] flex-col justify-between rounded-2xl bg-sand-100 p-3.5">
                <span className="font-mono text-[11px] text-ember-700">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium leading-tight text-ink-900">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

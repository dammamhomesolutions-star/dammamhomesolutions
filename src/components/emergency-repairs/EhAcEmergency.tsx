import Link from "next/link";
import { acEmergencySymptoms } from "@/lib/emergency-repairs";

export default function EhAcEmergency() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-ember-700">AC</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          When the AC suddenly stops.
        </h2>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {acEmergencySymptoms.map((symptom) => (
            <span
              key={symptom}
              className="rounded-full border border-ink-900/15 bg-sand-50 px-4 py-1.5 text-sm text-ink-700"
            >
              {symptom}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-ink-600">
          The visible symptom doesn&rsquo;t always identify the cause — two
          different faults can look the same from the room.
        </p>

        <Link
          href="/ac-repair/"
          className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          AC Repair
        </Link>
      </div>
    </section>
  );
}

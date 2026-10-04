import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import MdReveal from "./MdReveal";
import { Arrow, Drop } from "./MdUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, I have a damp or mold problem. I'll send photos of the affected area.");

const states = [
  { label: "Healthy wall", fill: "bg-sand-100", mark: "" },
  { label: "Damp wall", fill: "bg-glass-200", mark: "bg-[radial-gradient(ellipse_at_40%_40%,rgba(91,125,143,0.55),transparent_65%)]" },
  { label: "Mold-affected area", fill: "bg-glass-200", mark: "bg-[radial-gradient(circle_at_30%_60%,#2b2f33_0_3px,transparent_4px),radial-gradient(circle_at_55%_70%,#4d545c_0_2px,transparent_3px),radial-gradient(circle_at_42%_48%,#2b2f33_0_2px,transparent_3px),radial-gradient(ellipse_at_40%_50%,rgba(91,125,143,0.5),transparent_70%)]" },
];

export default function MdHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-glass-100">
      <div className="container-edge relative">
        <nav aria-label="Breadcrumb" className="pt-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-glass-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services/" className="focus-ring rounded-sm hover:text-glass-700">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-800" aria-current="page">Mold &amp; Damp Treatment</li>
          </ol>
        </nav>

        <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-14">
          <div className="animate-fadeUp lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-glass-700/30 bg-sand-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-glass-800">
              <Drop className="h-3.5 w-3.5" /> The wall is showing the symptom
            </p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.03] tracking-tight text-ink-950 sm:text-6xl">
              Mold &amp; Damp Treatment in Dammam
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 sm:text-base">
              Persistent dampness, musty areas, staining, peeling finishes and
              visible mold can have different causes. Identify the affected area,
              understand the possible moisture source, and plan the appropriate
              treatment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#report" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-lg bg-glass-900 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-ink-950">
                Request a Damp Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-glass-900/25 bg-sand-50 px-6 py-3.5 text-sm font-semibold text-glass-900 hover:border-glass-900">
                Send Photos
              </a>
            </div>

            <ol className="mt-10 grid grid-cols-3 gap-2" aria-label="From healthy to affected">
              {states.map((s, i) => (
                <li key={s.label}>
                  <span aria-hidden="true" className={`relative block h-14 overflow-hidden rounded-md border border-ink-900/10 ${s.fill}`}>
                    {s.mark && <span className={`absolute inset-0 ${s.mark}`} />}
                  </span>
                  <span className="mt-1.5 block text-[11px] leading-tight text-ink-600"><span className="font-mono text-glass-700">0{i + 1}</span> {s.label}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="animate-fadeIn [animation-delay:150ms] lg:col-span-7">
            <MdReveal />
          </div>
        </div>
      </div>
    </section>
  );
}

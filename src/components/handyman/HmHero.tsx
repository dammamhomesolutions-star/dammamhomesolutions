import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import HmBoard from "./HmBoard";
import HmIcon from "./HmIcon";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, I have a few handyman jobs. I'll send photos of each one.");

export default function HmHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-sand-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-edge relative">
        <nav aria-label="Breadcrumb" className="pt-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-ember-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/#services" className="focus-ring rounded-sm hover:text-ember-700">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-800" aria-current="page">Handyman Services</li>
          </ol>
        </nav>
        <div className="grid gap-10 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-14">
          <div className="animate-fadeUp lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ember-500">
              <HmIcon name="pin" className="h-3.5 w-3.5" /> One visit · multiple jobs · less hassle
            </p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink-950 sm:text-6xl">
              Handyman Services in Dammam
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700 sm:text-base">
              Got a list of small home or property jobs? Tell us what needs
              attention — installing, assembling, adjusting or fixing — and
              build one service request for the whole list.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#tasks" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:-translate-y-0.5">
                Build My Job List <HmIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-900 hover:bg-ink-900/5">
                <HmIcon name="camera" className="h-4 w-4" /> Send Photos
              </a>
            </div>
          </div>
          <div className="animate-fadeIn [animation-delay:150ms] lg:col-span-7">
            <HmBoard />
          </div>
        </div>
      </div>
    </section>
  );
}

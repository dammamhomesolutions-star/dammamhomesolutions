import Link from "next/link";
import { buildTelLink } from "@/lib/site-config";
import HmIcon from "./HmIcon";

const linkClass = "focus-ring rounded-sm font-semibold text-sand-50 underline decoration-ember-500 decoration-2 underline-offset-4";

export default function HmFinalCta() {
  return (
    <>
      <section aria-label="More services" className="bg-sand-100 py-12">
        <p className="container-edge max-w-3xl text-sm leading-relaxed text-ink-700">
          For one bigger job, see{" "}
          <Link href="/general-home-repairs/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">general home repairs</Link>
          ,{" "}
          <Link href="/wallpaper-installation-dammam/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">wallpaper installation</Link>{" "}
          or{" "}
          <Link href="/appliance-repair-dammam/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">appliance repair</Link>
          . Landlords and compounds can set up recurring visits through{" "}
          <Link href="/property-maintenance/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">property maintenance</Link>
          . Read more{" "}
          <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">about us</Link>{" "}
          or{" "}
          <Link href="/contact-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4">contact us</Link>.
        </p>
      </section>
      <section aria-labelledby="hm-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-10 hidden rotate-6 rounded-lg bg-sand-50 p-4 text-ink-950 shadow-2xl sm:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">To do</p>
          <p className="mt-2 text-sm line-through decoration-ember-600">Curtains</p>
          <p className="text-sm line-through decoration-ember-600">Shelves</p>
          <p className="text-sm line-through decoration-ember-600">Wardrobe</p>
          <p className="text-sm">Everything else…</p>
        </div>
        <div className="container-edge relative max-w-3xl text-center">
          <h2 id="hm-final" className="font-serif text-3xl tracking-tight sm:text-6xl">Your to-do list, turned into one service request</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">You don&rsquo;t need to know which trade you need. Just tell us the things you need done.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#job-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
              Send My Job List <HmIcon name="arrow" className="h-4 w-4" />
            </a>
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
              <HmIcon name="phone" className="h-4 w-4" /> Call
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-400">Or <a href="#tasks" className={linkClass}>keep building your list</a>.</p>
        </div>
      </section>
    </>
  );
}

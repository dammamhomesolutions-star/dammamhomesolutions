import Link from "next/link";
import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";

const urgent = ["AC breakdowns", "Water leaks", "Plumbing emergencies", "Electrical faults", "Doors that won't lock", "Other urgent home problems"];

// 24/7 availability confirmed by the business. No response-time promises.
export default function HpEmergency() {
  return (
    <section aria-labelledby="hp-emergency" className="bg-rust-700 py-16 text-sand-50 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-sand-50/15 px-3 py-1 text-xs font-semibold">
            <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-sand-50 motion-reduce:animate-none" /> Available 24/7
          </p>
          <h2 id="hp-emergency" className="mt-5 font-serif text-3xl tracking-tight sm:text-5xl">Need an urgent home repair?</h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-rust-100">
            Message or call any time, day or night. Tell us what&rsquo;s happening and
            we&rsquo;ll arrange help. If there&rsquo;s danger to people — fire, gas or a
            serious electrical hazard — contact emergency services first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I have an urgent problem at home: ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-sand-50 px-7 py-4 text-sm font-semibold text-rust-700"
            >
              WhatsApp Now
            </a>
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-50/50 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">
              Call Now
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <ul className="grid grid-cols-2 gap-2">
            {urgent.map((u) => (
              <li key={u} className="rounded-xl bg-sand-50/10 px-4 py-3.5 text-sm font-semibold">{u}</li>
            ))}
          </ul>
          <Link href="/emergency-home-repairs/" className="focus-ring mt-5 inline-block rounded-sm text-sm font-semibold underline decoration-sand-50/60 underline-offset-4">
            What to do while you wait →
          </Link>
        </div>
      </div>
    </section>
  );
}

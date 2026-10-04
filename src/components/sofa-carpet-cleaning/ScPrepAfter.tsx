import Link from "next/link";
import ScIcon from "./ScIcon";

const prepAll = [
  "Remove small personal items",
  "Clear the floor around carpets and rugs",
  "Move fragile objects",
  "Point out stains and where they came from",
  "Tell us about any previous treatments or products used",
  "Point out delicate materials",
  "Keep children and pets away from the work area",
  "Make sure the room is accessible",
];
const prepSofa = ["Remove loose cushions and throws where appropriate", "Clear items from crevices and pockets", "Tell us about delicate areas or loose seams"];

const after = [
  "Allow time to dry before normal use",
  "Follow the technician's guidance for your item",
  "Avoid walking on damp carpet where possible",
  "Keep the room ventilated if advised",
  "Hold off putting heavy furniture back until told it's okay",
  "Follow any material-specific care instructions",
];

const dammam = [
  { title: "Dust", body: "Fine dust settles into fabric and pile between cleans." },
  { title: "Sand tracked indoors", body: "Entrances and hallway carpets collect it first." },
  { title: "Frequent AC use", body: "Air circulation keeps moving dust onto soft surfaces." },
  { title: "Busy living spaces", body: "Majlis and family-room sofas see heavy daily use." },
];

export default function ScPrepAfter() {
  return (
    <section aria-label="Preparation, after-care and Dammam context" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="section-label !text-glass-700">Before</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How to prepare before sofa or carpet cleaning</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <ul className="space-y-2.5 text-sm text-ink-800">
              {prepAll.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 text-glass-700">
                    <ScIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                <ScIcon name="sofa" className="h-4 w-4" /> For sofas
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-800">
                {prepSofa.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 text-glass-700">
                      <ScIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <p className="section-label !text-glass-700">Local context</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Sofa &amp; carpet cleaning in Dammam</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              We clean sofas, carpets and rugs in homes and commercial spaces
              across Dammam, in the Eastern Province of Saudi Arabia. Tell us
              your neighbourhood and we&rsquo;ll confirm we can reach you.
              Learn more{" "}
              <Link href="/about-us/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
                about Dammam Home Solutions
              </Link>
              .
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {dammam.map((d) => (
                <li key={d.title} className="rounded-xl bg-glass-100/70 p-4">
                  <h3 className="text-sm font-semibold text-ink-950">{d.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
            <p className="section-label !text-glass-300">After</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight">After your sofa or carpet is cleaned</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {after.map((a) => (
                <li key={a} className="flex gap-2">
                  <ScIcon name="wind" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-300">
              Drying and care advice differ by material and method, so we give
              instructions for your item rather than one rule for everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

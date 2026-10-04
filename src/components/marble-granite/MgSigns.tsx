import { buildWhatsAppLink } from "@/lib/site-config";
import { mgSigns } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

const photoHref = buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure what my marble / granite needs. I'll send a photo.");

export default function MgSigns() {
  return (
    <section aria-labelledby="mg-signs" className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-concrete-700">Quick answer</p>
          <h2 id="mg-signs" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does your marble or granite need polishing?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            If normal cleaning no longer brings the stone back and you&rsquo;re
            seeing any of these, it&rsquo;s worth an assessment. Dullness
            doesn&rsquo;t always mean the stone is permanently damaged.
          </p>
          <a
            href={photoHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-concrete-900 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:-translate-y-0.5"
          >
            Not sure? Send us a photo
            <MgIcon name="camera" className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
          {mgSigns.map((s) => (
            <li key={s} className="flex items-center gap-3 rounded-xl bg-concrete-100/70 p-3.5 text-sm text-ink-800">
              <MgIcon name="check" className="h-4 w-4 flex-none text-concrete-700" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

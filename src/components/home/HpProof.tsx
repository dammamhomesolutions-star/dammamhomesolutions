import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { projects, reviews } from "@/lib/proof";

// Recent projects and customer reviews. Renders nothing until real projects
// and genuine reviews are added to src/lib/proof.ts.
export default function HpProof() {
  if (!projects.length && !reviews.length) return null;

  return (
    <section aria-labelledby="hp-proof" className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-28">
      <div className="container-edge">
        {projects.length > 0 && (
          <>
            <p className="section-label">Recent work</p>
            <h2 id="hp-proof" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Recent home repair projects in Dammam</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.before.src} className="overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-50">
                  <div className="grid grid-cols-2">
                    {[p.before, p.after].map((img, i) => (
                      <figure key={img.src} className="relative aspect-square">
                        <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 16vw, 50vw" className="object-cover" />
                        <figcaption className="absolute left-2 top-2 rounded-full bg-ink-950/80 px-2 py-0.5 text-[11px] font-semibold text-sand-50">{i ? "After" : "Before"}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="p-5">
                    <Link href={p.href} className="focus-ring rounded-sm text-sm font-semibold text-rust-700 hover:underline">{p.service}</Link>
                    {p.area && <span className="text-xs text-ink-500"> · {p.area}</span>}
                    <p className="mt-2 text-sm text-ink-800"><strong>Problem:</strong> {p.problem}</p>
                    <p className="mt-1 text-sm text-ink-800"><strong>Work:</strong> {p.work}</p>
                    <p className="mt-1 text-sm text-ink-800"><strong>Result:</strong> {p.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {reviews.length > 0 && (
          <div className={projects.length ? "mt-20" : ""}>
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What our customers say</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.name + r.text.slice(0, 12)} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
                  <blockquote className="text-[15px] leading-relaxed text-ink-800">&ldquo;{r.text}&rdquo;</blockquote>
                  <p className="mt-4 text-sm font-semibold text-ink-950">{r.name}</p>
                  <p className="text-xs text-ink-500">{r.service}{r.area ? ` · ${r.area}` : ""}</p>
                </li>
              ))}
            </ul>
            {siteConfig.googleBusinessUrl && (
              <a href={siteConfig.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-block rounded-sm text-sm font-semibold text-ink-950 underline underline-offset-4">Read our reviews on Google</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

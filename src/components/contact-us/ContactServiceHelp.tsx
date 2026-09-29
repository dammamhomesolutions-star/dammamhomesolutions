import Link from "next/link";

export default function ContactServiceHelp() {
  return (
    <section className="border-t border-ink-900/10 bg-sand-100/50 py-16 sm:py-20">
      <div className="container-edge max-w-2xl text-center">
        <p className="section-label mx-auto !text-rust-700">Not sure who to ask?</p>
        <h2 className="mx-auto mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
          You don&rsquo;t need to know the exact service name.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
          A short description of the problem is enough to get started — we&rsquo;ll
          work out which part of the property it relates to. If you&rsquo;d
          rather browse first,{" "}
          <Link href="/#services" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
            see the full list of services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

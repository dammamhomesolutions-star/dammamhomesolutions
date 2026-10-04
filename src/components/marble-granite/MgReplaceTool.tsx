"use client";

import { useState } from "react";
import { mgReplaceQs } from "@/lib/marble-granite";
import MgCtas from "./MgCtas";
import MgIcon from "./MgIcon";

type Answer = "Yes" | "No" | "Not sure";

// Five yes/no questions; any "No" leans towards a repair / replacement assessment.
export default function MgReplaceTool() {
  const [ans, setAns] = useState<(Answer | "")[]>(mgReplaceQs.map(() => ""));
  const done = ans.every(Boolean);
  const noCount = ans.filter((a) => a === "No").length;
  const structuralNo = ans[0] === "No";

  const result = structuralNo
    ? { title: "The condition may justify a repair or replacement assessment.", body: "If the stone is cracked through, loose or broken, polishing alone won't fix it. Repair or re-laying may be needed first." }
    : noCount >= 2
      ? { title: "Worth assessing repair, restoration and replacement side by side.", body: "Some answers point beyond surface wear. We'll show you what restoration can achieve and when replacement makes more sense." }
      : { title: "Professional polishing or restoration may be worth assessing.", body: "The stone sounds sound, and the issues mainly affect its appearance — the kind of problem polishing and honing address." };

  return (
    <section id="polish-or-replace" aria-labelledby="mg-replace" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-700">Decision helper</p>
          <h2 id="mg-replace" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Should I polish or replace?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <ol className="space-y-3 lg:col-span-7">
            {mgReplaceQs.map((q, i) => (
              <li key={q} className="rounded-2xl border border-ink-900/10 p-4">
                <fieldset>
                  <legend className="text-sm font-semibold text-ink-950">{i + 1}. {q}</legend>
                  <div className="mt-3 flex gap-2">
                    {(["Yes", "No", "Not sure"] as Answer[]).map((a) => (
                      <label key={a} className={`cursor-pointer rounded-full border px-3.5 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-concrete-600 ${ans[i] === a ? "border-concrete-900 bg-concrete-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-concrete-600"}`}>
                        <input type="radio" name={`mg-r-${i}`} checked={ans[i] === a} onChange={() => setAns((s) => s.map((x, n) => (n === i ? a : x)))} className="sr-only" />
                        {a}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </li>
            ))}
          </ol>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {done ? (
                <div key={ans.join()} className="animate-fadeIn">
                  <MgIcon name={structuralNo ? "crack" : noCount >= 2 ? "replace" : "polish"} className="h-7 w-7 text-concrete-300" />
                  <p className="mt-3 font-serif text-2xl leading-snug">{result.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{result.body}</p>
                  <MgCtas tone="dark" className="mt-6" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer all five questions to see which way it leans. We&rsquo;ll never push polishing where replacement makes more sense.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">General guidance only — confirmed on site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

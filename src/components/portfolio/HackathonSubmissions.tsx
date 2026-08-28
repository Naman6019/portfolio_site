import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import type { HackathonSubmissionRecord } from "@/content/portfolio";
import { BorderBeam } from "@/components/magicui/border-beam";

export function HackathonSubmissions({ submissions }: { submissions: HackathonSubmissionRecord[] }) {
  return (
    <section className="atlas-card p-6 sm:p-8" aria-labelledby="hackathon-submissions-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="atlas-eyebrow">External review context</p>
          <h2 id="hackathon-submissions-heading" className="mt-4 text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">Hackathon submissions.</h2>
        </div>
        <BadgeCheck className="h-6 w-6 text-signal-primary" aria-hidden="true" />
      </div>
      <div className="mt-5">
        {submissions.map((submission) => (
          <article key={`${submission.projectSlug}-${submission.event}`} className="hackathon-row sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_auto] sm:items-center">
            <div>
              <p className="font-display text-lg font-bold text-foreground">{submission.projectTitle}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-dim">{submission.host} · {submission.platform}</p>
            </div>
            <p className="text-sm leading-6 text-foreground-muted">{submission.event}</p>
            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
              <span className="status-mark">{submission.status}</span>
              {submission.evidence[0] ? (
                <Link href={submission.evidence[0].href} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-blueprint-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary">
                  View Devpost <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-dim">Link pending</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <BorderBeam size={150} duration={10} colorFrom="var(--signal-primary)" colorTo="var(--blueprint-primary)" className="opacity-70" />
    </section>
  );
}

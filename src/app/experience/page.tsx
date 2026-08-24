import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, FileText, GraduationCap, MapPin } from "lucide-react";
import type { CareerEvidence } from "@/content/portfolio";
import { PortfolioFrame, SectionLabel } from "@/components/portfolio/PortfolioChrome";
import { achievements, credentials, education, experience, portfolioProfile } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career experience, education, and evidence for Naman Manocha.",
  alternates: { canonical: "/experience" },
  openGraph: { url: "/experience" },
};

function EvidenceLink({ source }: { source: CareerEvidence }) {
  const isDocument = source.kind === "document";

  return (
    <a
      href={source.href}
      download={isDocument ? true : undefined}
      target={isDocument ? undefined : "_blank"}
      rel={isDocument ? undefined : "noreferrer noopener"}
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface-raised px-3 py-2 font-mono text-[11px] font-bold text-cyan-primary transition-colors hover:border-cyan-primary/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary"
    >
      {isDocument ? <FileText className="h-3.5 w-3.5" aria-hidden="true" /> : <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
      {source.label}
      {!isDocument ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

export default function ExperiencePage() {
  const activeCredentialCount = credentials.filter((credential) => credential.status === "active").length;

  return (
    <PortfolioFrame>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionLabel>Career evidence</SectionLabel>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Experience, education, and the proof behind them.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-muted">A recruiter-readable timeline of the work, study, and current credential behind this independent AI engineering portfolio.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={portfolioProfile.resume}
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cyan-primary px-4 py-3 font-mono text-xs font-bold text-slate-950 transition-colors hover:bg-cyan-primary/80 focus-visible:ring-2 focus-visible:ring-cyan-primary"
          >
            Download resume <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <Link
            href="/credentials"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-3 font-mono text-xs font-bold text-foreground transition-colors hover:border-cyan-primary/50 hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary"
          >
            View credentials <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <dl className="mt-12 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Professional role</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">{experience.length}</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Current role listed</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Education</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">{education.length}</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Completed degree</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Active credential</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">{activeCredentialCount}</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Public verification path</dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
          <section aria-labelledby="professional-experience">
            <div className="flex items-end justify-between gap-4">
              <div>
                <SectionLabel>Professional experience</SectionLabel>
                <h2 id="professional-experience" className="mt-3 text-3xl font-bold tracking-tight text-foreground">Work in context.</h2>
              </div>
              <BriefcaseBusiness className="hidden h-7 w-7 text-cyan-primary sm:block" aria-hidden="true" />
            </div>

            <ol className="mt-8 space-y-8 border-l border-cyan-primary/30 pl-6">
              {experience.map((item) => (
                <li key={`${item.organization}-${item.role}`} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-cyan-primary" aria-hidden="true" />
                  <article className="rounded-xl border border-border bg-surface p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-primary">{item.type}</p>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{item.role}</h3>
                        <p className="mt-1 text-sm text-foreground-muted">{item.organization}</p>
                      </div>
                      <p className="font-mono text-xs text-foreground-dim">{item.dates}</p>
                    </div>
                    <p className="mt-5 flex items-center gap-2 text-sm text-foreground-muted"><MapPin className="h-3.5 w-3.5 text-cyan-primary" aria-hidden="true" />{item.location}</p>
                    <p className="mt-5 text-sm leading-7 text-foreground-muted">{item.summary}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground-muted">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-primary" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                      {item.evidence.map((source) => <EvidenceLink key={source.href} source={source} />)}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <aside className="h-fit rounded-xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <SectionLabel>Job-first framing</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">A working engineer moving deeper into AI systems.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">The current role establishes product delivery and stakeholder context. The project archive shows the deliberate move toward grounded AI, agentic workflows, and applied ML.</p>
            <ul className="mt-6 space-y-4 border-t border-border pt-6 text-sm leading-6 text-foreground-muted">
              <li><span className="font-semibold text-foreground">Current role:</span> Technology Manager at PayGain Multiservices.</li>
              <li><span className="font-semibold text-foreground">Target:</span> AI/ML, GenAI, and agent engineering roles.</li>
              <li><span className="font-semibold text-foreground">Availability:</span> Open to the right full-time engineering team.</li>
            </ul>
            <Link href="/about" className="mt-7 inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
              Read the engineering approach <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </aside>
        </div>

        <section aria-labelledby="education" className="mt-16 border-t border-border pt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Education</SectionLabel>
              <h2 id="education" className="mt-3 text-3xl font-bold tracking-tight text-foreground">Foundations in AI and computer science.</h2>
            </div>
            <GraduationCap className="hidden h-7 w-7 text-cyan-primary sm:block" aria-hidden="true" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-primary">{item.status}</p>
                    <h3 className="mt-3 text-xl font-bold text-foreground">{item.program}</h3>
                    <p className="mt-2 text-sm text-cyan-primary">{item.institution}</p>
                  </div>
                  <p className="font-mono text-xs text-foreground-dim">{item.dates}</p>
                </div>
                <dl className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Result</dt>
                    <dd className="mt-1 text-sm text-foreground-muted">{item.result}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Focus</dt>
                    <dd className="mt-1 text-sm leading-6 text-foreground-muted">{item.focus}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.evidence.map((source) => <EvidenceLink key={source.href} source={source} />)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="achievements" className="mt-16 border-t border-border pt-12">
          <SectionLabel>Achievements</SectionLabel>
          <h2 id="achievements" className="mt-3 text-3xl font-bold tracking-tight text-foreground">Published only when the evidence is ready.</h2>
          {achievements.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-border-strong bg-surface/60 p-6">
              <p className="text-base font-semibold text-foreground">No separate achievements are published yet.</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-foreground-muted">That is intentional. Current proof is concentrated in the dated experience record, project case studies, education, and AWS credential verification. This section is ready for future additions with an issuer, date, status, and evidence link.</p>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {achievements.map((achievement) => (
                <article key={`${achievement.title}-${achievement.organization}`} className="rounded-xl border border-border bg-surface p-6">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-primary">{achievement.status}</p>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{achievement.title}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">{achievement.organization} · {achievement.date}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground-muted">{achievement.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{achievement.evidence.map((source) => <EvidenceLink key={source.href} source={source} />)}</div>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </PortfolioFrame>
  );
}

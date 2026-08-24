import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PortfolioFrame,
  SectionLabel,
  StatusBadge,
} from "@/components/portfolio/PortfolioChrome";
import {
  credentials,
  education,
  experience,
  portfolioProfile,
  portfolioProjects,
  principles,
} from "@/content/portfolio";

const featuredProjects = portfolioProjects.filter((project) => project.featured).slice(0, 3);

const workingPrinciples = [
  { number: "01", title: "Evidence first", text: principles[0] },
  { number: "02", title: "Bounded systems", text: principles[1] },
  { number: "03", title: "Human control", text: principles[2] },
];

function ExternalArrow() {
  return <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />;
}

export default function Home() {
  const currentRole = experience[0];
  const credential = credentials[0];
  const credentialVerification = credential?.evidence.find((source) => source.kind === "verification");
  const degree = education[0];

  return (
    <PortfolioFrame>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 reaper-grid-bg opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-primary/30 bg-emerald-primary/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-primary" aria-hidden="true" />
              {portfolioProfile.availability}
            </div>
            <div className="mt-7">
              <SectionLabel>AI Engineer · GenAI · Agentic Systems</SectionLabel>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              Building grounded AI systems people can inspect.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-muted sm:text-lg">
              {portfolioProfile.tagline} I am looking for a team where careful engineering, evaluation, and useful product delivery matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#selected-work"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-cyan-primary px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-colors hover:bg-cyan-primary/80 focus-visible:ring-2 focus-visible:ring-cyan-primary"
              >
                View selected work <ExternalArrow />
              </Link>
              <a
                href={portfolioProfile.resume}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-surface px-5 py-3 font-mono text-xs font-bold text-foreground transition-colors hover:border-cyan-primary/50 hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary"
              >
                Download resume
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-foreground-dim">
              <span>{portfolioProfile.location}</span>
              <span className="text-border-strong" aria-hidden="true">/</span>
              <a className="inline-flex min-h-11 items-center hover:text-cyan-primary" href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
              <a className="inline-flex min-h-11 items-center hover:text-cyan-primary" href={portfolioProfile.github} target="_blank" rel="noreferrer noopener">GitHub <span className="sr-only">(opens in a new tab)</span></a>
            </div>
          </div>

          <aside className="rounded-xl border border-border bg-surface/90 p-6 shadow-[0_0_35px_-10px_rgba(0,240,255,0.12)] backdrop-blur-sm">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-primary">Recruiter snapshot</p>
            <dl className="mt-5 divide-y divide-border">
              <div className="py-4 first:pt-0">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Current role</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{currentRole.role}</dd>
                <dd className="mt-1 text-xs text-foreground-muted">{currentRole.organization} · {currentRole.dates}</dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Proof available now</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">FundersAI live product</dd>
                <dd className="mt-1 text-xs leading-5 text-foreground-muted">Code, case studies, and project boundaries are linked directly.</dd>
              </div>
              <div className="py-4 last:pb-0">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Specialization</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{portfolioProfile.specialization}</dd>
                <dd className="mt-1 text-xs leading-5 text-foreground-muted">Grounded retrieval, agent workflows, and full-stack delivery.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="selected-work" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects with status and boundaries visible.</h2>
          </div>
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
            View project archive <ExternalArrow />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const primaryEvidence = project.evidence[0];
            return (
              <article key={project.slug} className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-cyan-primary/40 hover:bg-surface-raised">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">{project.category}</p>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground-muted">{project.summary}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-primary">What I built</p>
                  <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.build}</p>
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-primary">Boundary</p>
                  <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.limitations}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-7">
                  <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">Read case study <ExternalArrow /></Link>
                  {primaryEvidence ? (
                    <a href={primaryEvidence.href} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs text-foreground-dim hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
                      {primaryEvidence.kind === "live" ? "Open live product" : "Open repository"} <ExternalArrow />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionLabel>Working principles</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {workingPrinciples.map((item) => (
              <article key={item.number} className="border-l border-cyan-primary/40 pl-5">
                <p className="font-mono text-xs text-cyan-primary">{item.number}</p>
                <h2 className="mt-3 text-lg font-bold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-foreground-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <SectionLabel>Career snapshot</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">A working engineer moving deeper into AI systems.</h2>
          <article className="mt-8 rounded-xl border border-border bg-surface p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">{currentRole.role}</h3>
                <p className="mt-1 text-sm text-cyan-primary">{currentRole.organization}</p>
              </div>
              <p className="font-mono text-xs text-foreground-dim">{currentRole.dates}</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-foreground-muted">{currentRole.summary}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground-muted">
              {currentRole.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-primary" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link href="/experience" className="mt-6 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">View full timeline <ExternalArrow /></Link>
          </article>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6">
          <SectionLabel>Credentials</SectionLabel>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Cloud credential</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{credential.name}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{credential.issuer} · {credential.status === "active" ? `Active through ${credential.expires}` : credential.status}</p>
              {credentialVerification ? <a href={credentialVerification.href} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">Open verification link <ExternalArrow /></a> : null}
            </div>
            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Education</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{degree.program}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{degree.institution} · {degree.result}</p>
            </div>
          </div>
          <Link href="/credentials" className="mt-7 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">View credentials <ExternalArrow /></Link>
        </aside>
      </section>

      <section id="contact" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Next conversation</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Looking for an AI/ML team where careful systems work has room to compound.</h2>
            <p className="mt-5 text-base leading-7 text-foreground-muted">For a role, collaboration, or a technical conversation, the fastest path is email or LinkedIn. The freelance path can come later; the immediate goal is the right full-time engineering team.</p>
            <address className="mt-8 flex flex-wrap gap-3 not-italic">
              <a href={`mailto:${portfolioProfile.email}`} className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-primary px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-colors hover:bg-cyan-primary/80 focus-visible:ring-2 focus-visible:ring-cyan-primary">Email Naman</a>
              <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center justify-center gap-1 rounded-md border border-border-strong bg-surface px-5 py-3 font-mono text-xs font-bold text-foreground transition-colors hover:border-cyan-primary/50 hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary">Message on LinkedIn <ExternalArrow /></a>
            </address>
          </div>
        </div>
      </section>
    </PortfolioFrame>
  );
}

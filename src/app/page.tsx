import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  PortfolioFrame,
  SectionLabel,
  StatusBadge,
} from "@/components/portfolio/PortfolioChrome";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { HackathonSubmissions } from "@/components/portfolio/HackathonSubmissions";
import { SystemMap, type SystemMapNode } from "@/components/portfolio/SystemMap";
import {
  credentials,
  education,
  experience,
  hackathonSubmissions,
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

const systemNodes: SystemMapNode[] = [
  { label: "Principle 01", value: "Evidence first", detail: principles[0] },
  { label: "Principle 02", value: "Bounded systems", detail: principles[1] },
  { label: "Principle 03", value: "Human control", detail: principles[2] },
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
      <section className="relative border-b border-border/80">
        <div className="pointer-events-none absolute inset-0 reaper-grid-bg opacity-45" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-16rem] top-[-13rem] h-[30rem] w-[30rem] rounded-full bg-blueprint-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(360px,1.14fr)] lg:items-center lg:gap-16">
            <div className="atlas-index-rail atlas-rise pl-6 sm:pl-8">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">
                <span className="status-mark">{portfolioProfile.availability}</span>
                <span className="text-border-strong" aria-hidden="true">/</span>
                <span>{portfolioProfile.location}</span>
              </div>
              <div className="mt-9">
                <SectionLabel>AI engineer · GenAI · agentic systems</SectionLabel>
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-[5.8rem]">
                Building grounded AI systems people can inspect.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-foreground-muted sm:text-lg">
                {portfolioProfile.tagline} I am looking for a team where careful engineering, evaluation, and useful product delivery matter.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#selected-work"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-signal-primary px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-signal-primary/85 focus-visible:ring-2 focus-visible:ring-signal-primary"
                >
                  Inspect selected work <ExternalArrow />
                </Link>
                <a
                  href={portfolioProfile.resume}
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-surface/80 px-5 py-3 font-mono text-xs font-bold text-foreground transition-colors hover:border-blueprint-primary/60 hover:text-blueprint-primary focus-visible:ring-2 focus-visible:ring-blueprint-primary"
                >
                  Download resume
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-foreground-dim">
                <a className="inline-flex min-h-11 items-center hover:text-blueprint-primary" href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn <span className="sr-only"> (opens in a new tab)</span></a>
                <span className="text-border-strong" aria-hidden="true">/</span>
                <a className="inline-flex min-h-11 items-center hover:text-blueprint-primary" href={portfolioProfile.github} target="_blank" rel="noreferrer noopener">GitHub <span className="sr-only"> (opens in a new tab)</span></a>
              </div>
            </div>

            <div className="atlas-rise atlas-rise-delay-2">
              <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">
                <span>System map / working method</span>
                <span className="text-signal-primary">Live profile</span>
              </div>
              <SystemMap nodes={systemNodes} />
              <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.13em] text-foreground-dim">
                <span>Traceable decisions over black-box theatre</span>
                <ChevronDown className="h-4 w-4 text-signal-primary" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="atlas-proof-strip mt-14 grid grid-cols-2 sm:grid-cols-4">
            <div className="atlas-proof-item px-4 py-4 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-dim">Current role</p>
              <p className="mt-2 text-sm font-bold text-foreground">{currentRole.role}</p>
            </div>
            <div className="atlas-proof-item px-4 py-4 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-dim">Public proof</p>
              <p className="mt-2 text-sm font-bold text-signal-primary">FundersAI live</p>
            </div>
            <div className="atlas-proof-item px-4 py-4 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-dim">Credential</p>
              <p className="mt-2 text-sm font-bold text-foreground">AWS Cloud Practitioner</p>
            </div>
            <div className="atlas-proof-item px-4 py-4 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-dim">Focus</p>
              <p className="mt-2 text-sm font-bold text-foreground">RAG / agents / delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">Projects with status and boundaries visible.</h2>
          </div>
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-blueprint-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary">
            View project archive <ExternalArrow />
          </Link>
        </div>

        <BentoGrid className="mt-10 lg:auto-rows-[minmax(18rem,auto)]">
          {featuredProjects.map((project, index) => {
            const primaryEvidence = project.evidence.find((item) => item.kind === "live") ?? project.evidence[0];
            return (
              <article key={project.slug} className={`atlas-card atlas-card-hover group flex h-full flex-col p-6 sm:p-8 ${index === 0 ? "atlas-featured-card lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}>
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">0{index + 1} / {project.category}</p>
                  <StatusBadge status={project.status} />
                </div>
                <div className="mt-10 max-w-xl">
                  <h3 className={`${index === 0 ? "text-4xl sm:text-5xl" : "text-2xl"} font-bold tracking-[-0.05em] text-foreground`}>{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground-muted">{project.summary}</p>
                </div>
                <div className="mt-auto pt-10">
                  <div className="grid gap-5 border-t border-border/80 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-signal-primary">Built</p>
                      <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.build}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-thermal-primary">Boundary</p>
                      <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.limitations}</p>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-blueprint-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary">Read case study <ExternalArrow /></Link>
                    {primaryEvidence ? <a href={primaryEvidence.href} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs text-foreground-dim hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary">{primaryEvidence.label} <ExternalArrow /><span className="sr-only"> (opens in a new tab)</span></a> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </BentoGrid>
      </section>

      <section className="border-y border-border/80 bg-surface/35">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <HackathonSubmissions submissions={hackathonSubmissions} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionLabel>Operating system</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">How the work stays useful after the demo.</h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">Three working constraints</span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {workingPrinciples.map((item) => (
            <article key={item.number} className="atlas-card atlas-card-hover p-6 sm:p-7">
              <p className="font-mono text-xs font-bold text-signal-primary">{item.number}</p>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em] text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <SectionLabel>Career snapshot</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">A working engineer moving deeper into AI systems.</h2>
          <article className="atlas-card mt-9 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-foreground">{currentRole.role}</h3>
                <p className="mt-1 text-sm font-bold text-blueprint-primary">{currentRole.organization}</p>
              </div>
              <p className="font-mono text-xs text-foreground-dim">{currentRole.dates}</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-foreground-muted">{currentRole.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground-muted">
              {currentRole.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-primary" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link href="/experience" className="mt-7 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-blueprint-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary">View full timeline <ExternalArrow /></Link>
          </article>
        </div>

        <aside className="atlas-card atlas-paper-card p-6 sm:p-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-60">Credential / current</p>
          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-wider opacity-60">Cloud credential</p>
            <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{credential.name}</h3>
            <p className="mt-2 text-sm opacity-70">{credential.issuer} · Active through {credential.expires}</p>
            {credentialVerification ? <a href={credentialVerification.href} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-[#315fc4] hover:underline focus-visible:ring-2 focus-visible:ring-[#315fc4]">Open verification link <ExternalArrow /><span className="sr-only"> (opens in a new tab)</span></a> : null}
          </div>
          <div className="mt-8 border-t border-black/15 pt-7">
            <p className="font-mono text-[10px] uppercase tracking-wider opacity-60">Education</p>
            <h3 className="mt-3 text-xl font-bold tracking-[-0.04em]">{degree.program}</h3>
            <p className="mt-2 text-sm opacity-70">{degree.institution} · {degree.result}</p>
          </div>
          <Link href="/credentials" className="mt-8 inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-[#315fc4] hover:underline focus-visible:ring-2 focus-visible:ring-[#315fc4]">View credentials <ExternalArrow /></Link>
        </aside>
      </section>

      <section id="contact" className="border-t border-border/80 bg-surface/45">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="atlas-paper-card max-w-4xl p-7 sm:p-10">
            <SectionLabel>Next conversation</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-5xl">Looking for an AI/ML team where careful systems work has room to compound.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-75">For a role, collaboration, or a technical conversation, the fastest path is email or LinkedIn. The freelance path can come later; the immediate goal is the right full-time engineering team.</p>
            <address className="mt-8 flex flex-wrap gap-3 not-italic">
              <a href={`mailto:${portfolioProfile.email}`} className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#111820] px-5 py-3 font-mono text-xs font-bold text-[#f1eee6] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#315fc4]">Email Naman</a>
              <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center justify-center gap-1 rounded-md border border-black/20 px-5 py-3 font-mono text-xs font-bold text-[#111820] hover:border-[#315fc4] focus-visible:ring-2 focus-visible:ring-[#315fc4]">Message on LinkedIn <ExternalArrow /><span className="sr-only"> (opens in a new tab)</span></a>
            </address>
          </div>
        </div>
      </section>
    </PortfolioFrame>
  );
}

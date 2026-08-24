import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { GithubIcon } from "@/components/Icons";
import { PortfolioFrame, SectionLabel, StatusBadge } from "@/components/portfolio/PortfolioChrome";
import {
  evidenceKindLabels,
  getPortfolioProject,
  portfolioProjects,
  type EvidenceLink,
} from "@/content/portfolio";

const evidenceDescriptions: Record<EvidenceLink["kind"], string> = {
  live: "A public route for direct product inspection.",
  repository: "Public code and README material; deployment is not inferred.",
  verification: "A supplied verification route for an external credential.",
};

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: `${project.summary} Status: ${project.status}.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { url: `/projects/${project.slug}` },
  };
}

function EvidenceIcon({ kind }: { kind: EvidenceLink["kind"] }) {
  if (kind === "repository") return <GithubIcon className="h-4 w-4" aria-hidden="true" />;
  if (kind === "live") return <ExternalLink className="h-4 w-4" aria-hidden="true" />;
  return <ArrowUpRight className="h-4 w-4" aria-hidden="true" />;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const relatedProjects = portfolioProjects
    .filter((candidate) => candidate.slug !== project.slug && (candidate.category === project.category || candidate.featured))
    .slice(0, 2);

  return (
    <PortfolioFrame>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 font-mono text-xs text-foreground-muted hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to projects
        </Link>

        <header className="mt-10 border-b border-border pb-10 sm:mt-14">
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>{project.category}</SectionLabel>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">{project.dates} · {project.role}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-muted">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.evidence.slice(0, 2).map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-3 font-mono text-xs font-bold text-foreground transition-colors hover:border-cyan-primary/50 hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary">
                {item.label} <EvidenceIcon kind={item.kind} /> <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </header>

        <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="space-y-14">
            <section aria-labelledby="context-heading">
              <SectionLabel>01 / Context</SectionLabel>
              <h2 id="context-heading" className="mt-3 text-2xl font-bold text-foreground">The problem</h2>
              <p className="mt-4 text-base leading-8 text-foreground-muted">{project.problem}</p>
            </section>

            <section aria-labelledby="build-heading">
              <SectionLabel>02 / Implementation</SectionLabel>
              <h2 id="build-heading" className="mt-3 text-2xl font-bold text-foreground">What I built</h2>
              <p className="mt-4 text-base leading-8 text-foreground-muted">{project.build}</p>
              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Current status</dt>
                  <dd className="mt-2 text-sm font-semibold text-foreground"><StatusBadge status={project.status} /></dd>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Evidence path</dt>
                  <dd className="mt-2 text-sm font-semibold text-foreground">{project.evidence.length > 0 ? `${project.evidence.length} public ${project.evidence.length === 1 ? "link" : "links"}` : "Not supplied yet"}</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="outcome-heading">
              <SectionLabel>03 / Current outcome</SectionLabel>
              <h2 id="outcome-heading" className="mt-3 text-2xl font-bold text-foreground">What exists today</h2>
              <p className="mt-4 text-base leading-8 text-foreground-muted">{project.outcome}</p>
            </section>

            <section aria-labelledby="boundary-heading" className="rounded-xl border border-amber-primary/30 bg-amber-primary/5 p-6">
              <SectionLabel>Boundary</SectionLabel>
              <h2 id="boundary-heading" className="mt-3 text-xl font-bold text-foreground">What this page does not claim</h2>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{project.limitations}</p>
            </section>
          </div>

          <aside className="space-y-10 lg:pt-1">
            <section aria-labelledby="evidence-heading">
              <SectionLabel>Evidence trail</SectionLabel>
              <h2 id="evidence-heading" className="sr-only">Evidence links</h2>
              <div className="mt-4 space-y-3">
                {project.evidence.length > 0 ? project.evidence.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer noopener" className="block rounded-lg border border-border bg-surface p-4 transition-colors hover:border-cyan-primary/40 focus-visible:ring-2 focus-visible:ring-cyan-primary">
                    <span className="flex items-center justify-between gap-3 text-sm font-semibold text-foreground">
                      <span>{item.label}</span>
                      <EvidenceIcon kind={item.kind} />
                    </span>
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-wider text-cyan-primary">{evidenceKindLabels[item.kind]}</span>
                    <span className="mt-2 block text-xs leading-5 text-foreground-muted">{evidenceDescriptions[item.kind]}</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )) : (
                  <p className="rounded-lg border border-border bg-surface p-4 text-sm leading-6 text-foreground-muted">No public evidence link is available yet. This project stays labelled as research or in progress until a reviewable source is ready.</p>
                )}
              </div>
              <p className="mt-4 text-xs leading-5 text-foreground-dim">Screenshots are not published in this iteration; the links above are the inspection path.</p>
            </section>

            <section aria-labelledby="stack-heading">
              <SectionLabel>Stack</SectionLabel>
              <h2 id="stack-heading" className="sr-only">Technology stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((technology) => <li key={technology} className="rounded border border-border bg-surface px-2.5 py-1.5 font-mono text-[10px] text-foreground-muted">{technology}</li>)}
              </ul>
            </section>
          </aside>
        </div>

        {relatedProjects.length > 0 ? (
          <section aria-labelledby="related-heading" className="border-t border-border pt-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>Continue exploring</SectionLabel>
                <h2 id="related-heading" className="mt-3 text-2xl font-bold text-foreground">Related work</h2>
              </div>
              <Link href="/projects" className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">Full archive <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {relatedProjects.map((related) => (
                <Link key={related.slug} href={`/projects/${related.slug}`} className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-cyan-primary/40 hover:bg-surface-raised focus-visible:ring-2 focus-visible:ring-cyan-primary">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">{related.category}</p>
                    <StatusBadge status={related.status} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-cyan-primary">{related.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground-muted">{related.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </PortfolioFrame>
  );
}

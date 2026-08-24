import type { Metadata } from "next";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { PortfolioFrame, SectionLabel, StatusBadge } from "@/components/portfolio/PortfolioChrome";
import { evidenceKindLabels, portfolioProjects, type ProjectStatus } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "A status-labelled project archive with evidence links and limitations for Naman Manocha's AI engineering work.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

const statusOrder: ProjectStatus[] = ["deployed", "in-progress", "research"];

const statusCopy: Record<ProjectStatus, { title: string; description: string }> = {
  deployed: {
    title: "Public deployment",
    description: "A product you can inspect directly, with the live route and repository linked.",
  },
  "in-progress": {
    title: "In progress",
    description: "Active builds with public code where available; deployment is never inferred from repository presence.",
  },
  research: {
    title: "Research foundations",
    description: "Experiments and academic foundations whose public evidence or deployment is still limited.",
  },
};

export default function ProjectsPage() {
  const publicEvidenceCount = portfolioProjects.reduce((count, project) => count + project.evidence.length, 0);
  const deployedCount = portfolioProjects.filter((project) => project.status === "deployed").length;

  return (
    <PortfolioFrame>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Project archive</SectionLabel>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Work built to be inspected.</h1>
            <p className="mt-5 text-base leading-8 text-foreground-muted sm:text-lg">
              A growing record of AI products, retrieval systems, agent workflows, and full-stack infrastructure. Each page explains the problem, build, current outcome, public evidence, and boundary.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface p-3">
            <div className="rounded-lg bg-background px-3 py-4 text-center">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Entries</dt>
              <dd className="mt-2 text-2xl font-bold text-foreground">{portfolioProjects.length}</dd>
            </div>
            <div className="rounded-lg bg-background px-3 py-4 text-center">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Deployed</dt>
              <dd className="mt-2 text-2xl font-bold text-emerald-primary">{deployedCount}</dd>
            </div>
            <div className="rounded-lg bg-background px-3 py-4 text-center">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Evidence</dt>
              <dd className="mt-2 text-2xl font-bold text-cyan-primary">{publicEvidenceCount}</dd>
            </div>
          </dl>
        </div>

        <aside className="mt-10 rounded-xl border border-cyan-primary/25 bg-cyan-primary/5 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-primary">Evidence policy</p>
            <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">{evidenceKindLabels.live} · {evidenceKindLabels.repository}</span>
          </div>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-foreground-muted">
            Screenshots are not available in this iteration. Case studies use the supplied live FundersAI route, public repositories, architecture excerpts, and explicit “not available yet” labels instead of invented product imagery or metrics.
          </p>
        </aside>

        <div className="mt-16 space-y-16">
          {statusOrder.map((status) => {
            const projects = portfolioProjects.filter((project) => project.status === status);
            if (projects.length === 0) return null;

            return (
              <section key={status} aria-labelledby={`${status}-heading`}>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 id={`${status}-heading`} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{statusCopy[status].title}</h2>
                      <StatusBadge status={status} />
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground-muted">{statusCopy[status].description}</p>
                  </div>
                  <span className="font-mono text-xs text-foreground-dim">{projects.length} {projects.length === 1 ? "project" : "projects"}</span>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </PortfolioFrame>
  );
}

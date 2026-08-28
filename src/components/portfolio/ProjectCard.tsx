import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { evidenceKindLabels, type PortfolioProject } from "@/content/portfolio";
import { StatusBadge } from "./PortfolioChrome";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="atlas-card atlas-card-hover group flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">{project.category}</p>
        <StatusBadge status={project.status} />
      </div>
      <h2 className="mt-5 text-xl font-bold tracking-tight text-foreground">{project.title}</h2>
      <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.summary}</p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-foreground-dim">{project.role} · {project.dates}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((technology) => (
          <span key={technology} className="rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-foreground-dim">{technology}</span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex min-h-11 items-center gap-1 font-mono text-xs font-bold text-blueprint-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary"
        >
          Read case study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        {project.evidence[0] ? (
          <a
            href={project.evidence[0].href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center gap-1 font-mono text-xs text-foreground-dim hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary"
          >
            {evidenceKindLabels[project.evidence[0].kind]} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="font-mono text-xs text-foreground-dim">No public evidence link</span>
        )}
      </div>
    </article>
  );
}

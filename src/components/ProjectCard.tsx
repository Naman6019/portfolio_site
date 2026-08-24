import type { Project } from "@/content/site";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon, SparklesIcon } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 transition-all hover:border-cyan-primary/40 glow-border-cyan">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border/60 pb-3">
        <h3 className="text-xl font-bold tracking-tight text-foreground font-sans">
          {project.title}
        </h3>
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-amber-primary font-semibold">
            ★ FEATURED
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{project.tagline}</p>

      <div className="mt-4 rounded border-l-2 border-emerald-primary bg-emerald-primary/5 p-3 text-xs leading-relaxed text-foreground">
        {project.result}
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-border bg-surface-raised px-2 py-0.5 font-mono text-[11px] text-foreground-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border/60 pt-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-mono text-xs font-medium text-cyan-primary hover:underline"
            >
              {link.icon === "github" && <GithubIcon className="h-3 w-3" />}
              {link.icon === "sparkles" && <SparklesIcon className="h-3 w-3 text-amber-primary" />}
              {link.icon === "external" && <ExternalLink className="h-3 w-3" />}
              <span>{link.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-70" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

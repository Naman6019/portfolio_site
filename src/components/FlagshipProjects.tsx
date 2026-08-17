"use client";

import { useState } from "react";
import { flagshipProjects, Project } from "@/content/site";
import { ArrowUpRight, ExternalLink, Activity, Layers } from "lucide-react";
import { GithubIcon, SparklesIcon } from "./Icons";

const categories = [
  { id: "all", label: "ALL DEPLOYMENTS", count: 6 },
  { id: "agentic", label: "AGENTIC & GENAI", count: 3 },
  { id: "fintech", label: "FINTECH & QUANT", count: 1 },
  { id: "systems", label: "FULL-STACK PLATFORMS", count: 2 },
];

export default function FlagshipProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = flagshipProjects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <section id="projects" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
              <Layers className="h-3.5 w-3.5" />
              <span>// 02. FLAGSHIP PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-foreground font-sans">
              Deployed Projects & Systems
            </h2>
            <p className="mt-2 text-base text-foreground-muted max-w-2xl">
              Production architectures engineered with verifiable telemetry, quota-safe storage tiers, and explicit error abstention.
            </p>
          </div>

          <div className="font-mono text-xs text-foreground-dim">
            SHOWING: <span className="text-cyan-primary font-bold">{filteredProjects.length}</span> SYSTEMS
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded border px-3 py-1.5 font-mono text-xs transition-colors ${
                  isActive
                    ? "border-cyan-primary/50 bg-cyan-primary/10 text-cyan-primary font-semibold"
                    : "border-border bg-surface text-foreground-muted hover:border-foreground-muted hover:text-foreground"
                }`}
              >
                {cat.label} [{cat.count}]
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className={`rounded-lg border border-border bg-surface p-6 sm:p-8 transition-all hover:border-cyan-primary/40 hover:bg-surface-raised glow-border-cyan ${
                project.featured ? "shadow-lg" : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-border/70 pb-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-cyan-primary">
                    SYS-0{idx + 1} //
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans">
                    {project.title}
                  </h3>
                  <span className="rounded border border-border bg-surface-raised px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded border border-amber-primary/30 bg-amber-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-primary uppercase">
                    ★ FEATURED SYSTEM
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="mt-4 text-base font-medium text-foreground">
                {project.tagline}
              </p>

              {/* Problem vs Architecture Breakdown */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm leading-relaxed">
                <div className="rounded border border-border/80 bg-[#050608]/70 p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-amber-primary font-semibold">
                    [ CONSTRAINTS & CHALLENGE ]
                  </div>
                  <p className="mt-2 text-foreground-muted text-xs leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded border border-border/80 bg-[#050608]/70 p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-primary font-semibold">
                    [ ARCHITECTURE & EXECUTION ]
                  </div>
                  <p className="mt-2 text-foreground-muted text-xs leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>

              {/* Verified Result Highlight */}
              <div className="mt-4 rounded border-l-2 border-emerald-primary bg-emerald-primary/5 p-3.5 pl-4">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-primary uppercase tracking-wider">
                  <Activity className="h-3.5 w-3.5" />
                  <span>VERIFIED PRODUCTION RESULT</span>
                </div>
                <p className="mt-1 text-xs text-foreground leading-relaxed">
                  {project.result}
                </p>
              </div>

              {/* Telemetry Metrics */}
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center gap-1 rounded border border-cyan-primary/20 bg-cyan-primary/5 px-2.5 py-1 text-cyan-primary text-[11px]"
                  >
                    <span>▸</span>
                    <span>{metric}</span>
                  </span>
                ))}
              </div>

              {/* Stack & Links Footer */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-surface-raised px-2 py-0.5 font-mono text-[11px] text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded border border-border bg-surface-raised px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-cyan-primary hover:text-cyan-primary"
                    >
                      {link.icon === "external" && <ExternalLink className="h-3.5 w-3.5" />}
                      {link.icon === "sparkles" && <SparklesIcon className="h-3.5 w-3.5 text-amber-primary" />}
                      {link.icon === "github" && <GithubIcon className="h-3.5 w-3.5" />}
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

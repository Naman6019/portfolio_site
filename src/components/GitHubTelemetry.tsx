import { Activity, GitBranch } from "lucide-react";
import { GithubIcon } from "./Icons";
import { siteProfile } from "@/content/site";

export default function GitHubTelemetry() {
  return (
    <section className="border-b border-border py-16 sm:py-20 bg-surface/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-emerald-primary">
              <Activity className="h-3.5 w-3.5" />
              <span>// GITHUB TELEMETRY & ACTIVITY</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-foreground font-sans">
              Live Repository Metrics
            </h2>
            <p className="mt-1 text-sm text-foreground-muted">
              Active open-source contributions and commit velocity across projects.
            </p>
          </div>

          <a
            href={siteProfile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground-muted hover:border-cyan-primary hover:text-cyan-primary transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>@Naman6019 on GitHub</span>
          </a>
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-lg border border-border bg-surface p-4 overflow-hidden glow-border-cyan">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats-fast.vercel.app/api?username=Naman6019&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d0f14"
              alt="Naman6019 GitHub Stats"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg border border-border bg-surface p-4 overflow-hidden glow-border-cyan">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Naman6019&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d0f14"
              alt="Naman6019 Top Languages"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Activity Graph */}
        <div className="mt-6 rounded-lg border border-border bg-surface p-4 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Naman6019&theme=tokyo-night&hide_border=true&area=true&bg_color=0d0f14"
            alt="Naman6019 Activity Graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

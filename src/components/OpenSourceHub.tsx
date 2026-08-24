import { openSourceRepositories } from "@/content/site";
import { Code2, ArrowUpRight } from "lucide-react";

export default function OpenSourceHub() {
  return (
    <section className="border-b border-border py-16 sm:py-20 bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
            <Code2 className="h-3.5 w-3.5" />
            <span>{"//"} MORE OPEN-SOURCE REPOSITORIES</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-foreground font-sans">
            Open-Source Utilities & ML Research
          </h2>
          <p className="mt-1 text-sm text-foreground-muted">
            Experimental bots, asynchronous microservices, NLP classifiers, and developer tooling.
          </p>
        </div>

        {/* 2-3 Column Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSourceRepositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:border-cyan-primary/50 hover:bg-surface-raised"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-foreground-dim">
                  <span className="rounded border border-border bg-surface-raised px-2 py-0.5 text-foreground-muted">
                    {repo.category}
                  </span>
                  <span className="text-amber-primary">{repo.badge}</span>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <h3 className="font-bold text-base text-foreground group-hover:text-cyan-primary transition-colors">
                    {repo.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-foreground-dim group-hover:text-cyan-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                {repo.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-[#050608] px-1.5 py-0.5 font-mono text-[10px] text-foreground-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

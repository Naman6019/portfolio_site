import { engineeringPillars } from "@/content/site";
import { Cpu, Database, Network, ShieldCheck } from "lucide-react";

const pillarIcons = [Network, Database, ShieldCheck, Cpu];

export default function EngineeringPillars() {
  return (
    <section id="pillars" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
            <Network className="h-3.5 w-3.5" />
            <span>{"//"} 01. CORE ARCHITECTURE PILLARS</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-foreground font-sans">
            Engineering Foundations
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground-muted">
            Designed for high reliability, deterministic data routing, bounded retries, and strict isolation between ingestion workers and runtime serving tiers.
          </p>
        </div>

        {/* 2x2 High Density Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Network;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-cyan-primary/40 hover:bg-surface-raised glow-border-cyan"
              >
                {/* Header of Card */}
                <div>
                  <div className="flex items-center justify-between border-b border-border/70 pb-3 font-mono text-xs text-foreground-dim">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded border border-cyan-primary/30 bg-cyan-primary/10 text-cyan-primary">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold text-foreground">{pillar.short}</span>
                    </div>
                    <span className="text-cyan-primary font-bold">PILLAR 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground font-sans">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {pillar.description}
                  </p>

                  {/* ASCII / Schematic Flow Diagram */}
                  <div className="mt-4 rounded border border-border/80 bg-[#050608] p-3 font-mono text-[11px] text-cyan-primary/90 overflow-x-auto custom-scrollbar">
                    <pre className="whitespace-pre">{pillar.ascii}</pre>
                  </div>
                </div>

                {/* Footer of Card: Telemetry & Tags */}
                <div className="mt-6 border-t border-border/70 pt-4">
                  <div className="mb-3 font-mono text-[10px] text-foreground-dim uppercase tracking-wider">
                    {pillar.telemetry}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-surface-raised px-2 py-0.5 font-mono text-[11px] text-foreground-muted group-hover:border-border-strong"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

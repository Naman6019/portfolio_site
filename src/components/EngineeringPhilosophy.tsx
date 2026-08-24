import { engineeringPrinciples } from "@/content/site";
import { Compass } from "lucide-react";

export default function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-amber-primary">
            <Compass className="h-3.5 w-3.5" />
            <span>{"//"} 05. ENGINEERING CREED</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-foreground font-sans">
            System Design Principles
          </h2>
          <p className="mt-2 text-base text-foreground-muted">
            The non-negotiable architectural rules applied across every autonomous agent, ETL pipeline, and web platform.
          </p>
        </div>

        {/* 4 Core Principles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {engineeringPrinciples.map((rule) => (
            <div
              key={rule.number}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7 transition-all hover:border-amber-primary/40 glow-border-amber"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded border border-amber-primary/40 bg-amber-primary/10 font-mono text-xs font-bold text-amber-primary">
                  {rule.number}
                </span>
                <h3 className="font-bold text-lg text-foreground font-sans">
                  {rule.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {rule.principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

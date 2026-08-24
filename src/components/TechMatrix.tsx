import { techStackMatrix } from "@/content/site";
import { Wrench } from "lucide-react";

export default function TechMatrix() {
  return (
    <section id="stack" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
            <Wrench className="h-3.5 w-3.5" />
            <span>{"//"} 04. CLASSIFIED TOOLBOX &amp; MATRIX</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-foreground font-sans">
            Technical Stack & Runtime Ecosystem
          </h2>
          <p className="mt-2 text-base text-foreground-muted">
            Core technologies selected for deterministic state management, throughput, and zero-compromise developer ergonomics.
          </p>
        </div>

        {/* Categorized Matrix */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techStackMatrix.map((cat, idx) => (
            <div
              key={cat.category}
              className="rounded-lg border border-border bg-surface p-6 transition-all hover:border-cyan-primary/40 glow-border-cyan"
            >
              <div className="flex items-center justify-between border-b border-border/70 pb-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-primary">
                  {cat.category}
                </h3>
                <span className="font-mono text-[10px] text-foreground-dim">
                  DOM-0{idx + 1}
                </span>
              </div>

              <p className="mt-2 text-xs text-foreground-muted">
                {cat.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-1.5 rounded border px-2.5 py-1.5 font-mono text-xs transition-colors ${
                      item.highlight
                        ? "border-cyan-primary/40 bg-cyan-primary/10 text-cyan-primary font-semibold shadow-xs"
                        : "border-border bg-surface-raised text-foreground-muted hover:border-foreground-dim hover:text-foreground"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-1 rounded ${
                        item.level === "Primary"
                          ? "bg-emerald-primary/20 text-emerald-primary font-bold"
                          : "bg-surface text-foreground-dim"
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

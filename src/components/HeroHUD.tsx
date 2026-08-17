"use client";

import { useState, useEffect } from "react";
import { Terminal, Network, ShieldCheck, Database, Cpu, Play, CheckCircle2, Zap } from "lucide-react";

interface ProjectTrace {
  target: string;
  tabLabel: string;
  query: string;
  router: string;
  latency: string;
  status: string;
  citations: string;
  badgeColor: string;
  metrics: Array<{
    label: string;
    value: string;
    sub: string;
    color: string;
  }>;
}

const executionTraces: ProjectTrace[] = [
  {
    target: "FundersAI Multi-Agent Synthesis",
    tabLabel: "01 // FundersAI",
    query: "Compute portfolio overlap & AMC asset allocation across 12 funds",
    router: "LangGraph StateGraph -> fund_comparison_node",
    latency: "84ms",
    status: "EVIDENCE_GROUNDED",
    citations: "12/12 Verified AMFI Sources",
    badgeColor: "text-cyan-primary border-cyan-primary/40 bg-cyan-primary/10",
    metrics: [
      {
        label: "INGESTION ETL",
        value: "22 PIPELINES",
        sub: "12+ AMCs Ingested",
        color: "text-emerald-primary",
      },
      {
        label: "SUPABASE READS",
        value: "14ms HIT",
        sub: "Edge Cached Tier",
        color: "text-cyan-primary",
      },
      {
        label: "COLD STORAGE",
        value: "CLOUDFLARE R2",
        sub: "$0 Egress Cost",
        color: "text-amber-primary",
      },
    ],
  },
  {
    target: "Google ADK Career Intelligence",
    tabLabel: "02 // Google ADK",
    query: "Continuous platform crawl & ATS rejection pattern analysis",
    router: "Gemini 3.6 Flash -> Taskmaster Pipeline",
    latency: "112ms",
    status: "REASONING_COMPLETE",
    citations: "8 Job Portals Parsed",
    badgeColor: "text-amber-primary border-amber-primary/40 bg-amber-primary/10",
    metrics: [
      {
        label: "CRON CRAWL",
        value: "4H CADENCE",
        sub: "8 Portals Parsed",
        color: "text-amber-primary",
      },
      {
        label: "DEDUPLICATION",
        value: "SHA256 HASH",
        sub: "100% Unique Leads",
        color: "text-cyan-primary",
      },
      {
        label: "CORE ENGINE",
        value: "GEMINI 3.6 FLASH",
        sub: "NER Taxonomy Match",
        color: "text-emerald-primary",
      },
    ],
  },
  {
    target: "CareFlow Clinical RAFT Engine",
    tabLabel: "03 // CareFlow",
    query: "Domain RAG search with mandatory clinical guideline citations",
    router: "Hybrid Dense Vector + BM25 Lexical Reranker",
    latency: "62ms",
    status: "ZERO_HALLUCINATION_OK",
    citations: "100% Validated Medical Chunks",
    badgeColor: "text-emerald-primary border-emerald-primary/40 bg-emerald-primary/10",
    metrics: [
      {
        label: "RETRIEVAL MRR",
        value: "94.2% SCORE",
        sub: "Dense + BM25 Lexical",
        color: "text-emerald-primary",
      },
      {
        label: "QLORA ADAPT",
        value: "r=16 / α=32",
        sub: "Low-memory PEFT",
        color: "text-cyan-primary",
      },
      {
        label: "PROVENANCE",
        value: "0.0% HALLUCINATION",
        sub: "100% Guideline Citations",
        color: "text-emerald-primary",
      },
    ],
  },
];

export function HeroHUD() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % executionTraces.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const trace = executionTraces[activeStep];

  return (
    <div className="relative rounded-2xl border border-border bg-surface/95 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl glow-border-cyan">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3.5 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-cyan-primary/40 bg-cyan-primary/10 text-cyan-primary shadow-xs">
            <Cpu className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-bold text-foreground">REAPER_LIVE_HUD</span>
          <span className="text-xs text-foreground-dim">// v3.8</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-primary font-semibold">
          <span className="h-2 w-2 rounded-full bg-emerald-primary animate-pulse" />
          <span>REASONING ACTIVE</span>
        </div>
      </div>

      {/* Interactive Tabs / Selectors */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {executionTraces.map((item, idx) => (
          <button
            key={item.target}
            onClick={() => setActiveStep(idx)}
            className={`rounded-md px-3 py-1.5 font-mono text-xs transition-all whitespace-nowrap ${
              activeStep === idx
                ? "border border-cyan-primary/50 bg-cyan-primary/15 text-cyan-primary font-bold shadow-xs"
                : "border border-border bg-surface-raised text-foreground-muted hover:text-foreground hover:bg-surface-hover"
            }`}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      {/* Live Trace Monitor Display */}
      <div className="mt-4 rounded-xl border border-border/90 bg-[#040508] p-5 font-mono text-xs space-y-4 shadow-inner transition-all duration-300">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-amber-primary font-semibold flex items-center gap-1">
            <Zap className="h-3 w-3" />
            <span>[ INCOMING STREAM QUERY ]</span>
          </div>
          <p className="mt-1.5 font-bold text-foreground text-sm sm:text-[15px] leading-relaxed">
            &quot;{trace.query}&quot;
          </p>
        </div>

        <div className="border-t border-border/60 pt-3">
          <div className="flex items-center justify-between text-[11px] text-foreground-dim">
            <span>GRAPH ROUTING ENGINE</span>
            <span className="text-cyan-primary font-bold text-xs bg-cyan-primary/10 px-2 py-0.5 rounded border border-cyan-primary/30">
              {trace.latency}
            </span>
          </div>
          <p className="mt-1.5 text-cyan-primary font-semibold text-xs sm:text-sm">
            {trace.router}
          </p>
        </div>

        <div className="border-t border-border/60 pt-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-[11px] text-foreground-dim">GROUNDED PROVENANCE</div>
            <div className="mt-1 text-xs sm:text-sm text-foreground font-bold">
              {trace.citations}
            </div>
          </div>

          <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${trace.badgeColor}`}>
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>{trace.status}</span>
          </span>
        </div>
      </div>

      {/* Dynamic System Infrastructure Live Status Pills - SYNCHRONIZED WITH ACTIVE PROJECT */}
      <div className="mt-4 grid grid-cols-3 gap-2.5 font-mono text-xs">
        {trace.metrics.map((m, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-border bg-surface-raised p-2.5 text-center transition-all duration-300 hover:border-cyan-primary/40"
          >
            <div className="text-[10px] text-foreground-dim font-semibold uppercase tracking-wider">
              {m.label}
            </div>
            <div className={`font-bold text-xs sm:text-sm mt-0.5 ${m.color}`}>
              {m.value}
            </div>
            <div className="text-[9px] text-foreground-dim/80 mt-0.5 truncate">
              {m.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Interactive Shell Launcher */}
      <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3.5">
        <span className="font-mono text-[11px] text-foreground-dim">
          STREAMING TELEMETRY // {trace.target.split(" ")[0]}
        </span>
        <a
          href="#terminal"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-primary hover:underline"
        >
          <span>INTERACTIVE CLI ($)</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

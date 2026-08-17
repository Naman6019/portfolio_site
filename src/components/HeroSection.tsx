"use client";

import { siteProfile } from "@/content/site";
import { ArrowDown, Terminal, Cpu, Database, Network, ShieldCheck, ArrowUpRight, Mouse } from "lucide-react";
import { GithubIcon, TwitterXIcon, InstagramIcon } from "./Icons";
import { Particles } from "./magicui/particles";
import { DiaTextReveal } from "./magicui/dia-text-reveal";
import { Marquee } from "./magicui/marquee";
import { HeroHUD } from "./HeroHUD";

const marqueeItems = [
  "GOOGLE ADK",
  "LANGGRAPH",
  "22 CI/CD PIPELINES",
  "12+ AMCS INGESTED",
  "NEXT.JS 16",
  "REACT 19",
  "FASTAPI",
  "SUPABASE POSTGRESQL",
  "CLOUDFLARE R2",
  "PYTORCH",
  "RAFT FINE-TUNING",
  "GEMINI 3.6 FLASH",
  "DOCKER",
  "GOOGLE CLOUD RUN",
  "WEBSOCKETS",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-between overflow-hidden border-b border-border pt-8 pb-4 sm:pt-14 sm:pb-6">
      {/* Millimeter Engineering Grid & Ambient Matrix */}
      <div className="reaper-grid-bg absolute inset-0 opacity-40 pointer-events-none" />
      <div className="scanline-overlay absolute inset-0 opacity-20 pointer-events-none" />

      {/* Interactive MagicUI Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={75}
        size={0.75}
        color="#00f0ff"
        staticity={35}
        ease={35}
      />

      {/* Main Split Viewport */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Telemetry Header Line */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3.5 font-mono text-xs text-foreground-dim">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-primary animate-ping-subtle" />
            <span className="text-cyan-primary font-bold">REAPER AGENT v3.8</span>
            <span>//</span>
            <span className="text-foreground-muted font-semibold">CALLSIGN: {siteProfile.callsign}</span>
            <span className="hidden sm:inline">//</span>
            <span className="hidden sm:inline">LOC: {siteProfile.location} [{siteProfile.coordinates}]</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-primary/40 bg-emerald-primary/10 px-3 py-1 text-xs text-emerald-primary font-bold shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-primary animate-pulse" />
              <span>{siteProfile.status}</span>
            </span>
          </div>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-2">
          {/* Left Column (Narrative & Value Thesis) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-amber-primary font-bold">
              <Cpu className="h-4 w-4" />
              <span>AI/ML Engineering & Autonomous Systems Architecture</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground font-sans leading-[1.04]">
              <DiaTextReveal
                text={siteProfile.name}
                colors={["#00f0ff", "#38bdf8", "#818cf8", "#f59e0b", "#10b981"]}
                textColor="var(--foreground)"
                duration={1.6}
                delay={0.1}
              />
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-cyan-primary">
              {siteProfile.role}
            </p>

            <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-foreground-muted">
              {siteProfile.tagline}
            </p>

            {/* Key System Specs / Telemetry Grid - ENLARGED */}
            <div className="pt-2 grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono">
              <div className="rounded-xl border border-border bg-surface/90 p-4 backdrop-blur-md glow-border-cyan transition-all hover:border-cyan-primary/50 hover:bg-surface-raised">
                <div className="flex items-center gap-1.5 text-xs text-foreground-dim font-medium">
                  <Network className="h-4 w-4 text-cyan-primary" />
                  <span>DAG AGENTS</span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-foreground">Google ADK & LangGraph</p>
                <p className="text-[11px] text-foreground-dim mt-0.5">Multi-Agent Routing</p>
              </div>

              <div className="rounded-xl border border-border bg-surface/90 p-4 backdrop-blur-md glow-border-cyan transition-all hover:border-emerald-primary/50 hover:bg-surface-raised">
                <div className="flex items-center gap-1.5 text-xs text-foreground-dim font-medium">
                  <Database className="h-4 w-4 text-emerald-primary" />
                  <span>ETL WORKFLOWS</span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-foreground">22 CI/CD Pipelines</p>
                <p className="text-[11px] text-foreground-dim mt-0.5">12+ AMCs Ingested</p>
              </div>

              <div className="rounded-xl border border-border bg-surface/90 p-4 backdrop-blur-md glow-border-cyan transition-all hover:border-amber-primary/50 hover:bg-surface-raised">
                <div className="flex items-center gap-1.5 text-xs text-foreground-dim font-medium">
                  <ShieldCheck className="h-4 w-4 text-amber-primary" />
                  <span>DOMAIN ML</span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-foreground">RAFT & Hybrid RAG</p>
                <p className="text-[11px] text-foreground-dim mt-0.5">Dense + BM25 Rerank</p>
              </div>

              <div className="rounded-xl border border-border bg-surface/90 p-4 backdrop-blur-md glow-border-cyan transition-all hover:border-violet-primary/50 hover:bg-surface-raised">
                <div className="flex items-center gap-1.5 text-xs text-foreground-dim font-medium">
                  <Terminal className="h-4 w-4 text-violet-primary" />
                  <span>STACK CORE</span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-foreground">Next.js 16 + FastAPI</p>
                <p className="text-[11px] text-foreground-dim mt-0.5">Docker on Cloud Run</p>
              </div>
            </div>

            {/* Action CTAs and Transmissions - ENLARGED */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-primary/50 bg-cyan-primary/15 px-5 py-3 font-mono text-xs sm:text-sm font-bold text-cyan-primary transition-all hover:bg-cyan-primary hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]"
              >
                <span>INSPECT DEPLOYMENTS</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/90 px-4 py-3 font-mono text-xs sm:text-sm font-bold text-foreground backdrop-blur-sm transition-colors hover:border-amber-primary/50 hover:bg-surface-hover hover:text-amber-primary"
              >
                <Terminal className="h-4 w-4 text-amber-primary" />
                <span>RUN CONSOLE ($)</span>
              </a>

              <a
                href={siteProfile.socials.fundersai}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/90 px-4 py-3 font-mono text-xs sm:text-sm font-semibold text-foreground-muted backdrop-blur-sm transition-colors hover:border-foreground-muted hover:text-foreground"
              >
                <span>FundersAI Live</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-border/80">
                <a
                  href={siteProfile.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground-muted transition-colors hover:border-cyan-primary hover:text-cyan-primary"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteProfile.socials.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground-muted transition-colors hover:border-cyan-primary hover:text-cyan-primary"
                  aria-label="X / Twitter"
                >
                  <TwitterXIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteProfile.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground-muted transition-colors hover:border-cyan-primary hover:text-cyan-primary"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Live Reaper HUD / Reasoning Trace Visualizer) */}
          <div className="lg:col-span-5">
            <HeroHUD />
          </div>
        </div>
      </div>

      {/* Continuous Infinite Marquee Tech Bar */}
      <div className="relative z-10 mt-6 border-y border-border/60 bg-surface/60 backdrop-blur-md py-2">
        <Marquee repeat={5} className="font-mono text-xs sm:text-sm text-foreground-muted">
          {marqueeItems.map((item) => (
            <span key={item} className="flex items-center gap-3 px-4">
              <span className="text-cyan-primary font-bold">◈</span>
              <span className="font-bold tracking-wider">{item}</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 mx-auto mt-3 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-foreground-dim">
        <a
          href="#pillars"
          className="flex items-center gap-1.5 transition-colors hover:text-cyan-primary font-medium"
        >
          <Mouse className="h-3.5 w-3.5 animate-bounce text-cyan-primary" />
          <span>SCROLL TO EXPLORE ARCHITECTURAL BLUEPRINTS</span>
          <ArrowDown className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}

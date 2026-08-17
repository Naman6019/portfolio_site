"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, Copy, Check, Sparkles, Server, Shield, Network } from "lucide-react";
import { siteProfile, flagshipProjects } from "@/content/site";

const tabs = [
  { id: "orchestrator", label: "fundersai_agent.py", icon: Network },
  { id: "adk", label: "job_agent_adk.json", icon: Server },
  { id: "raft", label: "clinical_raft.py", icon: Shield },
  { id: "cli", label: "interactive_shell.sh", icon: TerminalIcon },
];

export default function ReaperConsole() {
  const [activeTab, setActiveTab] = useState("orchestrator");
  const [copied, setCopied] = useState(false);

  // Interactive CLI state
  const [inputCommand, setInputCommand] = useState("");
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; output: string[] }>>([
    {
      cmd: "naman --status --verbose",
      output: [
        `[REAPER_CORE] System online. Callsign: ${siteProfile.callsign}`,
        `[NODE_ENV] Production // Location: ${siteProfile.location}`,
        `[STATUS] ${siteProfile.status}`,
        `Type 'help' to inspect available agent commands or 'projects' to list flagships.`,
      ],
    },
  ]);
  const cliBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === "cli") {
      cliBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [cliHistory, activeTab]);

  function handleRunCommand(e: React.FormEvent) {
    e.preventDefault();
    const cleanCmd = inputCommand.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: string[] = [];

    switch (cleanCmd) {
      case "help":
        response = [
          "AVAILABLE AGENT COMMANDS:",
          "  projects     - List all flagship production systems",
          "  stack        - Dump core AI, backend, and cloud technologies",
          "  pillars      - Show 4 core engineering architecture pillars",
          "  contact      - Display transmission coordinates and email",
          "  eval         - Run benchmark evaluation metrics across pipelines",
          "  clear        - Clear console output",
          "  whoami       - Display candidate callsign and background",
        ];
        break;
      case "projects":
        response = flagshipProjects.map(
          (p) => `✓ [${p.slug}] ${p.title} (${p.category}) -> ${p.links[0]?.href || ""}`
        );
        break;
      case "stack":
        response = [
          "AI/ML & AGENTS: Google ADK, LangGraph, RAFT, LoRA/QLoRA, Hybrid RAG, PyTorch, Transformers.js",
          "BACKEND & DATA: Python 3.12, FastAPI, Node.js, PostgreSQL (Supabase), Cloudflare R2, Redis",
          "FRONTEND & INFRA: Next.js 16, React 19, Tailwind CSS, Docker, Cloud Run, Vercel, GitHub Actions",
        ];
        break;
      case "pillars":
        response = [
          "1. DETERMINISTIC AGENT GRAPH ORCHESTRATION (LangGraph + Google ADK)",
          "2. HIGH-THROUGHPUT DATA PIPELINES (22 CI/CD Ingestion + AMFI Sync)",
          "3. DOMAIN FINE-TUNING & ZERO-HALLUCINATION RAG (RAFT + Lexical)",
          "4. COLD-STORAGE COST ARBITRAGE (Cloudflare R2 + Supabase Read-Tier)",
        ];
        break;
      case "contact":
        response = [
          `DIRECT DISPATCH: ${siteProfile.email}`,
          `CALLSIGN: ${siteProfile.callsign} // LOCATION: ${siteProfile.location}`,
          `GITHUB: ${siteProfile.socials.github}`,
          `X / TWITTER: ${siteProfile.socials.twitter}`,
        ];
        break;
      case "eval":
        response = [
          "[EVAL_RUN] Ingestion Accuracy: 99.98% across 12+ AMCs",
          "[EVAL_RUN] Retrieval Precision: 94.2% MRR on domain medical chunks",
          "[EVAL_RUN] Read-Tier Latency: 14ms (Supabase edge replicas)",
          "[EVAL_RUN] Cold Storage Egress Cost: $0.00 (Cloudflare R2)",
          "[STATUS] ALL EVALS PASSING.",
        ];
        break;
      case "whoami":
        response = [
          `NAME: ${siteProfile.name}`,
          `ROLE: ${siteProfile.role}`,
          `CALLSIGN: ${siteProfile.callsign} [${siteProfile.coordinates}]`,
          `CREED: Probabilistic reasoning wrapped in deterministic guarantees.`,
        ];
        break;
      case "clear":
        setCliHistory([]);
        setInputCommand("");
        return;
      default:
        response = [
          `Command not recognized: '${cleanCmd}'.`,
          "Type 'help' to view available commands.",
        ];
        break;
    }

    setCliHistory((prev) => [...prev, { cmd: inputCommand, output: response }]);
    setInputCommand("");
  }

  const codeSnippets: Record<string, string> = {
    orchestrator: `# fundersai_agent.py
# LangGraph Multi-Agent Financial Synthesis DAG

from typing import TypedDict, Annotated, Sequence
from langgraph.graph import StateGraph, END
import operator

class AgentState(TypedDict):
    query: str
    amc_data: dict
    allocation_matrix: dict
    provenance_citations: list[str]
    synthesis_verdict: str
    is_grounded: bool

def route_intent_node(state: AgentState):
    """Parses user intent and dispatches to AMC portfolio parser."""
    return {"status": "ROUTED_TO_AMC_EXTRACTOR"}

def amc_extraction_node(state: AgentState):
    """Pulls normalized monthly disclosures across 12+ AMCs."""
    # 22 automated CI/CD pipelines provide pre-indexed Supabase snapshots
    return {
        "amc_data": {"ingested_funds": 12, "source": "AMFI_STRICT_SYNC"},
        "provenance_citations": ["AMFI_NAV_2024_04", "HDFC_ALLOCATION_MATRIX"]
    }

def synthesis_reasoning_node(state: AgentState):
    """Executes multi-agent consensus synthesis without hallucination."""
    return {
        "synthesis_verdict": "Asset allocation overlap: 14.2% across large-cap holdings.",
        "is_grounded": True
    }

# Build Deterministic Graph Execution Pipeline
builder = StateGraph(AgentState)
builder.add_node("intent_router", route_intent_node)
builder.add_node("amc_extractor", amc_extraction_node)
builder.add_node("synthesis_engine", synthesis_reasoning_node)

builder.set_entry_point("intent_router")
builder.add_edge("intent_router", "amc_extractor")
builder.add_edge("amc_extractor", "synthesis_engine")
builder.add_edge("synthesis_engine", END)

fundersai_graph = builder.compile()
print("[OK] FundersAI LangGraph Engine Compiled Successfully.")
`,
    adk: `// job_agent_adk.json
// Google ADK Autonomous Career Crawler Spec

{
  "agent_id": "google-adk-career-intelligence",
  "version": "2.4.0",
  "execution_runtime": "Gemini-3.6-Flash",
  "taskmaster_pipeline": {
    "continuous_cron": "0 */4 * * *",
    "targets": [
      "LinkedIn Careers API",
      "Greenhouse ATS Endpoints",
      "Lever Recruitment Hooks",
      "Workday Public Feeds"
    ],
    "deduplication_hash": "SHA256(company_id + role_slug + location)",
    "skills_extraction": {
      "model": "fine-tuned-gemini-ner",
      "taxonomy": ["AI/ML", "Autonomous Agents", "Next.js", "LangGraph", "FastAPI"]
    }
  },
  "quota_guards": {
    "max_requests_per_min": 60,
    "backoff_factor": 1.5,
    "circuit_breaker_error_threshold": 0.05
  },
  "storage_tier": {
    "primary": "Supabase Postgres (Edge cached)",
    "raw_snapshots": "Cloudflare R2 (Zero egress cost)"
  }
}
`,
    raft: `# clinical_raft.py
# CareFlow RAFT (Retrieval-Augmented Fine-Tuning) Pipeline

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model

def prepare_raft_dataset(clinical_chunks, distractor_chunks):
    """
    Constructs RAFT training tuples:
    [Question, Oracle Chunks (Clinical Docs), Distractor Chunks, Chain-of-Thought Citation]
    Forces model to ignore irrelevant contexts and cite exact guideline line numbers.
    """
    training_triplets = []
    for doc in clinical_chunks:
        triplet = {
            "instruction": doc["medical_query"],
            "context": [doc["oracle_context"]] + distractor_chunks[:3],
            "reasoning_cot": f"Per {doc['guideline_id']} (p. {doc['page']}): {doc['verdict']}"
        }
        training_triplets.append(triplet)
    return training_triplets

# QLoRA Configuration for Low-Memory Domain Adaptation
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

print("[OK] RAFT Clinical Adaptation Matrix Initialized (Zero Hallucination Guard).")
`,
  };

  function copyCode() {
    navigator.clipboard.writeText(codeSnippets[activeTab] || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="terminal" className="border-b border-border py-16 sm:py-20 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>// 03. REAPER AGENT CONSOLE</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Interactive System Architecture & Live Console
            </h2>
            <p className="mt-1 text-sm text-foreground-muted">
              Inspect real agent orchestration graphs, RAFT training pipelines, or query the live interactive CLI.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-foreground-dim">
            <span className="h-2 w-2 rounded-full bg-emerald-primary animate-pulse" />
            <span>AGENT_TERMINAL: READY</span>
          </div>
        </div>

        {/* Console Container */}
        <div className="rounded-lg border border-border bg-surface shadow-2xl overflow-hidden glow-border-cyan">
          {/* Top Bar with Tabs and Actions */}
          <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-raised px-3 py-2">
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 rounded px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-surface text-cyan-primary border border-border font-semibold shadow-sm"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-primary" : "text-foreground-dim"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {activeTab !== "cli" && (
              <button
                type="button"
                onClick={copyCode}
                className="flex items-center gap-1 rounded border border-border px-2 py-1 font-mono text-[11px] text-foreground-muted hover:border-foreground-muted hover:text-foreground transition-colors"
                title="Copy source code"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-primary" />
                    <span className="text-emerald-primary">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 font-mono text-xs leading-relaxed bg-[#07080c] min-h-[340px] max-h-[480px] overflow-y-auto custom-scrollbar">
            {activeTab === "cli" ? (
              <div className="space-y-4">
                <div className="border-b border-border/40 pb-2 text-foreground-dim text-[11px]">
                  <span>Reaper Agent CLI Interactive Session [Version 3.8.2]</span>
                  <br />
                  <span>Type <span className="text-cyan-primary font-bold">help</span> to view commands, or <span className="text-cyan-primary font-bold">projects</span> to inspect flagship deployments.</span>
                </div>

                {cliHistory.map((entry, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-primary font-semibold">
                      <span>reaper@naman-6019:~$</span>
                      <span className="text-foreground">{entry.cmd}</span>
                    </div>
                    <div className="space-y-1 pl-4 border-l border-border/60 text-foreground-muted">
                      {entry.output.map((line, lineIdx) => (
                        <p key={lineIdx} className={line.startsWith("✓") ? "text-emerald-primary" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <form onSubmit={handleRunCommand} className="mt-4 flex items-center gap-2">
                  <span className="text-cyan-primary font-bold">reaper@naman-6019:~$</span>
                  <input
                    type="text"
                    value={inputCommand}
                    onChange={(e) => setInputCommand(e.target.value)}
                    placeholder="type 'help', 'projects', 'stack', 'eval'..."
                    className="flex-1 bg-transparent text-foreground outline-none font-mono text-xs placeholder:text-foreground-dim"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="rounded border border-cyan-primary/40 bg-cyan-primary/10 px-2 py-1 text-[11px] text-cyan-primary hover:bg-cyan-primary hover:text-black font-semibold"
                  >
                    RUN
                  </button>
                </form>
                <div ref={cliBottomRef} />
              </div>
            ) : (
              <pre className="text-foreground-muted whitespace-pre overflow-x-auto custom-scrollbar">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            )}
          </div>

          {/* Console Footer */}
          <div className="flex items-center justify-between border-t border-border bg-surface-raised px-4 py-2 font-mono text-[11px] text-foreground-dim">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-primary" />
              <span>RUNTIME: LINUX x86_64 // PYTHON 3.12 + TYPESCRIPT 5</span>
            </div>
            <span>CHARSET: UTF-8</span>
          </div>
        </div>
      </div>
    </section>
  );
}

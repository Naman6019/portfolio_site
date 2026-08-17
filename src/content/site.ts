export interface Project {
  slug: string;
  title: string;
  category: "agentic" | "fintech" | "systems";
  tagline: string;
  problem: string;
  architecture: string;
  result: string;
  stack: string[];
  metrics: string[];
  links: { label: string; href: string; icon?: string }[];
  featured: boolean;
  systemDiagram?: string;
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  category: string;
  stack: string[];
  href: string;
  badge: string;
}

export const siteProfile = {
  name: "Naman Manocha",
  callsign: "NAMAN-6019",
  role: "AI/ML Engineer & Autonomous Agent Architect",
  location: "Kolkata, India",
  coordinates: "22.5726° N, 88.3639° E",
  status: "OPEN TO AI/ML & AGENT ENGINEERING ROLES",
  nodeEnv: "NODE: PRODUCTION // REAPER CORE v3.8",
  tagline:
    "Building deterministic data pipelines, multi-agent graph orchestrations, and full-stack systems where outputs are grounded, inspectable, and resilient.",
  bio: [
    "Specializing in autonomous agent architectures, quantitative data ingestion, and domain-specific retrieval systems. Focused on moving beyond brittle chat demos to building inspectable, fault-tolerant AI platforms.",
    "Experience spans multi-agent orchestration with Google ADK and LangGraph, automated ETL pipelines parsing regulatory disclosures across 12+ AMCs, RAFT fine-tuning, and production web applications powered by Next.js 16 and FastAPI.",
  ],
  email: "thereaper6019@gmail.com",
  socials: {
    github: "https://github.com/Naman6019",
    twitter: "https://twitter.com/Capt6019",
    instagram: "https://www.instagram.com/naman_manocha19?igsh=MTI2MHA2OGxkdHlpag==",
    fundersai: "https://www.fundersai.co.in",
    fundersaiStudio: "https://synthesis.fundersai.co.in",
  },
  stats: {
    workflows: "22+",
    amcsIngested: "12+",
    uptime: "99.9%",
    repos: "10+",
  },
};

export const engineeringPillars = [
  {
    id: "agents",
    title: "Frontier AI & Autonomous Agents",
    short: "Multi-Agent DAG Orchestration",
    description:
      "State-graph architectures with deterministic routing, tool-calling pipelines, automated retry policies, and structured reasoning with Google ADK and LangGraph.",
    telemetry: "EXEC_ENGINE: LANGGRAPH + ADK // ROUTING: DETERMINISTIC DAG",
    tags: ["Google ADK", "LangGraph", "Multi-Agent Routing", "Tool Calling", "Gemini 3.6 Flash"],
    ascii: `[User Request] ──> (Intent Router) ──┬──> [Equity Agent]
                                        ├──> [Fund Synthesis]
                                        └──> [Macro Context]`,
  },
  {
    id: "fintech",
    title: "Quantitative Fintech & Ingestion",
    short: "High-Throughput Regulatory ETL",
    description:
      "Automated pipelines parsing daily NAVs and official monthly portfolio disclosures across 12+ Indian AMCs with strict quota-safe caching and validation.",
    telemetry: "PIPELINES: 22 GH ACTIONS // TIERS: SUPABASE + R2 COLD",
    tags: ["22 GitHub Actions", "AMFI Sync", "12+ AMCs", "Supabase PostgreSQL", "Cloudflare R2"],
    ascii: `[12+ AMCs Data] ──> [22 Actions ETL] ──> [Supabase Read-Tier]
                                        └──> [Cloudflare R2 Cold]`,
  },
  {
    id: "rag",
    title: "Applied ML & Domain RAG",
    short: "RAFT & Hybrid Retrieval",
    description:
      "Retrieval-Augmented Fine-Tuning (RAFT) for domain adaptation, dense cosine vector similarity paired with BM25 lexical reranking, and explicit abstention guards.",
    telemetry: "RETRIEVAL: HYBRID DENSE+BM25 // PROVENANCE: CITABLE CHUNKS",
    tags: ["RAFT Fine-Tuning", "PyTorch", "Hugging Face", "Vector DB", "BM25 Reranking"],
    ascii: `[Query] ──> [Dense Vector Embed] ──┬──> [Hybrid Merge] ──> [Validated Response]
        ──> [BM25 Lexical Score]  ──┘   (Abstain if ungrounded)`,
  },
  {
    id: "systems",
    title: "Full-Stack Production Systems",
    short: "Resilient Microservices",
    description:
      "Production-grade web services with Next.js 16 (App Router), FastAPI, Docker containers on Google Cloud Run, WebSockets, and zero-downtime CI/CD.",
    telemetry: "STACK: NEXT.js 16 + FASTAPI // RUNTIME: CLOUD RUN + DOCKER",
    tags: ["Next.js 16", "React 19", "FastAPI", "Docker", "Google Cloud Run", "WebSockets"],
    ascii: `[Next.js 16 UI] ──<WebSockets/REST>──> [FastAPI Runtime]
                                       └──> [Docker on Cloud Run]`,
  },
];

export const flagshipProjects: Project[] = [
  {
    slug: "funders-ai",
    title: "FundersAI",
    category: "fintech",
    tagline: "AI-orchestrated financial research workspace for Indian equities and mutual funds.",
    problem:
      "Financial intelligence tools frequently present ungrounded or stale data behind confident conversational interfaces without traceable provenance.",
    architecture:
      "Engineered an automated ingestion pipeline across 12+ Indian AMCs with Supabase-first low-latency reads, Cloudflare R2 cold document archive, and LangGraph intent-routing.",
    result:
      "Live in production at fundersai.co.in with Synthesis Engine for portfolio overlap analysis, fund comparisons, and downloadable institutional research PDF reports.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "FastAPI",
      "Python",
      "Supabase",
      "Cloudflare R2",
      "LangGraph",
    ],
    metrics: ["12+ AMCs Ingested", "22 Automated Workflows", "Sub-100ms Cache Hits"],
    links: [
      { label: "Live Platform", href: "https://www.fundersai.co.in", icon: "external" },
      { label: "Synthesis Studio", href: "https://synthesis.fundersai.co.in", icon: "sparkles" },
      { label: "GitHub Repo", href: "https://github.com/Naman6019/FundersAI", icon: "github" },
    ],
    featured: true,
  },
  {
    slug: "all-things-agentic",
    title: "all-things-agentic",
    category: "agentic",
    tagline: "Autonomous multi-source job search & career intelligence agent (Taskmaster Track).",
    problem:
      "Manual candidate job tracking lacks continuous multi-platform ingestion, structured ATS rejection telemetry, and contextualized profile matching.",
    architecture:
      "Implemented a multi-agent crawler with Google ADK, Gemini reasoning engine for rejection deconstruction, context-aware application synthesis, and Firestore persistence on Google Cloud Run.",
    result:
      "Fully autonomous serverless agent continuously monitoring 8 platforms, explaining rejection patterns with actionable skill graphs, and drafting targeted applications.",
    stack: [
      "Google ADK",
      "Gemini 3.6 Flash",
      "Google Cloud Run",
      "Firestore",
      "TypeScript",
      "Next.js",
      "Docker",
    ],
    metrics: ["8 Job Portals Crawled", "Zero-Server Idle Cost", "Automated Skill Analysis"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Naman6019/all-things-agentic", icon: "github" },
    ],
    featured: true,
  },
  {
    slug: "careflow-intelligence",
    title: "CareFlow Intelligence",
    category: "agentic",
    tagline: "Clinical Decision Support Platform with RAFT Fine-Tuning & Hybrid Vector RAG.",
    problem:
      "Clinical prototypes risk hallucinations and lack verifiable grounding to peer-reviewed guidelines and medical literature.",
    architecture:
      "Fine-tuned domain models with RAFT (Retrieval Augmented Fine-Tuning) datasets. Integrated hybrid retrieval combining dense vector embeddings and BM25 lexical reranking with mandatory citation bounds.",
    result:
      "A medical intelligence platform returning verifiable clinical citations with confidence intervals, extractive fallbacks, and explicit abstention triggers.",
    stack: [
      "PyTorch",
      "Hugging Face",
      "FastAPI",
      "LangChain",
      "Vector DB",
      "Python",
      "Docker",
    ],
    metrics: ["Hybrid Vector + BM25", "100% Validated Citations", "Extractive Fallback"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Naman6019/CareFlow-Intelligence", icon: "github" },
    ],
    featured: true,
  },
  {
    slug: "collab-docs",
    title: "CollabDocs",
    category: "systems",
    tagline: "Real-time collaborative documentation workspace with live multi-user editing.",
    problem:
      "Building low-latency document sync requires deterministic conflict resolution, low overhead state replication, and presence tracking.",
    architecture:
      "WebSocket-driven synchronization layer over Next.js and Node.js with state reconciliation, granular workspace permissions, and full Markdown rendering pipeline.",
    result:
      "High-throughput collaborative editor with live user cursor presence, multi-project document hierarchy, and version history snapshots.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
    ],
    metrics: ["Sub-20ms Sync Latency", "Multi-Cursor Presence", "Snapshot History"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Naman6019/CollabDocs", icon: "github" },
    ],
    featured: true,
  },
  {
    slug: "teamboard-api",
    title: "TeamBoard B2B Platform",
    category: "systems",
    tagline: "Scalable multi-tenant knowledge base & developer REST API platform.",
    problem:
      "Enterprise teams require isolated multi-tenant data storage, RBAC security, API key quotas, and full-text document indexing.",
    architecture:
      "Engineered a multi-tenant Node.js/Express architecture with PostgreSQL schema isolation, Redis caching, OpenAPI/Swagger contracts, and Docker packaging.",
    result:
      "Turnkey developer API platform supporting multi-tenant organizations, granular role permissions, and sub-second document search.",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger",
      "JWT / RBAC",
    ],
    metrics: ["Multi-Tenant RBAC", "OpenAPI Spec v3", "Redis Cached Queries"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Naman6019/TeamBoard---B2B-Knowledge-Base-API-Platform",
        icon: "github",
      },
    ],
    featured: false,
  },
  {
    slug: "news-agent",
    title: "AI News Agent",
    category: "agentic",
    tagline: "Automated news intelligence pipeline with WhatsApp delivery & local LLM inference.",
    problem:
      "Information overload across tech RSS feeds requires deduplication, intelligent clustering, and scheduled concise delivery.",
    architecture:
      "Built an asynchronous Python/FastAPI pipeline utilizing local Ollama/Gemma for inference, clustering RSS streams, and pushing morning/evening digests via Twilio WhatsApp API.",
    result:
      "Containerized background worker deployed on Render, autonomously summarizing and dispatching curated intelligence digests daily.",
    stack: ["FastAPI", "Python", "Ollama", "Gemma", "Twilio API", "Docker", "Render"],
    metrics: ["Automated Daily Schedule", "Zero Cloud Inference Cost", "WhatsApp Delivery"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Naman6019/News_Agent", icon: "github" },
    ],
    featured: false,
  },
];

export const openSourceRepositories: OpenSourceRepo[] = [
  {
    name: "Gaming Wiki AI Assistant",
    description:
      "Local LLM gaming assistant for Warframe and Clair Obscur: Expedition 33 with automated wiki scraping and Express.js backend.",
    category: "AI & Scraping",
    stack: ["Node.js", "Express.js", "Local LLM", "Cheerio", "REST API"],
    href: "https://github.com/Naman6019/Gaming_Bot",
    badge: "Interactive Assistant",
  },
  {
    name: "PulseNotify-AirTribe",
    description:
      "Asynchronous notification and event streaming microservice with pub/sub architecture and guaranteed delivery channels.",
    category: "Microservices",
    stack: ["Node.js", "Event Streaming", "Pub/Sub", "REST API", "Docker"],
    href: "https://github.com/Naman6019/PulseNotify-AirTribe",
    badge: "Event Microservice",
  },
  {
    name: "Mental Health Sentiment Analysis",
    description:
      "NLP machine learning pipeline for detecting mental health distress indicators with feature extraction and evaluation.",
    category: "Applied ML",
    stack: ["Python", "scikit-learn", "Pandas", "NLP", "Classification"],
    href: "https://github.com/Naman6019/Sentiment-Analysis-for-Mental-Health-Detection",
    badge: "NLP Pipeline",
  },
  {
    name: "Streamlit Medical Bot",
    description:
      "Clinical RAG experiment built with LangChain, FastAPI embeddings, and an interactive Streamlit frontend.",
    category: "RAG Prototype",
    stack: ["Python", "LangChain", "FastAPI", "Streamlit", "Embeddings"],
    href: "https://github.com/Naman6019/Streamlit_medicalBot",
    badge: "RAG Sandbox",
  },
  {
    name: "Fake News & Spam Classifiers",
    description:
      "Classical machine learning classification pipelines with text preprocessing, TF-IDF vectorization, and cross-validation.",
    category: "ML Foundations",
    stack: ["Python", "scikit-learn", "TF-IDF", "NLTK", "Supervised ML"],
    href: "https://github.com/Naman6019/FakeNewsPrediction",
    badge: "ML Classifiers",
  },
];

export const techStackMatrix = [
  {
    category: "AI, Agents & Machine Learning",
    description: "Multi-agent graph orchestration, domain fine-tuning, and retrieval systems",
    items: [
      { name: "Google ADK", level: "Primary", highlight: true },
      { name: "LangGraph", level: "Primary", highlight: true },
      { name: "LangChain", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "Hugging Face", level: "Advanced" },
      { name: "RAFT (Retrieval Fine-Tuning)", level: "Advanced", highlight: true },
      { name: "Vector DBs & Embeddings", level: "Advanced" },
      { name: "BM25 Hybrid Search", level: "Advanced" },
      { name: "Ollama / Local LLMs", level: "Advanced" },
      { name: "scikit-learn & Pandas", level: "Advanced" },
    ],
  },
  {
    category: "Backend, APIs & Microservices",
    description: "High-concurrency servers, asynchronous task queues, and transactional layers",
    items: [
      { name: "Python", level: "Primary", highlight: true },
      { name: "FastAPI", level: "Primary", highlight: true },
      { name: "TypeScript / Node.js", level: "Primary", highlight: true },
      { name: "Express.js", level: "Advanced" },
      { name: "WebSockets", level: "Advanced" },
      { name: "Uvicorn / Asgi", level: "Advanced" },
      { name: "OpenAPI / Swagger", level: "Advanced" },
      { name: "REST Architecture", level: "Primary" },
    ],
  },
  {
    category: "Database, Cloud & DevOps",
    description: "Production infrastructure, cold/hot data partitioning, and continuous delivery",
    items: [
      { name: "Supabase PostgreSQL", level: "Primary", highlight: true },
      { name: "PostgreSQL", level: "Primary" },
      { name: "Cloudflare R2", level: "Advanced", highlight: true },
      { name: "Google Cloud Run", level: "Advanced", highlight: true },
      { name: "Docker", level: "Primary", highlight: true },
      { name: "GitHub Actions (22+ Workflows)", level: "Primary", highlight: true },
      { name: "Redis", level: "Advanced" },
      { name: "Vercel & Render", level: "Primary" },
    ],
  },
  {
    category: "Frontend & UI Engineering",
    description: "High-performance web applications, interactive dashboards, and design systems",
    items: [
      { name: "Next.js 16 (App Router)", level: "Primary", highlight: true },
      { name: "React 19", level: "Primary", highlight: true },
      { name: "Tailwind CSS v4", level: "Primary", highlight: true },
      { name: "TypeScript", level: "Primary", highlight: true },
      { name: "HTML5 / Modern CSS", level: "Primary" },
      { name: "Data Visualization (Recharts/Canvas)", level: "Advanced" },
      { name: "Responsive & Accessible UX", level: "Primary" },
    ],
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Grounding Over Unbounded Generation",
    principle:
      "Never present an AI output without inspectable source evidence. When source data is missing or ambiguous, the system must abstain and report its boundary explicitly rather than hallucinate.",
  },
  {
    number: "02",
    title: "Production Over Demo Toys",
    principle:
      "Prototype with production failure modes in mind: rate limits, cold-start latency, downstream schema drift, quota boundaries, and automated retry backoffs.",
  },
  {
    number: "03",
    title: "Strict Ingestion & Serving Isolation",
    principle:
      "Keep heavy ETL parsing, vector indexing, and scraping workloads isolated in asynchronous background workers (GitHub Actions / Cloud Run) to maintain sub-100ms user serving latency.",
  },
  {
    number: "04",
    title: "Empirical Evaluation Over Guesswork",
    principle:
      "Measure retrieval precision, recall, latency percentiles, and cost per query across deterministic datasets before shipping model changes.",
  },
];

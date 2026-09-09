export type ProjectStatus = "deployed" | "in-progress" | "research";

export type EvidenceKind = "live" | "repository" | "verification" | "submission";

export const evidenceKindLabels: Record<EvidenceKind, string> = {
  live: "Live product",
  repository: "Public repository",
  verification: "Verification link",
  submission: "Hackathon submission",
};

export interface EvidenceLink {
  label: string;
  href: string;
  kind: EvidenceKind;
}

export type CareerEvidenceKind = "document" | "profile" | "verification";

export interface CareerEvidence {
  label: string;
  href: string;
  kind: CareerEvidenceKind;
}

export interface ExperienceRecord {
  role: string;
  organization: string;
  type: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  evidence: CareerEvidence[];
}

export interface EducationRecord {
  program: string;
  institution: string;
  dates: string;
  status: string;
  result: string;
  focus: string;
  evidence: CareerEvidence[];
}

export type CredentialStatus = "active" | "expired" | "not-published";

export interface CredentialRecord {
  name: string;
  issuer: string;
  type: string;
  status: CredentialStatus;
  issued: string;
  expires: string | null;
  evidence: CareerEvidence[];
}

export interface AchievementRecord {
  title: string;
  organization: string;
  date: string;
  description: string;
  status: "verified" | "not-published";
  evidence: CareerEvidence[];
}

export interface HackathonSubmissionRecord {
  projectSlug: string;
  projectTitle: string;
  event: string;
  host: string;
  platform: string;
  status: "submitted";
  evidence: EvidenceLink[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  role: string;
  dates: string;
  summary: string;
  problem: string;
  build: string;
  outcome: string;
  limitations: string;
  stack: string[];
  evidence: EvidenceLink[];
  featured: boolean;
}

export const portfolioProfile = {
  name: "Naman Manocha",
  role: "AI Engineer · GenAI · Agentic Systems",
  specialization: "LLMs, RAG & Applied ML",
  tagline:
    "I build grounded AI products and full-stack systems that make complex data useful, inspectable, and reliable.",
  location: "Kolkata, India",
  availability: "Open to AI/ML, GenAI, and agent engineering roles",
  email: "thereaper6019@gmail.com",
  linkedin: "https://www.linkedin.com/in/naman-d-manocha/",
  github: "https://github.com/Naman6019",
  resume: "/resume/Naman_Manocha_Master_Resume.pdf",
  logo: "/nm_logo_bold_technical.png",
};

export interface ResumeVariant {
  label: string;
  href: string;
}

export const resumeVariants: ResumeVariant[] = [
  { label: "1-page", href: "/resume/Naman_Manocha_Master_1Page_Resume.pdf" },
  { label: "AI Engineer", href: "/resume/Naman_Manocha_AI_Engineer_Resume.pdf" },
  { label: "GenAI Engineer", href: "/resume/Naman_Manocha_GenAI_Engineer_Resume.pdf" },
  { label: "Agentic AI / FDE", href: "/resume/Naman_Manocha_Agentic_AI_FDE_Resume.pdf" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "funders-ai",
    title: "FundersAI",
    category: "Applied AI / Fintech",
    status: "deployed",
    role: "Solo-built independent project",
    dates: "Apr–Aug 2026",
    summary:
      "Evidence-first research workspace for Indian stocks and mutual funds.",
    problem:
      "Financial research interfaces need to show where an answer comes from, how fresh it is, and when the available data is incomplete.",
    build:
      "Built a Next.js and FastAPI product around deterministic comparisons, official AMC-document evidence, retrieval workflows, and a Supabase-first data layer.",
    outcome:
      "A public research product that keeps sources, freshness, missing fields, and research-only boundaries visible to the user.",
    limitations:
      "Research-only; it does not provide personalized investment advice or buy/sell/hold recommendations.",
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "pgvector", "LangGraph", "Cloudflare R2"],
    evidence: [
      { label: "Open live product", href: "https://www.fundersai.co.in", kind: "live" },
      { label: "Read the repository", href: "https://github.com/Naman6019/FundersAI", kind: "repository" },
      { label: "Open Devpost submission", href: "https://devpost.com/software/fundersai?ref_content=user-portfolio&ref_feature=in_progress", kind: "submission" },
    ],
    featured: true,
  },
  {
    slug: "funders-ai-reports",
    title: "FundersAI Reports",
    category: "AI Infrastructure",
    status: "in-progress",
    role: "Solo-built service extraction",
    dates: "2026",
    summary:
      "A decoupled report-synthesis service designed to isolate LLM-heavy generation from the core research product.",
    problem:
      "Long-running report generation should be independently deployable and observable without making the main application responsible for every workload.",
    build:
      "Extracted report synthesis into a FastAPI and LangGraph service with container and Kubernetes deployment work in progress.",
    outcome:
      "A clearer service boundary for future scaling and streaming report generation.",
    limitations:
      "No public deployment is claimed in this portfolio version.",
    stack: ["Python", "FastAPI", "LangGraph", "Docker", "Kubernetes", "AWS EC2"],
    evidence: [
      { label: "Repository area", href: "https://github.com/Naman6019/FundersAI/tree/main/microservices/reports", kind: "repository" },
    ],
    featured: false,
  },
  {
    slug: "careflow-intelligence",
    title: "CareFlow Intelligence",
    category: "Applied ML / RAG",
    status: "in-progress",
    role: "Solo-built research project",
    dates: "Aug 2026",
    summary:
      "A synthetic-data, non-clinical research sandbox for bounded RAG, citation validation, and RAFT fine-tuning.",
    problem:
      "Clinical AI research needs strict boundaries, traceable evidence, and an explicit refusal path when the retrieved context is insufficient.",
    build:
      "Built bounded document and data agents, citation checks, synthetic FHIR data flows, and a local-model fine-tuning path using public or synthetic sources.",
    outcome:
      "A research environment for testing grounded retrieval and human approval gates without presenting clinical advice.",
    limitations:
      "Synthetic/public data only; non-clinical; not deployed as a clinical product.",
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "pgvector", "Unsloth", "Ollama"],
    evidence: [
      { label: "Read the repository", href: "https://github.com/Naman6019/CareFlow-Intelligence", kind: "repository" },
    ],
    featured: true,
  },
  {
    slug: "talentos",
    title: "TalentOS / CareerAgent",
    category: "Agentic Systems",
    status: "in-progress",
    role: "Solo-built independent project",
    dates: "2026",
    summary:
      "A job and career-intelligence system for structured source collection, evaluation, and application preparation.",
    problem:
      "Job search workflows need consistent source handling, evidence-aware matching, and human control over any application action.",
    build:
      "Designed multi-source collection, deterministic pre-filtering, agent evaluation, application drafting, tracing, and human approval gates.",
    outcome:
      "A work-in-progress platform for turning scattered job information into reviewable career decisions.",
    limitations:
      "No public deployment is claimed; all application actions remain human-controlled.",
    stack: ["Python", "Google ADK", "LangGraph", "Next.js", "Firestore", "Google Cloud"],
    evidence: [
      { label: "Read the repository", href: "https://github.com/Naman6019/all-things-agentic", kind: "repository" },
    ],
    featured: true,
  },
  {
    slug: "question-answering-squad",
    title: "Question Answering on SQuAD",
    category: "ML Foundations",
    status: "research",
    role: "Research project",
    dates: "2021–2025",
    summary:
      "A comparative study of extractive question-answering models and standardized evaluation.",
    problem:
      "Model comparisons are difficult to interpret when training and evaluation pipelines differ between experiments.",
    build:
      "Compared BERT, BiDAF, and DistilBERT with a shared training and evaluation workflow across accuracy, precision, recall, and F1.",
    outcome:
      "A benchmark-oriented foundation for later applied retrieval work.",
    limitations:
      "No public deployment or repository link is claimed yet.",
    stack: ["Python", "PyTorch", "scikit-learn", "BERT", "BiDAF", "DistilBERT"],
    evidence: [],
    featured: false,
  },
  {
    slug: "collab-docs",
    title: "CollabDocs",
    category: "Full-Stack Systems",
    status: "in-progress",
    role: "Independent project",
    dates: "2026",
    summary: "Real-time collaborative documentation workspace with multi-user editing.",
    problem: "Collaborative editing requires predictable synchronization, permissions, and document history.",
    build: "Designed a WebSocket-driven workspace with document hierarchy, presence, Markdown rendering, and version snapshots.",
    outcome: "A full-stack systems project focused on real-time state and collaboration boundaries.",
    limitations: "No public deployment is claimed in this portfolio version.",
    stack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/CollabDocs", kind: "repository" }],
    featured: false,
  },
  {
    slug: "teamboard-api",
    title: "TeamBoard B2B Platform",
    category: "Backend Systems",
    status: "in-progress",
    role: "Independent project",
    dates: "2026",
    summary: "Multi-tenant knowledge-base and developer REST API platform.",
    problem: "B2B APIs need tenant isolation, role boundaries, quotas, and searchable document storage.",
    build: "Designed a Node.js and PostgreSQL service with RBAC, Redis caching, OpenAPI contracts, and Docker packaging.",
    outcome: "A backend systems project focused on multi-tenant API design and operational boundaries.",
    limitations: "No public deployment is claimed in this portfolio version.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/TeamBoard---B2B-Knowledge-Base-API-Platform", kind: "repository" }],
    featured: false,
  },
  {
    slug: "news-agent",
    title: "AI News Agent",
    category: "Agentic Systems",
    status: "in-progress",
    role: "Independent project",
    dates: "2026",
    summary: "Automated news aggregation and digest pipeline with local-model inference.",
    problem: "RSS-heavy workflows need deduplication, topic grouping, and concise scheduled delivery.",
    build: "Designed an asynchronous FastAPI worker that clusters feeds, summarizes locally, and dispatches scheduled digests.",
    outcome: "A small systems project exploring reliable background work and low-cost inference.",
    limitations: "No public deployment is claimed in this portfolio version.",
    stack: ["FastAPI", "Python", "Ollama", "Twilio API", "Docker"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/News_Agent", kind: "repository" }],
    featured: false,
  },
  {
    slug: "gaming-wiki-ai-assistant",
    title: "Gaming Wiki AI Assistant",
    category: "AI Assistants",
    status: "in-progress",
    role: "Independent repository project",
    dates: "Repository history",
    summary: "A local-model assistant for game questions grounded in public wiki data.",
    problem: "Game information is fragmented across wikis, making conversational discovery slower than it needs to be.",
    build: "Built an Express service around local Ollama inference, wiki API/scraper integrations, game switching, conversation history, and a small cache layer.",
    outcome: "A repository-level assistant experiment for Warframe and Clair Obscur: Expedition 33 information retrieval.",
    limitations: "No public deployment is claimed; responses depend on local model/runtime setup and public wiki availability.",
    stack: ["Node.js", "Express.js", "Ollama", "MediaWiki API", "Cheerio"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/Gaming_Bot", kind: "repository" }],
    featured: false,
  },
  {
    slug: "pulse-notify-airtribe",
    title: "PulseNotify-AirTribe",
    category: "Event Systems",
    status: "in-progress",
    role: "Independent repository project",
    dates: "Repository history",
    summary: "An asynchronous notification and event-streaming microservice with pub/sub delivery.",
    problem: "Notification workflows need clear event boundaries, delivery channels, and a path to asynchronous processing.",
    build: "Designed a service boundary around event publishing, notification alerts, delivery channels, and API-level integration material.",
    outcome: "A compact microservice project focused on event-driven backend design and delivery concerns.",
    limitations: "No public deployment or production traffic is claimed in this portfolio version.",
    stack: ["Node.js", "Pub/Sub", "REST API", "Docker", "Event Streaming"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/PulseNotify-AirTribe", kind: "repository" }],
    featured: false,
  },
  {
    slug: "mental-health-sentiment",
    title: "Mental Health Sentiment Analysis",
    category: "Applied ML",
    status: "research",
    role: "Research experiment",
    dates: "Repository history",
    summary: "An NLP classification pipeline for exploring mental-health distress indicators in text.",
    problem: "Text classification experiments need a reproducible feature, training, and evaluation path before any result can be interpreted.",
    build: "Implemented text preprocessing, feature extraction, supervised classification, and evaluation workflows using classical machine-learning tooling.",
    outcome: "A repository-level NLP experiment for learning and benchmarking classification workflows.",
    limitations: "Research only; not a diagnostic tool, clinical validation, or mental-health service.",
    stack: ["Python", "scikit-learn", "Pandas", "NLP", "Classification"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/Sentiment-Analysis-for-Mental-Health-Detection", kind: "repository" }],
    featured: false,
  },
  {
    slug: "streamlit-medical-bot",
    title: "Streamlit Medical Bot",
    category: "RAG Prototype",
    status: "research",
    role: "Research experiment",
    dates: "Repository history",
    summary: "A Streamlit medical-domain chatbot experiment using LangChain and FastAPI.",
    problem: "Retrieval-augmented chatbot prototypes need a visible interface for testing retrieval and response behavior.",
    build: "Connected a Streamlit interaction layer to LangChain and FastAPI components for a small medical-domain RAG experiment.",
    outcome: "A prototype for exploring retrieval-backed conversational UX and service boundaries.",
    limitations: "Research only; not clinical software, medical advice, or a validated healthcare workflow.",
    stack: ["Python", "LangChain", "FastAPI", "Streamlit", "Embeddings"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/Streamlit_medicalBot", kind: "repository" }],
    featured: false,
  },
  {
    slug: "fake-news-prediction",
    title: "Fake News Prediction",
    category: "ML Foundations",
    status: "research",
    role: "Machine-learning experiment",
    dates: "Repository history",
    summary: "A classical text-classification experiment for fake-news prediction.",
    problem: "Text classification requires explicit preprocessing and a measurable baseline before model comparisons are meaningful.",
    build: "Implemented a Logistic Regression text-classification workflow with repository-contained training material.",
    outcome: "A focused ML foundation project for supervised classification and baseline evaluation.",
    limitations: "Research experiment; no current accuracy claim or deployed prediction service is published here.",
    stack: ["Python", "Logistic Regression", "scikit-learn", "NLP"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/FakeNewsPrediction", kind: "repository" }],
    featured: false,
  },
  {
    slug: "spam-mail-prediction",
    title: "Spam Mail Prediction",
    category: "ML Foundations",
    status: "research",
    role: "Machine-learning experiment",
    dates: "Repository history",
    summary: "A classical text-classification experiment for spam-mail prediction.",
    problem: "Email classification benefits from a simple, inspectable baseline before more complex models are considered.",
    build: "Built a repository-level supervised text-classification workflow for separating spam and non-spam messages.",
    outcome: "A compact ML foundation project focused on preprocessing and binary classification.",
    limitations: "Research experiment; no current accuracy claim or deployed prediction service is published here.",
    stack: ["Python", "scikit-learn", "TF-IDF", "Classification"],
    evidence: [{ label: "Read the repository", href: "https://github.com/Naman6019/Spam-Mail-Prediction", kind: "repository" }],
    featured: false,
  },
];

export const experience: ExperienceRecord[] = [
  {
    role: "AI Engineer Intern",
    organization: "Internmo",
    type: "Internship · Remote",
    dates: "Aug 2026–Present",
    location: "Remote",
    summary:
      "Three-month remote AI engineering internship. Currently building Vantara, an end-to-end customer intelligence platform for churn and customer-value prediction, due November 2026.",
    highlights: [
      "Building churn-risk and 90-day customer-value models over historical transaction data, using time-based splits to keep evaluation leakage-safe.",
      "Designing customer segmentation that prioritizes high-value at-risk accounts and returns explainable retention recommendations.",
      "Shipping the system as a dashboard and REST API, containerized with Docker, with monitoring, tests, and documentation.",
    ],
    evidence: [
      { label: "Resume source", href: portfolioProfile.resume, kind: "document" },
    ],
  },
  {
    role: "Technology Manager",
    organization: "PayGain Multiservices Pvt. Ltd.",
    type: "Full-time role",
    dates: "Feb 2025–Present",
    location: "Kolkata, India",
    summary:
      "Leading development of a company-wide mobile app and translating business requirements into client-facing digital systems.",
    highlights: [
      "Scoping and leading a mobile app covering onboarding, document access, product registration, training, and payments.",
      "Built lead-capture automation and managed the company website and digital discovery flows.",
      "Explained complex investment and insurance products through technical presentations and collateral.",
    ],
    evidence: [
      { label: "Resume source", href: portfolioProfile.resume, kind: "document" },
    ],
  },
];

export const education: EducationRecord[] = [
  {
    program: "B.Tech, Computer Science Engineering (AI & ML Specialization)",
    institution: "VIT Amaravati",
    dates: "June 2021–September 2025",
    status: "Completed",
    result: "CGPA 8.2/10",
    focus: "Artificial intelligence, machine learning, and computer science foundations",
    evidence: [
      { label: "Resume source", href: portfolioProfile.resume, kind: "document" },
    ],
  },
];

export const credentials: CredentialRecord[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Foundational cloud certification",
    status: "active",
    issued: "20 Jan 2024",
    expires: "20 Jan 2027",
    evidence: [
      {
        label: "Open AWS verification",
        href: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e6307b4adcb2454380da88af3de4a127",
        kind: "verification",
      },
    ],
  },
];

// Keep this explicit until a separately evidenced achievement is approved for publication.
export const achievements: AchievementRecord[] = [];

export const hackathonSubmissions: HackathonSubmissionRecord[] = [
  {
    projectSlug: "funders-ai",
    projectTitle: "FundersAI",
    event: "OpenAI Build Week Hackathon",
    host: "OpenAI",
    platform: "Devpost",
    status: "submitted",
    evidence: [
      { label: "Open Devpost submission", href: "https://devpost.com/software/fundersai?ref_content=user-portfolio&ref_feature=in_progress", kind: "submission" },
    ],
  },
  {
    projectSlug: "talentos",
    projectTitle: "TalentOS",
    event: "All Things Agentic Hackathon",
    host: "Google",
    platform: "Devpost",
    status: "submitted",
    evidence: [],
  },
];

export const principles = [
  "Ground explanations in inspectable evidence and clear limitations.",
  "Use deterministic systems around probabilistic model behavior.",
  "Keep human approval gates around consequential actions.",
  "Ship end-to-end systems while measuring what is actually working.",
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

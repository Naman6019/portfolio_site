# Naman Manocha — AI/ML Engineer & Autonomous Agent Architect

A dark, high-craft portfolio website built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## ⚡ Core Highlights

- **Cybernetic Tactical Aesthetic**: Deep obsidian palette (`#060709`), razor-thin glowing borders, scanline overlays, telemetry indicators, and high-density information architecture.
- **Interactive Reaper Agent Console**:
  - **DAG Multi-Agent Synthesis**: Live code tab for `fundersai_agent.py` showcasing LangGraph orchestration.
  - **Google ADK Career Intelligence**: Live crawler spec for `job_agent_adk.json`.
  - **Clinical RAFT Fine-Tuning**: Live domain RAG & QLoRA adaptation script for `clinical_raft.py`.
  - **Runnable Interactive Shell**: `interactive_shell.sh` CLI supporting real-time commands (`help`, `projects`, `stack`, `pillars`, `contact`, `eval`, `whoami`, `clear`).
- **Engineering Architecture Pillars**: 4 bento blueprints with real ASCII pipeline DAG schematics.
- **Production Deployments Hub**: 6 filterable flagship systems with live links, problem statements, and architectural constraint breakdowns.
- **Classified Technical Matrix**: 5 domain-segregated engineering categories.
- **Automated Open Graph & Schema.org**: Fully wired JSON-LD Person schema and dynamic social preview metadata.
- **Zero-Friction Theme Toggle**: Reaper dark mode default with seamless light mode switch.

---

## 🏗️ Technical Architecture

- **Framework**: Next.js 16.3.0 (Turbopack, App Router)
- **UI & Runtime**: React 19.2.4 (TypeScript 5.9.3)
- **Styling**: Tailwind CSS v4 (CSS variables, responsive `@container` queries)
- **Animations & Interactivity**: MagicUI Particles (`@magicui/particles`), DiaTextReveal (`@magicui/dia-text-reveal`), Marquee (`@magicui/marquee`)
- **Icons**: Lucide React + custom inline SVGs for GitHub, X (Twitter), and Instagram
- **Fonts**: Inter (Sans) and JetBrains Mono (Monospace)

---

## 📁 Repository Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css         # Dark/light themes, glowing border utilities, engineering grid matrix
│   │   ├── layout.tsx          # Root layout, theme script, fonts, metadata & Person JSON-LD
│   │   └── page.tsx            # Main page assembling all 10 engineering sections
│   ├── components/
│   │   ├── Icons.tsx           # Custom SVGs for GitHub, TwitterX, Instagram, Sparkles
│   │   ├── Nav.tsx             # Sticky navbar with reaper//6019 callsign & telemetry
│   │   ├── ThemeToggle.tsx     # Tactical Dark/Light theme switch
│   │   ├── HeroSection.tsx     # Full-viewport split Hero with DiaTextReveal & Marquee
│   │   ├── HeroHUD.tsx         # Live interactive agent reasoning trace visualizer
│   │   ├── EngineeringPillars.tsx # 4 architectural cards with ASCII DAG schematics
│   │   ├── FlagshipProjects.tsx   # Filterable flagship production systems
│   │   ├── ReaperConsole.tsx   # Interactive agent terminal and code inspector
│   │   ├── OpenSourceHub.tsx   # Secondary open source repositories
│   │   ├── TechMatrix.tsx      # Classified technical competency matrix
│   │   ├── EngineeringPhilosophy.tsx # 6-point system architecture creed
│   │   ├── GitHubTelemetry.tsx # GitHub contribution stats and live activity grid
│   │   ├── ContactHub.tsx      # Encrypted transmission hub with copy email
│   │   ├── Footer.tsx          # System telemetry footer with back-to-top
│   │   └── magicui/            # Particles, DiaTextReveal, Marquee, FlickeringGrid
│   ├── content/
│   │   └── site.ts             # Complete data model for profile, projects, and creed
│   └── lib/
│       └── utils.ts            # Class merging utility
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start the Turbopack development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 🚢 Deployment Instructions

### 1. Deploying to Vercel (Recommended)
```bash
# Install Vercel CLI (or link via Github dashboard)
npx vercel
```

### 2. Deploying to Netlify
```bash
# Build the production bundle
npm run build

# Deploy via Netlify CLI or drag .next/static or connect repository
npx netlify deploy --prod
```

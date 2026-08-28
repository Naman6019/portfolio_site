<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio: Component Library & Design Engineering Guide

This guide establishes the non-negotiable rules, toolchain workflows, and component selection criteria for AI coding agents and engineers working on the **Personal Portfolio** (`portfolio_site`).

---

## 1. The 5-Library Component Matrix (What Each Tool is Best For)

```
┌──────────────────────────────────────────────────────────────────┐
│  Layer 5: Mobile & Touch Ergonomics (Ionic Framework Patterns)   │  ← Swipeable drawers, bottom sheets, touch targets
├──────────────────────────────────────────────────────────────────┤
│  Layer 4: Pure CSS Micro-Interactions (Uiverse.io)               │  ← Cyberpunk glow buttons, loaders, glitch text
├──────────────────────────────────────────────────────────────────┤
│  Layer 3: Hero Motion & Particle Physics (Magic UI MCP)          │  ← Sparkles-text, border beams, animated DAG beams
├──────────────────────────────────────────────────────────────────┤
│  Layer 2: Curated AI & SaaS Recipes (21st.dev MCP)               │  ← Specialized AI prompt bars, telemetry cards
├──────────────────────────────────────────────────────────────────┤
│  Layer 1: Structural Primitives & Accessibility (shadcn/ui)      │  ← Modals, Tooltips, Tabs, Dropdowns, Forms, Sheets
└──────────────────────────────────────────────────────────────────┘
```

| Library / Resource | Best For | What to Avoid Using It For |
| :--- | :--- | :--- |
| **[shadcn/ui](https://ui.shadcn.com)** | • Accessible dialogs, modals, and sheets<br>• Tooltips, hover cards, dropdown menus<br>• Accessible tabs and forms | Generic non-interactive layout containers (use vanilla Tailwind instead). |
| **[Magic UI](https://magicui.design)** | • Hero motion centerpieces (`SparklesText`, `AnimatedShinyText`)<br>• Ambient canvas backgrounds (`Particles`, `Globe`, `RetroGrid`)<br>• State-graph connections (`AnimatedBeam`, `BorderBeam`)<br>• Product feature showcases (`BentoGrid`, `Marquee`) | Standard data tables or dense form inputs (too distracting). |
| **[21st.dev](https://21st.dev)** | • Cutting-edge community-designed AI components<br>• Specialized telemetry HUDs, code diff cards, AI chat bubbles<br>• Bento grid variations tailored for SaaS landing pages | Replacing standard accessible primitives like Dialog or Tooltip. |
| **[Uiverse.io](https://uiverse.io)** | • Pure CSS/Tailwind buttons with futuristic hover glows<br>• Lightweight animated loading spinners & skeleton loaders<br>• Checkbox & switch micro-animations (zero JS overhead) | Full page layouts or complex multi-step forms. |
| **[Ionic Framework](https://ionicframework.com)** | • Mobile drawer / bottom sheet UX patterns<br>• Touch-friendly segmented controls & mobile action sheets<br>• 44px+ minimum tap target ergonomics | Desktop-first dashboards or web-only layout frameworks. |

---

## 2. MCP Server Configuration & Agent Usage

### A. Magic UI MCP (`magicuidesign-mcp`) — *Active in Environment*
The `magicuidesign-mcp` server allows agents to search and pull component code directly from the Magic UI registry.

#### Available MCP Tools:
1. **`searchRegistryItems`**: Search components by keyword (e.g. `query: "sparkles beam grid"`).
2. **`getRegistryItem`**: Retrieve complete TypeScript source code (e.g. `{ name: "sparkles-text", includeSource: true }`).
3. **`listRegistryItems`**: Browse full component inventory.

#### Agent Usage Pattern:
```typescript
// Example: Pulling SparklesText directly via MCP
1. Call searchRegistryItems({ query: "sparkles-text" })
2. Call getRegistryItem({ name: "sparkles-text", includeSource: true })
3. Save file into src/components/magicui/sparkles-text.tsx
4. Import and use inside page/hero component.
```

---

### B. 21st.dev MCP (`@21st-dev/magic`)
21st.dev provides an official Model Context Protocol (MCP) server connecting AI agents to 12,000+ React and Tailwind components.

#### Installation & Configuration:
To register the 21st MCP in any MCP client (Claude Desktop, Cursor, Antigravity, Windsurf):

```json
{
  "mcpServers": {
    "21st-magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"]
    }
  }
}
```

#### How Agents Leverage 21st.dev:
- **Search Query:** `search_components(query: "ai telemetry card dark mode")`
- **Install Component:** `install_component(component_id: "...", target_dir: "src/components")`
- **Use Case:** Grabbing unique design recipes that go beyond generic template aesthetics.

---

### C. shadcn/ui CLI & Remote Registry
shadcn components are installed directly into your repository, giving you 100% source code ownership.

#### Installation Commands:
```bash
# Initialize shadcn in a Next.js project
npx shadcn@latest init

# Add standard primitives
npx shadcn@latest add dialog tooltip tabs sheet badge button

# Add Magic UI components directly via shadcn remote registry
npx shadcn@latest add "https://magicui.design/r/sparkles-text.json"
npx shadcn@latest add "https://magicui.design/r/border-beam.json"
npx shadcn@latest add "https://magicui.design/r/animated-beam.json"
```

---

## 3. Codebase Intelligence & Graph Navigation (Graphify Invariant)

To maintain deep spatial awareness and deterministic dependency tracking across the codebase, agents must use **Graphify** for repository mapping, search, and state synchronization.

### Rules for Agents:
1. **Search & Trace via Graphify First:**
   - Before executing code modifications or tracing symbol dependencies across directories, query the repository code graph via `graphify`.
   - Use Graphify to map caller-callee hierarchies, imported types, exported utilities, and cross-project references within `portfolio_site`.
2. **Update the Graph After Each Iteration & File Change:**
   - **MANDATORY INVARIANT:** After every atomic edit, file creation, or refactor step, trigger an incremental graph update (`graphify update` / index refresh).
   - Never leave stale AST nodes or disconnected symbol edges in the graph between planning and execution iterations.
   - Keep the dependency graph 100% in sync for downstream sub-agents and tool calls.

---

## 4. Step-by-Step Agent Workflow for Building New Features

When asked to build or enhance a UI section or architectural feature, follow this structured execution pipeline:

```
[ Step 1: Graph Search ] ──> Query Graphify for existing symbols, route dependencies, & imports
          │
[ Step 2: Foundation ]   ──> Use shadcn/ui for accessible state (Tabs, Dialogs, Tooltips)
          │
[ Step 3: Visual Drama ] ──> Query Magic UI MCP for hero motion (Particles, Sparkles, Beams)
          │
[ Step 4: Domain Polish ]──> Query 21st.dev for specialized AI/SaaS card patterns
          │
[ Step 5: Micro-Details ]──> Apply Uiverse.io pure-CSS hover glows & button effects
          │
[ Step 6: Mobile Audit ] ──> Verify 44px tap targets & Ionic-inspired bottom drawers
          │
[ Step 7: Graph Sync ]   ──> Update Graphify repo graph after all file changes
```

---

## 5. Design System Tokens & Aesthetic Invariants

Always adhere to the established dark-mode telemetry palette across all components:

- **Background Obsidian:** `#030508` / `#040508` (`var(--background)`)
- **Card Surface:** `#080c14` / `#0a0c10` (`var(--surface)`)
- **Raised Container:** `#0f1523` / `#12151c` (`var(--surface-raised)`)
- **Cyan Accent (Systems & Data):** `#00f0ff` (`var(--cyan-primary)`)
- **Emerald Accent (Verification & Live):** `#10b981` (`var(--emerald-primary)`)
- **Amber Accent (Constraints & Crawlers):** `#f59e0b` (`var(--amber-primary)`)
- **Typography:** `JetBrains Mono` for headers/telemetry/stats, `Inter` / System Sans for body copy.
- **Body Text Color:** Use `text-slate-400` / `text-slate-300` (avoid harsh stark white for dense copy).
- **Glow Borders:** Use subtle box-shadows (`box-shadow: 0 0 35px -10px rgba(0, 240, 255, 0.12)`).

---

## 6. Verification Checklist for Agents

Before completing any task or turning control back to the user:
- [ ] **Graph Synced:** Graphify graph has been updated with all modified, created, or deleted files.
- [ ] **No Generic Placeholders:** Real copy, verified metrics, and actual links (no dummy `#` or lorem ipsum).
- [ ] **GPU Accelerated:** Motion components use `transform-gpu` or lightweight CSS keyframes.
- [ ] **Interactive States:** Distinct hover, active, focus-visible, and disabled states.
- [ ] **Dark Mode Ergonomics:** Soft contrast typography with no white-flash hydration bugs.
- [ ] **Zero Errors:** `npm run build` exits with code 0 (zero TypeScript errors).

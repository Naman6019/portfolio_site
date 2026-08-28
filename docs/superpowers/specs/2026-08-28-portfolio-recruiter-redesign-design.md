# Portfolio — Remaining Work Against Local HEAD

**Date:** 2026-08-28
**Status:** Audit complete; two content gaps and one delivery blocker remain
**Repo:** `portfolio_site`
**Baseline:** local `main` (commit `05cbaf3`, "feat: ship recruiter-first portfolio redesign", plus uncommitted work)

> **Supersedes** the earlier draft of this file, which audited the deployed
> Netlify site. That deployment is four days stale and does not represent the
> codebase. Nearly every defect it described had already been fixed locally.
> The redesign is done. What remains is delivery and two missing facts.

---

## 1. What the audit found

The local site was measured route by route against the live deployment.

| | Live Netlify | Local HEAD |
|---|---|---|
| DOM nodes (home) | 1,384 | 395 |
| Home page height | 10,104px (14.0 screens) | 5,251px (7.3 screens) |
| Routes | 1 | 5 + 14 generated case studies |
| `h1` | "Naman Manocha" | "Building grounded AI systems people can inspect." |
| Resume / LinkedIn | absent | present |
| Per-route title + description | no | yes |

Route heights on local HEAD: `/about` 6.0 screens, `/credentials` 7.5,
`/projects/funders-ai` 8.4, `/experience` 9.9. DOM nodes per route range from
118 to 249.

### Already resolved, no action needed

- **Persona layer removed.** No callsign, no version string, no CLASSIFIED
  labels, no fabricated latency readout on any route.
- **Fabricated model identifier removed.** `Gemini 3.6 Flash` no longer appears
  anywhere in `src/`. This was the highest-risk item in the previous draft.
- **Unverifiable metrics removed.** No "Sub-100ms", "Sub-20ms", "100%
  Validated", or "99.9%" claims remain in the content model.
- **Contrast fixed.** A computed audit of every leaf text node against its
  background found zero WCAG AA failures. The previous `#5a6173` token issue
  (3.25:1) is gone with the palette rewrite.
- **Tap targets.** One interactive element under 44px across the audited
  routes.
- **Evidence model.** `EvidenceLink` / `CareerEvidence` types attach
  provenance to claims — a stronger solution than the `{ value, label, source }`
  shape the previous draft proposed. Retained as-is.

## 2. Delivery blocker

**The site does not deploy.** Commit `05cbaf3` is on `origin/main` with nothing
unpushed, and `npm run build` succeeds locally (24 static routes, zero
TypeScript errors), yet Netlify serves the pre-redesign site.

Since the build is clean and the commit is pushed, the failure is on Netlify's
side. Three candidates, in order of likelihood:

1. **Auto-publish disabled or the deploy is stopped** on the site.
2. **The site is linked to a different branch or repository.**
3. **The Netlify build fails** for an environment reason the local build does
   not reproduce — most plausibly the Node version, which was pinned nowhere.

Mitigation applied: `NODE_VERSION = "22"` added to `netlify.toml`, a matching
`.nvmrc`, and an explicit `@netlify/plugin-nextjs` declaration. This removes
the environment variable from the equation but is **not** confirmed to be the
cause.

**The Netlify deploy log is authoritative and must be read.** No further
guessing is warranted until it is.

## 3. Content gaps

Two facts are missing from `src/content/portfolio.ts`. The `experience` array
currently holds exactly one entry (PayGain Multiservices, Technology Manager,
Feb 2025–Present).

### 3.1 Internmo internship — required

An Artificial Intelligence internship at Internmo began 20 August 2026 and runs
three months. It is absent from the site.

This is the single highest-value addition for the target audience. It moves the
profile from "builds strong independent projects" to "working in AI in a
professional setting", which is the specific signal recruiters screen for. It
should be described by scope of role rather than by outcomes, given it is eight
days old.

Note: PayGain is recorded as "Feb 2025–Present". If both roles are concurrent,
the site should make the arrangement legible rather than leaving a reader to
infer a contradiction from two overlapping "present" roles.

### 3.2 AllStackLabs — will not be added

The studio is deprecated and fully stopped. It is not to appear in
`experience` or anywhere else on the site.

Verified clean: `src/` contains zero references to AllStackLabs, and no
`studioBadge`, `endorsement`, or studio-affiliation fields survive in the
content model. The untracked `BACKLINK_STRATEGY.md`, which described a
cross-domain authority scheme built around the studio, has been removed from
the working tree. No cleanup work is outstanding.

The flagship projects themselves (FundersAI, CareFlow, CareerAgent) are
unaffected — they stand as independent work and remain on the site.

## 4. Housekeeping completed in this session

- **Resume link repaired.** `portfolioProfile.resume` pointed at
  `Naman_Manocha_Master_Resume.docx` — an editable Word file — and of the eight
  resume files on disk, only that `.docx` was tracked in git. All four PDFs
  were untracked and therefore absent from every deployed build. The link now
  points at `Naman_Manocha_Master_Resume.pdf`; verified serving 200,
  `application/pdf`, 386,413 bytes.
- **Dead code removed.** Eighteen files deleted: thirteen orphaned components
  (`HeroSection`, `HeroHUD`, `ReaperConsole`, `TechMatrix`,
  `EngineeringPillars`, `FlagshipProjects`, `OpenSourceHub`, `GitHubTelemetry`,
  `ContactHub`, `EngineeringPhilosophy`, `Nav`, `Footer`, `ProjectCard`), four
  orphaned Magic UI components (`dia-text-reveal`, `marquee`, `particles`,
  `flickering-grid`), and the superseded `content/site.ts`. All had zero
  importers among the surviving routes.
- **Dead CSS removed.** 53 lines: `reaper-dot-bg`, `glow-border-cyan`,
  `glow-border-amber`, `custom-scrollbar`, `ping-subtle`, `scanline-overlay`,
  and the marquee keyframes and utilities. `reaper-grid-bg` retained — still
  used on two routes.
- Build re-verified after removal: 24 routes, zero errors.

## 5. Remaining tasks

1. Read the Netlify deploy log; fix the cause it identifies.
2. Add the Internmo entry to `experience`, and resolve how it reads alongside
   the concurrent PayGain "Present" role.
3. Commit the untracked `Naman_Manocha_Master_Resume.pdf` — without it the
   resume link 404s in production.
4. Push and confirm the deployed site matches local HEAD.

## 6. Not doing

The previous draft's IA restructure, persona removal, visual restraint pass,
metric rewording, and contrast fix are all complete in the current codebase.
No redesign work is outstanding.

Also out of scope: migration to `namanmanocha.dev`, and any change to
FundersAI, CareFlow, or CareerAgent. The cross-domain backlink scheme is
abandoned along with the studio it was built around.

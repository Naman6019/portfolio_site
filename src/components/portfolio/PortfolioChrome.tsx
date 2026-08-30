import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { portfolioProfile } from "@/content/portfolio";
import { GithubIcon } from "@/components/Icons";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/credentials", label: "Credentials" },
  { href: "/about", label: "About" },
];

export function PortfolioHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal-primary focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-slate-950"
      >
        Skip to content
      </a>
      <header className="atlas-header sticky top-0 z-50 border-b border-border/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl 2xl:max-w-[88rem] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
            <Link href="/" className="group flex min-h-11 items-center gap-3" aria-label="Naman Manocha home">
              <span className="atlas-brand-mark relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border-strong bg-surface">
                <Image
                  src={portfolioProfile.logo}
                  alt="Naman Manocha monogram logo"
                  width={32}
                  height={32}
                  priority
                  className="h-8 w-8 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span>
                <span className="block font-display text-base font-bold tracking-[-0.03em] text-foreground">Naman Manocha</span>
                <span className="mt-0.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-primary shadow-[0_0_10px_var(--signal-primary)]" aria-hidden="true" />
                  AI engineer / independent systems
                </span>
              </span>
            </Link>

            <nav aria-label="Primary navigation" className="order-3 flex w-full flex-wrap items-center gap-1 border-t border-border/60 pt-2 sm:order-2 sm:w-auto sm:border-t-0 sm:pt-0">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="atlas-nav-link inline-flex min-h-11 items-center rounded-md px-3 py-2 font-mono text-xs text-foreground-muted hover:bg-surface-raised/70 hover:text-foreground focus-visible:ring-2 focus-visible:ring-blueprint-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="order-2 flex items-center gap-2 sm:order-3">
              <a
                href={portfolioProfile.resume}
                download
                className="inline-flex min-h-11 items-center rounded-md border border-signal-primary/45 bg-signal-primary/10 px-3.5 py-2 font-mono text-xs font-bold text-signal-primary transition-colors hover:bg-signal-primary/20 focus-visible:ring-2 focus-visible:ring-signal-primary"
              >
                Resume
              </a>
              <a
                href={portfolioProfile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden min-h-11 items-center gap-1 rounded-md border border-border bg-surface/70 px-3 py-2 font-mono text-xs text-foreground-muted transition-colors hover:border-blueprint-primary/50 hover:text-blueprint-primary focus-visible:ring-2 focus-visible:ring-blueprint-primary md:inline-flex"
              >
                LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface/70 text-foreground-muted transition-colors hover:border-blueprint-primary/50 hover:text-blueprint-primary focus-visible:ring-2 focus-visible:ring-blueprint-primary"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="hidden items-center justify-between border-t border-border/50 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-dim lg:flex">
            <span>Independent AI systems portfolio / Kolkata, India</span>
            <span>Scan order: proof → delivery → contact</span>
          </div>
        </div>
      </header>
    </>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="border-t border-border/80 bg-background/70 py-8">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[88rem] flex-wrap items-center justify-between gap-4 px-4 font-mono text-xs text-foreground-dim sm:px-6 lg:px-8">
        <span>{portfolioProfile.name} · {portfolioProfile.location}</span>
        <div className="flex items-center gap-4">
          <a className="inline-flex min-h-11 items-center hover:text-signal-primary" href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a className="inline-flex min-h-11 items-center hover:text-signal-primary" href={portfolioProfile.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <Link className="inline-flex min-h-11 items-center hover:text-signal-primary" href="/">Home</Link>
        </div>
      </div>
    </footer>
  );
}

export function PortfolioFrame({ children }: { children: ReactNode }) {
  return (
    <div className="atlas-shell min-h-screen text-foreground">
      <ScrollReveal />
      <PortfolioHeader />
      <div className="atlas-content">
        <main id="main-content">{children}</main>
        <PortfolioFooter />
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: "deployed" | "in-progress" | "research" }) {
  const labels = {
    deployed: "Deployed",
    "in-progress": "In progress",
    research: "Research",
  } as const;

  const colors = {
    deployed: "border-signal-primary/45 bg-signal-primary/10 text-signal-primary",
    "in-progress": "border-thermal-primary/45 bg-thermal-primary/10 text-thermal-primary",
    research: "border-blueprint-primary/45 bg-blueprint-primary/10 text-blueprint-primary",
  } as const;

  return <span className={`inline-flex rounded-sm border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${colors[status]}`}><span className="mr-1.5" aria-hidden="true">●</span>{labels[status]}</span>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="atlas-eyebrow">{children}</p>;
}

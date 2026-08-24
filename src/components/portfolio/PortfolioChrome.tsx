import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-primary focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-slate-950"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Naman Manocha home">
            <Image
              src={portfolioProfile.logo}
              alt="Naman Manocha monogram logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-md object-cover"
            />
            <span>
              <span className="block font-mono text-sm font-bold tracking-tight text-foreground">Naman Manocha</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">AI Engineer</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="order-3 flex w-full flex-wrap items-center gap-1 sm:order-2 sm:w-auto">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-md px-2.5 py-2 font-mono text-xs text-foreground-muted transition-colors hover:bg-surface-raised hover:text-cyan-primary focus-visible:ring-2 focus-visible:ring-cyan-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="order-2 flex items-center gap-2 sm:order-3">
            <a
              href={portfolioProfile.resume}
              download
              className="inline-flex min-h-11 items-center rounded-md border border-cyan-primary/40 bg-cyan-primary/10 px-3 py-2 font-mono text-xs font-bold text-cyan-primary transition-colors hover:bg-cyan-primary/20 focus-visible:ring-2 focus-visible:ring-cyan-primary"
            >
              Resume
            </a>
            <a
              href={portfolioProfile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden min-h-11 items-center gap-1 rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary md:inline-flex"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 font-mono text-xs text-foreground-dim sm:px-6 lg:px-8">
        <span>{portfolioProfile.name} · {portfolioProfile.location}</span>
        <div className="flex items-center gap-4">
          <a className="inline-flex min-h-11 items-center hover:text-cyan-primary" href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a className="inline-flex min-h-11 items-center hover:text-cyan-primary" href={portfolioProfile.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <Link className="inline-flex min-h-11 items-center hover:text-cyan-primary" href="/">Home</Link>
        </div>
      </div>
    </footer>
  );
}

export function PortfolioFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <main id="main-content">{children}</main>
      <PortfolioFooter />
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
    deployed: "border-emerald-primary/40 bg-emerald-primary/10 text-emerald-primary",
    "in-progress": "border-amber-primary/40 bg-amber-primary/10 text-amber-primary",
    research: "border-cyan-primary/40 bg-cyan-primary/10 text-cyan-primary",
  } as const;

  return <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${colors[status]}`}>{labels[status]}</span>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-primary">{children}</p>;
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { siteProfile } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import { GithubIcon } from "./Icons";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "#pillars", label: "01//PILLARS" },
  { href: "#projects", label: "02//PROJECTS" },
  { href: "#terminal", label: "03//TERMINAL" },
  { href: "#stack", label: "04//STACK" },
  { href: "#philosophy", label: "05//PHILOSOPHY" },
  { href: "#contact", label: "06//CONTACT" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Callsign */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-cyan-primary whitespace-nowrap"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded border border-cyan-primary/40 bg-cyan-primary/10 text-cyan-primary">
              <Terminal className="h-3.5 w-3.5" />
            </span>
            <span className="text-base font-bold tracking-tight">reaper<span className="text-cyan-primary">//</span>6019</span>
          </Link>

          <div className="hidden items-center gap-1.5 rounded-full border border-emerald-primary/30 bg-emerald-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-primary sm:flex whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-primary animate-pulse" />
            <span>SYS_ONLINE</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-2.5 py-1.5 font-mono text-xs text-foreground-muted transition-colors hover:bg-surface-hover hover:text-cyan-primary whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Hub */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={siteProfile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:flex h-9 items-center gap-1.5 rounded border border-border bg-surface px-3 font-mono text-xs text-foreground-muted transition-colors hover:border-foreground-muted hover:text-foreground"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="hidden md:inline">GitHub</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded border border-border bg-surface text-foreground-muted lg:hidden hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface px-4 py-4 lg:hidden">
          <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
            <span className="font-mono text-xs text-foreground-dim">
              NODE: reaper//6019
            </span>
            <span className="font-mono text-xs text-emerald-primary">● LIVE</span>
          </div>
          <nav className="flex flex-col gap-1.5 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded px-3 py-2 text-foreground-muted transition-colors hover:bg-surface-raised hover:text-cyan-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteProfile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 flex items-center justify-between rounded border border-border bg-surface-raised px-3 py-2 text-xs text-foreground"
            >
              <span>GITHUB ARCHIVE</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

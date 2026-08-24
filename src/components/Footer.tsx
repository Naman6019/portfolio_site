import { siteProfile } from "@/content/site";
import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 font-mono text-xs text-foreground-dim">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded border border-cyan-primary/30 bg-cyan-primary/10 text-cyan-primary">
            <Terminal className="h-3 w-3" />
          </span>
          <span className="font-bold text-foreground">{siteProfile.name}</span>
          <span>{"//"}</span>
          <span className="text-cyan-primary font-semibold">INDEPENDENT PORTFOLIO</span>
          <span>{"//"}</span>
          <span>{siteProfile.location}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] hidden sm:inline">
            AUTONOMOUS AGENTS & FULL-STACK SYSTEMS
          </span>
          <a
            href="#top"
            className="flex items-center gap-1 text-foreground-muted hover:text-cyan-primary transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { PortfolioFrame, SectionLabel } from "@/components/portfolio/PortfolioChrome";
import { portfolioProfile, principles } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Naman Manocha and his approach to grounded AI systems.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <PortfolioFrame>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="atlas-index-rail pl-6 sm:pl-8">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.06em] text-foreground sm:text-7xl">Building useful AI systems with visible boundaries.</h1>
        </div>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-foreground-muted">
          <p>{portfolioProfile.name} is an AI engineer focused on GenAI, agentic systems, retrieval, and applied machine learning.</p>
          <p>The work combines Python and FastAPI backends, Next.js interfaces, data pipelines, and model-assisted workflows. The common thread is practical: make the output inspectable, make limitations visible, and keep people in control of consequential actions.</p>
        </div>

        <section className="mt-16"><SectionLabel>Working principles</SectionLabel><div className="mt-8 grid gap-5 sm:grid-cols-2">{principles.map((principle, index) => <article key={principle} className="atlas-card atlas-card-hover p-6"><span className="font-mono text-xs font-bold text-signal-primary">0{index + 1}</span><p className="mt-6 text-sm leading-7 text-foreground-muted">{principle}</p></article>)}</div></section>
      </section>
    </PortfolioFrame>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, CalendarDays, FileText, ShieldCheck } from "lucide-react";
import type { CareerEvidence, CredentialStatus } from "@/content/portfolio";
import { PortfolioFrame, SectionLabel } from "@/components/portfolio/PortfolioChrome";
import { credentials, portfolioProfile } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Credentials",
  description: "Current, verifiable professional credentials for Naman Manocha.",
  alternates: { canonical: "/credentials" },
  openGraph: { url: "/credentials" },
};

const statusLabels: Record<CredentialStatus, string> = {
  active: "Active",
  expired: "Expired",
  "not-published": "Not published",
};

function EvidenceLink({ source }: { source: CareerEvidence }) {
  const isDocument = source.kind === "document";

  return (
    <a
      href={source.href}
      download={isDocument ? true : undefined}
      target={isDocument ? undefined : "_blank"}
      rel={isDocument ? undefined : "noreferrer noopener"}
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface-raised px-4 py-3 font-mono text-xs font-bold text-cyan-primary transition-colors hover:border-cyan-primary/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary"
    >
      {isDocument ? <FileText className="h-3.5 w-3.5" aria-hidden="true" /> : <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
      {source.label}
      {!isDocument ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

export default function CredentialsPage() {
  const activeCredentials = credentials.filter((credential) => credential.status === "active");
  const verificationLinks = credentials.flatMap((credential) => credential.evidence).filter((source) => source.kind === "verification");

  return (
    <PortfolioFrame>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionLabel>Verified credentials</SectionLabel>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Current credentials, with status visible.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-muted">A small, honest credential record: issuer, dates, current status, and a direct verification path.</p>

        <dl className="mt-12 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Active credentials</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">{activeCredentials.length}</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Currently listed</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Verification links</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">{verificationLinks.length}</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Public issuer paths</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-dim">Expired credentials</dt>
            <dd className="mt-2 text-2xl font-bold text-foreground">0</dd>
            <dd className="mt-1 text-sm text-foreground-muted">Not presented as current</dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
          <section aria-labelledby="credential-list">
            <div className="flex items-end justify-between gap-4">
              <div>
                <SectionLabel>Credential record</SectionLabel>
                <h2 id="credential-list" className="mt-3 text-3xl font-bold tracking-tight text-foreground">One current cloud certification.</h2>
              </div>
              <ShieldCheck className="hidden h-7 w-7 text-emerald-primary sm:block" aria-hidden="true" />
            </div>

            <div className="mt-8 space-y-5">
              {credentials.map((credential) => (
                <article key={credential.name} className="rounded-xl border border-emerald-primary/30 bg-surface p-6 shadow-[0_0_35px_-10px_rgba(16,185,129,0.12)]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-primary/40 bg-emerald-primary/10 text-emerald-primary">
                        <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-primary">{statusLabels[credential.status]}</p>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{credential.name}</h3>
                        <p className="mt-1 text-sm text-foreground-muted">{credential.issuer} · {credential.type}</p>
                      </div>
                    </div>
                    <CalendarDays className="h-5 w-5 text-foreground-dim" aria-hidden="true" />
                  </div>

                  <dl className="mt-7 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Issued</dt>
                      <dd className="mt-1 text-sm text-foreground-muted">{credential.issued}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Expires</dt>
                      <dd className="mt-1 text-sm text-foreground-muted">{credential.expires ?? "Not provided"}</dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {credential.evidence.map((source) => <EvidenceLink key={source.href} source={source} />)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <SectionLabel>Credential policy</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">Proof before polish.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">This page only presents a credential when its issuer, status, dates, and verification path are available. Expired credentials are not presented as current.</p>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-foreground-dim">Current evidence</p>
              <p className="mt-2 text-sm leading-7 text-foreground-muted">AWS Certified Cloud Practitioner is active through 20 Jan 2027 according to the supplied AWS verification page.</p>
            </div>
            <Link href="/experience" className="mt-7 inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold text-cyan-primary hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
              See experience and education <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </aside>
        </div>

        <section aria-labelledby="supporting-documents" className="mt-16 border-t border-border pt-12">
          <SectionLabel>Supporting documents</SectionLabel>
          <h2 id="supporting-documents" className="mt-3 text-3xl font-bold tracking-tight text-foreground">A downloadable career record.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-surface p-6">
              <FileText className="h-6 w-6 text-cyan-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-foreground">Master resume</h3>
              <p className="mt-2 text-sm leading-7 text-foreground-muted">Use the resume for the complete career record, role details, and contact information. The portfolio keeps its public pages concise and evidence-labelled.</p>
              <a href={portfolioProfile.resume} download className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface-raised px-4 py-3 font-mono text-xs font-bold text-cyan-primary transition-colors hover:border-cyan-primary/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
                Download DOCX <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
            <article className="rounded-xl border border-border bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-primary">Professional profile</p>
              <h3 className="mt-5 text-xl font-bold text-foreground">LinkedIn</h3>
              <p className="mt-2 text-sm leading-7 text-foreground-muted">The live professional profile is the place to confirm current career context and connect directly.</p>
              <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface-raised px-4 py-3 font-mono text-xs font-bold text-cyan-primary transition-colors hover:border-cyan-primary/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-cyan-primary">
                Open LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </div>
        </section>
      </section>
    </PortfolioFrame>
  );
}

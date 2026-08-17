"use client";

import { useState } from "react";
import { siteProfile } from "@/content/site";
import { Mail, Copy, Check, ArrowUpRight, Send, Terminal } from "lucide-react";
import { GithubIcon, TwitterXIcon, InstagramIcon } from "./Icons";

export default function ContactHub() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section id="contact" className="border-b border-border py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12 glow-border-cyan">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-primary">
              <Send className="h-3.5 w-3.5" />
              <span>// 06. SECURE TRANSMISSION & INQUIRIES</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
              Initiate Contact & Collaboration
            </h2>
            <p className="mt-3 text-base text-foreground-muted leading-relaxed">
              Open to AI/ML engineering, autonomous agent architecture, and high-impact full-stack roles. Direct inquiries receive prompt responses.
            </p>
          </div>

          {/* Direct Actions Matrix */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
            {/* Email Box */}
            <div className="rounded-lg border border-border/90 bg-[#050608] p-5">
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground-dim">
                <span>DIRECT_CHANNEL: SMTP</span>
                <span className="text-emerald-primary">● ENCRYPTED / ACTIVE</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-primary" />
                  <span className="font-mono text-sm font-semibold text-foreground select-all">
                    {siteProfile.email}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground-muted hover:border-cyan-primary hover:text-cyan-primary transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-primary" />
                        <span className="text-emerald-primary font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${siteProfile.email}`}
                    className="inline-flex items-center gap-1.5 rounded border border-cyan-primary/50 bg-cyan-primary/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan-primary hover:bg-cyan-primary hover:text-black transition-colors"
                  >
                    <span>SEND</span>
                    <Send className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={siteProfile.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5 transition-colors hover:border-cyan-primary hover:text-cyan-primary"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>

              <a
                href={siteProfile.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5 transition-colors hover:border-cyan-primary hover:text-cyan-primary"
              >
                <div className="flex items-center gap-2">
                  <TwitterXIcon className="h-4 w-4 text-[#1DA1F2]" />
                  <span>X / Twitter</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>

              <a
                href={siteProfile.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5 transition-colors hover:border-cyan-primary hover:text-cyan-primary"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="h-4 w-4 text-[#E4405F]" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>

              <a
                href={siteProfile.socials.fundersai}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3.5 transition-colors hover:border-amber-primary hover:text-amber-primary"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-amber-primary" />
                  <span>FundersAI</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

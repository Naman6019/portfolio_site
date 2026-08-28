"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { portfolioProfile } from "@/content/portfolio";

export interface SystemMapNode {
  label: string;
  value: string;
  detail: string;
}

export function SystemMap({ nodes }: { nodes: SystemMapNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const nodeOneRef = useRef<HTMLDivElement>(null);
  const nodeTwoRef = useRef<HTMLDivElement>(null);
  const nodeThreeRef = useRef<HTMLDivElement>(null);
  const nodeRefs = [nodeOneRef, nodeTwoRef, nodeThreeRef];
  const reducedMotion = useReducedMotion();
  const visibleNodes = nodes.slice(0, 3);

  return (
    <div ref={containerRef} className="system-map-shell" aria-label="Naman Manocha engineering system map">
      {visibleNodes.map((node, index) => (
        <div key={node.label} ref={nodeRefs[index]} className={`system-map-node system-map-node--${index === 0 ? "one" : index === 1 ? "two" : "three"}`}>
          <p className="system-map-label">{node.label}</p>
          <p className="system-map-value">{node.value}</p>
          <p className="mt-2 text-[11px] leading-4 text-foreground-muted">{node.detail}</p>
        </div>
      ))}

      <div ref={coreRef} className="system-map-core">
        <div className="text-center">
          <Image src={portfolioProfile.logo} alt="" width={48} height={48} className="mx-auto h-12 w-12 rounded-xl object-cover" />
          <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-signal-primary">NM / systems atlas</p>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nodeOneRef}
        toRef={coreRef}
        curvature={-55}
        pathColor="var(--border-strong)"
        gradientStartColor="var(--signal-primary)"
        gradientStopColor="var(--blueprint-primary)"
        duration={6}
        repeat={reducedMotion ? 0 : Infinity}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nodeTwoRef}
        toRef={coreRef}
        curvature={55}
        pathColor="var(--border-strong)"
        gradientStartColor="var(--signal-primary)"
        gradientStopColor="var(--blueprint-primary)"
        duration={6.5}
        reverse
        repeat={reducedMotion ? 0 : Infinity}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nodeThreeRef}
        toRef={coreRef}
        curvature={-20}
        pathColor="var(--border-strong)"
        gradientStartColor="var(--signal-primary)"
        gradientStopColor="var(--thermal-primary)"
        duration={7}
        repeat={reducedMotion ? 0 : Infinity}
      />

      <div className="pointer-events-none absolute inset-0 opacity-30 reaper-grid-bg" aria-hidden="true" />
    </div>
  );
}

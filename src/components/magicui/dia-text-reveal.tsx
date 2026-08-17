"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_COLORS = ["#00f0ff", "#38bdf8", "#818cf8", "#f59e0b", "#10b981"];
const BAND_HALF = 18;
const SWEEP_START = -BAND_HALF;
const SWEEP_END = 100 + BAND_HALF;

function buildGradient(pos: number, colors: string[], textColor: string) {
  const bandStart = pos - BAND_HALF;
  const bandEnd = pos + BAND_HALF;

  if (bandStart >= 100) {
    return `linear-gradient(90deg, ${textColor}, ${textColor})`;
  }
  const n = colors.length;
  const parts: string[] = [];

  if (bandStart > 0) {
    parts.push(`${textColor} 0%`, `${textColor} ${bandStart.toFixed(2)}%`);
  }

  colors.forEach((c, i) => {
    const pct = n === 1 ? pos : bandStart + (i / (n - 1)) * BAND_HALF * 2;
    parts.push(`${c} ${pct.toFixed(2)}%`);
  });

  if (bandEnd < 100) {
    parts.push(`transparent ${bandEnd.toFixed(2)}%`, `transparent 100%`);
  }

  return `linear-gradient(90deg, ${parts.join(", ")})`;
}

export interface DiaTextRevealProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string | string[];
  colors?: string[];
  textColor?: string;
  duration?: number;
  delay?: number;
  repeat?: boolean;
  repeatDelay?: number;
  className?: string;
}

export function DiaTextReveal({
  text,
  colors = DEFAULT_COLORS,
  textColor = "var(--foreground)",
  duration = 1.8,
  delay = 0.2,
  repeat = true,
  repeatDelay = 4,
  className,
  ...props
}: DiaTextRevealProps) {
  const texts = Array.isArray(text) ? text : [text];
  const [activeIndex, setActiveIndex] = useState(0);
  const [gradient, setGradient] = useState(() => buildGradient(SWEEP_START, colors, textColor));
  const spanRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let isCancelled = false;

    function runSweep() {
      startTime = null;

      function frame(timestamp: number) {
        if (isCancelled) return;
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeInOutCubic
        const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const currentPos = SWEEP_START + eased * (SWEEP_END - SWEEP_START);

        setGradient(buildGradient(currentPos, colors, textColor));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          setGradient(`linear-gradient(90deg, ${textColor}, ${textColor})`);
          if (repeat) {
            timerRef.current = setTimeout(() => {
              if (isCancelled) return;
              setActiveIndex((prev) => (prev + 1) % texts.length);
              runSweep();
            }, repeatDelay * 1000);
          }
        }
      }

      timerRef.current = setTimeout(() => {
        if (!isCancelled) {
          rafRef.current = requestAnimationFrame(frame);
        }
      }, delay * 1000);
    }

    runSweep();

    return () => {
      isCancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, colors, delay, duration, repeat, repeatDelay, textColor, texts.length]);

  return (
    <span
      ref={spanRef}
      className={cn("inline-block font-inherit transition-colors duration-300", className)}
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      {...props}
    >
      {texts[activeIndex]}
    </span>
  );
}

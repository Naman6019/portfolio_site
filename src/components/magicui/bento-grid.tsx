import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

/**
 * MCP-sourced Bento Grid primitive, adapted for the portfolio's evidence cards.
 * Content and links remain owned by the route components.
 */
export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn("grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}

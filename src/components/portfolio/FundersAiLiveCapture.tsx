import Image from "next/image";

const liveComparisonUrl = "https://www.fundersai.co.in/compare/hdfc-flexi-cap-fund-vs-parag-parikh-flexi-cap-fund";

export default function FundersAiLiveCapture({ className = "" }: { className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-border-strong bg-[#080a0d] ${className}`.trim()}>
      <a
        href={liveComparisonUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group/capture block focus-visible:ring-2 focus-visible:ring-blueprint-primary"
      >
        <Image
          src="/fundersai-live-comparison.jpg"
          alt="Live FundersAI comparison screen for HDFC Flexi Cap Fund and Parag Parikh Flexi Cap Fund."
          width={1280}
          height={800}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover/capture:scale-[1.015]"
        />
        <span className="sr-only">Open this live FundersAI comparison in a new tab.</span>
      </a>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-white/10 px-3 py-2 font-mono text-[10px] leading-5 text-slate-300 sm:px-4">
        <span className="font-bold text-white">Live product capture</span>
        <span>10 Sep 2026 · figures on screen are labelled a July 2026 snapshot</span>
      </figcaption>
    </figure>
  );
}

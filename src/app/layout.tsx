import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteProfile } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namanmanocha.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteProfile.name} // ${siteProfile.role}`,
    template: `%s // ${siteProfile.name}`,
  },
  description: `${siteProfile.tagline} Specializing in Google ADK, LangGraph, RAFT, Next.js 16, and FastAPI.`,
  keywords: [
    "Naman Manocha",
    "Autonomous Agent Architect",
    "AI ML Engineer",
    "GenAI Engineer",
    "LangGraph",
    "Google ADK",
    "RAFT Fine-Tuning",
    "FundersAI",
    "Next.js 16",
    "FastAPI",
    "Supabase",
    "Full-Stack Systems Builder",
    "Kolkata India",
  ],
  authors: [{ name: siteProfile.name, url: siteProfile.socials.github }],
  creator: siteProfile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteProfile.name} // ${siteProfile.role}`,
    description: siteProfile.tagline,
    siteName: `${siteProfile.name} — Autonomous Agent Architect`,
    images: [
      {
        url: "https://raw.githubusercontent.com/Naman6019/FundersAI/main/frontend/public/FUNDERSAI-nobackground.png",
        width: 1200,
        height: 630,
        alt: `${siteProfile.name} Portfolio`,
      },
    ],
  },
  icons: {
    icon: "/nm_logo_bold_technical.png",
    apple: "/nm_logo_bold_technical.png",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteProfile.name} // ${siteProfile.role}`,
    description: siteProfile.tagline,
    creator: "@Capt6019",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Runs before paint so dark mode renders with zero flash.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: siteProfile.role,
    url: siteUrl,
    sameAs: [
      siteProfile.socials.github,
      siteProfile.socials.twitter,
      siteProfile.socials.instagram,
      siteProfile.socials.fundersai,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "India",
    },
    knowsAbout: [
      "Autonomous Agents",
      "Google ADK",
      "LangGraph",
      "RAFT Retrieval Augmented Fine-Tuning",
      "Next.js 16",
      "FastAPI",
      "Supabase",
      "Fintech Ingestion",
      "Machine Learning",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} dark h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-cyan-primary/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { portfolioProfile } from "@/content/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://namanmanocha.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${portfolioProfile.name} // ${portfolioProfile.role}`,
    template: `%s // ${portfolioProfile.name}`,
  },
  description: `${portfolioProfile.tagline} Specializing in ${portfolioProfile.specialization}.`,
  keywords: [
    "Naman Manocha",
    "AI Engineer",
    "AI ML Engineer",
    "GenAI Engineer",
    "LangGraph",
    "Google ADK",
    "RAFT Fine-Tuning",
    "FundersAI",
    "CareFlow Intelligence",
    "CareerAgent",
    "Next.js 16",
    "FastAPI",
    "Supabase",
    "Full-Stack Systems Builder",
    "Kolkata India",
  ],
  authors: [{ name: portfolioProfile.name, url: portfolioProfile.github }],
  creator: portfolioProfile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${portfolioProfile.name} // ${portfolioProfile.role}`,
    description: portfolioProfile.tagline,
    siteName: `${portfolioProfile.name} — AI Engineer`,
    images: [
      {
        url: "https://raw.githubusercontent.com/Naman6019/FundersAI/main/frontend/public/FUNDERSAI-nobackground.png",
        width: 1200,
        height: 630,
        alt: `${portfolioProfile.name} Portfolio`,
      },
    ],
  },
  icons: {
    icon: portfolioProfile.logo,
    apple: portfolioProfile.logo,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioProfile.name} // ${portfolioProfile.role}`,
    description: portfolioProfile.tagline,
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
    var root = document.documentElement;
    root.classList.remove('dark', 'light');
    if (stored === 'light') {
      root.classList.add('light');
    } else {
      root.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
  try {
    // Gates the scroll-reveal hidden state. Set before paint so revealed
    // content never flashes, then withdrawn if the reveal component has not
    // confirmed it mounted -- content must never stay hidden because
    // hydration failed.
    var root = document.documentElement;
    root.setAttribute('data-reveal-ready', '');
    setTimeout(function () {
      if (!root.hasAttribute('data-reveal-active')) {
        root.removeAttribute('data-reveal-ready');
      }
    }, 2500);
  } catch (e) {}
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
    name: portfolioProfile.name,
    jobTitle: portfolioProfile.role,
    url: siteUrl,
    sameAs: [
      portfolioProfile.linkedin,
      portfolioProfile.github,
      "https://www.fundersai.co.in",
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
      className="dark h-full"
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

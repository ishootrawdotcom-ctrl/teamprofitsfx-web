import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, FAQS } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: "#05060b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Team Profits FX | Best ICT & SMC Trading Mentorship (Lifetime Access)",
    template: "%s | Team Profits FX",
  },
  description:
    "Learn ICT & Smart Money Concepts with Eduardo Rincon. Live trading 3x/week (Tue–Thu), AI Trade Journal, TradingView/MT5 indicators & unlimited 1-on-1 calls. One-time lifetime mentorship ($399) or $25/mo. Rated 4.9★ on Google.",
  keywords: [
    "Team Profits FX",
    "Eduardo Rincon trader",
    "best ICT trader",
    "best ICT concepts course",
    "Smart Money Concepts mentorship",
    "lifetime access trading mentorship",
    "one time payment trading course",
    "ICT live trading sessions",
    "FundedNext promo code EDUARDO",
    "AI trade journal",
  ],
  authors: [{ name: "Eduardo Rincon", url: SITE_CONFIG.domain }],
  creator: "Eduardo Rincon (@TeamProfitsFX)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: "Team Profits FX",
    title: "Team Profits FX — Master ICT & SMC With Live Trading & AI Journal",
    description:
      "Watch me trade live every Tuesday, Wednesday and Thursday — or go watch Netflix and work 9-5. Lifetime Mentorship one-time payment or $25/month.",
    images: [{ url: "/images/eduardo-desk.jpg", width: 1200, height: 630, alt: "Eduardo Rincon Team Profits FX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Profits FX | Best ICT & SMC Trading Mentorship",
    description:
      "4.9★ Google Rated ICT & SMC Mentorship. Live NY Killzone trading 3x/week + AI Discipline Coach Journal.",
    images: ["/images/eduardo-desk.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.domain}/#organization`,
        name: "Team Profits FX",
        url: SITE_CONFIG.domain,
        logo: `${SITE_CONFIG.domain}/images/logo.png`,
        founder: {
          "@type": "Person",
          name: "Eduardo Rincon",
          sameAs: [SITE_CONFIG.youtubeUrl],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "10",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Course",
        name: "Team Profits FX — ICT & Smart Money Concepts Lifetime Mentorship",
        description:
          "Complete ICT and SMC trading education including live trading sessions Tuesday–Thursday, custom TradingView/MT5 indicators, AI Trade Journal access, and unlimited 1-on-1 calls.",
        provider: {
          "@id": `${SITE_CONFIG.domain}/#organization`,
        },
        offers: [
          {
            "@type": "Offer",
            name: "Lifetime Mentorship (One-Time Payment)",
            price: "399.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${SITE_CONFIG.domain}/#pricing`,
          },
          {
            "@type": "Offer",
            name: "Monthly Mentorship",
            price: "25.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${SITE_CONFIG.domain}/#pricing`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-carbon text-slate-100 selection:bg-violet-500/40 selection:text-cyan-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

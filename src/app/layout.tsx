import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Politie Agile Trainingen - Lean Agile Groep",
    template: "%s | Lean Agile Groep"
  },
  description: "Praktijkgerichte Agile trainingen voor de politie. Ontwikkel wendbaarheid en samenwerking met Scrum Master, Product Owner en Agile Coach trainingen.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "Agile trainingen politie",
    "Scrum Master politie",
    "Product Owner training",
    "Agile Coach opleiding",
    "Lean Agile Groep",
    "Scrum Academy",
    "politie wendbaarheid",
    "Agile leiderschap",
    "Obeya training"
  ],
  authors: [{ name: "Lean Agile Groep" }],
  creator: "Lean Agile Groep",
  publisher: "Lean Agile Groep",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leanagilegroep.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://leanagilegroep.nl',
    title: 'Politie Agile Trainingen - Lean Agile Groep',
    description: 'Praktijkgerichte Agile trainingen voor de politie. Ontwikkel wendbaarheid en samenwerking met Scrum Master, Product Owner en Agile Coach trainingen.',
    siteName: 'Lean Agile Groep',
    images: [
      {
        url: '/lag-logo.png',
        width: 1200,
        height: 630,
        alt: 'Lean Agile Groep Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politie Agile Trainingen - Lean Agile Groep',
    description: 'Praktijkgerichte Agile trainingen voor de politie. Ontwikkel wendbaarheid en samenwerking.',
    images: ['/lag-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lean Agile Groep",
              "url": "https://leanagilegroep.nl",
              "logo": "https://leanagilegroep.nl/lag-logo.png",
              "description": "Praktijkgerichte Agile trainingen voor de politie",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31-88-5326720",
                "contactType": "customer service",
                "email": "info@leanagilegroep.nl"
              },
              "sameAs": [
                "https://www.linkedin.com/company/lean-agile-groep",
                "https://www.facebook.com/leanagilegroep"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "8",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Scrum Master Basis",
                    "description": "Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk"
                  },
                  {
                    "@type": "Offer", 
                    "name": "Product Owner Training",
                    "description": "Leer richting en waarde creëren in een complexe praktijk"
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

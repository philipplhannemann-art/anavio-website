import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anavio.de"),
  title: {
    default: "anavio \u2013 Digitale Anamnese f\u00fcr Ihre Praxis",
    template: "%s | anavio",
  },
  description:
    "Bessere Anamnese. Mehr Zeit f\u00fcr Patienten. Die digitale Anamnese f\u00fcr Arztpraxen \u2013 vorab oder vor Ort. Bis zu 15 Minuten Zeitersparnis pro Patient. 20+ Sprachen. DSGVO-konform.",
  keywords: [
    "digitale Anamnese",
    "Anamnese Software",
    "Arztpraxis Software",
    "Praxissoftware",
    "Vorab-Anamnese",
    "Patientenfragebogen digital",
    "Hausarzt",
    "Facharzt",
    "Zahnarzt",
    "DSGVO",
    "mehrsprachig",
    "Dokumentation Arztpraxis",
    "Praxisdigitalisierung",
  ],
  authors: [{ name: "anavio" }],
  creator: "anavio",
  publisher: "anavio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.anavio.de",
    siteName: "anavio",
    title: "anavio \u2013 Digitale Anamnese f\u00fcr Ihre Praxis",
    description:
      "Bessere Anamnese. Mehr Zeit f\u00fcr Patienten. Bis zu 15 Minuten Zeitersparnis pro Patient. 20+ Sprachen. DSGVO-konform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "anavio \u2013 Digitale Anamnese f\u00fcr Ihre Praxis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "anavio \u2013 Digitale Anamnese f\u00fcr Ihre Praxis",
    description:
      "Bessere Anamnese. Mehr Zeit f\u00fcr Patienten. Bis zu 15 Minuten Zeitersparnis pro Patient.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.anavio.de",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.anavio.de/#organization",
                  name: "anavio",
                  url: "https://www.anavio.de",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.anavio.de/anavio-icon.svg",
                  },
                  description:
                    "Digitale Anamnese f\u00fcr Arztpraxen \u2013 strukturiert, mehrsprachig, DSGVO-konform.",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.anavio.de/#website",
                  url: "https://www.anavio.de",
                  name: "anavio",
                  publisher: {
                    "@id": "https://www.anavio.de/#organization",
                  },
                  inLanguage: "de-DE",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "anavio",
                  applicationCategory: "HealthApplication",
                  operatingSystem: "Web",
                  description:
                    "Digitale Anamnese-Software f\u00fcr Arztpraxen. Patienten erfassen ihre Symptome strukturiert vorab oder vor Ort. 20+ Sprachen.",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "EUR",
                  },
                  featureList: [
                    "Strukturierte Vorab-Anamnese",
                    "Red-Flag-Erkennung",
                    "20+ Sprachen",
                    "Automatische Dokumentation",
                    "ICD-10/EBM-Kodierung",
                    "PVS-Integration via GDT",
                    "DSGVO-konform",
                    "Hosting in Deutschland",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

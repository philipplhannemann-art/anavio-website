import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anavio \u2013 Digitale Anamnese f\u00fcr Ihre Praxis",
  description:
    "Bessere Anamnese. Mehr Zeit f\u00fcr Patienten. Die digitale Anamnese f\u00fcr Arztpraxen. Bis zu 15 Minuten Zeitersparnis pro Patient. 20+ Sprachen.",
  keywords: [
    "digitale Anamnese",
    "Arztpraxis",
    "Praxissoftware",
    "Vorab-Anamnese",
    "Hausarzt",
    "Facharzt",
    "Zahnarzt",
    "DSGVO",
    "Patientenfragebogen",
    "mehrsprachig",
    "Dokumentation",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

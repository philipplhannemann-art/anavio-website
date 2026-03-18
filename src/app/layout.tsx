import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anavio – Digitale Anamnese für die Primärversorgung",
  description:
    "Bessere Anamnese. Mehr Zeit für Patienten. Die digitale Vorab-Anamnese für Haus- und Zahnärzte. Bis zu 10 Minuten Zeitersparnis pro Patient.",
  keywords: [
    "digitale Anamnese",
    "Arztpraxis",
    "Praxissoftware",
    "Vorab-Anamnese",
    "Hausarzt",
    "Zahnarzt",
    "DSGVO",
    "Patientenfragebogen",
  ],
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

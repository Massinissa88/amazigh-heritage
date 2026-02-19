import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amazigh Heritage - Bijoux Berbères Authentiques",
  description: "Découvrez des bijoux berbères uniques façonnés par des artisans des Atlas. Personnalisation IA et authenticité garantie.",
  keywords: ["bijoux berbères", "artisanat marocain", "fibule", "amazigh", "bijoux ethniques"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

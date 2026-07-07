import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { OnboardingProvider } from "@/lib/onboarding-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projeto Aurora — Rotina personalizada para famílias com TEA",
  description:
    "Organize a rotina da sua família com um plano criado para as necessidades do seu filho.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <OnboardingProvider>{children}</OnboardingProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HashScroll from "./components/HashScroll";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroOpsAI - Private AI Agents for Work That Matters",
  description: "Deploy secure, private AI agents built on open-source technology. Perfect for B2B SaaS, Healthcare, Finance, and Call Centers.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={null}>
          <HashScroll />
        </Suspense>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

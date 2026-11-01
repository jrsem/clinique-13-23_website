import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#162E93",
};

export const metadata: Metadata = {
  title: "Clinique 13-23 | Soins Médicaux, Consultations & Urgences",
  description:
    "Clinique 13-23 : médecine familiale, consultations spécialisées et urgences. Prenez rendez-vous en ligne ou contactez-nous au 3450-2653 | 5523-2555.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <a
          href="#appointment-section"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-clinique_bleue focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:font-semibold focus:shadow-lg"
        >
          Aller directement à la prise de rendez-vous
        </a>
        <Navbar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}

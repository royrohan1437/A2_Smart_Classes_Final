import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Allura, Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/layout/app-providers";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

const serifDisplay = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const calligraphic = Allura({
  variable: "--font-calligraphic",
  subsets: ["latin"],
  weight: "400",
});

const sansSupport = Source_Sans_3({
  variable: "--font-sans-support",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A2Smart Classes",
  description: "A2Smart Classes academic platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serifDisplay.variable} ${calligraphic.variable} ${sansSupport.variable}`}
    >
      <body>
        {children}
        <AppProviders />
        <ScrollToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Allura, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serifDisplay.variable} ${calligraphic.variable} ${sansSupport.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

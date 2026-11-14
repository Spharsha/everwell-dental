import type { Metadata, Viewport } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everwell Dental Studio | Hyderabad (Demo)",
  description:
    "Demo dental clinic website with treatments, doctors and an online appointment booking flow. Sample content.",
};

export const viewport: Viewport = {
  themeColor: "#14827a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full pb-20 md:pb-0">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

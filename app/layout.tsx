import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Noto_Sans_Devanagari, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import LegalChatbot from "../components/LegalChatbot";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-tel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Document Generator",
  description: "Generate multilingual legal documents instantly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${devanagari.variable} ${telugu.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <LanguageProvider>
          <div id="main-content">{children}</div>
          <LegalChatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

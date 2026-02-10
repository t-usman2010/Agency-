import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "TriForge Studio — Web Development & Design Agency",
    template: "%s | TriForge Studio",
  },
  description:
    "TriForge Studio is a boutique web development agency specializing in custom web applications, SaaS MVPs, UI/UX design, and brand identity. Built by a team of MERN stack developers and a graphic designer.",
  keywords: [
    "web development agency",
    "MERN stack",
    "Next.js development",
    "SaaS MVP",
    "UI/UX design",
    "branding",
    "custom web applications",
  ],
  authors: [{ name: "TriForge Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triforgestudio.com",
    siteName: "TriForge Studio",
    title: "TriForge Studio — Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TriForge Studio — Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

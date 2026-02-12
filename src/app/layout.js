import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NestWeb — Web Development & Design Agency",
    template: "%s | NestWeb",
  },
  description:
    "NestWeb is a boutique web development agency specializing in custom web applications, SaaS MVPs, UI/UX design, and brand identity. Built by a team of MERN stack developers and a graphic designer.",
  keywords: [
    "web development agency",
    "MERN stack",
    "Next.js development",
    "SaaS MVP",
    "UI/UX design",
    "branding",
    "custom web applications",
  ],
  authors: [{ name: "NestWeb" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nestweb.com",
    siteName: "NestWeb",
    title: "NestWeb| Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NestWeb| Web Development & Design Agency",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-dark-950 transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

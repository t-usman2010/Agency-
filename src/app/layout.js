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
    default: "WebNest Studio — Web Development & Design Agency",
    template: "%s | WebNest Studio",
  },
  description:
    "WebNest Studio is a boutique web development agency specializing in custom web applications, SaaS MVPs, UI/UX design, and brand identity. Built by a team of MERN stack developers and a graphic designer.",
  keywords: [
    "web development agency",
    "MERN stack",
    "Next.js development",
    "SaaS MVP",
    "UI/UX design",
    "branding",
    "custom web applications",
  ],
  authors: [{ name: "WebNest Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webneststudio.com",
    siteName: "WebNest Studio",
    title: "WebNest Studio — Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNest Studio — Web Development & Design Agency",
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

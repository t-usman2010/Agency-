import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/ui/StructuredData";

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
  metadataBase: new URL('https://webentis.online'),
  title: {
    default: "Webentis | Web Development & Design Agency",
    template: "%s | Webentis",
  },
  description:
    "Webentis is a boutique web development agency specializing in custom web applications, SaaS MVPs, UI/UX design, and brand identity. Built by a team of MERN stack developers and a graphic designer.",
  keywords: [
    "web development agency",
    "MERN stack",
    "Next.js development",
    "SaaS MVP",
    "UI/UX design",
    "branding",
    "custom web applications",
  ],
  authors: [{ name: "Webentis" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webentis.online",
    siteName: "Webentis",
    title: "Webentis | Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webentis | Web Development & Design Agency",
    description:
      "Boutique web development agency specializing in custom web apps, SaaS MVPs, UI/UX design, and branding.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  icons: {
    icon: [
      { url: '/logo1.png', sizes: 'any' },
    ],
    apple: '/logo1.png',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webentis",
    url: "https://webentis.online",
    logo: "https://webentis.online/logo1.png",
    description: "Boutique web development agency specializing in custom web applications, SaaS MVPs, UI/UX design, and brand identity.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Webentis",
    url: "https://webentis.online",
    description: "Web development agency specializing in custom web applications, SaaS MVPs, and UI/UX design.",
    publisher: {
      "@type": "Organization",
      name: "Webentis",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-dark-950 transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

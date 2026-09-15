import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevio Interiors | Premium Interior Design Studio in Noida",

  description:
    "Elevio Interiors creates premium residential, commercial, modular kitchen and luxury interior designs in Noida and Delhi NCR.",

  keywords: [
    "Interior Designer Noida",
    "Interior Design Noida",
    "Luxury Interior Designer",
    "Home Interior Design",
    "Modular Kitchen Noida",
    "Commercial Interior Design",
    "3D Interior Design",
    "Delhi NCR Interior Designer",
  ],

  // FAVICON
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // WEBSITE URL
  metadataBase: new URL("https://www.eleviointeriors.com"),

  alternates: {
    canonical: "https://www.eleviointeriors.com",
  },

  // OPEN GRAPH
  openGraph: {
    title: "Elevio Interiors | Premium Interior Design Studio in Noida",

    description:
      "Elevio Interiors creates premium residential, commercial, modular kitchen and luxury interior designs in Noida and Delhi NCR.",

    url: "https://www.eleviointeriors.com",

    siteName: "Elevio Interiors",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/projects/bedroom-archsuite-02.jpg",
        width: 1200,
        height: 630,
        alt: "Elevio Interiors Premium Interior Design",
      },
    ],
  },

  // TWITTER / X
  twitter: {
    card: "summary_large_image",

    title: "Elevio Interiors | Premium Interior Design Studio in Noida",

    description:
      "Elevate Every Space. Inspire Every Life.",

    images: ["/images/projects/bedroom-archsuite-02.jpg"],
  },

  // ROBOTS
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// LOCAL BUSINESS SCHEMA
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Elevio Interiors",

  description:
    "Premium residential, commercial, modular kitchen and luxury interior design studio in Noida and Delhi NCR.",

  telephone: "+918126812096",

  email: "eleviointerior@gmail.com",

  url: "https://www.eleviointeriors.com",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },

  priceRange: "$$",

  areaServed: [
    "Noida",
    "Delhi",
    "Greater Noida",
    "Ghaziabad",
    "Gurugram",
    "Delhi NCR",
  ],

  serviceType: [
    "Residential Interior Design",
    "Commercial Interior Design",
    "Modular Kitchen Design",
    "Luxury Interior Design",
    "3D Interior Design",
    "Home Interior Design",
  ],
};

// ORGANIZATION SCHEMA
const orgJsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "Elevio Interiors",

  url: "https://www.eleviointeriors.com",

  logo: "https://www.eleviointeriors.com/icons/logo.svg",

  contactPoint: {
    "@type": "ContactPoint",

    telephone: "+918126812096",

    contactType: "customer service",

    areaServed: "IN",

    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable}`}
    >
      <head>
        {/* LOCAL BUSINESS JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* ORGANIZATION JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />
      </head>

      <body className="font-sans bg-background text-foreground antialiased">
        <div
          className="grain"
          aria-hidden="true"
        />

        <CustomCursor />

        <SmoothScroll>
          {children}
        </SmoothScroll>

        <WhatsAppFloat />
      </body>
    </html>
  );
}

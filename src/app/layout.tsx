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
  openGraph: {
    title: "Elevio Interiors | Premium Interior Design Studio in Noida",
    description: "Elevate Every Space. Inspire Every Life.",
    type: "website",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevio Interiors | Premium Interior Design Studio in Noida",
    description: "Elevate Every Space. Inspire Every Life.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elevio Interiors",
  telephone: "+918126812096",
  email: "eleviointerior@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevio Interiors",
  url: "https://eleviointeriors.example.com",
  logo: "https://eleviointeriors.example.com/icons/logo.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppFloat />
      </body>
    </html>
  );
}

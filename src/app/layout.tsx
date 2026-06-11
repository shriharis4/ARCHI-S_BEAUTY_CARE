import type { Metadata } from "next";
import Script from "next/script";
import { seoDefaults } from "@/constants/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: seoDefaults.title,
    template: `%s | ${seoDefaults.siteName}`,
  },
  description: seoDefaults.description,
  keywords: seoDefaults.keywords,
  metadataBase: new URL(seoDefaults.url),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: seoDefaults.title,
    description: seoDefaults.description,
    url: seoDefaults.url,
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    type: "website",
    images: [
      {
        url: seoDefaults.image,
        width: 1200,
        height: 630,
        alt: seoDefaults.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.title,
    description: seoDefaults.description,
    images: [seoDefaults.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: seoDefaults.siteName,
              image: seoDefaults.image,
              url: seoDefaults.url,
              telephone: "+91 97314 90728",
              email: "archuarchi2006@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Raichur",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              priceRange: "₹₹",
              description: seoDefaults.description,
            }),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

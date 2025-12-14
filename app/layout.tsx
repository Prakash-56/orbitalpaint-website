import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ✅ Replace Geist fonts with Inter (Next.js 14 compatible)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// ⭐ UPDATED METADATA FOR AEROSPACE + DEFENCE COATING COMPANY
export const metadata: Metadata = {
  title: "OrbitalPaint Solutions | Aerospace & Defence Coating Excellence",
  description:
    "OrbitalPaint Solutions provides high-performance aerospace, defence, industrial, and corrosion-resistant coating solutions using advanced technologies and certified processes.",
  keywords: [
    "aerospace coating",
    "defence coating",
    "industrial coating",
    "corrosion protection",
    "anti-corrosion coating",
    "specialized coating services",
    "industrial painting",
    "aerospace surface treatment",
    "defence equipment coating",
    "Orbital Paint Solution",
    "Orbital Paint",
    "Paint",
    "paint solution",
    "orbital paint solution",
    "Orbit"
  ],
  openGraph: {
    title: "OrbitalPaint Solutions | Advanced Aerospace & Defence Coating Excellence",
    description:
      "Leading provider of aerospace, defence, and industrial coating services with advanced corrosion protection and high-precision painting solutions.",
    url: "https://orbitalpaintsolutions.com",
    siteName: "OrbitalPaint Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitalPaint Solutions",
    description:
      "Specialists in aerospace, defence, and industrial coating solutions.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

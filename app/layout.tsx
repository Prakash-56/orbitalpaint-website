import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⭐ UPDATED METADATA FOR AEROSPACE + DEFENCE COATING COMPANY
export const metadata: Metadata = {
  title: "Orbital Paint Solution | Aerospace & Defence Coating Specialists",
  description:
    "Orbital Paint Solution provides high-performance aerospace, defence, industrial, and corrosion-resistant coating solutions using advanced technologies and certified processes.",
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
  ],
  openGraph: {
    title: "Orbital Paint Solution | Advanced Aerospace & Defence Coating",
    description:
      "Leading provider of aerospace, defence, and industrial coating services with advanced corrosion protection and high-precision painting solutions.",
    url: "https://orbitalpaintsolutionc.com",
    siteName: "Orbital Paint Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbital Paint Solution",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

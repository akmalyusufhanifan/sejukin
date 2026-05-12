import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sejuk-in.vercel.app"),
  title: "Sejukin | Professional AC Installation & Service",
  description:
    "Sejukin is a trusted air conditioning service provider specializing in AC installation, maintenance, repair, and procurement solutions for homes and businesses",
  keywords:
    "AC service, AC installation, air conditioner repair, AC maintenance, HVAC Indonesia",
  openGraph: {
    title: "Sejukin | Professional AC Installation & Service",
    description: "Trusted AC installation and maintenance services",
    url: "https://sejuk-in.vercel.app",
    siteName: "Sejukin",
    images: [
      {
        url: "/banner-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Sejukin AC Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejukin",
    description: "Professional AC installation and maintenance services.",
    images: ["/banner-desktop.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-fit flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

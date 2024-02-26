import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "WebpFy - Webp Image Converter",
  description: "Convert your images to webp format - fast, easy and for free!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webpfy.jnaraujo.com/",
    title: "WebpFy - Webp Image Converter",
    description:
      "Convert your images to webp format - fast, easy and for free! Runs 100% on the browser - your images never leave your computer.",
    images: [
      {
        url: "https://webpfy.jnaraujo.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "WebpFy - Webp Image Converter",
      },
    ],
  },
  keywords: [
    "webp",
    "image",
    "converter",
    "convert",
    "png",
    "jpg",
    "jpeg",
    "free",
    "online",
    "tool",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          defer
          data-domain="webpfy.jnaraujo.com"
          src="http://plausible-analytics.caprover.jnaraujo.com/js/script.js"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-zinc-950 font-sans antialiased",
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

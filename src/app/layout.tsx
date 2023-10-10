import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "WebpFy - Webp Image Converter",
  description: "Convert your images to webp format - fast, easy and for free!",
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
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`}
          strategy="afterInteractive"
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

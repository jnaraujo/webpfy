import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "WebpFy - Converta suas imagens para o formato webp",
  description:
    "Converta suas imagens para o formato webp - rápido, fácil e de graça!",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://webpfy.jnaraujo.com/",
    title: "WebpFy - Converta suas imagens para o formato webp",
    description:
      "Converta suas imagens para o formato webp - rápido, fácil e de graça! Roda no navegador, sem instalação.",
    images: [
      {
        url: "https://webpfy.jnaraujo.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "WebpFy - Converta suas imagens para o formato webp",
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
    <html lang="pt-br" className="dark">
      <head>
        <Script
          defer
          data-domain="webpfy.jnaraujo.com"
          src="https://analytics.jnaraujo.com/js/script.js"
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

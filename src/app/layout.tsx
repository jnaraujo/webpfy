import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "WebpFy - Webp Image Converter",
  description: "Convert your images to webp format - fast, easy and for free!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx("min-h-screen antialiased font-sans", inter.variable)}
      >
        {children}
      </body>
    </html>
  );
}

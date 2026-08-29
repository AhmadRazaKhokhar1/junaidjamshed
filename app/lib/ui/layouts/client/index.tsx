import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, NavBar } from "@lib/ui/useable-components";
import { ReactNode, Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const clientMetaData: Metadata = {
  title: "Junaid Jamshed",
  description:
    "Shop J. (Junaid Jamshed) online for premium Pakistani fashion, unstitched and ready-to-wear collections, fragrances, cosmetics, accessories, and traditional styles for men, women, and kids.",
};

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <NavBar />
        <Suspense fallback={<div>Loading ....</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
};

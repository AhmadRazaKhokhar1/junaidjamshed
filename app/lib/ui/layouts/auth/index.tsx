import { ReactNode } from "react";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const authMetaData: Metadata = {
  title: "Sign In - Junaid Jamshed",
  description: "Login to your account",
};

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
      <Toaster/>
        {children}
      </body>
    </html>
  );
};


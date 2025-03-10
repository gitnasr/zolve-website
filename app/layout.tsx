import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zolve Extension",
  description: "Zolve Extension is a browser extension that uses AI to help you solve online exams.",
  icons: {
    apple: "/seo/apple-touch-icon.png",
    
  },
  twitter: {
    card: "summary_large_image",
    site: "@gitnasr",
    creator: "@gitnasr",
  },
  applicationName: "Zolve Extension",
  robots: {
   index: true,
   follow: true,
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/seo/favicon.ico" sizes="any" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}

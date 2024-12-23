import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Headline from "@/components/headline/Headline";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Licence from "@/components/footer/licence";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Umair Ecommerce",
  description: "Created By Umair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden`}
      >
        <Headline />
        <Header />
        {children}
        <Footer />
        <Licence />
      </body>
    </html>
  );
}

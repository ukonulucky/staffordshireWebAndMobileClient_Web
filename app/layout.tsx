
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import HeaderComp from "@/components/homePage/header";
import HeroSection from "@/components/homePage/HeroSection";
import HomeFooter from "@/components/homePage/footer";
import AppRootComponent from "@/AppGlobal/AppRootComponent";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optional: Improves performance for font rendering
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
     
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Solway:wght@300;400;500;700;800&display=swap" rel="stylesheet">
            </link>
      </Head>
   
      <body
        className={`${geistSans.variable} ${geistMono.variable}   ${inter.variable} antialiased`}
      >
        <AppRootComponent children ={ children } />
      </body>
    </html>
  );
}
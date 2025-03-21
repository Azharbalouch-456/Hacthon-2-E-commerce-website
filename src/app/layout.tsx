import { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componenets/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Your App Name",
  description: "Your app description",
  keywords: "your, keywords, here",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Website Name",
    description: "A comprehensive description of your website and its main purpose",
    type: "website",
    locale: "en_US",
    siteName: "Your Website Name",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Your Website Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Website Name",
    description: "A comprehensive description of your website and its main purpose",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
 <Navbar/>


        {children}</body>
    </html>
  );
}

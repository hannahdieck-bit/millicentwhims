import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import ButterflyCursor from "@/components/ui/ButterflyCursor";
import "./globals.css";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.millicentwhims.com"),
  title: "Millicent",
  description: "A creative collective making handmade objects and gatherings.",
  
  
  openGraph: {
    title: "Millicent",
    description: "A creative collective making handmade objects and gatherings.",
    images: ["/textures/embellishments/Millicent-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-56VTM94R41"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56VTM94R41');
          `}
        </Script>

        <Navigation />
        <ButterflyCursor />
        {children}
      </body>
    </html>
  );
}
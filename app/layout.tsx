import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import ButterflyCursor from "@/components/ui/ButterflyCursor";
import "./globals.css";

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
      <body className={cormorant.variable}>
        <ButterflyCursor />

        <div className="page-background">
          <div className="page-decorations" />
          <div className="margin-left" />
          <div className="margin-right" />

          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
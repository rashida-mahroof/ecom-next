import type { Metadata } from "next";
import { Quicksand,Maven_Pro, } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], weight:['700','600'],variable:'--font-quicksand' });
const mavenpro  = Maven_Pro({ subsets: ["latin"],
  weight:['400','500'],
  variable:'--font-maven-pro'

 });

export const metadata: Metadata = {
  title: "Charcoal",
  description: "Premium Charcoal for Your Grilling Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${mavenpro.variable}`}>{children}

      </body>
     
    </html>
  );
}

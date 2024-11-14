import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "CoYo: Own Your Future",
  description: "Decoding the path to success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Navigation />
        {children}
        <Footer />
        <ScrollUpButton />
      </body>
    </html>
  );
}

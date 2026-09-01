import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Job Impact — Bagaimana AI Mengubah Cara Kerja",
  description:
    "Jelajahi bagaimana AI dapat memengaruhi berbagai profesi dan temukan skill yang perlu kamu kuasai selanjutnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

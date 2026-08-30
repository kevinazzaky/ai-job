import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Job Impact — How AI Is Changing Work",
  description:
    "Explore how AI may impact different careers and discover skills to build next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
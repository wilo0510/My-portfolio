import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/SideBar";
import "./globals.css";

const cascadiaCode = localFont({
  src: "../../public/fonts/CascadiaCode.ttf",
  variable: "--font-cascadia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilmer Pachon",
  description: "Personal portfolio of Wilmer Pachon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cascadiaCode.variable} antialiased`}
      >
        <Navbar />
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}

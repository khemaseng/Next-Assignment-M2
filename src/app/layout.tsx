 
 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Food App",
  description: "Browse and discover delicious recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Navbar />
        {/* Main page contents (Home, Food Menu, About Us) */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
    // <html lang="en" className={inter.variable}>
    //   <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
    //     {children}
    //   </body>
    // </html>
  );
}
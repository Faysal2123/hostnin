import type { Metadata } from "next";
import { Geist, Urbanist, Mulish } from "next/font/google";
import Navbar from './layout/Navbar'
import "./globals.css";
import Footer from "./layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: {
    template: 'Hostnin | %s',
    default: 'Hostnin | Home',
  },
  description: "Hostnin is a web hosting company that provides reliable and affordable web hosting services.",
  icons: {
    icon: [
      {
        url: "https://hostnin.com/wp-content/uploads/2024/08/resized_hostnin_logo_160x160.png",
        sizes: "160x160",
        type: "image/png",
      },
      {
        url: "/hostnin-favicon.png",
        sizes: "160x160",
        type: "image/png",
      },
    ],
    shortcut: "https://hostnin.com/wp-content/uploads/2024/08/resized_hostnin_logo_160x160.png",
    apple: "https://hostnin.com/wp-content/uploads/2024/08/resized_hostnin_logo_160x160.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${urbanist.variable} ${mulish.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">
         
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
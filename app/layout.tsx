import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Motion Dev - Next.js App",
  description:
    "A Next.js application showcasing motion design with Framer Motion aka Motion.Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased selection:bg-secondary/40 selection:text-primary`}
      >
        <div className="relative max-w-7xl mx-auto bg-[#1a1922] px-4 md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}

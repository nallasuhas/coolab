import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Providers } from "./provider";
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coolab",
  description:
    "An application to help pair programming with random devs online",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body > 
       <Providers>
          <Toaster />
          <NextTopLoader />       
          <Header />
          <div className="container mx-auto">{children}</div>
       </Providers>
      </body>
    </html>
  );
}

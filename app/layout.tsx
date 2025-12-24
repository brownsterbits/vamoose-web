import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAMOOSE | Disaster Preparedness App",
  description: "Protect your pack before disaster strikes. The offline-first emergency preparedness app for the Pacific Northwest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-off-white text-secondary`}>{children}</body>
    </html>
  );
}

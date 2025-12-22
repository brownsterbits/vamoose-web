import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vamoose - Family Emergency Preparedness App",
  description:
    "Get your family prepared for any emergency. Build go-bags, coordinate plans, and stay ready with smart reminders.",
  keywords: [
    "emergency preparedness",
    "disaster kit",
    "go bag checklist",
    "family emergency plan",
    "earthquake kit",
    "hurricane preparedness",
  ],
  openGraph: {
    title: "Vamoose - Family Emergency Preparedness App",
    description:
      "Get your family prepared for any emergency. Build go-bags, coordinate plans, and stay ready with smart reminders.",
    url: "https://vamoose.io",
    siteName: "Vamoose",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamoose - Family Emergency Preparedness App",
    description:
      "Get your family prepared for any emergency. Build go-bags, coordinate plans, and stay ready with smart reminders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

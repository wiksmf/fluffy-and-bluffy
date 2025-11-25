import type { Metadata } from "next";
import { Quicksand, Poller_One } from "next/font/google";

import "./_styles/globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const pollerOne = Poller_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poller-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Fluffy & Bluffy",
    default: "Fluffy & Bluffy | Professional Pet Grooming",
  },
  description:
    "Welcome to Fluffy & Bluffy — premium grooming, styling, and pampering services for your furry friends. Clean, safe, and stress-free care for every pet.",
  keywords: [
    "pet grooming",
    "dog grooming",
    "cat grooming",
    "Fluffy and Bluffy",
    "pet spa",
    "grooming salon",
    "pet care",
    "local pet groomer",
  ],
  authors: [{ name: "wiksmf" }],
  openGraph: {
    title: "Fluffy & Bluffy | Professional Pet Grooming",
    description:
      "Welcome to Fluffy & Bluffy — premium grooming, styling, and pampering services for your furry friends. Clean, safe, and stress-free care for every pet.",
    url: "https://fluffy-and-bluffy.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://fluffy-and-bluffy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fluffy & Bluffy | Professional Pet Grooming",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${pollerOne.variable}`}>
        {children}
      </body>
    </html>
  );
}

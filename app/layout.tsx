import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = localFont({
  src: [
    {
      path: "../public/font/TitilliumWeb-SemiBold.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/TitilliumWeb-Regular.otf",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s / Charlie (@cunjur)",
    default: "Charlie (@cunjur)",
  },
  description: "Infrastructure, Software Engineer, and Machine Learning.",
  openGraph: {
    title: "Charlie (@cunjur)",
    description: "Infrastructure, Software Engineer, and Machine Learning.",
    images: "/og.png",
    url: "https://1λ.com",
  },
  alternates: {
    canonical: "https://1λ.com",
  },
  twitter: {
    site: "@cunjur",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(titillium.className, "p-4 py-10 md:p-12 bg select-none")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

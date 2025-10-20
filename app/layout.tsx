import type { Metadata } from "next";
import { Mulish, Montserrat } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onlineheldinnen.de'),
  title: "Online Heldinnen | Links",
  description: "Alle wichtigen Links zu Online Heldinnen - Social Media, Website, Ressourcen und mehr",
  openGraph: {
    title: "Online Heldinnen | Links",
    description: "Alle wichtigen Links zu Online Heldinnen",
    url: "https://onlineheldinnen.de",
    siteName: "Online Heldinnen",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Online Heldinnen Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Heldinnen | Links",
    description: "Alle wichtigen Links zu Online Heldinnen",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${mulish.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

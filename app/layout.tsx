import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

import "@/app/globals.css";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Protocolo Reset | Grupo VIP de Dia das Mães",
  description:
    "Entre no grupo VIP do Protocolo Reset e descubra em primeira mão a promoção mais especial do ano da clínica.",
  openGraph: {
    title: "Protocolo Reset | Grupo VIP de Dia das Mães",
    description:
      "A promoção mais especial do ano será revelada exclusivamente no grupo VIP do WhatsApp.",
    type: "website",
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        alt: "Protocolo Reset"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocolo Reset | Grupo VIP de Dia das Mães",
    description:
      "A promoção mais especial do ano será revelada exclusivamente no grupo VIP do WhatsApp.",
    images: [siteConfig.ogImage]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F1EC"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${playfair.variable} ${montserrat.variable}`} lang="pt-BR">
      <body className="font-body text-ink antialiased">{children}</body>
    </html>
  );
}

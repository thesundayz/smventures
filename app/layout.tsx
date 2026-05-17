import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://smventures.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SMVentures — Venture Builder, Indonesia",
  description:
    "SMVentures is a venture builder that co-builds and operates companies across Indonesia's most important industries — LegalTech, FinTech, PropTech, and enterprise SaaS.",
  keywords: [
    "venture builder Indonesia",
    "startup Indonesia",
    "venture capital Indonesia",
    "LegalTech Indonesia",
    "FinTech Indonesia",
    "SMVentures",
    "Tandatangan ID",
    "e-signature Indonesia",
    "Jakarta startup",
    "B2B SaaS Indonesia",
  ],
  authors: [{ name: "Sandi Mardiansyah", url: "https://www.sandimardiansyah.com" }],
  creator: "SMVentures",
  publisher: "SMVentures",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "SMVentures — Venture Builder, Indonesia",
    description:
      "Co-building companies across Indonesia's most important industries. LegalTech, FinTech, PropTech, and enterprise SaaS.",
    siteName: "SMVentures",
    images: [
      {
        url: "https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png",
        width: 1200,
        height: 630,
        alt: "SMVentures — Venture Builder Indonesia",
      },
    ],
    locale: "en_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMVentures — Venture Builder, Indonesia",
    description:
      "Co-building companies across Indonesia's most important industries.",
    images: ["https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MPJCQW41XD" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MPJCQW41XD');
        `}} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css"
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

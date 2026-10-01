import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header, { type NavLink } from "./components/Header";
import { getDictionary } from "./i18n";
import "./globals.css";

// Self-hosted by next/font: no request to Google Fonts from the browser.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Evaluated at build time (pages are statically prerendered)
const buildYear = new Date().getFullYear();

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
  const t = getDictionary("en");
  const links: NavLink[] = [
    { href: "/about", label: t.nav.about },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/about#people", label: t.nav.people },
    { href: "/for-shareholders", label: t.nav.shareholders },
  ];
  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <Header
          homeHref="/"
          links={links}
          labels={{
            nav: t.nav.label,
            login: t.nav.login,
            openMenu: t.nav.openMenu,
            closeMenu: t.nav.closeMenu,
            logoAlt: t.brand.logoAlt,
            home: t.brand.home,
          }}
        />
        {children}
        <Footer t={t.footer} logoAlt={t.brand.logoAlt} buildYear={buildYear} />
        <ContactForm t={t.contact} />
      </body>
      <GoogleAnalytics gaId="G-MPJCQW41XD" />
    </html>
  );
}

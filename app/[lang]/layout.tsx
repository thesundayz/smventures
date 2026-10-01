import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Header, { type NavLink } from "@/app/components/Header";
import { LANGS, getDictionary, localePath } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { publishedInsights } from "@/app/lib/insights";
import { BASE_URL, LOGO_URL } from "@/app/lib/links";
import { alternates } from "@/app/lib/seo";
import "../globals.css";

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

// English at / (rewritten to /en in next.config.ts), Indonesian at /id; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(BASE_URL),
    title: { default: t.title, template: "%s — SMVentures" },
    description: t.description,
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
    alternates: alternates(lang, "/"),
    openGraph: {
      type: "website",
      url: localePath(lang, "/"),
      title: t.title,
      description: t.ogDescription,
      siteName: "SMVentures",
      images: [{ url: LOGO_URL, width: 1200, height: 630, alt: "SMVentures — Venture Builder Indonesia" }],
      locale: lang === "id" ? "id_ID" : "en_ID",
      alternateLocale: lang === "id" ? "en_ID" : "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.shortDescription,
      images: [LOGO_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = await langFrom(params);
  const t = getDictionary(lang);
  const links: NavLink[] = [
    { href: localePath(lang, "/about"), label: t.nav.about },
    { href: `${localePath(lang, "/")}#portfolio`, label: t.nav.portfolio },
    { href: `${localePath(lang, "/about")}#people`, label: t.nav.people },
    { href: localePath(lang, "/for-shareholders"), label: t.nav.shareholders },
    // Insights appears once at least one post is published in this language.
    ...(publishedInsights(lang).length > 0 ? [{ href: localePath(lang, "/insights"), label: t.nav.insights }] : []),
  ];
  // Where the language switcher goes from an Insights post: the post itself only exists in its
  // own language, so the other language gets its Insights list (or its home page).
  const insightSlugs = {
    en: publishedInsights("en").map((p) => p.slug),
    id: publishedInsights("id").map((p) => p.slug),
  };
  return (
    <html lang={lang} className={`${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <Header
          lang={lang}
          links={links}
          insightSlugs={insightSlugs}
          labels={{
            nav: t.nav.label,
            login: t.nav.login,
            openMenu: t.nav.openMenu,
            closeMenu: t.nav.closeMenu,
            logoAlt: t.brand.logoAlt,
            home: t.brand.home,
            language: t.language,
          }}
        />
        {children}
        <Footer t={t.footer} logoAlt={t.brand.logoAlt} buildYear={buildYear} />
        <ContactForm t={t.contact} lang={lang} />
      </body>
      <GoogleAnalytics gaId="G-MPJCQW41XD" />
    </html>
  );
}

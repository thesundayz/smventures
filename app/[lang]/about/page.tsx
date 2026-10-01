import type { Metadata } from "next";
import AboutPage from "@/app/components/about/AboutPage";
import { getDictionary } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { pageMetadata } from "@/app/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).about;
  return pageMetadata({ lang, path: "/about", title: t.metaTitle, description: t.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  const lang = await langFrom(params);
  return <AboutPage t={getDictionary(lang).about} lang={lang} />;
}

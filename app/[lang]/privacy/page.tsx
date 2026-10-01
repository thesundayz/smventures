import type { Metadata } from "next";
import PrivacyPage from "@/app/components/PrivacyPage";
import { getDictionary } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { legalDocsFinal, privacyContact } from "@/app/lib/legal";
import { pageMetadata } from "@/app/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).privacy;
  return pageMetadata({ lang, path: "/privacy", title: t.metaTitle, description: t.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const lang = await langFrom(params);
  return <PrivacyPage t={getDictionary(lang).privacy} lang={lang} final={legalDocsFinal()} contact={privacyContact()} />;
}

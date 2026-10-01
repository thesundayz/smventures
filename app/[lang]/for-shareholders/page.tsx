import type { Metadata } from "next";
import ShareholdersPage from "@/app/components/ShareholdersPage";
import { getDictionary } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { pageMetadata } from "@/app/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/for-shareholders">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).shareholders;
  return pageMetadata({ lang, path: "/for-shareholders", title: t.metaTitle, description: t.metaDescription });
}

export default async function Page({ params }: PageProps<"/[lang]/for-shareholders">) {
  const lang = await langFrom(params);
  return <ShareholdersPage t={getDictionary(lang).shareholders} />;
}

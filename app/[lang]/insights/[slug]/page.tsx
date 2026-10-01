import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticle from "@/app/components/insights/InsightArticle";
import { LANGS, getDictionary, localePath } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { visibleInsights } from "@/app/lib/insights";
import { pageMetadata } from "@/app/lib/seo";

// Only the posts this build shows (never drafts in production), each in its own language;
// anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => visibleInsights(lang).map((post) => ({ lang, slug: post.slug })));
}

async function find(params: PageProps<"/[lang]/insights/[slug]">["params"]) {
  const lang = await langFrom(params);
  const { slug } = await params;
  return { lang, post: visibleInsights(lang).find((p) => p.slug === slug) };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/insights/[slug]">): Promise<Metadata> {
  const { lang, post } = await find(params);
  if (!post) return {};
  const metadata = pageMetadata({ lang, path: `/insights/${post.slug}`, title: post.title, description: post.summary, langs: [lang], type: "article" });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.date },
    ...(post.draft ? { robots: { index: false } } : {}),
  };
}

export default async function Page({ params }: PageProps<"/[lang]/insights/[slug]">) {
  const { lang, post } = await find(params);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/insights/${post.slug}.mdx`);
  return (
    <InsightArticle post={post} t={getDictionary(lang).insights} lang={lang} base={localePath(lang, "/insights")}>
      <Body />
    </InsightArticle>
  );
}

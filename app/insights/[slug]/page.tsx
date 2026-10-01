import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticle from "@/app/components/insights/InsightArticle";
import { getDictionary } from "@/app/i18n";
import { visibleInsights } from "@/app/lib/insights";

// Only the posts this build shows (never drafts in production); anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return visibleInsights("en").map((post) => ({ slug: post.slug }));
}

const find = (slug: string) => visibleInsights("en").find((post) => post.slug === slug);

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const post = find((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} — SMVentures`,
    description: post.summary,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, title: post.title, description: post.summary },
    ...(post.draft ? { robots: { index: false } } : {}),
  };
}

export default async function Page({ params }: PageProps<"/insights/[slug]">) {
  const post = find((await params).slug);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/insights/${post.slug}.mdx`);
  return (
    <InsightArticle post={post} t={getDictionary("en").insights} lang="en" base="/insights">
      <Body />
    </InsightArticle>
  );
}

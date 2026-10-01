import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightList from "@/app/components/insights/InsightList";
import { Container, Kicker, Lead } from "@/app/components/ui";
import { getDictionary, localePath } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { visibleInsights } from "@/app/lib/insights";
import { pageMetadata } from "@/app/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/insights">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).insights;
  const metadata = pageMetadata({ lang, path: "/insights", title: t.metaTitle, description: t.metaDescription, langs: [lang] });
  return {
    ...metadata,
    alternates: { ...metadata.alternates, types: { "application/rss+xml": localePath(lang, "/insights/rss.xml") } },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/insights">) {
  const lang = await langFrom(params);
  const t = getDictionary(lang).insights;
  const posts = visibleInsights(lang);
  // No page until something is published in this language.
  if (posts.length === 0) notFound();
  return (
    <main>
      <Container className="pt-16 pb-16 md:pt-[88px] md:pb-[88px]">
        <Kicker>{t.kicker}</Kicker>
        <h1 className="mt-4 text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink md:text-[52px]">{t.title}</h1>
        <Lead className="mt-4">{t.lead}</Lead>
        <div className="mt-10">
          <InsightList posts={posts} t={t} lang={lang} base={localePath(lang, "/insights")} />
        </div>
        <p className="mt-8">
          <a
            href={localePath(lang, "/insights/rss.xml")}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 underline underline-offset-2"
          >
            {t.rss}
          </a>
        </p>
      </Container>
    </main>
  );
}

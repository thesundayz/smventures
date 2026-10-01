import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightList from "../components/insights/InsightList";
import { Container, Kicker, Lead } from "../components/ui";
import { getDictionary } from "../i18n";
import { visibleInsights } from "../lib/insights";

const t = getDictionary("en").insights;

export const metadata: Metadata = {
  title: `${t.metaTitle} — SMVentures`,
  description: t.metaDescription,
  alternates: { canonical: "/insights", types: { "application/rss+xml": "/insights/rss.xml" } },
};

export default function Page() {
  const posts = visibleInsights("en");
  // No page until something is published.
  if (posts.length === 0) notFound();
  return (
    <main>
      <Container className="pt-16 pb-16 md:pt-[88px] md:pb-[88px]">
        <Kicker>{t.kicker}</Kicker>
        <h1 className="mt-4 text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink md:text-[52px]">{t.title}</h1>
        <Lead className="mt-4">{t.lead}</Lead>
        <div className="mt-10">
          <InsightList posts={posts} t={t} lang="en" base="/insights" />
        </div>
        <p className="mt-8">
          <a href="/insights/rss.xml" className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 underline underline-offset-2">
            {t.rss}
          </a>
        </p>
      </Container>
    </main>
  );
}

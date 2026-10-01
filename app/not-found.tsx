import type { Metadata } from "next";
import Link from "next/link";
import { Container, Kicker, Lead, buttonClass } from "./components/ui";
import { getDictionary } from "./i18n";

const t = getDictionary("en").notFound;

export const metadata: Metadata = { title: t.metaTitle, robots: { index: false } };

export default function NotFound() {
  return (
    <main>
      <Container className="py-24 md:py-32">
        <Kicker>{t.kicker}</Kicker>
        <h1 className="mt-4 text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink md:text-[52px]">{t.title}</h1>
        <Lead className="mt-4">{t.lead}</Lead>
        <Link href="/" className={`${buttonClass.primary} mt-8`}>
          {t.home}
        </Link>
      </Container>
    </main>
  );
}

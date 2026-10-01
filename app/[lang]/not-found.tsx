import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { Container, Kicker, Lead, buttonClass } from "@/app/components/ui";
import { getDictionary, isLang, localePath } from "@/app/i18n";

export default async function NotFound() {
  const value = await rootLang();
  const lang = isLang(value) ? value : "en";
  const t = getDictionary(lang).notFound;
  return (
    <main>
      <title>{t.metaTitle}</title>
      <Container className="py-24 md:py-32">
        <Kicker>{t.kicker}</Kicker>
        <h1 className="mt-4 text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink md:text-[52px]">{t.title}</h1>
        <Lead className="mt-4">{t.lead}</Lead>
        <Link href={localePath(lang, "/")} className={`${buttonClass.primary} mt-8`}>
          {t.home}
        </Link>
      </Container>
    </main>
  );
}

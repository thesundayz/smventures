import type { Metadata } from "next";
import AboutPage from "../components/about/AboutPage";
import { getDictionary } from "../i18n";

const t = getDictionary("en").about;

export const metadata: Metadata = {
  title: `${t.metaTitle} — SMVentures`,
  description: t.metaDescription,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage t={t} lang="en" />;
}

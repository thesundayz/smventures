import type { Metadata } from "next";
import ShareholdersPage from "../components/ShareholdersPage";
import { getDictionary } from "../i18n";

const t = getDictionary("en").shareholders;

export const metadata: Metadata = {
  title: `${t.metaTitle} — SMVentures`,
  description: t.metaDescription,
  alternates: { canonical: "/for-shareholders" },
};

export default function Page() {
  return <ShareholdersPage t={t} />;
}

import { notFound } from "next/navigation";

// Any other address under a language (/whatever, /id/whatever) shows that language's 404 page
// (app/[lang]/not-found.tsx) inside the site's header and footer.
export default function Missing() {
  notFound();
}

import { useTranslations } from "next-intl";

/**
 * Note however that Next.js will only render this page when the notFound function
 * is called from within a route, not for all unknown routes in general.
 */
export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return <h1>{t("title")}</h1>;
}

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neutral-200 bg-white text-sm">
      <div className="container-w flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-neutral-600">© {year} 酒茶いくひ / 中屋旅館</p>
        <p className="text-neutral-500">{t("tagline")}</p>
      </div>
    </footer>
  );
}

import { useTranslations } from "next-intl";
import ImageWithFallback from "./ImageWithFallback";

export default function BarSection() {
  const t = useTranslations("bar");

  return (
    <section id="bar" className="py-14 md:py-24">
      <div className="container-w grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="serif text-2xl md:text-4xl font-semibold mb-4">
            {t("title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("body")}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="card shadow-soft p-4 flex flex-col">
              <p className="font-semibold mb-2">{t("badge1")}</p>
              <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{t("badge1Body")}</p>
            </div>
            <div className="card shadow-soft p-4 flex flex-col">
              <p className="font-semibold mb-2">{t("badge2")}</p>
              <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{t("badge2Body")}</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 grid gap-3">
          <div className="relative w-full h-72 rounded-2xl shadow-soft overflow-hidden">
            <ImageWithFallback
              src="/img/bar-table.jpg"
              alt="一枚板カウンター"
              fallbackText="カウンター席"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 w-full rounded-2xl shadow-soft overflow-hidden">
              <ImageWithFallback
                src="/img/sake-bottles.jpg"
                alt="日本酒棚"
                fallbackText="日本酒コレクション"
              />
            </div>
            <div className="relative h-48 w-full rounded-2xl shadow-soft overflow-hidden">
              <ImageWithFallback
                src="/img/bar-pairing.jpg"
                alt="日本酒と器"
                fallbackText="お料理"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
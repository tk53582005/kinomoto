import { useTranslations } from "next-intl";
import ImageWithFallback from "./ImageWithFallback";

export default function StaySection() {
  const t = useTranslations("stay");

  return (
    <section id="stay" className="py-14 md:py-24 bg-white">
      <div className="container-w">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-4">
              {t("title")}
            </h2>
            <p className="text-neutral-700 leading-relaxed">{t("body")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="card shadow-soft">
                <p className="font-semibold mb-1">{t("fac1")}</p>
                <p className="text-neutral-600">{t("fac1Body")}</p>
              </div>
              <div className="card shadow-soft">
                <p className="font-semibold mb-1">{t("fac2")}</p>
                <p className="text-neutral-600">{t("fac2Body")}</p>
              </div>
              <div className="card shadow-soft">
                <p className="font-semibold mb-1">{t("fac3")}</p>
                <p className="text-neutral-600">{t("fac3Body")}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="relative w-full h-72 rounded-2xl shadow-soft overflow-hidden">
              <ImageWithFallback
                src="/img/guest-room.jpeg"
                alt="客室"
                fallbackText="客室"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-48 w-full rounded-2xl shadow-soft overflow-hidden">
                <ImageWithFallback
                  src="/img/lounge.jpeg"
                  alt="ラウンジ"
                  fallbackText="ラウンジ"
                />
              </div>
              <div className="relative h-48 w-full rounded-2xl shadow-soft overflow-hidden">
                <ImageWithFallback
                  src="/img/garden.jpeg"
                  alt="庭"
                  fallbackText="中庭"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
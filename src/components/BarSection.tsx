"use client";

import { useTranslations } from "next-intl";
import ImageSlider from "./ImageSlider";
import type { GalleryImage } from "./ImageSlider";

const barImages: GalleryImage[] = [
  { src: "/img/bar-table.jpg", altJa: "一枚板カウンター", altEn: "Counter", captionJa: "", captionEn: "" },
  { src: "/img/sake-bottles.jpg", altJa: "日本酒棚", altEn: "Sake bottles", captionJa: "", captionEn: "" },
  { src: "/img/bar-pairing.jpg", altJa: "日本酒と器", altEn: "Sake and vessels", captionJa: "", captionEn: "" },
];

export default function BarSection() {
  const t = useTranslations("bar");

  return (
    <section id="bar" className="py-14 md:py-24 overflow-hidden w-full">
      <div className="container-w grid md:grid-cols-2 gap-6 md:gap-10 items-center overflow-hidden w-full">
        <div className="order-1 md:order-1 min-w-0">
          <h2 className="serif text-2xl md:text-4xl font-semibold mb-4 text-white">
            {t("title")}
          </h2>
          <p className="text-neutral-300 leading-relaxed break-words">{t("body")}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="card shadow-soft p-4 flex flex-col min-w-0">
              <p className="font-semibold mb-2 text-white">{t("badge1")}</p>
              <p className="text-neutral-400 leading-relaxed whitespace-pre-line break-words">{t("badge1Body")}</p>
            </div>
            <div className="card shadow-soft p-4 flex flex-col min-w-0">
              <p className="font-semibold mb-2 text-white">{t("badge2")}</p>
              <p className="text-neutral-400 leading-relaxed whitespace-pre-line break-words">{t("badge2Body")}</p>
            </div>
          </div>
        </div>
        <div className="order-2 md:order-2 min-w-0">
          <ImageSlider images={barImages} group="bar" aspectRatio="4/3" />
        </div>
      </div>
    </section>
  );
}
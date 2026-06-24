"use client";

import { useTranslations } from "next-intl";
import ImageSlider from "./ImageSlider";
import type { GalleryImage } from "./ImageSlider";

const stayImages: GalleryImage[] = [
  { src: "/img/guest-room.jpeg", altJa: "客室", altEn: "Guest room", captionJa: "", captionEn: "" },
  { src: "/img/lounge.jpeg", altJa: "ラウンジ", altEn: "Lounge", captionJa: "", captionEn: "" },
  { src: "/img/garden.jpeg", altJa: "庭", altEn: "Garden", captionJa: "", captionEn: "" },
];

export default function StaySection() {
  const t = useTranslations("stay");

  return (
    <section id="stay" className="py-14 md:py-24">
      <div className="container-w">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-4 text-white">
              {t("title")}
            </h2>
            <p className="text-neutral-300 leading-relaxed">{t("body")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="card shadow-soft">
                <p className="font-semibold mb-1 text-white">{t("fac1")}</p>
                <p className="text-neutral-400">{t("fac1Body")}</p>
              </div>
              <div className="card shadow-soft">
                <p className="font-semibold mb-1 text-white">{t("fac2")}</p>
                <p className="text-neutral-400">{t("fac2Body")}</p>
              </div>
              <div className="card shadow-soft">
                <p className="font-semibold mb-1 text-white">{t("fac3")}</p>
                <p className="text-neutral-400">{t("fac3Body")}</p>
              </div>
            </div>
          </div>
          <div>
            <ImageSlider images={stayImages} group="stay" aspectRatio="4/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import type { GalleryImage } from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "フォトギャラリー | 中屋旅館",
  description: "中屋旅館のフォトギャラリー。空き家だった頃、工事中、完成後の3つの時期をご覧いただけます。",
};

const vacantImages: GalleryImage[] = [
  { src: "/img/gallery/vacant-01.jpg", altJa: "空き家時代 01", altEn: "Vacant 01", captionJa: "", captionEn: "" },
  { src: "/img/gallery/vacant-02.jpg", altJa: "空き家時代 02", altEn: "Vacant 02", captionJa: "", captionEn: "" },
  { src: "/img/gallery/vacant-03.jpg", altJa: "空き家時代 03", altEn: "Vacant 03", captionJa: "", captionEn: "" },
  { src: "/img/gallery/vacant-04.jpg", altJa: "空き家時代 04", altEn: "Vacant 04", captionJa: "", captionEn: "" },
  { src: "/img/gallery/vacant-05.jpg", altJa: "空き家時代 05", altEn: "Vacant 05", captionJa: "", captionEn: "" },
  { src: "/img/gallery/vacant-06.jpg", altJa: "空き家時代 06", altEn: "Vacant 06", captionJa: "", captionEn: "" },
];

const constructionImages: GalleryImage[] = [
  // 写真が届いたら追加
];

const completedImages: GalleryImage[] = [
  { src: "/img/gallery/completed-01.jpeg", altJa: "完成後 01", altEn: "Completed 01", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-02.jpeg", altJa: "完成後 02", altEn: "Completed 02", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-03.jpeg", altJa: "完成後 03", altEn: "Completed 03", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-04.jpeg", altJa: "完成後 04", altEn: "Completed 04", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-05.jpeg", altJa: "完成後 05", altEn: "Completed 05", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-06.jpeg", altJa: "完成後 06", altEn: "Completed 06", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-07.jpeg", altJa: "完成後 07", altEn: "Completed 07", captionJa: "", captionEn: "" },
  { src: "/img/gallery/completed-08.jpeg", altJa: "完成後 08", altEn: "Completed 08", captionJa: "", captionEn: "" },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <>
      <Header />
      <main className="py-12 md:py-16 bg-neutral-50 min-h-screen">
        <div className="container-w">
          <p className="text-sm tracking-widest text-neutral-500">{t("kicker")}</p>
          <h1 className="serif text-3xl md:text-5xl font-semibold mt-2">
            {t("title")}
          </h1>
          <p className="mt-3 text-neutral-700">{t("lead")}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#vacant" className="badge-pill">{t("pills.vacant")}</a>
            <a href="#construction" className="badge-pill">{t("pills.construction")}</a>
            <a href="#completed" className="badge-pill">{t("pills.completed")}</a>
          </div>
        </div>

        <section id="vacant" className="mt-10" style={{ scrollMarginTop: "96px" }}>
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-6">{t("vacant.title")}</h2>
            <div className="max-w-3xl mx-auto">
              <ImageSlider images={vacantImages} group="vacant" />
            </div>
          </div>
        </section>

        <section id="construction" className="mt-14" style={{ scrollMarginTop: "96px" }}>
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-6">{t("construction.title")}</h2>
            <div className="max-w-3xl mx-auto">
              <ImageSlider images={constructionImages} group="construction" />
            </div>
          </div>
        </section>

        <section id="completed" className="mt-14" style={{ scrollMarginTop: "96px" }}>
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-6">{t("completed.title")}</h2>
            <div className="max-w-3xl mx-auto">
              <ImageSlider images={completedImages} group="completed" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
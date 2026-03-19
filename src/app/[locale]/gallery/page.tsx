import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MasonryGallery from "@/components/MasonryGallery";
import type { GalleryImage } from "@/components/Lightbox";

const vacantImages: GalleryImage[] = [
  {
    src: "/img/gallery/vacant-01.jpg",
    altJa: "外観（空き家時代）",
    altEn: "Exterior (vacant period)",
    captionJa: "外観（空き家時代）",
    captionEn: "Exterior (vacant period)",
  },
  {
    src: "/img/gallery/vacant-02.jpg",
    altJa: "室内（空き家時代）",
    altEn: "Interior (vacant period)",
    captionJa: "室内（空き家時代）",
    captionEn: "Interior (vacant period)",
  },
];

const constructionImages: GalleryImage[] = [
  {
    src: "/img/gallery/construction-01.jpg",
    altJa: "梁の補修",
    altEn: "Beam repair",
    captionJa: "梁の補修",
    captionEn: "Beam repair",
  },
  {
    src: "/img/gallery/construction-02.jpg",
    altJa: "足場と養生",
    altEn: "Scaffolding and sheeting",
    captionJa: "足場と養生",
    captionEn: "Scaffolding and sheeting",
  },
];

const completedImages: GalleryImage[] = [
  {
    src: "/img/gallery/completed-01.jpg",
    altJa: "外観（完成）",
    altEn: "Exterior (completed)",
    captionJa: "外観（完成）",
    captionEn: "Exterior (completed)",
  },
  {
    src: "/img/gallery/completed-02.jpg",
    altJa: "室内（完成）",
    altEn: "Interior (completed)",
    captionJa: "室内（完成）",
    captionEn: "Interior (completed)",
  },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <>
      <Header />
      <main className="py-12 md:py-16">
        <div className="container-w">
          <p className="text-sm tracking-widest text-neutral-500">{t("kicker")}</p>
          <h1 className="serif text-3xl md:text-5xl font-semibold mt-2">
            {t("title")}
          </h1>
          <p className="mt-3 text-neutral-700">{t("lead")}</p>

          {/* Jump pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#vacant" className="badge-pill">
              {t("pills.vacant")}
            </a>
            <a href="#construction" className="badge-pill">
              {t("pills.construction")}
            </a>
            <a href="#completed" className="badge-pill">
              {t("pills.completed")}
            </a>
          </div>
        </div>

        {/* 空き家だった頃 */}
        <section id="vacant" className="mt-10" style={{ scrollMarginTop: "96px" }}>
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-4">
              {t("vacant.title")}
            </h2>
            <MasonryGallery images={vacantImages} group="vacant" />
          </div>
        </section>

        {/* 工事中 */}
        <section
          id="construction"
          className="mt-14"
          style={{ scrollMarginTop: "96px" }}
        >
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-4">
              {t("construction.title")}
            </h2>
            <MasonryGallery images={constructionImages} group="construction" />
          </div>
        </section>

        {/* 完成後 */}
        <section
          id="completed"
          className="mt-14"
          style={{ scrollMarginTop: "96px" }}
        >
          <div className="container-w">
            <h2 className="serif text-2xl md:text-4xl font-semibold mb-4">
              {t("completed.title")}
            </h2>
            <MasonryGallery images={completedImages} group="completed" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

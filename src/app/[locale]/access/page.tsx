import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "アクセス | 中屋旅館",
  description: "中屋旅館へのアクセス情報。JR木ノ本駅からのアクセス、駐車場情報などをご案内します。",
};

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3247.9976687716985!2d136.22328767577991!3d35.50433587264492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDMwJzE1LjYiTiAxMzbCsDEzJzMzLjEiRQ!5e0!3m2!1sja!2sjp!4v1773758004381!5m2!1sja!2sjp";

export default function AccessPage() {
  const t = useTranslations("access");

  return (
    <>
      <Header />
      <main className="py-12 md:py-16 bg-neutral-50 min-h-screen">
        <div className="container-w">
          <p className="text-sm tracking-widest text-neutral-500">{t("kicker")}</p>
          <h1 className="serif text-3xl md:text-5xl font-semibold mt-2">
            {t("title")}
          </h1>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Info */}
            <div className="grid gap-6">
              <div className="card shadow-soft">
                <dl className="grid gap-4 text-sm">
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("address")}</dt>
                    <dd className="text-neutral-700">{t("addressValue")}</dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("station")}</dt>
                    <dd className="text-neutral-700">
                      {t("stationValue")}<br />
                      <span className="text-neutral-500">{t("stationWalk")}</span>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("parking")}</dt>
                    <dd className="text-neutral-700">{t("parkingValue")}</dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("hours")}</dt>
                    <dd className="text-neutral-700">
                      {t("barHours")}<br />
                      {t("innHours")}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("phone")}</dt>
                    <dd className="text-neutral-700">{t("phoneValue")}</dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-2">
                    <dt className="font-semibold text-neutral-500">{t("email")}</dt>
                    <dd className="text-neutral-700">{t("emailValue")}</dd>
                  </div>
                </dl>
              </div>

              <div className="card shadow-soft">
                <h2 className="serif text-lg font-semibold mb-2">🚃 {t("trainTitle")}</h2>
                <p className="text-sm text-neutral-700 leading-relaxed">{t("trainBody")}</p>
              </div>

              <div className="card shadow-soft">
                <h2 className="serif text-lg font-semibold mb-2">🚗 {t("carTitle")}</h2>
                <p className="text-sm text-neutral-700 leading-relaxed">{t("carBody")}</p>
              </div>

              <div className="card shadow-soft">
                <h2 className="serif text-lg font-semibold mb-2">📍 {t("publicTitle")}</h2>
                <p className="text-sm text-neutral-700 leading-relaxed">{t("publicBody")}</p>
              </div>
            </div>

            {/* Right: Map */}
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3] w-full bg-neutral-200">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div>
              <p className="text-xs text-neutral-400 mt-2 text-center">{t("mapNote")}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
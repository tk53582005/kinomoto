import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "ご予約 | 中屋旅館",
  description: "中屋旅館の公式予約ページ。公式サイトからのご予約が最もお得です。",
};

export default function ReservationPage() {
  const t = useTranslations("reservation");

  return (
    <>
      <Header />
      <main className="py-12 md:py-16 bg-neutral-50 min-h-screen">
        <div className="container-w max-w-2xl">
          <p className="text-sm tracking-widest text-neutral-500">{t("kicker")}</p>
          <h1 className="serif text-3xl md:text-5xl font-semibold mt-2">
            {t("title")}
          </h1>
          <p className="mt-3 text-neutral-700">{t("lead")}</p>
          <p className="mt-1 text-sm text-neutral-500">{t("checkInNote")}</p>

          <div className="mt-8 card shadow-soft">
            <h2 className="font-semibold mb-1">{t("otaTitle")}</h2>
            <p className="text-sm text-neutral-600 mb-4">{t("otaLead")}</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="btn border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                <span>🏨</span> {t("bookingCom")}
              </a>
              <a href="https://www.airbnb.jp/rooms/1637509784382653021" target="_blank" rel="noopener noreferrer" className="btn border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                <span>🏠</span> {t("airbnb")}
              </a>
            </div>
          </div>

          <div className="mt-8">
            <ReservationForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
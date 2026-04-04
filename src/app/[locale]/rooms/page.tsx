import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import type { GalleryImage } from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "客室のご案内 | 中屋旅館",
  description:
    "中屋旅館の3つの客室をご紹介します。歴史ある建物の面影を残しながら、現代の快適さを備えた空間です。",
};

const kuriImages: GalleryImage[] = [
  { src: "/img/rooms/kuri-01.jpg", altJa: "栗の間 01", altEn: "Kuri 01", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-02.jpg", altJa: "栗の間 02", altEn: "Kuri 02", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-03.jpg", altJa: "栗の間 03", altEn: "Kuri 03", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-04.jpg", altJa: "栗の間 04", altEn: "Kuri 04", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-05.jpg", altJa: "栗の間 05", altEn: "Kuri 05", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-06.jpg", altJa: "栗の間 06", altEn: "Kuri 06", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-07.jpg", altJa: "栗の間 07", altEn: "Kuri 07", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-08.jpg", altJa: "栗の間 08", altEn: "Kuri 08", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-09.jpg", altJa: "栗の間 09", altEn: "Kuri 09", captionJa: "", captionEn: "" },
  { src: "/img/rooms/kuri-10.jpg", altJa: "栗の間 10", altEn: "Kuri 10", captionJa: "", captionEn: "" },
];

const hibaImages: GalleryImage[] = [
  { src: "/img/rooms/hiba-01.jpg", altJa: "桧葉の間 01", altEn: "Hiba 01", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-02.jpg", altJa: "桧葉の間 02", altEn: "Hiba 02", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-03.jpg", altJa: "桧葉の間 03", altEn: "Hiba 03", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-04.jpg", altJa: "桧葉の間 04", altEn: "Hiba 04", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-05.jpg", altJa: "桧葉の間 05", altEn: "Hiba 05", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-06.jpg", altJa: "桧葉の間 06", altEn: "Hiba 06", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-07.jpg", altJa: "桧葉の間 07", altEn: "Hiba 07", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-08.jpg", altJa: "桧葉の間 08", altEn: "Hiba 08", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-09.jpg", altJa: "桧葉の間 09", altEn: "Hiba 09", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-10.jpg", altJa: "桧葉の間 10", altEn: "Hiba 10", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-11.jpg", altJa: "桧葉の間 11", altEn: "Hiba 11", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-12.jpg", altJa: "桧葉の間 12", altEn: "Hiba 12", captionJa: "", captionEn: "" },
  { src: "/img/rooms/hiba-13.jpg", altJa: "桧葉の間 13", altEn: "Hiba 13", captionJa: "", captionEn: "" },
];

const sugiImages: GalleryImage[] = [];

const rooms = [
  {
    id: "room-01",
    nameKey: "room01Name",
    descKey: "room01Desc",
    bedKey: "room01Bed",
    capacity: 2,
    images: kuriImages,
    amenityKeys: [
      "amenityWifi",
      "amenityAc",
      "amenityTv",
      "amenityFridge",
      "amenityBath",
    ],
  },
  {
    id: "room-02",
    nameKey: "room02Name",
    descKey: "room02Desc",
    bedKey: "room02Bed",
    capacity: 6,
    images: hibaImages,
    amenityKeys: [
      "amenityWifi",
      "amenityAc",
      "amenityTv",
      "amenityFridge",
      "amenityBath",
    ],
  },
  {
    id: "room-03",
    nameKey: "room03Name",
    descKey: "room03Desc",
    bedKey: "room03Bed",
    capacity: 4,
    images: sugiImages,
    amenityKeys: [
      "amenityWifi",
      "amenityAc",
      "amenityTv",
      "amenityFridge",
      "amenityBath",
      "amenityGarden",
    ],
  },
];

export default function RoomsPage() {
  const t = useTranslations("rooms");

  return (
    <>
      <Header />
      <main className="py-12 md:py-16 bg-neutral-50 min-h-screen">
        <div className="container-w">
          <p className="text-sm tracking-widest text-neutral-500">
            {t("kicker")}
          </p>
          <h1 className="serif text-3xl md:text-5xl font-semibold mt-2">
            {t("title")}
          </h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">{t("lead")}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="bg-white rounded-xl px-5 py-3 shadow-soft">
              <span className="text-neutral-500">{t("checkIn")} </span>
              <span className="font-semibold">{t("checkInTime")}</span>
            </div>
            <div className="bg-white rounded-xl px-5 py-3 shadow-soft">
              <span className="text-neutral-500">{t("checkOut")} </span>
              <span className="font-semibold">{t("checkOutTime")}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:gap-10">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
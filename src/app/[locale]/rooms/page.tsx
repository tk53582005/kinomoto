import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";

export const metadata: Metadata = {
  title: "客室のご案内 | 中屋旅館",
  description:
    "中屋旅館の3つの客室をご紹介します。歴史ある建物の面影を残しながら、現代の快適さを備えた空間です。",
};

const rooms = [
  {
    id: "room-01",
    nameKey: "room01Name",
    descKey: "room01Desc",
    bedKey: "room01Bed",
    capacity: 2,
    imgSrc: "/img/rooms/room-01.jpg",
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
    capacity: 4,
    imgSrc: "/img/rooms/room-02.jpg",
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
    imgSrc: "/img/rooms/room-03.jpg",
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

          {/* Check-in / Check-out */}
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

          {/* Room cards */}
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
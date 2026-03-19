import { useTranslations } from "next-intl";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

type Room = {
  id: string;
  nameKey: string;
  descKey: string;
  bedKey: string;
  capacity: number;
  imgSrc: string;
  amenityKeys: string[];
};

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  const t = useTranslations("rooms");

  return (
    <article className="bg-white rounded-2xl shadow-soft overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-64 md:h-80">
        <ImageWithFallback
          src={room.imgSrc}
          alt={t(room.nameKey as Parameters<typeof t>[0])}
          fallbackText={t(room.nameKey as Parameters<typeof t>[0])}
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold">
              {t(room.nameKey as Parameters<typeof t>[0])}
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              {t(room.bedKey as Parameters<typeof t>[0])} &nbsp;·&nbsp;{" "}
              {t("capacity")}
              {room.capacity}
              {t("capacityUnit")}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-500 mb-0.5">{t("priceFrom")}</p>
            <p className="serif text-xl font-semibold text-[#1b4332]">
              {t("priceTbd")}
            </p>
            <p className="text-xs text-neutral-400">{t("perNight")}</p>
          </div>
        </div>

        <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-6">
          {t(room.descKey as Parameters<typeof t>[0])}
        </p>

        {/* Amenities */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            {t("amenities")}
          </p>
          <div className="flex flex-wrap gap-2">
            {room.amenityKeys.map((key) => (
              <span
                key={key}
                className="text-xs border border-neutral-200 rounded-full px-3 py-1 text-neutral-600"
              >
                {t(key as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/reservation"
          className="btn btn-primary w-full text-center block text-sm font-medium"
        >
          {t("ctaBook")}
        </Link>
        <p className="text-xs text-center text-neutral-400 mt-2">
          {t("ctaBookSub")}
        </p>
      </div>
    </article>
  );
}
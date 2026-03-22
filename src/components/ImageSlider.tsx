"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  altJa: string;
  altEn: string;
  captionJa: string;
  captionEn: string;
};

type Props = {
  images: GalleryImage[];
  group: string;
};

export default function ImageSlider({ images, group }: Props) {
  const locale = useLocale();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i + images.length - 1) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  if (images.length === 0) {
    return (
      <div className="w-full rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm" style={{ aspectRatio: "16/9" }}>
        {locale === "ja" ? "写真準備中" : "Photos coming soon"}
      </div>
    );
  }

  const img = images[current];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-soft" style={{ aspectRatio: "16/9" }} data-group={group}>
      <div className="relative w-full h-full">
        <Image
          src={img.src}
          alt={locale === "ja" ? img.altJa : img.altEn}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
        {(img.captionJa || img.captionEn) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
            <p className="text-white text-sm">
              {locale === "ja" ? img.captionJa : img.captionEn}
            </p>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-xl px-3 py-2 transition"
          aria-label="Previous"
        >
          ◀
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-xl px-3 py-2 transition"
          aria-label="Next"
        >
          ▶
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-lg">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
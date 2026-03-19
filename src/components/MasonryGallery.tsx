"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Lightbox, type GalleryImage } from "./Lightbox";

type Props = {
  images: GalleryImage[];
  group: string;
};

export default function MasonryGallery({ images, group }: Props) {
  const locale = useLocale();
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  return (
    <>
      <div className="masonry" data-group={group}>
        {images.map((img, i) => (
          <figure
            key={i}
            className="masonry-item shadow-soft cursor-pointer"
            onClick={() => setLbIndex(i)}
          >
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src={img.src}
                alt={locale === "ja" ? img.altJa : img.altEn}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </figure>
        ))}
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lbIndex}
          onClose={() => setLbIndex(null)}
        />
      )}
    </>
  );
}
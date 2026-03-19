"use client";

import { useState, useEffect, useCallback } from "react";
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
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: Props) {
  const locale = useLocale();
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(
    () => setIndex((i) => (i + images.length - 1) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[index];
  const caption = locale === "ja" ? img.captionJa : img.captionEn;

  return (
    <div
      className="lb-backdrop open"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
      aria-label="Image viewer"
    >
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button className="lb-btn lb-prev" onClick={prev} aria-label="Previous">
        ◀
      </button>
      <div className="relative lb-img">
        <Image
          src={img.src}
          alt={locale === "ja" ? img.altJa : img.altEn}
          fill
          className="object-contain rounded-2xl"
          sizes="(max-width: 768px) 92vw, 1100px"
        />
      </div>
      {caption && (
        <div className="lb-caption" aria-live="polite">
          {caption}
        </div>
      )}
      <button className="lb-btn lb-next" onClick={next} aria-label="Next">
        ▶
      </button>
    </div>
  );
}
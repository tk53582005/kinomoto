"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  fallbackText,
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`img-ph ${className}`}>
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
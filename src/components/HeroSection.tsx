"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative">
      <div className="relative" style={{ paddingTop: "48%" }}>
        <Image
          src="/img/hero.jpg"
          alt="木之本の街並み"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="hero-overlay absolute inset-0 flex items-end">
        <div className="container-w pb-10 md:pb-16 text-white">
          <p className="text-sm tracking-widest mb-2">{t("kicker")}</p>
          <h1 className="serif text-3xl md:text-5xl font-semibold leading-tight">
            {t("title")}
          </h1>
          <p className="mt-3 md:mt-4 text-neutral-200">
            {t("lead")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#bar" className="btn btn-primary">
              {t("ctaBar")}
            </Link>
            <Link href="#stay" className="btn bg-white text-neutral-900">
              {t("ctaStay")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
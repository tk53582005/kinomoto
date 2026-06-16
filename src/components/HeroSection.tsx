"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative pt-[56%] md:pt-[42%]">
        <Image
          src="/img/hero.jpg"
          alt="木之本の街並み"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="hero-overlay absolute inset-0 flex items-center md:items-end overflow-hidden">
        <div className="container-w pb-0 md:pb-16 text-white overflow-hidden max-w-full">
          {/* ロゴ */}
          <div className="mb-4 md:mb-6">
            <Image
              src="/img/logo-white.png"
              alt="酒茶いくひ"
              width={180}
              height={240}
              className="opacity-90"
            />
          </div>
          <p className="text-xs md:text-sm tracking-widest mb-2">{t("kicker")}</p>
          <h1 className="serif text-2xl md:text-5xl font-semibold leading-tight">
            {t("title")}
          </h1>
          {/* PC版 */}
          <p className="hidden md:block mt-4 text-base text-neutral-200">
            {t("lead")}
          </p>
          {/* スマホ版：折り返し */}
          <p className="md:hidden mt-2 text-xs text-neutral-200 w-full leading-relaxed">
            {t("lead")}
          </p>
          {/* 予約ボタン（PC・スマホ共通） */}
          <div className="mt-4 md:mt-6">
            <Link href={`/${locale}/reservation`} className="btn btn-primary text-sm md:text-base px-6">
              {t("ctaReserve")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
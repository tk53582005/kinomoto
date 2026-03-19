"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function AccessSection() {
  const t = useTranslations("access");
  const locale = useLocale();

  return (
    <section id="access" className="py-14 md:py-24 bg-white">
      <div className="container-w grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="serif text-xl md:text-2xl font-semibold mb-3">
            {t("title")}
          </h3>
          <dl className="grid gap-3 text-sm mt-4">
            <div className="grid grid-cols-[6rem_1fr] gap-2">
              <dt className="font-semibold text-neutral-500">{t("station")}</dt>
              <dd className="text-neutral-700">
                {t("stationValue")}<br />
                <span className="text-neutral-500">{t("stationWalk")}</span>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-2">
              <dt className="font-semibold text-neutral-500">{t("parking")}</dt>
              <dd className="text-neutral-700">{t("parkingValue")}</dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-2">
              <dt className="font-semibold text-neutral-500">{t("hours")}</dt>
              <dd className="text-neutral-700">
                {t("barHours")}<br />{t("innHours")}
              </dd>
            </div>
          </dl>
          <Link href={`/${locale}/access`} className="btn btn-primary inline-block mt-6 text-sm">
            {t("title")} →
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3] w-full bg-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3247.9976687716985!2d136.22328767577991!3d35.50433587264492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDMwJzE1LjYiTiAxMzbCsDEzJzMzLjEiRQ!5e0!3m2!1sja!2sjp!4v1773758004381!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
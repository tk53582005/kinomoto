import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nakaya-ryokan.jp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === "ja";

  const title = isJa
    ? "中屋旅館 | 酒茶いくひ — 木之本の歴史ある宿と酒場"
    : "Nakaya Ryokan | Ikuhi Bar — Historic Stay & Sake in Kinomoto";

  const description = isJa
    ? "滋賀県木之本の歴史ある建物を舞台に、日本酒が主役の酒場『酒茶いくひ』と宿『中屋旅館』を営んでいます。北国街道沿いの宿場町で、旅人と町人が交わる場所を目指しています。"
    : "A sake-forward bar and historic ryokan revival in Kinomoto, Shiga. Set on the old Hokkokukaidō post road, we welcome travelers and locals alike.";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: `%s | ${isJa ? "中屋旅館" : "Nakaya Ryokan"}`,
    },
    description,
    openGraph: {
      type: "website",
      locale: isJa ? "ja_JP" : "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: isJa ? "中屋旅館 / 酒茶いくひ" : "Nakaya Ryokan / Ikuhi",
      title,
      description,
      images: [
        {
          url: "/img/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isJa
            ? "中屋旅館 — 木之本の歴史ある宿"
            : "Nakaya Ryokan — Historic Stay in Kinomoto",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/og-image.jpg"],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ja: `${BASE_URL}/ja`,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ja" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
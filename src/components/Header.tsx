"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (next: string) => {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  const isGallery = pathname.includes("/gallery");
  const isRooms = pathname.includes("/rooms");
  const isReservation = pathname.includes("/reservation");
  const isAccess = pathname.includes("/access");
  const isSubPage = isGallery || isRooms || isReservation || isAccess;

const navLinks = [
  { href: isSubPage ? `/${locale}/#bar` : "#bar", label: t("bar") },
  { href: isSubPage ? `/${locale}/#stay` : "#stay", label: t("stay") },
  { href: `/${locale}/rooms`, label: t("rooms"), bold: isRooms },
  { href: `/${locale}/gallery`, label: t("gallery"), bold: isGallery },
  { href: `/${locale}/access`, label: t("access"), bold: isAccess },
  { href: isSubPage ? `/${locale}/#contact` : "#contact", label: t("contact") },
  { href: `/${locale}/reservation`, label: t("reservation"), bold: isReservation, highlight: true },
];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="container-w flex items-center justify-between py-3">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1b4332]" />
          <div className="leading-tight">
            <p className="font-semibold">酒茶いくひ / 中屋旅館</p>
            <p className="text-xs text-neutral-500">Kinomoto Dining &amp; Stay</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
          {navLinks.map((link, i) =>
            (link as { highlight?: boolean }).highlight ? (
              <Link key={i} href={link.href} className="btn btn-primary text-sm px-4 py-2">
                {link.label}
              </Link>
            ) : (
              <Link
                key={i}
                href={link.href}
                className={`nav-link${link.bold ? " font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            id="lang-ja"
            className="btn lang-btn text-sm border border-neutral-300"
            aria-pressed={locale === "ja" ? "true" : "false"}
            onClick={() => switchLocale("ja")}
          >
            JP
          </button>
          <button
            id="lang-en"
            className="btn lang-btn text-sm border border-neutral-300"
            aria-pressed={locale === "en" ? "true" : "false"}
            onClick={() => switchLocale("en")}
          >
            EN
          </button>
          <button
            className="md:hidden p-2 rounded-lg border border-neutral-300"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container-w py-3 grid gap-3 text-sm">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`py-2${link.bold ? " font-semibold" : ""}${(link as { highlight?: boolean }).highlight ? " text-[#1b4332] font-semibold" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
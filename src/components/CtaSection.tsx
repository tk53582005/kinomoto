"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function CtaSection() {
  const t = useTranslations("cta");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setMessage({ text: t("successMsg"), ok: true });
      setEmail("");
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ text: t("errorMsg"), ok: false });
    }
  };

  return (
    <section id="contact" className="py-14 md:py-24 bg-neutral-50">
      <div className="container-w card shadow-soft">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="serif text-xl md:text-2xl font-semibold mb-3">
              {t("title")}
            </h3>
            <p className="text-neutral-700">{t("body")}</p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:border-transparent"
            />
            <button
              type="submit"
              className="btn btn-primary text-sm w-full md:w-auto"
            >
              {t("button")}
            </button>
            {message && (
              <p
                className={`text-sm text-center ${
                  message.ok ? "text-green-600" : "text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

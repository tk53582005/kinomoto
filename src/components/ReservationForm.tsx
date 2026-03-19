"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  room: "",
  notes: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ReservationForm() {
  const t = useTranslations("reservation");
  const locale = useLocale();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json();
      setStatus(data.ok ? "success" : "error");
      if (data.ok) setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:border-transparent";
  const labelClass = "block text-sm font-medium text-neutral-700 mb-1";
  const requiredBadge = (
    <span className="ml-1 text-xs text-[#1b4332] font-semibold">
      {t("required")}
    </span>
  );

  if (status === "success") {
    return (
      <div className="card shadow-soft text-center py-12">
        <p className="text-4xl mb-4">✉️</p>
        <h3 className="serif text-xl font-semibold mb-2">{t("successTitle")}</h3>
        <p className="text-neutral-600 text-sm">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card shadow-soft grid gap-5">
      <h2 className="serif text-xl font-semibold">{t("formTitle")}</h2>

      {status === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <strong>{t("errorTitle")}</strong> — {t("errorBody")}
        </div>
      )}

      <div>
        <label className={labelClass}>
          {t("name")} {requiredBadge}
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={set("name")}
          placeholder={t("namePlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          {t("email")} {requiredBadge}
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder={t("emailPlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          {t("phone")} {requiredBadge}
        </label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={set("phone")}
          placeholder={t("phonePlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            {t("checkIn")} {requiredBadge}
          </label>
          <input
            type="date"
            required
            value={form.checkIn}
            onChange={set("checkIn")}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {t("checkOut")} {requiredBadge}
          </label>
          <input
            type="date"
            required
            value={form.checkOut}
            onChange={set("checkOut")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          {t("guests")} {requiredBadge}
        </label>
        <select
          required
          value={form.guests}
          onChange={set("guests")}
          className={inputClass}
        >
          <option value="">{t("guestsPlaceholder")}</option>
          <option value="1">{t("guests1")}</option>
          <option value="2">{t("guests2")}</option>
          <option value="3">{t("guests3")}</option>
          <option value="4">{t("guests4")}</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>{t("room")}</label>
        <select
          value={form.room}
          onChange={set("room")}
          className={inputClass}
        >
          <option value="">{t("roomPlaceholder")}</option>
          <option value="any">{t("roomAny")}</option>
          <option value="room01">{t("room01")}</option>
          <option value="room02">{t("room02")}</option>
          <option value="room03">{t("room03")}</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>{t("notes")}</label>
        <textarea
          rows={4}
          value={form.notes}
          onChange={set("notes")}
          placeholder={t("notesPlaceholder")}
          className={inputClass}
        />
      </div>

      <p className="text-xs text-neutral-400">{t("policy")}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
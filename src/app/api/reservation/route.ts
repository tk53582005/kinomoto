import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  console.log(process.env.RESEND_API_KEY ? "API KEY OK" : "API KEY NG");
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, checkIn, checkOut, guests, room, notes, locale } = body;

    const roomLabel = room || (locale === "ja" ? "指定なし" : "No preference");
    const subject =
      locale === "ja"
        ? `【予約リクエスト】${name} 様 / ${checkIn} チェックイン`
        : `[Reservation Request] ${name} / Check-in ${checkIn}`;

    const htmlBody = `
      <h2>${locale === "ja" ? "予約リクエストが届きました" : "New Reservation Request"}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "お名前" : "Name"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "メール" : "Email"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "電話番号" : "Phone"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "チェックイン" : "Check-in"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${checkIn}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "チェックアウト" : "Check-out"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${checkOut}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "人数" : "Guests"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${guests}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "希望部屋" : "Preferred Room"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${roomLabel}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">${locale === "ja" ? "備考" : "Notes"}</td><td style="padding:8px;border:1px solid #e5e7eb;">${notes || "-"}</td></tr>
      </table>
    `;

    const { data: d1, error: e1 } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESERVATION_TO_EMAIL || "kazuhiro.terahara@gmail.com",
      replyTo: email,
      subject,
      html: htmlBody,
    });
    console.log("send1:", d1, e1);

    const confirmSubject =
      locale === "ja"
        ? "【中屋旅館】予約リクエストを受け付けました"
        : "[Nakaya Ryokan] Reservation Request Received";

    const confirmHtml =
      locale === "ja"
        ? `<p>${name} 様</p><p>ご予約リクエストありがとうございます。<br>内容を確認の上、2営業日以内にご連絡いたします。</p><p>中屋旅館</p>`
        : `<p>Dear ${name},</p><p>Thank you for your reservation request. We will get back to you within 2 business days.</p><p>Nakaya Ryokan</p>`;

    const { data: d2, error: e2 } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESERVATION_TO_EMAIL || "kazuhiro.terahara@gmail.com",
      subject: confirmSubject,
      html: confirmHtml,
    });
    console.log("send2:", d2, e2);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
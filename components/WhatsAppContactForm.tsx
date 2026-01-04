"use client";

import { useState } from "react";

export default function WhatsAppContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    // BURAYA DOKTORUN WHATSAPP NUMARASINI ULUSLARARASI FORMATTA YAZ
    // Örnek: 0 532 123 45 67 ise: 905321234567
    const whatsappNumber = "905056423217";

    const text = [
      "Merhaba, web siteniz üzerinden iletişim formunu doldurdum.",
      name ? `Adım: ${name}` : "",
      phone ? `Telefon: ${phone}` : "",
      "",
      "Mesajım:",
      message || "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setSubmitting(true);
    window.open(url, "_blank");
    // Biraz gecikmeyle butonu tekrar aç – zorunlu değil ama güvenli
    setTimeout(() => setSubmitting(false), 2000);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs font-medium text-slate-700">
          Adınız Soyadınız
        </label>
        <input
          type="text"
          name="name"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
          placeholder="Ad Soyad"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700">
          Telefon Numaranız
        </label>
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
          placeholder="0 (5xx) xxx xx xx"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700">
          Mesajınız
        </label>
        <textarea
          name="message"
          className="mt-1 h-24 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
          placeholder="Kısaca belirtiniz..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57] disabled:opacity-60"
      >
        WhatsApp Üzerinden Gönder
      </button>
      <p className="text-[11px] text-slate-500">
        Formu gönderdiğinizde, WhatsApp uygulamanız üzerinden önceden doldurulmuş bir mesaj ile
        sohbet penceresi açılacaktır. Mesajı kontrol ettikten sonra gönderebilirsiniz.
      </p>
    </form>
  );
}

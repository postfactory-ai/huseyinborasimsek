"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  type: "image" | "video";
  src: string;
  thumb: string;
  alt?: string;
};

const items: Item[] = [
  {
    type: "image",
    src: "/gallery/klinik-genel-1.jpg",
    thumb: "/gallery/klinik-genel-1.jpg",
    alt: "Klinik genel görünüm – ünit ve hekim çalışma alanı",
  },
  {
    type: "image",
    src: "/gallery/klinik-detay-1.jpg",
    thumb: "/gallery/klinik-detay-1.jpg",
    alt: "Tedavi koltuğu ve aydınlatma detayları",
  },
  {
    type: "image",
    src: "/gallery/ekipman-1.jpg",
    thumb: "/gallery/ekipman-1.jpg",
    alt: "Sterilizasyon ve ekipman bölümü",
  },
  {
    type: "image",
    src: "/gallery/koridor-1.jpg",
    thumb: "/gallery/koridor-1.jpg",
    alt: "Klinik giriş koridoru ve bekleme alanı",
  },
  {
    type: "video",
    src: "/gallery/klinik-tur-1.mp4",
    thumb: "/gallery/klinik-genel-1.jpg",
    alt: "Klinik içinde kısa tanıtım turu",
  },
  {
    type: "video",
    src: "/gallery/ceyhan-hastane-dis-1.mp4",
    thumb: "/gallery/koridor-1.jpg",
    alt: "Ceyhan Devlet Hastanesi çevresinden kısa görüntüler",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            {item.type === "image" ? (
              <Image
                src={item.thumb}
                alt={item.alt || ""}
                width={400}
                height={300}
                className="h-32 w-full object-cover transition group-hover:scale-105"
              />
            ) : (
              <div className="relative h-32 w-full">
                <Image
                  src={item.thumb}
                  alt={item.alt || ""}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/60 px-3 py-2 text-[11px] text-white">
                    Video
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-w-4xl rounded-2xl bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            {items[openIndex].type === "image" ? (
              <Image
                src={items[openIndex].src}
                alt={items[openIndex].alt || ""}
                width={1200}
                height={900}
                className="h-auto w-full rounded-lg"
              />
            ) : (
              <video
                src={items[openIndex].src}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            )}

            <button
              className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white"
              onClick={() => setOpenIndex(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
}

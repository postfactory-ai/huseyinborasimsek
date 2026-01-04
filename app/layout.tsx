import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Ceyhan Diş Hekimi — Dt. Hüseyin Bora Şimşek",
  description:
    "Dt. Hüseyin Bora Şimşek, Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi Sorumlu Hekimi olarak Ceyhan halkına etik, şeffaf ve bilimsel temelli diş hekimliği hizmeti sunmaktadır.",
  keywords: [
    "Ceyhan diş hekimi",
    "Ceyhan dişçi",
    "Dt Hüseyin Bora Şimşek",
    "Ceyhan devlet hastanesi diş hekimi",
    "Ceyhan Ağız ve Diş Sağlığı",
    "Adana diş hekimi",
  ],
  authors: [{ name: "Dt. Hüseyin Bora Şimşek" }],
  creator: "Dt. Hüseyin Bora Şimşek",
  metadataBase: new URL("https://huseyinborasimsek.com.tr"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

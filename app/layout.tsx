import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ceyhan Diş Hekimi | Dt. Hüseyin Bora ŞİMŞEK",
  description:
    "Dt. Hüseyin Bora ŞİMŞEK, Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi Sorumlu Hekimi olarak Ceyhan halkına etik, şeffaf ve bilimsel temelli diş hekimliği hizmeti sunmaktadır.",
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

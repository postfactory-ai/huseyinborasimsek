import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const schemaDentist = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dt. Hüseyin Bora ŞİMŞEK",
    jobTitle: "Diş Hekimi",
    description:
      "Dt. Hüseyin Bora ŞİMŞEK, Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi Sorumlu Hekimi olarak Ceyhan halkına etik, şeffaf ve bilimsel temelli diş hekimliği hizmeti sunmaktadır.",
    url: "https://huseyinborasimsek.com.tr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ceyhan",
      addressRegion: "Adana",
      addressCountry: "TR",
    },
  };

  const journeyItems = [
    {
      year: "2002",
      text: "Diş hekimliği mesleğine ilk adım. Klinik tecrübenin temelleri bu dönemde atılır.",
    },
    {
      year: "2003",
      text: "Askerlik görevinin tamamlanması; kamu disiplininin ve sorumluluk bilincinin mesleğe yansıdığı dönem.",
    },
    {
      year: "2004 – 2013",
      text: "Kahramanmaraş / Narlı’da açılan muayenehanede serbest hekimlik. Bölge halkına hem tedavi hem de ağız ve diş sağlığı bilinci kazandırmaya yönelik çalışmalar.",
    },
    {
      year: "2013 – 2015",
      text: "Pazarcık Devlet Hastanesi’nde kamu hizmeti. Yoğun hasta trafiğinde kamu sağlık sisteminin içinde klinik ve organizasyon sorumlulukları.",
    },
    {
      year: "2015 – Günümüz",
      text: "Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi Sorumlu Hekimi. Ceyhan’da uzun soluklu, güvene dayalı hekim–hasta ilişkileri ve kamuya yönelik sürdürülebilir sağlık hizmeti.",
    },
  ];

  return (
    <>
      <Script
        id="schema-dentist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDentist) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Üst brand bar */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-300 shadow-sm">
                <span className="text-xs font-semibold tracking-[0.22em] text-slate-900">
                  DT
                </span>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Ceyhan Diş Hekimi
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Dt. Hüseyin Bora ŞİMŞEK
                </div>
              </div>
            </div>
            <div className="hidden text-[11px] text-slate-500 md:block">
              Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi
            </div>
          </div>
        </header>

        {/* Ana grid: solda içerik, sağda sticky nav */}
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 lg:grid lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)] lg:gap-10 lg:px-0 lg:pt-12">
          {/* SOL SÜTUN */}
          <div className="space-y-10 lg:space-y-12">
            {/* HERO */}
            <section
              aria-labelledby="hero-title"
              className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
                <div className="space-y-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-700">
                    Ceyhan’a gönül vermiş diş hekimi
                  </p>
                  <h1
                    id="hero-title"
                    className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
                  >
                    Ceyhan Diş Hekimi{" "}
                    <span className="mt-1 block bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-700 bg-clip-text text-transparent">
                      Dt. Hüseyin Bora ŞİMŞEK
                    </span>
                  </h1>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
                    2002 yılından bu yana diş hekimliği mesleğini{" "}
                    <span className="font-medium text-slate-900">
                      etik, şeffaf ve bilimsel temellere
                    </span>{" "}
                    dayalı olarak sürdüren Dt. Hüseyin Bora ŞİMŞEK, uzun
                    yıllardır Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek
                    Hizmet Birimi Sorumlu Hekimi olarak Ceyhan halkına hizmet
                    vermektedir.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-800">
                      Estetik Diş Hekimliği
                    </span>
                    <span className="rounded-full border border-cyan-200 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800">
                      İmplant Üstü Protezler
                    </span>
                    <span className="rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-800">
                      Kamu Sağlık Hizmeti
                    </span>
                  </div>
                </div>

                {/* Doktor görseli – klinik / ünit hissi */}
                <div className="relative">
                  <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-[1.7rem] border border-sky-100 bg-white shadow-md sm:h-72 sm:w-72">
                    {/* Hafif klinik/a.i glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
                    <Image
                      src="/images/huseyin-bora-simsek.jpg"
                      alt="Dt. Hüseyin Bora ŞİMŞEK"
                      fill
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </div>
                  <p className="mt-3 text-center text-[11px] text-slate-500">
                    Klinik ortamda mesleki portre — Ceyhan Devlet Hastanesi
                    Ağız ve Diş Sağlığı Ek Hizmet Birimi
                  </p>
                </div>
              </div>
            </section>

            {/* CEYHAN’A GÖNÜL VERMİŞ HEKİM */}
            <section
              aria-labelledby="ceyhan-title"
              className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-7"
            >
              <h2
                id="ceyhan-title"
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-900/80"
              >
                Ceyhan’a gönül vermiş hekim
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-emerald-950">
                “Ceyhan, yalnızca görev yaptığım bir şehir değil; mesleki
                yolculuğumun en kıymetli durağıdır. Yıllardır burada, her
                yaştan hastamın sağlığına dokunmanın sorumluluğunu ve onurunu
                taşıyorum. Hastalarımı yalnızca klinik bir vaka olarak değil;
                hikâyesi, hayatı ve ailesi olan bireyler olarak görüyorum.
                Amacım; güven veren, şeffaf, bilimsel ve insana yakışır bir
                sağlık hizmetini Ceyhan’da kalıcı kılmaktır.”
              </p>
              <p className="text-[11px] font-medium text-emerald-900">
                — Dt. Hüseyin Bora ŞİMŞEK
              </p>
            </section>

            {/* HAKKINDA */}
            <section id="about" aria-labelledby="about-title">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
                <div className="space-y-4">
                  <h2
                    id="about-title"
                    className="text-xl font-semibold tracking-tight text-slate-900"
                  >
                    Hakkında
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Dt. Hüseyin Bora ŞİMŞEK, diş hekimliği meslek hayatına{" "}
                    <span className="font-medium text-slate-900">
                      2002 yılında
                    </span>{" "}
                    başlamış olup; o tarihten bu yana klinik deneyimini etik
                    ilkeler, bilimsel güncellik ve hasta odaklı yaklaşımla
                    birleştirmektedir.{" "}
                    <span className="font-medium text-slate-900">
                      2003 yılında askerlik görevini tamamlamasının ardından
                    </span>{" "}
                    <span className="font-medium text-slate-900">
                      2004 yılında Kahramanmaraş / Narlı’da açtığı
                      muayenehanede
                    </span>{" "}
                    bölge halkına diş hekimliği hizmeti sunmuştur.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    <span className="font-medium text-slate-900">
                      2013 yılında Pazarcık Devlet Hastanesi’nde kamu
                      hizmetine geçerek
                    </span>{" "}
                    devlet sağlık sisteminde görev almaya başlayan Dt. ŞİMŞEK,{" "}
                    <span className="font-medium text-slate-900">
                      2015 yılında kurum içi tayin ile Ceyhan Devlet
                      Hastanesi’ne
                    </span>{" "}
                    atanmış ve o günden bu yana{" "}
                    <span className="font-semibold text-slate-900">
                      Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet
                      Birimi Sorumlu Hekimi
                    </span>{" "}
                    olarak görevini sürdürmektedir.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Dt. ŞİMŞEK için sağlık hizmeti yalnızca bir meslek değil,{" "}
                    <span className="font-medium text-emerald-800">
                      Ceyhan halkına karşı bir vefa ve sorumluluk
                    </span>{" "}
                    anlamı taşır. Her hastaya; anlaşılır bilgilendirme, şeffaf
                    tedavi planı ve güvene dayalı bir iletişimle yaklaşır.
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Mesleki Özette Ana Başlıklar
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li>2002’den bu yana aktif mesleki deneyim</li>
                    <li>2004–2013: Kahramanmaraş / Narlı’da serbest hekimlik</li>
                    <li>2013–2015: Pazarcık Devlet Hastanesi’nde kamu hizmeti</li>
                    <li>
                      2015–günümüz: Ceyhan Devlet Hastanesi ADSM Ek Hizmet
                      Birimi Sorumlu Hekimi
                    </li>
                  </ul>
                  <p className="pt-1 text-[11px] text-slate-500">
                    Eğitim, uzmanlık ve sertifikalar daha sonra detaylandırılabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* MESLEKİ YOLCULUK */}
            <section id="journey" aria-labelledby="journey-title">
              <h2
                id="journey-title"
                className="mb-6 text-xl font-semibold tracking-tight text-slate-900"
              >
                Mesleki Yolculuk
              </h2>
              <div className="space-y-6 border-l border-slate-200 pl-5 text-sm text-slate-700">
                {journeyItems.map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[0.75rem] top-1 h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                      {item.year}
                    </div>
                    <p className="mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UZMANLIK ALANLARI */}
            <section id="services" aria-labelledby="services-title">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                <div>
                  <h2
                    id="services-title"
                    className="mb-4 text-xl font-semibold tracking-tight text-slate-900"
                  >
                    Klinik İlgi Alanları
                  </h2>
                  <div className="grid gap-4 text-xs text-slate-800 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Estetik
                      </div>
                      <ul className="space-y-1">
                        <li>Estetik lamina veneer uygulamaları</li>
                        <li>Bonding ve diş beyazlatma tedavileri</li>
                        <li>Dijital gülüş tasarımı</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                        İmplant Üstü Protezler
                      </div>
                      <ul className="space-y-1">
                        <li>İmplant üstü sabit ve hareketli protezler</li>
                        <li>CAD/CAM destekli restorasyonlar</li>
                        <li>Komplike vakalarda planlama</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Fonksiyon
                      </div>
                      <ul className="space-y-1">
                        <li>Çene eklemi (TME) problemlerine protetik yaklaşım</li>
                        <li>Oklüzyon ve ısırma yüksekliği düzenlemeleri</li>
                        <li>Uzun ömürlü protez tasarımı</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                        İletişim
                      </div>
                      <ul className="space-y-1">
                        <li>Korku ve anksiyetesi yüksek hastalarla iletişim</li>
                        <li>Şeffaf tedavi planlama ve bilgilendirme</li>
                        <li>Uzun dönem kontrol ve takip süreçleri</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Ceyhan Odaklı Hekimlik Anlayışı
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-700">
                    Dt. ŞİMŞEK, Ceyhan’da yürüttüğü kamu hizmetini; yalnızca
                    görev tanımıyla sınırlı görmeyip, bölge halkına karşı bir{" "}
                    <span className="font-medium text-emerald-800">
                      vefa ve uzun vadeli sorumluluk
                    </span>{" "}
                    olarak ele almaktadır. Hastalarıyla kurduğu ilişki; güven,
                    süreklilik ve karşılıklı saygı temelinde şekillenir.
                  </p>
                  <p className="text-xs leading-relaxed text-slate-700">
                    Bu yaklaşımın doğal sonucu olarak, Ceyhan ve çevresinde pek
                    çok aile için yalnızca bir diş hekimi değil,{" "}
                    <span className="font-medium text-emerald-800">
                      sağlık yolculuklarında yanlarında duran bir hekim dost
                    </span>{" "}
                    olarak anılmaktadır.
                  </p>
                </div>
              </div>
            </section>

            {/* İLETİŞİM */}
            <section id="contact" aria-labelledby="contact-title">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div>
                  <h2
                    id="contact-title"
                    className="mb-4 text-xl font-semibold tracking-tight text-slate-900"
                  >
                    İletişim
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-700">
                    Randevu ve danışmak istediğiniz tüm konular için aşağıdaki
                    iletişim kanallarını kullanabilirsiniz. Mesajlarınıza mümkün
                    olan en kısa sürede dönüş yapılmaktadır.
                  </p>
                  <div className="space-y-2 text-sm text-slate-800">
                    <div>
                      <span className="font-semibold text-slate-900">
                        Adres:
                      </span>{" "}
                      Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet
                      Birimi, Ceyhan / Adana
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">
                        Telefon:
                      </span>{" "}
                      <a
                        href="tel:+90 (505)642 3217"
                        className="text-sky-700 hover:underline"
                      >
                        0 (505) 642 3217
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">
                        E-posta:
                      </span>{" "}
                      <a
                        href="mailto:info@huseyinborasimsek.com.tr"
                        className="text-sky-700 hover:underline"
                      >
                        info@huseyinborasimsek.com.tr
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-slate-500">
                    Bu site kişisel portföy niteliğindedir; resmi randevu ve
                    başvurular için Ceyhan Devlet Hastanesi’nin güncel prosedür
                    ve iletişim kanalları geçerlidir.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <form className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
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
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
                        placeholder="0 (5xx) xxx xx xx"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700">
                        Mesajınız
                      </label>
                      <textarea
                        className="mt-1 h-24 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
                        placeholder="Kısaca belirtiniz..."
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-sky-600 hover:to-cyan-500"
                    >
                      Mesaj Gönder (Örnek Form)
                    </button>
                    <p className="text-[11px] text-slate-500">
                      Bu form örnek amaçlıdır. İstenirse daha sonra e-posta veya
                      randevu sistemine entegre edilebilir.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-200 pt-6 text-[11px] text-slate-500">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                <div>
                  © {new Date().getFullYear()} Dt. Hüseyin Bora ŞİMŞEK. Tüm
                  hakları saklıdır.
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-slate-400">
                    huseyinborasimsek.com.tr
                  </span>
                </div>
              </div>
            </footer>
          </div>

          {/* SAĞ SÜTUN: STICKY NAVBAR + HIZLI İLETİŞİM */}
          <aside className="mt-8 hidden w-64 shrink-0 lg:mt-0 lg:block">
            <div className="sticky top-24 space-y-4">
              {/* NAV KARTI */}
              <nav className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-sm">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Sayfa Haritası
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      href="#about"
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[11px] hover:bg-slate-50 hover:text-sky-700"
                    >
                      <span>Hakkında</span>
                      <span className="text-slate-400">01</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#journey"
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[11px] hover:bg-slate-50 hover:text-sky-700"
                    >
                      <span>Mesleki Yolculuk</span>
                      <span className="text-slate-400">02</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[11px] hover:bg-slate-50 hover:text-sky-700"
                    >
                      <span>Uzmanlık Alanları</span>
                      <span className="text-slate-400">03</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[11px] hover:bg-slate-50 hover:text-sky-700"
                    >
                      <span>İletişim</span>
                      <span className="text-slate-400">04</span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* KISA İLETİŞİM ÖZETİ */}
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 text-[11px] text-slate-800 shadow-sm">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-700">
                  Randevu & İletişim
                </div>
                <p className="mb-2 text-slate-700">
                  Ceyhan Devlet Hastanesi Ağız ve Diş Sağlığı Ek Hizmet Birimi
                  üzerinden randevu ve resmi işlemler yürütülmektedir.
                </p>
                <p className="text-slate-800">
                  <span className="font-semibold text-slate-900">
                    E-posta:
                  </span>{" "}
                  info@huseyinborasimsek.com.tr
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

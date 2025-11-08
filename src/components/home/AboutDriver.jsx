import React from 'react';
import { useTranslation } from "react-i18next";

const AboutDriver = () => {
    const { t } = useTranslation();
  return (
    // Bagian Selamat Datang - Background putih, menggunakan padding konsisten
    <section className="w-full px-6 md:px-11 lg:px-14 xl:px-16 py-24 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
        
        {/* Kolom Kiri: Teks & Narasi (Menggunakan Primary/Secondary) */}
        <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
              <p className="uppercase tracking-widest text-md md:text-lg mb-2 font-medium text-secondary">
                {t("aboutHome.welcome")}
              </p>

              <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                {t("aboutHome.title.main")}{" "}
                <span className="text-secondary">{t("aboutHome.title.highlight")}</span>
              </h1>

              <p className="text-gray-700 text-md md:text-lg mb-6 leading-relaxed">
                {t("aboutHome.desc1")}
              </p>

              <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-8">
                {t("aboutHome.desc2")}
              </p>

              <a
                href="/about"
                className="inline-block bg-secondary hover:bg-primary text-white text-base font-bold md:py-3 md:px-8 py-2 px-6 rounded-full transition duration-300 transform hover:scale-[1.05] shadow-lg"
              >
                {t("aboutHome.button")}
              </a>
        </div>


        {/* Kolom Kanan: Kolase Gambar (Struktur Asli + Peningkatan Visual) */}
      <div
  className="lg:w-1/2 relative flex justify-center lg:justify-end min-h-[500px]"
  data-aos="fade-left"
  data-aos-duration="1000"
  data-aos-delay="300"
>
  {/* Container utama */}
  <div className="relative w-full max-w-lg flex flex-col gap-4 lg:block">
    
    {/* Gambar 1: BESAR */}
    <div
      className="rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.01]
      lg:absolute lg:top-0 lg:left-0 lg:w-full z-10"
      style={{ height: '60%' }}
    >
      <img
        src="/kecak.webp"
        alt="Uluwatu Kecak Dance"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Gambar 2: KECIL BAWAH KIRI */}
    <div
      className="rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.03]
      w-full lg:w-1/2 lg:absolute lg:bottom-4 lg:left-4 z-30"
    >
      <img
        src="/aboutdua.webp"
        alt="Balinese Gate of Heaven"
        className="w-full h-[280px] object-cover"
      />
    </div>

    {/* Gambar 3: TINGGI MEMANJANG */}
    <div
      className="rounded-2xl overflow-hidden transform transition duration-500 hover:scale-[1.03]
      w-full lg:w-[45%] lg:absolute lg:bottom-[40px] lg:right-[-4px] z-20"
    >
      <img
        src="/aboutsatu.webp"
        alt="Ulun Danu Beratan Temple"
        className="w-full h-[300px] object-cover"
      />
    </div>

    {/* Dekorasi */}
    <div className="hidden lg:block absolute top-1/2 left-0 w-20 h-20 rounded-full bg-primary/10 z-0"></div>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default AboutDriver;
import React from 'react';
import { useTranslation } from "react-i18next";



const BaliTourHome = () => {
  const { t } = useTranslation();
  const tourPackages = t("tourPackages", { returnObjects: true });



  return (
    // Menggunakan padding vertikal yang lebih besar
    <section className="py-24 bg-white"> 
      {/* Container dihilangkan agar card bisa full-width di layar besar, namun tetap ada padding horizontal di header */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Disesuaikan dengan Primary/Secondary */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-md md:text-lg font-medium text-secondary uppercase tracking-widest">
            MOYO BALI DRIVER
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 leading-tight">
            {t("tourhome.title.main")}{" "}
            <span className="text-secondary">{t("tourhome.title.highlight")}</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-4xl mx-auto text-md md:text-lg">
            {t("tourhome.desc")}
          </p>
        </div>
      </div>

      {/* Cards Section - Grid 4 Kolom, Full-Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"> 
        {tourPackages.map((pkg, index) => (
          <div
            key={index}
            // Tinggi sedikit dikurangi agar tidak terlalu dominan, rounded dihapus untuk kesan full-grid
            className="relative h-[500px] overflow-hidden group shadow-lg" 
          >
            {/* Background Image dengan Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" // Efek zoom lebih kuat & lama
              style={{ backgroundImage: `url(${pkg.image})` }}
            ></div>
            
            {/* Semi-transparent overlay, lebih gelap di bawah & saat hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500
              group-hover:from-black/90 group-hover:via-black/50" // Overlay diubah menjadi warna primary (biru gelap)
            ></div>

            {/* Konten teks dan tombol di bagian bawah */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-2xl font-extrabold mb-3 leading-snug">
                {pkg.title}
              </h3>
              <p className="text-md opacity-90 mb-6"> 
                {pkg.description}
              </p>
              <a
                href={pkg.link}
                // Tombol menggunakan bg-secondary, hover ke primary, lebih tebal, dan ada efek hover scale
                className="inline-block bg-secondary hover:bg-primary text-white text-base font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-[1.05]" 
              >
                {t("tourhome.viewDetails")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BaliTourHome;
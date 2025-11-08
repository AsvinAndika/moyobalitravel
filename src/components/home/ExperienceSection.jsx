import React from 'react';
import { FaGlobe, FaUsers, FaStar } from 'react-icons/fa'; // Import ikon untuk visualisasi statistik
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  // Path untuk tag <img>
  // Pastikan gambar ini ada di folder public Anda
  const travelerImagePath = "/aboutdua.webp"; 

  const { t } = useTranslation();
  const stats = t("experienceStats", { returnObjects: true });
  const section = t("experienceSection", { returnObjects: true });
  const icons = [FaGlobe, FaUsers, FaStar]; // icon tetap di sini

  return (
    <section className="py-20 bg-gray-50"> {/* Menggunakan bg-gray-50 untuk sedikit kontras dari putih */}
      <div className="container mx-auto max-w-screen-xl px-6 md:px-11 lg:px-14 xl:px-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Kolom Kiri: Teks dan Statistik */}
          <div className="lg:w-1/2 w-full lg:pr-8 mb-10 lg:mb-0">
            
            {/* Header Teks */}
            <p className="uppercase tracking-widest text-md md:text-lg mb-2 font-medium text-secondary"> 
              {/* Menggunakan text-secondary (Oranye) dan font yang lebih standar */}
              {section.subtitle}
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-primary leading-tight mb-6"> 
              {/* Menggunakan text-primary (Biru Gelap) */}
               {section.titleBefore}{" "} <span className='text-secondary'>{section.titleHighlight}</span>
              
            </h2>
            
            {/* Deskripsi */}
            <p className="text-gray-700 mb-10 text-md md:text-lg max-w-lg leading-relaxed">
             {section.description}
            </p>

            {/* Statistik/Pencapaian - Ditingkatkan */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
  {stats.map((stat, index) => {
    const IconComponent = icons[index];
    return (
      <div 
        key={index} 
        className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
      >
        <div className="p-3 rounded-full bg-secondary/10 text-secondary">
          <IconComponent size={20} />
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">
            {stat.count}
          </div>
          <p className="text-sm text-gray-600">
            {stat.label}
          </p>
        </div>
      </div>
    );
  })}
</div>

          </div>
          
          {/* Kolom Kanan: Gambar (Ditingkatkan) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img 
              src={travelerImagePath} 
              alt="Happy Traveler" 
              className="w-full h-auto max-w-lg lg:max-w-full object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]" // Efek visual yang lebih modern
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
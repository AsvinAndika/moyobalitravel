import React from "react";
import ValueHome from "../home/ValueHome";
import { useTranslation } from "react-i18next";

function AboutUsSection() {
    const { t } = useTranslation();

     const drivers = [
    {
      name: t("drivers.list.0.name"),
      img: "/driver.jpg",
      desc: t("drivers.list.0.desc"),
    },
    {
      name: t("drivers.list.1.name"),
      img: "/driver.jpg",
      desc: t("drivers.list.1.desc"),
    },
    {
      name: t("drivers.list.2.name"),
      img: "/driver.jpg",
      desc: t("drivers.list.2.desc"),
    },
  ];
  return (
    <>
      {/* Bagian Utama About */}
      <section className="pb-20 pt-7">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 grid md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Teks */}
          <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-10 leading-snug">
             {t("driver_section.title")}<span className="text-secondary"> Lokal Bali</span>
          </h2>


            <p className="text-gray-600 text-md md:text-lg mb-8">
              {t("driver_section.description")}
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105"
            >
              {t("driver_section.button")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Statistik */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              <div className="bg-white shadow-lg rounded-xl py-6 text-center">
                <h3 className="text-2xl font-extrabold text-teal-600">10+</h3>
                <p className="text-gray-600 text-sm font-medium">{t("driver_section.stats.experience")}</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl py-6 text-center">
                <h3 className="text-2xl font-extrabold text-teal-600">24/7</h3>
                <p className="text-gray-600 text-sm font-medium">{t("driver_section.stats.service")}</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl py-6 text-center">
                <h3 className="text-2xl font-extrabold text-teal-600">500+</h3>
                <p className="text-gray-600 text-sm font-medium">{t("driver_section.stats.clients")}</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl py-6 text-center">
                <h3 className="text-2xl font-extrabold text-teal-600">99%</h3>
                <p className="text-gray-600 text-sm font-medium">{t("driver_section.stats.satisfaction")}</p>
              </div>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="relative">
            <img
              src="/ulundanu.jpg" // langsung dari public
              alt="Ulun Danu"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

 {/* About Story - Refined Layout */}
{/* About Story - Refined Layout with Two Images */}
<section className="py-20 bg-gradient-to-br from-white to-gray-50" id="about-story">
  <div className="max-w-7xl mx-auto px-6 lg:px-14">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Konten Kiri: Teks Cerita & Visi Misi (Sama seperti sebelumnya) */}
      <div className="lg:pr-10 order-2 lg:order-1"> 
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-10 leading-snug">
           {t("about_story.title")} <span className="text-secondary">{t("about_story.highlight")}</span> 
        </h2>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
         {t("about_story.description_1")}
        </p>

        <h3 className="text-2xl font-bold text-gray-600 mb-4">{t("about_story.vision_title")}</h3>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
           {t("about_story.description_2")}
        </p>

        {/* Keunggulan (Chips) */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 text-md font-medium rounded-full shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {t("about_story.chips.safe")}
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 text-md font-medium rounded-full shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            {t("about_story.chips.local")}
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 text-md font-medium rounded-full shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             {t("about_story.chips.flexible")}
          </span>
        </div>
      </div>

   {/* Konten Kanan: Dua Gambar Sebelah */}
{/* Konten Kanan: Dua Gambar Sebelah */}
<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 h-full">
  {/* Gambar 1 */}
  <div className="rounded-3xl overflow-hidden shadow-xl">
    <img
      src="/lempuyangdua.jpg"
      alt="Pura Lempuyang Bali"
      className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>

  {/* Gambar 2 */}
  <div className="rounded-3xl overflow-hidden shadow-xl">
    <img
      src="/ubud.jpg"
      alt="Ubud Rice Fields"
      className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>

  {/* Gambar 3 */}
  <div className="rounded-3xl overflow-hidden shadow-xl">
    <img
      src="/ulundanu.jpg"
      alt="Danau Ulun Danu"
      className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>

  {/* Gambar 4 */}
  <div className="rounded-3xl overflow-hidden shadow-xl">
    <img
      src="/activity.jpg"
      alt="Layanan Moyo Bali"
      className="w-full h-[300px] object-cover transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>
</div>




    </div>
  </div>
</section>

      {/* Value Section */}
      <ValueHome/>
        <section className="py-16 bg-teal-600 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("cta.title")}</h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto mb-8">
          {t("cta.description")}
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
           {t("cta.button")}
        </a>
      </section>

      {/* Services Section */}
 <section className="py-16 bg-white" id="adventure">
  <div className="max-w-7xl mx-auto px-6 lg:px-14">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Konten Kiri: Judul, Deskripsi, dan Fitur Layanan */}
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-10 leading-snug">
           {t("adventure.title.part1")}
         <span className="text-secondary"> {t("adventure.title.part2")}</span> 
        </h2>
        <p className="text-gray-700 text-md md:text-lg  mb-8 max-w-lg">
          {/* Ganti dengan deskripsi pengantar yang relevan, contohnya: */}
           {t("adventure.description")}
        </p>

        {/* Daftar Fitur Layanan */}
        <div className="space-y-6">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-green-600 flex-shrink-0 mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <div>
              <h3 className="text-xl font-bold text-gray-700">{t("adventure.features.safe.title")}</h3>
              <p className="text-gray-600 pr-10">{t("adventure.features.safe.desc")}</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-8 h-8 text-green-600 flex-shrink-0 mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <div>
              <h3 className="text-xl font-bold text-gray-700">{t("adventure.features.affordable.title")}</h3>
              <p className="text-gray-600 pr-10">{t("adventure.features.affordable.desc")}</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-8 h-8 text-green-600 flex-shrink-0 mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <div>
              <h3 className="text-xl font-bold text-gray-700">{t("adventure.features.comfort.title")}</h3>
              <p className="text-gray-600 pr-10">{t("adventure.features.comfort.desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Konten Kanan: Gambar Utama dan Video (Opsional) */}
      <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="/lempuyangdua.jpg" // Ganti dengan path gambar utama Anda
          alt="Adventure Landscape" 
          className="w-full h-auto object-cover max-h-[600px] lg:max-h-none"
        />
          

      </div>

    </div>
  </div>
</section>


{/* Local Travel Guides Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-14">
    <p className="uppercase text-center tracking-widest text-md md:text-lg mb-2 font-semibold text-secondary">
            {t("drivers.subtitle")}
          </p>
    <h2 className="text-3xl md:text-5xl text-center font-extrabold text-primary mb-10 leading-snug">
     {t("drivers.title.part1")}{" "} <span className="text-secondary">{t("drivers.title.part2")}</span> 
    </h2>
  <div className="grid md:grid-cols-3 gap-8 mt-10">
  {drivers.map((driver, index) => (
    <div
      key={index}
      className="group bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Foto Driver */}
      <div className="relative w-28 h-28 mx-auto mb-5">
        <img
          src={driver.img}
          alt={driver.name}
          className="w-full h-full object-cover rounded-full border-4 border-secondary shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Nama */}
      <h3 className="text-xl font-semibold text-primary mb-1">{driver.name}</h3>

      {/* Garis kecil hiasan */}
      <div className="w-12 h-1 bg-secondary mx-auto mb-3 rounded-full"></div>

      {/* Deskripsi */}
      <p className="text-gray-600 text-sm leading-relaxed">{driver.desc}</p>
    </div>
  ))}
</div>

  </div>
</section>

      {/* CTA Section */}
    
    </>
  );
}

export default AboutUsSection;

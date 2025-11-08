import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import FullFooterSection from "../home/FullFooterSection";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function TourDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  // Ambil semua tour dari file JSON sesuai bahasa aktif
  const tours = t("tours", { returnObjects: true });

  // Cari tour sesuai ID di URL
  const tour = tours.find((item) => item.id === parseInt(id));

  // Jika tidak ditemukan
  if (!tour) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>{t("tour_not_found")}</p>
        <Link
          to="/tour-package"
          className="mt-4 inline-block bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700"
        >
          {t("back")}
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
    <section className="py-16 mt-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Grid Utama: Kiri Lebih Lebar (Info Tour), Kanan (Form & Kontak) */}
    <div className="grid md:grid-cols-3 gap-10 mb-12">
      
      {/* Kiri (2/3): Gambar & Info Tour */}
      <div className="md:col-span-2 flex flex-col space-y-8">
        
        {/* Gambar Utama */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-96 object-cover object-center transition-transform duration-500 hover:scale-[1.02] transform"
          />
        </div>

        {/* Header & Deskripsi Tour */}
        <div className="pt-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {tour.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {tour.description}
          </p>

          {/* Durasi & Highlight */}
          <div className="flex flex-wrap items-center gap-6 mb-8 border-b pb-4 border-gray-100">
            <div className="flex items-center text-lg text-amber-600 font-semibold gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2V7h2v6z" />
              </svg>
              <span>{tour.duration}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Batasi hanya 3 highlight utama */}
              {tour.highlight.map((item, i) => (
                <span
                  key={i}
                  className="text-sm bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full font-medium transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Harga */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t("price_title")}
            </h2>
            <p className="text-2xl font-extrabold text-teal-600 mb-1">
              {tour.price}
            </p>
            {tour.note && (
              <p className="text-sm text-gray-600 italic">*{tour.note}</p>
            )}
          </div>
           <div className="space-y-10 pt-10">
      
      {/* Program */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
          {t("program_title")}
        </h2>
        <ul className="list-inside space-y-4 text-gray-700">
          {tour.program.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xl font-bold text-teal-600">{index + 1}.</span>
                <p className="flex-1">{step}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Included */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-100">
          {t("included_title")}
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
          {tour.included.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
                {/* Ikon centang sederhana */}
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
  {tour.gallery.map((img, index) => (
    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
      <img
        src={img}
        alt={`${tour.highlight[index]}`}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Kanan (1/3): Form Pemesanan & Kontak */}
     <div className="md:col-span-1 bg-gray/30 rounded-2xl p-5 sticky top-24 self-start border border-gray-200">
        
        {/* Form Pemesanan */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3 border-gray-200">
            {t("booking_form_title")}
          </h2>
          <form className="space-y-4">
            {['form_name', 'form_email', 'form_phone'].map((key) => (
              <input
                key={key}
                type={key === 'form_email' ? 'email' : key === 'form_phone' ? 'tel' : 'text'}
                placeholder={t(key)}
                className="w-full px-4 py-3 rounded-xl border border-gray-30 bg-white text-gray-900 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            ))}
            <textarea
              placeholder={t("form_message")}
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white text-lg font-semibold px-5 py-3 rounded-xl shadow-lg shadow-teal-500/50 hover:bg-teal-700 transition duration-300 transform hover:scale-[1.01]"
            >
              {t("book_now")}
            </button>
          </form>
        </div>

        {/* Kontak tambahan dengan ikon */}
        <div className="mt-6 border-t border-gray-300 pt-6 space-y-4 text-gray-700">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {t("contact_info")}
          </h3>

          <div className="flex flex-col space-y-3">
            <a href="https://wa.me/6281234567890" className="flex items-center gap-3 hover:text-teal-600 transition group">
              <FaWhatsapp className="text-teal-600 w-5 h-5 group-hover:scale-110 transition" />
              <span className="font-medium">+62 812-3456-7890</span>
            </a>

            <a href="mailto:info@tourbali.com" className="flex items-center gap-3 hover:text-teal-600 transition group">
              <FaEnvelope className="text-teal-600 w-5 h-5 group-hover:scale-110 transition" />
              <span className="font-medium">info@tourbali.com</span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-3">
            {[FaInstagram, FaFacebook, FaTiktok].map((Icon, index) => (
              <a 
                key={index}
                href={`https://${Icon.name.toLowerCase()}.com/youraccount`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-teal-600 transition transform hover:scale-110"
                aria-label={Icon.name}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Konten Bawah: Program & Included (Desain Lebih Bersih) */}
    
   
  </div>
</section>

      <FullFooterSection />
    </>
  );
}

export default TourDetail;

import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// --- KOMPONEN CTA (Diperbarui dengan warna baru) ---
const CTASection = () => {
  const CtaBackgroundImage = "url('/lempuyang.jpg')"; 
  const { t } = useTranslation();
  const cta = t("ctaSection", { returnObjects: true });
  return (
    <div 
      className="relative py-24 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: CtaBackgroundImage }}
    > 
      {/* Overlay Gelap dengan Primary Baru (#642c1b) */}
      <div className="absolute inset-0 bg-black opacity-30"></div> 
      
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
         {cta.title}
        </h2>
        <p className="text-md md:text-lg mb-10 max-w-3xl mx-auto opacity-90">
           {cta.description}
        </p>
        <a 
          href="https://wa.me/628123456789" 
          target="_blank"
          rel="noopener noreferrer"
          // Tombol dengan Secondary Baru (#208479) dan hover ke Primary
          className="inline-flex items-center justify-center md:px-12 md:py-4 px-8 py-3 border border-transparent text-md md:text-lg font-bold rounded-full text-white bg-secondary hover:bg-primary transition duration-300 shadow-xl transform hover:scale-[1.05]"
        >
           {cta.buttonText}
        </a>
      </div>
    </div>
  );
};

// --- KOMPONEN FOOTER MINIMALIS (Latar Belakang Krem) ---
const MinimalistFooter = () => {
    // Data Link dan Kontak
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true });
    const quickLinks = [
        { key: "navbar.home", path: "/" },
        { key: "navbar.airport_transfer", path: "/airport-transfer" },
        { key: "navbar.about", path: "/about" },
        { key: "navbar.tour_packages", path: "/tour-package" },
        { key: "navbar.contact", path: "/contact" },
    ];




    return (
        // ⭐ PERUBAHAN UTAMA: Latar Belakang Krem Hangat
        <footer className="bg-stone-200 text-gray-900 px-6 md:px-11 lg:px-14 xl:px-16 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto max-w-screen-xl">
                
                {/* Bagian Atas: Link dan Info Kontak */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-8 pb-12">
                    
                    {/* Kolom 1: Logo dan Deskripsi Singkat */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Link to="/">
                                <img
                                    src={"/logo.png"} 
                                    alt="Kuta Bali Driver Logo"
                                    // Teks brand ditambahkan di bawah gambar logo
                                    className="h-14 md:h-12 transition-all duration-300"
                                />
                                <span className="text-xl font-extrabold text-primary mt-1 block">MOYO BALI DRIVER</span>
                            </Link>
                        </div>
                        <p className="text-md text-gray-800 mb-4">
                            {t("aboutSubtitle")}
                        </p>
                        <div className="flex space-x-4">
                            {/* Ikon sosial menggunakan hover:text-secondary baru */}
                            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300"><FaFacebook size={20} /></a>
                        </div>
                    </div>

                    {/* Kolom 2: Link Cepat */}
                    <div>
                        <h4 className="text-base font-bold mb-5 text-primary uppercase tracking-wider">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-3 text-md">
                            {quickLinks.map((link, index) => (
                                <li key={index}><a href={link.href} className="text-gray-800 hover:text-secondary transition duration-200">{t(link.key)}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 3: Layanan Kami */}
                    <div>
                        <h4 className="text-base font-bold mb-5 text-primary uppercase tracking-wider">{t("footer.ourServices")}</h4>
                        <ul className="space-y-3 text-md">
                            {services.map((service, index) => (
                                <li key={index}><a href={service.href} className="text-gray-800 hover:text-secondary transition duration-200">{service.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 4: Hubungi Kami */}
                    <div>
                        <h4 className="text-base font-bold mb-5 text-primary uppercase tracking-wider"> {t("footer.contactUs")}</h4>
                        <address className="space-y-3 text-md not-italic">
                            <div className="flex items-start text-gray-800">
                                {/* Ikon menggunakan text-secondary baru */}
                                <FaPhone className="mr-3 mt-1 text-secondary flex-shrink-0" />
                                <a href="tel:+628123456789" className="hover:text-secondary">+62 812-3456-7890</a>
                            </div>
                            <div className="flex items-start text-gray-800">
                                {/* Ikon menggunakan text-secondary baru */}
                                <FaEnvelope className="mr-3 mt-1 text-secondary flex-shrink-0" />
                                <a href="mailto:info@kutabalidriver.com" className="hover:text-secondary">info@kutabalidriver.com</a>
                            </div>
                            <div className="flex items-start text-gray-800">
                                {/* Ikon menggunakan text-secondary baru */}
                                <FaMapMarkerAlt className="mr-3 mt-1 text-secondary flex-shrink-0" />
                                <span>
                                    Jl. Raya Kuta No.10, Kuta Sel., Badung, Bali 80361, Indonesia
                                </span>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bagian Bawah: Copyright dan Info Tambahan */}
                <div className="border-t border-gray-300 pt-8 text-center text-md text-gray-800">
                    © 2025 Moyo Bali Travel. All rights reserved. Powered By bombora.studio
                </div>
            </div>
        </footer>
    );
};

// Gabungkan keduanya
const FullFooterSection = () => (
  <>
    <CTASection/>
    <MinimalistFooter />
  </>
);

export default FullFooterSection;
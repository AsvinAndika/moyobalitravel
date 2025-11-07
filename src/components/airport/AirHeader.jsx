import BookingModal from '../BookingModal';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


function AirHeader() {

        const prices = [
        { pickup: "Airport", destination: "Nusa Dua / Uluwatu", price: "US$ 18", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Kuta / Legian", price: "US$ 15", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Seminyak / Canggu", price: "US$ 16", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Denpasar / Sanur", price: "US$ 15", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Candidasa", price: "US$ 30", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Ubud Area", price: "US$ 25", min: "Min 2 Person" },
        { pickup: "Airport", destination: "Amed / Lovina", price: "US$ 40", min: "Min 2 Person" },
    ];
    

        const [isModalOpen, setIsModalOpen] = useState(false);
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
        const { t } = useTranslation();

    return (
       
        <div className="
            p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 
            dark:bg-gray-900 
            flex justify-center items-center mt-20 md:mt-14 md:mb-0 mb-7"> 
            
           
            <header className="
                relative 
                w-full max-w-screen-2xl h-[500px] md:h-[400px] 
                overflow-hidden 
                rounded-3xl shadow-xl 
                
                flex flex-col justify-center items-center  /* ⬅️ PERUBAHAN UTAMA: Pusatkan konten */
                
                p-6 md:p-10 lg:p-14 xl:p-16 
            ">
                

                <div className="absolute inset-0">
                    <img 
                        src="/ulundanu.jpg" 
                        alt="Latar Belakang Airport"
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/45 rounded-3xl"></div> 
                </div>
        

                {/* Konten Teks di Tengah */}
                <div className="relative z-20 
                        text-center
                        max-w-4xl mx-auto">
                        
                        <h1 className="
                            text-white text-4xl md:text-5xl font-extrabold leading-tight 
                            inline-block relative 
                            pb-2"> 
                            
                            Airport Transfer
                            
                            {/* ORNAMEN GARIS TEBAL DENGAN PSEUDO-ELEMENT */}
                            {/* Menggunakan warna Secondary (Amber) sebagai ornamen kontras */}
                            <span className="absolute left-0 right-0 bottom-0 h-1 bg-amber-500 mx-auto w-1/3 rounded-full"></span>
                        </h1>

                        <p className="text-white/90 mt-4 text-md md:text-lg mx-auto max-w-2xl">
                            {t("airportpage.description")}
                        </p>

                        {/* ⬅️ START: Tombol Call-to-Action Baru */}
                        <div className="mt-8">
                            <button 
                                onClick={openModal}
                                href="#transfer-packages" // Arahkan ke section paket di bawah
                                className="inline-block px-8 py-3 text-md md:text-lg font-semibold uppercase tracking-wider 
                                        bg-teal-600 text-white rounded-full 
                                        shadow-xl hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                            >
                                 {t("airportpage.button")}
                            </button>
                        </div>
                        {/* END: Tombol Call-to-Action Baru ➡️ */}
                    </div>
                
                {/* ⬇️ CATATAN: Div konten lama yang menggunakan mt-auto dihapus atau diganti ⬇️ */}
                
            </header>
            <BookingModal isOpen={isModalOpen} onClose={closeModal} prices={prices} />
        </div>
    );
}

export default AirHeader;
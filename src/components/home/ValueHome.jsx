import { useTranslation } from "react-i18next";

function ValueHome(){
     const { t } = useTranslation();
       const items = t("whyChoose.items", { returnObjects: true });
    return(
        <>
        <section className="relative py-28">
            <div className="absolute inset-0">
                {/* Pastikan gambar latar belakang diakses dengan benar */}
                {/* Catatan: Di lingkungan React, Anda mungkin perlu mengimpor gambar atau memastikan jalur '/banner2.jpg' dapat diakses. */}
                <img
                src="/banner2.jpg"
                alt="Background"
                className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-6 md:px-11 lg:px-14 xl:px-16 text-white">
                <div className="mb-12 md:w-1/2 text-left">
                <p
                    className="uppercase tracking-wider text-xl mb-2 font-extralight"
                    data-aos="fade-right" // Animasi untuk paragraf Explore Bali
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                      {t("whyChoose.subtitle")}
                </p>
                <h2
                    className="text-3xl md:text-4xl font-light text-[#FFFFFF] font-monserrat mb-6"
                    data-aos="fade-right" // Animasi untuk judul Why Choose
                    data-aos-duration="1000"
                    data-aos-delay="200" // Sedikit penundaan setelah paragraf
                    data-aos-once="true"
                >
                  {t("whyChoose.title")}{" "}
                  <span className="font-bold">{t("whyChoose.highlight")}</span>
                </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, idx) => (
                    <div
                    key={idx}
                    // Ditingkatkan: Opacity menjadi 30% dan blur menjadi 'lg'
                    className="bg-white/20 p-6 backdrop-blur-sm rounded-lg shadow-lg transition duration-300 hover:bg-opacity-50" 
                    data-aos="fade-up" // Animasi untuk setiap kotak benefit
                    data-aos-duration="1000"
                    data-aos-delay={idx * 200 + 400} // Penundaan progresif + penundaan awal setelah judul
                    data-aos-once="true"
                    >
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                        {/* Jika ikon Anda adalah gambar, pastikan jalur '/car1.jpg' dan lainnya valid */}
                        {/* Jika Anda ingin menggunakan ikon SVG atau emoji yang ada di web, itu akan lebih baik. */}
                        <img src={item.icon} alt={item.title} className="w-14 h-14 rounded-full" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                    <p className="text-sm text-normal text-center">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default ValueHome

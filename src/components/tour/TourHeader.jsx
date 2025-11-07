import { useTranslation } from "react-i18next";

function TourHeader() {
    const { t } = useTranslation();
    return (
       
        <div className="
            p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 
            dark:bg-gray-900 
            flex justify-center items-center mt-20 md:mt-14 mb-7 md:mb-0"> 
            
           
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
                        src="/tegalalang.jpg" 
                        alt="Latar Belakang Airport" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-3xl"></div> 
                </div>
        
            <div className="relative z-20 text-center max-w-4xl mx-auto">
                <h1
                    className="text-white text-4xl md:text-5xl font-bold leading-tight 
                                inline-block relative pb-2"
                >
                     {t("tourPackagesSection.title")}
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-amber-500 mx-auto w-1/3 rounded-full"></span>
                </h1>

                <p className="text-white/90 mt-4 text-md md:text-lg mx-auto max-w-2xl">
                    {t("tourPackagesSection.subtitle")}
                </p>
            </div>

            
            </header>
        </div>
    );
}

export default TourHeader;
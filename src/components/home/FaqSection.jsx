import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const { t } = useTranslation();
  const faqs = t("faqSection.faqs", { returnObjects: true });
  const header = t("faqHeader", { returnObjects: true });

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kiri: FAQ List */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <p className="uppercase tracking-widest text-md md:text-lg mb-2 font-semibold text-secondary">
             {header.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-10 leading-snug">
            {header.titleBefore}{" "}
            <span className="text-secondary">{header.titleHighlight}</span>
          </h2>


          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all duration-300 shadow-sm ${
                  openIndex === index
                    ? "bg-white border-secondary shadow-lg"
                    : "bg-white border-gray-200 hover:border-primary/50"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index ? "text-primary" : "text-gray-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-700 text-base border-t border-gray-100 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src="/gwk.webp"
              alt="GWK Statue"
              className="w-full h-[480px] md:h-[520px] object-cover rounded-3xl shadow-2xl transform hover:scale-[1.03] transition-transform duration-500"
            />
            {/* Efek ornamen cahaya */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

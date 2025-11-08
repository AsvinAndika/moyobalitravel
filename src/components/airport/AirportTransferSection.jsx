import React from "react";
import { Car, Clock, MapPin, Plane, Ship, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

function AirportTransferSection() {
  const { t } = useTranslation();
  const airportData = t("airportTransfer", { returnObjects: true });

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 pb-28 lg:px-14 relative z-10">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 mt-6 italic font-medium max-w-3xl mx-auto">
            {airportData.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Layanan */}
          <div className="p-8 rounded-2xl shadow-lg bg-white border-t-4 border-teal-600 transition-all hover:-translate-y-2 duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-600 mb-6">
              {airportData.servicesTitle}
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {airportData.servicesDesc}
            </p>

            <ul className="space-y-5">
              {airportData.servicesList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Clock className="text-amber-500 mr-3 mt-1" size={22} />
                  <span>
                    <span className="font-semibold text-gray-900">{item.title}:</span>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Area Layanan */}
          <div className="p-8 rounded-2xl shadow-lg bg-amber-50 border-t-4 border-amber-500 transition-all hover:-translate-y-2 duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-600 mb-6">
              {airportData.coverageTitle}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {airportData.coverageDesc}
            </p>

            <ul className="space-y-5">
              {airportData.coverageList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  {idx === 0 ? <Plane className="text-teal-600 mr-3 mt-1" size={22} /> : <Ship className="text-teal-600 mr-3 mt-1" size={22} />}
                  <span className="font-semibold text-gray-900">{item.title}</span>{" "}
                  – {item.desc}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-teal-50 border border-teal-600 text-teal-900 rounded-lg flex items-start">
              <Info className="mr-3 mt-1" size={20} />
              <p className="text-sm font-medium">
                <span className="font-semibold">Note:</span> {airportData.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AirportTransferSection;

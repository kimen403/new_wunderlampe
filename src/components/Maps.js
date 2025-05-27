"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Maps() {
  const { t } = useLanguage();
  return (
    <section className="w-full h-auto md:h-[665px] overflow-hidden relative ">
      <div className="bg-yellow-30 py-8 md:py-12 overflow-hidden relative mx-4 md:mx-0">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl w-full text-shadow mb-4">
          {t("maps.title")}
        </h2>
        <h2 className="text-white text-center text-xl md:text-2xl lg:text-4xl font-extrabold w-full text-shadow">
          {t("maps.description")}
        </h2>
      </div>
      <div className="h-[300px] md:h-[480px] overflow-hidden relative w-full px-4 md:px-0">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1PcQgpiQb2Hwh84I64hmaH97loBEtmsE&ehbc=2E312F&noprof=1"
          className="w-full h-[320px] md:h-[500px] -mt-13"
          loading="lazy"
        />
      </div>
    </section>
  );
}

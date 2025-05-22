"use client";

import { Gallery } from "@/components/Gallery";
import { useLanguage } from "@/context/LanguageContext";

export function Maps() {
  const { t } = useLanguage();
  return (
    <section className="w-full h-[665px]">
      <div className="bg-yellow-30 py-10 rounded-t-4xl">
        <h2 className="text-black text-center text-4xl w-full text-shadow">
          {t("maps.title")}
        </h2>
        <h2 className="text-black text-center text-4xl font-extrabold w-full text-shadow">
          {t("maps.description")}
        </h2>
      </div>
      <div className="h-[480px] overflow-hidden relative w-full">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1PcQgpiQb2Hwh84I64hmaH97loBEtmsE&ehbc=2E312F&noprof=1"
          className="w-full h-[500px] -mt-15 border-0"
          loading="lazy"
        />
      </div>
      <Gallery />
    </section>
  );
}

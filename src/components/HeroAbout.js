"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function HeroAbout() {
  const { t } = useLanguage();
  return (
    <section className="container bg-brown mx-auto px-4 py-16 pt-24 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("about.title1")}
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            {t("about.section1")}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/our_story/VSP_2024_0405_by_viktor_strasse 1.png"
            alt="Hero About"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

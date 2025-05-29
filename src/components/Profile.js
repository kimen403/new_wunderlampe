"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function Profile() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[800px] md:h-[1000px] lg:h-[1300px] box-shadow">
      <div className="absolute inset-0 flex flex-col md:block">
        <Image
          src="/profile.png"
          alt="Profile"
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
          quality={100}
        />
        <div className="w-full p-6 md:p-8 md:absolute md:top-30 md:right-45 md:max-w-2xl bg-black/50 md:bg-transparent">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold text-shadow">
            {t("profile.title")}
          </h2>
          <p className="text-white mt-4 text-base md:text-lg lg:text-xl text-shadow">
            {t("profile.description")}
          </p>
          <div className="flex justify-center w-full mt-8 md:mt-15">
            <Link
              href="/about"
              className="text-lg md:text-2xl font-bold button-shadow cursor-pointer text-shadow bg-yellow hover:bg-white/30 text-white py-2 px-6 md:px-8 rounded-4xl transition-colors text-center"
            >
              {t("profile.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

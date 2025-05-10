'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Profile() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[1300px] box-shadow">
      <Image
        src="/profile.png"
        alt="Profile"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute top-30 right-45 p-8 max-w-2xl">
        <h2 className="text-white text-7xl w-190 text-shadow">{t('profile.title')}</h2>
        <p className="text-white mt-4 text-2xl text-shadow">{t('profile.description')}</p>
        <div className="flex justify-center w-full mt-15">
          <button className="text-3xl button-shadow cursor-pointer text-shadow bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-8 rounded transition-colors text-center">
            {t('profile.button')}
          </button>
        </div>
      </div>
    </section>
  );
}

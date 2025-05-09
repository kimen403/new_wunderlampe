'use client';

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-8">
          <div className="space-x-4 font-poppins">
            <a href="#" >{t('nav.home')}</a>
            <a href="#" >{t('nav.about')}</a>
            <a href="#" >{t('nav.contact')}</a>
          </div>
          <LanguageToggle />
        </nav>

        <h1 className="text-4xl font-aladin mb-4">{t('title')}</h1>
        <p className="text-lg font-jetbrains">{t('description')}</p>
      </div>
    </main>
  );
}

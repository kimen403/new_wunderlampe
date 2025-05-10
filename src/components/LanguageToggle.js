'use client';

import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex rounded-md overflow-hidden font-poppins text-shadow">
      <button
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`cursor-pointer text-xl text-shadow px-3 py-1 transition-all ${
          language === 'en'
            ? 'bg-button-blue-gradient text-white'
            : 'bg-white/20 hover:bg-white/30'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => language !== 'de' && toggleLanguage()}
        className={`cursor-pointer text-xl text-shadow px-3 py-1 transition-all ${
          language === 'de'
            ? 'bg-button-blue-gradient text-white'
            : 'bg-white/20 hover:bg-white/30'
        }`}
      >
        DE
      </button>
    </div>
  );
}

'use client';

import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-button-blue-gradient text-white rounded-md hover:opacity-90 transition-opacity"
    >
      {t('buttons.languageToggle')}
    </button>
  );
}

'use client';
import { useLanguage } from "@/context/LanguageContext";

export function RunningText() {
    const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 bg-black z-[100] overflow-hidden whitespace-nowrap py-3">
      <div className="animate-marquee2 inline-block absolute top-0">
        <span className="text-white text-sm md:text-base mx-4">
          {t("runningtext.title")}
        </span>
      </div>
    </div>
  );
}

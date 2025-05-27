"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex rounded-4xl overflow-hidden font-poppins text-shadow">
      <button
        onClick={() => language !== "en" && toggleLanguage()}
        className={`cursor-pointer text-lg font-bold text-shadow px-3 py-1 transition-all ${
          language === "en"
            ? "bg-brown text-white"
            : "bg-white/20 hover:bg-white/30"
        }`}
      >
        <Image src="/menu/en.png" alt="English" width={24} height={24} />
      </button>
      <button
        onClick={() => language !== "de" && toggleLanguage()}
        className={`cursor-pointer text-lg font-bold text-shadow px-3 py-1 transition-all ${
          language === "de"
            ? "bg-brown text-white"
            : "bg-white/20 hover:bg-white/30"
        }`}
      >
        <Image src="/menu/de.png" alt="English" width={24} height={24} />
      </button>
    </div>
  );
}

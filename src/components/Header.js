'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-[69px] bg-white text-black z-50 w-[1082px] h-[67px] rounded-4xl">
      <div className="h-full px-14 flex items-center">
        <div className="w-full flex justify-between items-center">
          {/* Middle: Logo */}
          <div className="logo-shadow">
            <Image
              src="/logo_header.png"
              alt="Logo"
              width={107}
              height={52}
              priority
            />
          </div>
          
          {/* Left: Navigation */}
          <nav className="flex gap-12 text-lg font-bold text-shadow">
            <Link href="/" className="hover:opacity-80 transition-opacity font-poppins">
              {t('nav.home')}
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity font-poppins">
              {t('nav.about')}
            </Link>
            <Link href="/gallery" className="hover:opacity-80 transition-opacity font-poppins">
              {t('nav.gallery')}
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity font-poppins">
              {t('nav.contact')}
            </Link>
          </nav>


          {/* Right: Social Links, Language Toggle, and Reservation */}
          <div className="flex items-center gap-6">

            {/* Reservation Button */}
            <button className="cursor-pointer text-lg text-white font-bold px-5 py-2 bg-brown rounded-4xl hover:opacity-80 transition-all font-poppins text-shadow button-shadow">
              {t('buttons.reservation')}
            </button>
            {/* Language Toggle */}
            <LanguageToggle />

          </div>
        </div>
      </div>
    </header>
  );
}

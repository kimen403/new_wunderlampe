'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 bg-header-gradient text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Navigation */}
          <nav className="flex gap-12 text-3xl text-shadow">
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

          {/* Middle: Logo */}
          <div className="logo-shadow">
            <Image
              src="/logo_header.png"
              alt="Logo"
              width={150}
              height={60}
              priority
            />
          </div>

          {/* Right: Social Links, Language Toggle, and Reservation */}
          <div className="flex items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex gap-4 text-shadow">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <FaFacebook className="w-[24px] h-[24px]" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <FaInstagramSquare className="w-[24px] h-[24px]" />
              </Link>
            </div>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Reservation Button */}
            <button className="cursor-pointer text-3xl px-6 py-2 bg-button-blue-gradient rounded-md hover:opacity-80 transition-all font-poppins text-shadow button-shadow">
              {t('buttons.reservation')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

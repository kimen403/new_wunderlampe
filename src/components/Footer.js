'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-brown text-white">
      <div className="max-w-[1082px] mx-auto px-4 py-12 flex justify-between items-start">
        {/* Left Column: Contact Info */}
        <div className="space-y-4">
          <div className="space-y-2 text-2xl">
            <p>Lorenz-kellner-Straße 1</p>
            <p>+49651 56154448</p>
            <p>info@diewunderlampe-trier.com</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 items-center">
            <div className="space-y-2 text-2xl">
              <p>{t('footer.social')}</p>
            </div>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Image src="/fb.png" alt="Facebook" width={47} height={47} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Image src="/ig.png" alt="Instagram" width={47} height={47} />
            </Link>
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Image src="/tt.png" alt="TikTok" width={47} height={47} />
            </Link>
          </div>
        </div>

        {/* Right Column: Logo */}
        <div>
          <Image
            src="/logo_header.png"
            alt="Logo"
            width={305}
            height={150}
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-white/20">
        <div className="max-w-[1082px] mx-auto px-4 py-6">
          <p className="text-center text-md opacity-80">
            {t('footer.copyright')}<br />
            {t('footer.credits')}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-brown text-white">
      <div className="max-w-[1082px] mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
          <div className="flex flex-col justify-between items-center space-y-2 text-lg md:text-2xl">
            <p>Lorenz-kellner-Straße 1</p>
            <p>+49651 56154448</p>
            <p>info@diewunderlampe-trier.com</p>
          </div>
        </div>

        {/* Right Column: Logo */}
        <div className="flex items-center hover:scale-110 mt-6 md:mt-0">
          <Image
            src="/logo_header.png"
            alt="Logo"
            width={305}
            height={150}
            className="object-contain w-auto h-auto"
            priority
          />
        </div>
      </div>
      <div className="">
        {/* Social Links */}
        <div className="flex flex-col items-center ">
          <p className="text-lg py-2 md:text-2xl">{t("footer.social")}</p>
          <div className="flex py-4 gap-5">
            <Link
              href="https://www.facebook.com/wunderlampe.trier/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src="/hero-fb.png" alt="Facebook" width={47} height={47} />
            </Link>
            <Link
              href="https://www.instagram.com/die_wunderlampe_trier/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/hero-ig.png"
                alt="Instagram"
                width={47}
                height={47}
              />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src="/hero-tt.png" alt="TikTok" width={47} height={47} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20">
        <div className="max-w-[1082px] mx-auto px-4 py-4 md:py-6">
          <p className="text-center text-sm md:text-md opacity-80">
            {t("footer.copyright")}
            <br />
            {t("footer.credits")}
          </p>
        </div>
      </div>
    </footer>
  );
}

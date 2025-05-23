"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { useState } from "react";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path ? "text-[#DBAC53]" : "text-black";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <header className="fixed left-1/2 -translate-x-1/2 top-[25px] md:top-[70px] bg-white text-black z-50 w-[95%] max-w-[1082px] h-[67px] rounded-4xl">
        <div className="h-full px-4 md:px-14 flex items-center">
          <div className="w-full flex justify-between md:justify-between items-center relative">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-20 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-[2px] bg-black transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-[2px] bg-black my-[5px] transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-[2px] bg-black transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              ></div>
            </button>

            {/* Logo */}
            <div className="logo-shadow z-20 absolute md:relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
              <Image
                src="/logo_header.png"
                alt="Logo"
                width={107}
                height={52}
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-12 text-lg font-bold text-shadow">
              <Link
                href="/"
                className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                  "/"
                )}`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                  "/about"
                )}`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/gallery"
                className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                  "/gallery"
                )}`}
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="/contact"
                className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                  "/contact"
                )}`}
              >
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div
              className={`fixed inset-0 bg-transparent z-10 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden`}
            >
              <div className="pt-32 px-8 flex flex-col items-center gap-8">
                <nav className="flex flex-col items-center gap-8 text-xl font-bold">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                      "/"
                    )}`}
                  >
                    {t("nav.home")}
                  </Link>
                  <Link
                    href="/about"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                      "/about"
                    )}`}
                  >
                    {t("nav.about")}
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                      "/gallery"
                    )}`}
                  >
                    {t("nav.gallery")}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 transition-opacity font-poppins ${isActive(
                      "/contact"
                    )}`}
                  >
                    {t("nav.contact")}
                  </Link>
                </nav>

                {/* Mobile Reservation Button */}
                <Link
                  href="https://app.resmio.com/infodiewunderlampe-trierde/widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="cursor-pointer text-lg text-white font-bold px-5 py-2 bg-brown rounded-4xl hover:opacity-80 transition-all font-poppins text-shadow button-shadow"
                >
                  {t("buttons.reservation")}
                </Link>
              </div>
            </div>

            {/* Right Side: Language Toggle (Mobile) & Reservation (Desktop) */}
            <div className="flex items-center gap-6">
              {/* Language Toggle (Mobile & Desktop) */}
              <LanguageToggle />
              {/* Reservation Link (Desktop Only) */}
              <Link
                href="https://app.resmio.com/infodiewunderlampe-trierde/widget"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block cursor-pointer text-lg text-white font-bold px-5 py-2 bg-brown rounded-4xl hover:opacity-80 transition-all font-poppins text-shadow button-shadow"
              >
                {t("buttons.reservation")}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

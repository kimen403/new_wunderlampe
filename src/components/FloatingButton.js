'use client';

import { useState } from "react";
import Image from "next/image";
import { SocialBar } from "./SocialBar";

export function FloatingButton() {
  const [showSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-center">
      {/* Social Bar with slide animation */}
      <div className={`transition-all duration-300 transform ${
        showSocial ? 'opacity-100 mb-4' : 'opacity-0 pointer-events-none translate-y-full'
      }`}>
        <SocialBar className="flex flex-col items-center gap-4" />
      </div>

      {/* Float Button - always rotating */}
      <button
        onClick={toggleSocial}
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/float.png"
          alt="Toggle Social"
          width={90}
          height={90}
          className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-rotate"
          priority
        />
      </button>
    </div>
  );
}

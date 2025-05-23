'use client';

import Image from "next/image";

export function FloatingButton() {
  const scrollToFooter = () => {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToFooter}
      className="fixed bottom-8 right-4 md:bottom-18 md:right-28 z-50 hover:scale-110 transition-transform cursor-pointer"
    >
      <Image
        src="/float.png"
        alt="Scroll to Footer"
        width={90}
        height={90}
        className="w-[90px] h-[90px] md:w-[125px] md:h-[125px] animate-rotate"
        priority
      />
    </button>
  );
}

'use client';

import Image from "next/image";

export function FloatingButton() {
  const scrollToFooter = () => {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToFooter}
      className="fixed bottom-18 right-28 z-50 hover:scale-110 transition-transform"
    >
      <Image
        src="/float.png"
        alt="Scroll to Footer"
        width={125}
        height={125}
        className="animate-rotate"
        priority
      />
    </button>
  );
}

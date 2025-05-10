'use client';

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full h-[415px]">
      <Image
        src="/footer.png"
        alt="Footer"
        fill
        priority
        className="object-contain"
        sizes="100vw"
        quality={100}
      />
    </footer>
  );
}

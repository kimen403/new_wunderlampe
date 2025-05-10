'use client';

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[800px] z-0 card-shadow">
      <Image
        src="/hero.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />
    </section>
  );
}

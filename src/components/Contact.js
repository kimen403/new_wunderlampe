'use client';

import Image from "next/image";

export function Contact() {
  return (
    <section className="relative w-full h-[772px]">
    
      
      {/* Contact Image Overlay . jangan diganti, kunden mintanya gitu*/}
      <div className="absolute inset-0 flex items-center w-full justify-center">
        <Image
          src="/contact.png"
          alt="Contact"
          fill
          sizes="100vw"
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Business } from "@/components/Business";
import { Profile } from "@/components/Profile";
import { Maps } from "@/components/Maps";
import { Awards } from "@/components/Awards";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero />
      <Business />
      <Profile />
      <section className="relative h-[1437px]">
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-10">
          <Awards />
          <Maps />
          <Gallery />
        </div>
      </section>
      <Footer />
    </main>
  );
}

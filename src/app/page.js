"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Business } from "@/components/Business";
import { Profile } from "@/components/Profile";
import { Maps } from "@/components/Maps";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { AwardsHome } from "@/components/AwardsHome";
import { News } from "@/components/News";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <div className="relative h-[150px] bg-brown"></div>
      <Hero />
      <Business />
      <Profile />
      <section className="relative h-auto min-h-[850px] md:min-h-[1250px] lg:h-[1750px]">
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative z-10">
          <AwardsHome />
          <News />
          <Maps />
          <Gallery />
        </div>
        <Footer />
      </section>
    </main>
  );
}

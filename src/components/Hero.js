'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[850px] lg:h-[1300px] z-0 card-shadow">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <Image
            src="/hero.png"
            alt="Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hero.png"
            alt="Hero"
            fill
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>



      {/* Social Media Bar */}
      <div className="absolute hidden md:flex flex-col gap-6 z-20 left-8 md:left-23 bottom-12 md:bottom-18">
        <Link href="https://www.facebook.com/wunderlampe.trier/?locale=de_DE" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-fb.png"
            alt="Facebook"
            width={48}
            height={48}
            className="w-12 h-12 md:w-[68px] md:h-[68px] hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://www.instagram.com/die_wunderlampe_trier/?hl=de" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-ig.png"
            alt="Instagram"
            width={48}
            height={48}
            className="w-12 h-12 md:w-[68px] md:h-[68px] hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-tt.png"
            alt="TikTok"
            width={48}
            height={48}
            className="w-12 h-12 md:w-[68px] md:h-[68px] hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}

'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function Hero() {
  return (
    <section className="relative w-full h-[950px] z-0 card-shadow">
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
            src="/hero1.png"
            alt="Hero"
            fill
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>

      {/* Vignette Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/vtop.png"
          alt=""
          fill
          className="object-cover z-10"
          priority
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/vbot.png"
          alt=""
          fill
          className="object-cover z-10"
          priority
        />
      </div>

      {/* Social Media Bar */}
      <div className="absolute left-43 bottom-48 flex flex-col gap-6 z-20">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/fb.png"
            alt="Facebook"
            width={68}
            height={68}
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/ig.png"
            alt="Instagram"
            width={68}
            height={68}
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/tt.png"
            alt="TikTok"
            width={68}
            height={68}
            className="hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}

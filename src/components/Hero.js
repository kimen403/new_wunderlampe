'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function Hero() {
  return (
    <section className="relative w-full h-[1150px] z-0 card-shadow">
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
            className=" "
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hero.png"
            alt="Hero"
            fill
            className=" "
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>



      {/* Social Media Bar */}
      <div className="absolute left-43 bottom-48 flex flex-col gap-6 z-20">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-fb.png"
            alt="Facebook"
            width={68}
            height={68}
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-ig.png"
            alt="Instagram"
            width={68}
            height={68}
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/hero-tt.png"
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

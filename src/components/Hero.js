"use client";

import Image from "next/image";
import { SocialBar } from "./SocialBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
            alt="Hero2"
            fill
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>

      {/* Social Media Bar */}
      <SocialBar className="absolute hidden md:flex z-20 left-8 md:left-[92px] bottom-12 md:bottom-[72px]" />
    </section>
  );
}

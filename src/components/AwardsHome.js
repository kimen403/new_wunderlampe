"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";

export function AwardsHome() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-12 px-[50px]">
      <h2 className="text-white py-10 text-center text-4xl font-extrabold w-full text-shadow">
        {t("awards.title")}
      </h2>
      <div className="relative max-w-[1082px] mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
            enabled: true,
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="w-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <Image
                src={`/award${num}.png`}
                alt={`Award ${num}`}
                width={185}
                height={263}
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev swiper-button-prev" />
        <div className="custom-next swiper-button-next" />
      </div>
    </section>
  );
}

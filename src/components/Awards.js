"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";

export function Awards() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-6 md:py-8 lg:py-12 px-4 md:px-[50px]">
      <h2 className="text-black py-6 md:py-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold w-full text-shadow">
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
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
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
                className=" w-auto h-auto object-contain mx-auto"
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

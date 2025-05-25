"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useLanguage } from "@/context/LanguageContext";

export function News() {
  const { t } = useLanguage();
  return (
    <section className="w-full  py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-[50px]">
      <h2 className="text-teal-50 py-4 sm:py-6 md:py-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-shadow">
        {"Our News"}
        {/* {t("news.title")} */}
      </h2>
      <div className="py-4 sm:py-6 md:py-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper bg-transparent w-full max-w-[1200px] mx-auto pb-12"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide
              key={num}
              className="flex items-center justify-center"
              style={{
                width: "min(90vw, 900px)",
                height: "auto",
              }}
            >
              <div className="relative w-full py-4 px-2 sm:px-4">
                <Image
                  src={`/news/news${num}.png`}
                  alt={`News ${num}`}
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

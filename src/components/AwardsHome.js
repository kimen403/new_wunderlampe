"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function AwardsHome() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-6 md:py-8 lg:py-12 px-4 md:px-[50px]">
      <h2 className="text-white py-6 md:py-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold w-full text-shadow">
        {t("awards.title")}
      </h2>
      <div className="relative max-w-[1082px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          centeredSlides={true}
          navigation={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num} className="!flex !justify-center !items-center">
              <Link href="/about" className="w-full max-w-[185px] mx-auto">
                <Image
                  src={`/awards/${num}.png`}
                  alt={`Award ${num}`}
                  width={185}
                  height={263}
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out w-full h-auto"
                  priority
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

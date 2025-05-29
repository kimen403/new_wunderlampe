"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-6 my-12 bg-brown-30">
      <div className="max-w-[1082px] mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mb-8"
        >
          <SwiperSlide>
            <div className="relative items-center flex justify-center">
              <Image
                src="/img1.png"
                alt="Gallery Image 1"
                width={305}
                height={204}
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/img2.png"
                alt="Gallery Image 2"
                width={402}
                height={268}
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative items-center flex justify-center">
              <Image
                src="/img3.png"
                alt="Gallery Image 3"
                width={305}
                height={204}
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative items-center flex justify-center">
              <Image
                src="/img3.png"
                alt="Gallery Image 3"
                width={305}
                height={204}
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative items-center flex justify-center">
              <Image
                src="/img3.png"
                alt="Gallery Image 3"
                width={305}
                height={204}
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="bg-amber-600 text-white text-lg font-bold px-8 py-3 rounded-4xl hover:opacity-80 transition-all"
          >
            {t("gallery.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

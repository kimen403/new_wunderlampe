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
    <section className="w-full py-12 px-[50px]">
      <h2 className="text-white py-10 text-center text-4xl font-extrabold w-full text-shadow">
        {t("awards.title")}
      </h2>
      <div className="relative max-w-[1082px] mx-auto">
        <Swiper
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          effect={"coverflow"}
          grabCursor={true}
          coverflowEffect={{
            slideShadows: true,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num} className="">
              <Link href={`/about`}>
                <Image
                  src={`/award${num}.png`}
                  alt={`Award ${num}`}
                  width={185}
                  height={263}
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
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

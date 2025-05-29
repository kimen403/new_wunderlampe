"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const awardsData = [
  {
    title: "Award 1",
    image: "/awards/1.png",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite.",
  },
  {
    title: "Award 2",
    image: "/awards/award5.png",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite.",
  },
  {
    title: "Award 3",
    image: "/awards/3.png",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite.",
  },
  {
    title: "Award 4",
    image: "/awards/4.png",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite.",
  },
  {
    title: "Award 5",
    image: "/awards/5.png",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite.",
  },
];

export function Awards() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-brown py-6 md:py-8 lg:py-12 px-4 md:px-[50px]">
      <h2 className="text-teal-50 py-6 md:py-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold w-full text-shadow">
        {t("video.title")}
      </h2>
      <div className="max-w-[1200px] text-teal-50 mx-auto">
        <Swiper
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className=""
        >
          {awardsData.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 p-10 md:grid-cols-2 gap-8 items-center">
                <div className="prose max-w-none order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">{award.title}</h3>
                  <p className="text-lg leading-relaxed">{award.description}</p>
                </div>
                <div className="relative hover:scale-2xl flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                  <Image
                    src={award.image}
                    alt={`Award ${index + 1}`}
                    width={185}
                    height={263}
                    className="w-auto h-auto object-contain mx-auto"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

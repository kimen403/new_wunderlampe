'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export function Awards() {
  return (
    <section className="w-full py-12 px-[50px]">
      <h2 className="text-black py-10 text-center text-4xl font-extrabold w-full text-shadow">wir sind bekannt aus</h2>
      <div className="relative max-w-[1082px] mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
            enabled: true
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
              className="object-contain"
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

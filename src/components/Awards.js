"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";

const awardsData = [
  {
    link: "https://www.youtube.com/embed/je0fOPmMjvA?si=4I26HuA6T0H_zmx0",
  },
  {
    link: "https://www.youtube.com/embed/7ptsAJzm52k?si=WcKoCz7K0c-EJHEQ",
  },
  {
    link: "https://www.youtube.com/embed/ISANNSh74OA?si=VdxK5fNUtJubIwZs",
  },
  {
    link: "https://www.youtube.com/embed/rDfl-1c8ThU?si=g9kxoId1S-BaIck7",
  },
];

export function Awards() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = useRef({});

  const handleSlideChange = (swiper) => {
    // Pause all videos first
    Object.keys(videos.current).forEach(key => {
      if (videos.current[key]) {
        const iframe = videos.current[key];
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*'
        );
      }
    });
    setActiveVideo(swiper.realIndex);
  };

  return (
    <section className="w-full bg-brown py-6 md:py-8 lg:py-12 px-4 md:px-[50px]">
      <h2 className="text-teal-50 py-6 md:py-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold w-full text-shadow">
        {t("video.title")}
      </h2>
      <div className="max-w-[1200px] text-teal-50 mx-auto">
        <div className="swiper-container">
          <Swiper
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            className="!flex !items-center !justify-center"
          >
            {awardsData.map((award, index) => (
              <SwiperSlide key={index} className="!flex !justify-center !items-center py-4 !w-full">
                <div className="w-full max-w-[650px] aspect-video mx-auto">
                  <iframe 
                    ref={el => videos.current[index] = el}
                    className="w-full h-full"
                    src={`${award.link}&enablejsapi=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

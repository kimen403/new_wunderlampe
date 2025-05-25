"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useLanguage } from "@/context/LanguageContext";

const galleryImages = [
  "/gallery/_DSC0124.JPG",
  "/gallery/_DSC0170.JPG",
  "/gallery/_DSC0246.JPG",
  "/gallery/_DSC0257.JPG",
  "/gallery/_DSC0260.JPG",
  "/gallery/arabic-food-concept-ramadan2.jpg",
  "/gallery/Arabische_Halbmonde_Hähnchenhackfleisch_x3.jpg",
  "/gallery/Arabische_Halbmonde_Spinat_x3.jpg",
  "/gallery/Desserts.jpg",
  "/gallery/DSCF9560.jpg",
  "/gallery/DSCF9578.jpg",
  "/gallery/Getränke.jpg",
  "/gallery/Heroganz.jpg",
  "/gallery/IMG_0298-2.jpg",
  "/gallery/IMG_0302-2.jpg",
  "/gallery/IMG_0333-2.jpg",
  "/gallery/IMG_0356-2.jpg",
  "/gallery/IMG_0365-2.jpg",
  "/gallery/IMG_0899.jpg",
  "/gallery/IMG_0945.jpg",
  "/gallery/IMG_0995.jpg",
  "/gallery/IMG_0997.jpg",
  "/gallery/IMG_1017.jpg",
  "/gallery/IMG_1024.jpg",
  "/gallery/IMG_1033.jpg",
  "/gallery/IMG_1060.jpg",
  "/gallery/IMG_1093.jpg",
  "/gallery/IMG_1146.jpg",
  "/gallery/IMG_1180.jpg",
  "/gallery/kalte Vorspeisen.jpg",
];

export default function GalleryPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { t } = useLanguage();

  return (
    <main
      className="min-h-screen transition-all duration-1000 relative gradient-edges pt-16 md:pt-20"
      style={{
        backgroundColor: "#28160A",
        backgroundImage: 'url("/business/BG_motiv.png")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style jsx>{`
        .gradient-edges .top-gradient {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 150px;
          pointer-events: none;
          z-index: 10;
          background: linear-gradient(to bottom, #28160a, transparent);
        }

        .gradient-edges .bottom-gradient {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          pointer-events: none;
          z-index: 10;
          background: linear-gradient(to top, #28160a, transparent);
        }
      `}</style>
      <div className="top-gradient"></div>
      <div className="bottom-gradient"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl relative z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          {t("gallery.title")}
        </h2>

        <p className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-12">
          {t("gallery.description")}
        </p>

        <div className="relative bg-black/30 p-4 sm:p-6 md:p-8 rounded-lg backdrop-blur-sm">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mb-2 sm:mb-4 rounded-xl overflow-hidden"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    fill
                    className="object-cover h-full w-full rounded-xl"
                    priority={index < 4}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={4}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 6,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-16 sm:h-20 md:h-24"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
          width: 2.5rem;
          height: 2.5rem;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 9999px;
          transition: background-color 0.3s;
          color: white;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.25rem;
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}

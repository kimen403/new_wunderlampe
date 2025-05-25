"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-6 my-12 bg-brown-30">
      <div className="max-w-[1082px] mx-auto ">
        <div className="grid grid-cols-3 gap-6 ">
          <div className="relative items-center flex justify-center">
            <Image
              src={`/img1.png`}
              alt={`Gallery Image 1`}
              width={305}
              height={204}
              className="object-cover"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              src={`/img2.png`}
              alt={`Gallery Image 2`}
              width={402}
              height={268}
              className="object-cover"
              priority
            />
          </div>
          <div className="relative items-center flex justify-center">
            <Image
              src={`/img3.png`}
              alt={`Gallery Image 3`}
              width={305}
              height={204}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Button Container */}
        <div className="flex justify-center mt-8">
          <Link
            href={"/gallery"}
            className="bg-brown text-white text-lg font-bold px-8 py-3 rounded-4xl hover:opacity-80 transition-all"
          >
            {t("gallery.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

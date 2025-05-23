"use client";

import Image from "next/image";

export function BusinessCard({ locationType, logoNumber, t }) {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[600px] pt-20  md:aspect-[3/4] overflow-hidden   shadow-lg shadow-black/30 transition-all duration-1000 gradient-edges">
      {/* Content */}
      <div className="relative inset-0 z-[2] flex flex-col items-center justify-start p-0 md:p-0 h-full">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src={`/business/card/Logo${logoNumber}.svg`}
            alt={`Logo ${logoNumber}`}
            width={200}
            height={200}
            priority
            className="w-[180px] sm:w-[200px] md:w-[250px] h-auto animate-sway3D logo-shadow"
          />
        </div>
        {/* Text Content */}
        <div className="text-white pt-6 md:pt-0 text-center text-sm md:text-base text-shadow max-w-[85%] md:max-w-[75%]">
          <p className="description whitespace-pre-line">
            {t(`business.locations.${locationType}.description`)}
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
            {locationType === "hwk" ? (
              <div className="flex pt-6 md:pt-10 flex-col gap-3 pb-25 md:pb-0">
                <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                  {t(`business.locations.${locationType}.buttons.weekTrier`)}
                </button>
                <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                  {t(`business.locations.${locationType}.buttons.weekKenn`)}
                </button>
                <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                  {t(`business.locations.${locationType}.buttons.more`)}
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-row gap-3 mt-6">
                  <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                    {t(`business.locations.${locationType}.buttons.menu`)}
                  </button>
                  <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                    {t(`business.locations.${locationType}.buttons.order`)}
                  </button>
                </div>
                <button className="h-[32px] hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow">
                  {t(`business.locations.${locationType}.buttons.more`)}
                </button>
              </>
            )}
          </div>

          {locationType !== "hwk" && (
            <>
              <div className="mt-4 md:mt-2 space-y-2 text-shadow">
                <p>
                  {t(`business.locations.${locationType}.service.services`)}
                </p>
              </div>
              <p className="address mt-4 md:mt-2 whitespace-pre-line">
                {t(`business.locations.${locationType}.address`)}
              </p>
              <p className="tel mt-2">
                {t(`business.locations.${locationType}.tel`)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

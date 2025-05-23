"use client";

import Image from "next/image";

export function BusinessCard({ locationType, logoNumber, t }) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      {/* Background */}
      {/* <Image
        src="/business/card/BG_card.png"
        alt="Card Background"
        fill
        className="object-cover scale-[1.02] z-[1]"
        priority
      /> */}

      {/* Content */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-start p-4 sm:p-6 max-h-full overflow-y-auto">
        {/* Logo */}
        <div className="w-[150px] sm:w-[200px] md:w-[250px] pt-20 sm:pt-20 md:pt-25 flex items-center justify-center">
          <Image
            src={`/business/card/Logo${logoNumber}.svg`}
            alt={`Logo ${logoNumber}`}
            width={250}
            height={250}
            className="w-full h-auto animate-sway3D logo-shadow"
          />
        </div>
        {/* Text Content */}
        <div className="text-white p-2 md:pt-5 text-center text-xs sm:text-sm md:text-base text-shadow max-w-[70%]">
          <p className="description whitespace-pre-line">
            {t(`business.locations.${locationType}.description`)}
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
            {locationType === "hwk" ? (
              <div className="flex pt-10 flex-col gap-3 sm:gap-3 md:gap-4">
                <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                  {t(`business.locations.${locationType}.buttons.weekTrier`)}
                </button>
                <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                  {t(`business.locations.${locationType}.buttons.weekKenn`)}
                </button>
                <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                  {t(`business.locations.${locationType}.buttons.more`)}
                </button>
              </div>
            ) : (
              <>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                    {t(`business.locations.${locationType}.buttons.menu`)}
                  </button>
                  <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                    {t(`business.locations.${locationType}.buttons.order`)}
                  </button>
                </div>
                <button className="h-[21px] sm:h-[24px] md:h-[28px] bg-[#B9873B] text-[#FFFFFF]  rounded-2xl px-4 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-bold">
                  {t(`business.locations.${locationType}.buttons.more`)}
                </button>
              </>
            )}
          </div>

          {locationType !== "hwk" && (
            <>
              <div className="mt-[20px] space-y-2 text-shadow">
                <p>
                  {t(`business.locations.${locationType}.service.services`)}
                </p>
              </div>
              <p className="address mt-[20px] whitespace-pre-line">
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

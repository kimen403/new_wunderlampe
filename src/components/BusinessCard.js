"use client";

import Image from "next/image";

export function BusinessCard({
  locationType,
  t,
  linkMenu,
  linkOrder,
  linkMore,
  logoNumber,
}) {
  const onClickMenu = () => {
    window.location.href = linkMenu;
  };
  const onClickOrder = () => {
    window.location.href = linkOrder;
  };
  const onClickMore = () => {
    window.location.href = linkMore;
  };

  return (
    <div className="relative w-full aspect-[3/5] max-w-sm mx-auto">
      <svg
        viewBox="0 0 300 500"
        xmlns="/business/card/Logo.svg"
        preserveAspectRatio="none"
      >
        <path
          d="M150,0 C165,15 180,15 195,18 C210,20 225,35 225,50 H255 C270,50 285,65 285,80 V100 C295,102 300,110 300,125 V375 C300,390 295,398 285,400 V420 C285,435 270,450 255,450 H225 C225,465 210,480 195,482 C180,485 165,485 150,500 C135,485 120,485 105,482 C90,480 75,465 75,450 H45 C30,450 15,435 15,420 V400 C5,398 0,390 0,375 V125 C0,110 5,102 15,100 V80 C15,65 30,50 45,50 H75 C75,35 90,20 105,18 C120,15 135,15 150,0 Z"
          fill="#2a180a"
          stroke="#c1975b"
          strokeWidth="4"
        />
      </svg>

      <div className="absolute inset-0 p-8 flex justify-center items-center">
        <div className="text-center p-5 text-white space-y-4 overflow-y-auto">
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
          {/* Description */}
          <p className="description whitespace-pre-line max-w-[250px] md:max-w-[320px] mx-auto">
            {t(`business.locations.${locationType}.description`)}
          </p>

          {/* Conditional buttons based on locationType */}
          <div className="mt-2 flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
            {locationType === "hwk" ? (
              <div className="flex pt-6 md:pt-10 flex-col gap-3 pb-25 md:pb-0">
                <button
                  onClick={onClickMenu}
                  className="h-[32px]  cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                >
                  {t(`business.locations.${locationType}.buttons.weekTrier`)}
                </button>
                <button
                  onClick={onClickOrder}
                  className="h-[32px] cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                >
                  {t(`business.locations.${locationType}.buttons.weekKenn`)}
                </button>
                <button
                  onClick={onClickMore}
                  className="h-[32px] cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                >
                  {t(`business.locations.${locationType}.buttons.more`)}
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-row gap-3 mt-6">
                  <button
                    onClick={onClickMenu}
                    className="h-[32px] cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                  >
                    {t(`business.locations.${locationType}.buttons.menu`)}
                  </button>
                  <button
                    onClick={onClickOrder}
                    className="h-[32px] cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                  >
                    {t(`business.locations.${locationType}.buttons.order`)}
                  </button>
                </div>
                <button
                  onClick={onClickMore}
                  className="h-[32px] cursor-pointer hover:scale-105 md:h-[36px] bg-[#B9873B] text-[#FFFFFF] rounded-2xl px-6 md:px-8 text-sm md:text-base font-poppins font-bold button-shadow"
                >
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

"use client";

import { useLanguage } from "@/context/LanguageContext";

import { BusinessCard } from "./BusinessCard";
import { SectionTransition } from "./SectionTransition";

export function Business() {
  const { t } = useLanguage();

  const data_business = [
    {
      index: 0,
      type: "restaurant",
      logo: 1,
      btn_description: "",
      linkMenu: "/menu",
      linkOrder: "https://diewunderlampe.simplywebshop.de/storedata/listStore",
      linkMore: "",
    },
    {
      index: 1,
      type: "bistro",
      logo: 2,
      btn_description: "",
      linkMenu: "",
      linkOrder:
        "https://www.lieferando.de/speisekarte/das-wunderlampchen-neustrasse?utm_campaign=foodorder&utm_medium=organic&utm_source=google&shipping=collection",
      linkMore: "",
    },
    {
      index: 2,
      type: "catering",
      logo: 3,
      btn_description: "",
      linkMenu: "",
      linkOrder:
        "https://docs.google.com/forms/d/e/1FAIpQLScLp0ozBBCBsMMQ8HEVExjCRK_DAYQbO6y-EF1ceX6aYZbJzQ/viewform?usp=sharing&ouid=114658819105766817834",
      linkMore: "",
    },
    {
      index: 3,
      type: "pizzaKenn",
      logo: 5,
      btn_description: "",
      linkMenu: "",
      linkOrder: "https://www.lieferando.de/speisekarte/wunderpizza",
      linkMore: "",
    },
    {
      index: 4,
      type: "hwk",
      logo: 6,
      linkMenu: "",
      btn_description: t("business.locations.hwk.buttons.weekTrier"),
      linkOrder: "",
      linkMore: "",
    },
    {
      index: 5,
      type: "hwk",
      logo: 6,
      btn_description: t("business.locations.hwk.buttons.weekKenn"),
      linkMenu: "",
      linkOrder: "",
      linkMore: "",
    },
  ];
  return (
    <>
      <section
        className="min-h-screen transition-all duration-1000 relative gradient-edges"
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
          /* Top and bottom gradients */
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
        <div className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-20 pb-20 md:pb-20 lg:grid-cols-3 justify-items-stretch">
            {data_business.map(
              ({
                index,
                type,
                logo,
                linkMenu,
                linkOrder,
                linkMore,
                btn_description,
              }) => (
                <BusinessCard
                  key={index}
                  locationType={type}
                  logoNumber={logo}
                  linkMenu={linkMenu}
                  linkOrder={linkOrder}
                  linkMore={linkMore}
                  t={t}
                  btn_description={btn_description}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

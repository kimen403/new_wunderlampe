"use client";

import { useLanguage } from "@/context/LanguageContext";

import { BusinessCard } from "./BusinessCard";
import { SectionTransition } from "./SectionTransition";

export function Business() {
  const { t } = useLanguage();

  return (
    <>
      <section
        className="min-h-screen transition-all duration-1000 relative"
        style={{
          backgroundColor: "#28160A",
          backgroundImage: 'url("/business/BG_motiv.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
            {[
              { type: "restaurant", logo: 1 },
              { type: "bistro", logo: 2 },
              { type: "catering", logo: 3 },
              { type: "pizzaTrier", logo: 4 },
              { type: "pizzaKenn", logo: 5 },
              { type: "hwk", logo: 6 },
            ].map(({ type, logo }) => (
              <BusinessCard
                key={type}
                locationType={type}
                logoNumber={logo}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

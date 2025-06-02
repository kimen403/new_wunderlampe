"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const storyItems = [
  {
    image: "/our_story/VSP_2024_0405_by_viktor_strasse 2.png",
    titleKey: "about.title2",
    descriptionKey: "about.section2"
  },
  {
    image: "/our_story/VSP_2024_0514_by_viktor_strasse 1.png",
    titleKey: "about.title3",
    descriptionKey: "about.section3"
  },
  {
    image: "/our_story/VSP_2024_0643_by_viktor_strasse (1) 1.png",
    titleKey: "about.title4",
    descriptionKey: "about.section4"
  }
];

export function OurStory() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Our Story
      </h2>
      <div className="space-y-12">
        {storyItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 bg-brown p-20 rounded-2xl lg:grid-cols-2 gap-8 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={t(item.titleKey)}
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                  <Image
                    src={item.image}
                    alt={t(item.titleKey)}
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

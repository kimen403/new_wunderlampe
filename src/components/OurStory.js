"use client";

import Image from "next/image";

const storyItems = [
  {
    image: "/our_story/VSP_2024_0405_by_viktor_strasse 2.png",
    title: "Our Beginning",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite..",
  },
  {
    image: "/our_story/VSP_2024_0514_by_viktor_strasse 1.png",
    title: "Growing Together",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite..",
  },
  {
    image: "/our_story/VSP_2024_0643_by_viktor_strasse (1) 1.png",
    title: "Today's Success",
    description:
      "Our restaurant is now officially Halal certified, ensuring all our dishes meet the highest standards of Halal preparation. This certification reflects our commitment to quality, cleanliness, and respect for our customers' dietary needs. Every ingredient and cooking process has been carefully reviewed and approved by certified authorities. We're proud to serve meals that everyone can enjoy with confidence. Come and experience the taste of trust and authenticity in every bite..",
  },
];

export function OurStory() {
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
                    alt={item.title}
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                  <Image
                    src={item.image}
                    alt={item.title}
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

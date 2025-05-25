"use client";

import Image from "next/image";

export function HeroAbout() {
  return (
    <section className="container bg-brown mx-auto px-4 py-16 pt-24 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to Die Wunderlampe
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/our_story/VSP_2024_0405_by_viktor_strasse 1.png"
            alt="Hero About"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

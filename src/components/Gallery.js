'use client';

import Image from "next/image";

export function Gallery() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1082px] mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative aspect-[4/3]">
              <Image
                src={`/img${num}.png`}
                alt={`Gallery Image ${num}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

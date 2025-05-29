'use client';

export function RunningText() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black z-[100] overflow-hidden whitespace-nowrap py-3">
      <div className="animate-marquee2 inline-block absolute top-0">
        <span className="text-white text-sm md:text-base mx-4">
          🚧 This website is still under development and not finished yet! Some features might not work as expected. 🚧
        </span>
      </div>
    </div>
  );
}

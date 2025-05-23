"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "../../public/not_found/animation_notfound.json";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#28160A] flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-[600px] mx-auto">
        {/* Lottie Animation */}
        <div className="w-[200px] md:w-[300px] mx-auto mt-18 mb-8">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <p className="text-lg md:text-xl mb-8 font-poppins">
          We&apos;re currently working on this page. Please check back later.
        </p>
        <Link
          href="/"
          className="bg-[#B9873B] text-white px-8 py-3 rounded-4xl hover:opacity-90 transition-all button-shadow font-poppins font-bold inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

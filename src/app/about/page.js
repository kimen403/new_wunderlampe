"use client";

import { HeroAbout } from "@/components/HeroAbout";
import { OurStory } from "@/components/OurStory";
import { Awards } from "@/components/Awards";
import { Footer } from "@/components/Footer";
import { News } from "@/components/News";
import { AwardsHome } from "@/components/AwardsHome";

export default function AboutUsPage() {
  return (
    <main
      className="min-h-screen transition-all duration-1000 relative gradient-edges pt-16 md:pt-20"
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
      <HeroAbout />
      <OurStory />
      <AwardsHome />
      <Awards />
      <News />
      <Footer />
    </main>
  );
}

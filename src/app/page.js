'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Hero } from "@/components/Hero";
import { Business } from "@/components/Business";
import { Profile } from "@/components/Profile";
import { Maps } from "@/components/Maps";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero />
      <Business />
      <Profile />
      <Maps />
      <Contact />
      <Footer />
    </main>
  );
}

'use client';

import Image from "next/image";
import Link from "next/link";

export function SocialBar({ className = "" }) {
  const socials = [
    {
      name: "Facebook",
      icon: "/hero-fb.png",
      url: "https://www.facebook.com/wunderlampe.trier/?locale=de_DE",
    },
    {
      name: "Instagram",
      icon: "/hero-ig.png",
      url: "https://www.instagram.com/die_wunderlampe_trier/?hl=de",
    },
    {
      name: "TikTok",
      icon: "/hero-tt.png",
      url: "https://tiktok.com",
    },
  ];

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={48}
            height={48}
            className="w-12 h-12 md:w-[68px] md:h-[68px] hover:scale-110 transition-transform"
          />
        </Link>
      ))}
    </div>
  );
}

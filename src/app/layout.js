import { Aladin, JetBrains_Mono, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { FloatingButton } from "@/components/FloatingButton";
import { RunningText } from "@/components/RunningText";
import "./globals.css";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Wunderlampe Restaurant",
  description: "Authentic cuisine and delightful dining experiences",
  keywords: ["restaurant", "food", "dining"],
  authors: [{ name: "Devmosel" }],
  openGraph: {
    title: "Wunderlampe Restaurant",
    description: "Authentic cuisine and delightful dining experiences",
    url: "https://diewunderlampe.de",
    siteName: "Wunderlampe",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wunderlampe Restaurant",
    description: "Authentic cuisine and delightful dining experiences",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  robots: "index, follow",
};

export const fonts = {
  aladin,
  jetbrainsMono,
  poppins,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${poppins.className} antialiased bg-brown max-w-[1400px] mx-auto font-poppins`}
      >
        <LanguageProvider>
          <RunningText />
          <Header />
          {children}
          <FloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

import { Aladin, JetBrains_Mono, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { FloatingButton } from "@/components/FloatingButton";
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
  authors: [{ name: "Your Name" }],
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
  viewport: "width=device-width, initial-scale=1",
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
        className={`${poppins.className} antialiased bg-white font-poppins`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <FloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

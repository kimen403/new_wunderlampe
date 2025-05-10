'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Business() {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-button-blue-gradient rounded-lg p-6 flex flex-col border-golden-gradient">
            <div className="flex justify-center">
              <Image
                src="/wunderlampe.png"
                alt="Wunderlampe"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="mt-3 text-black text-center text-xl text-shadow">
              <p className="description">{t('business.description')}</p>
              <p className="address mt-4">{t('business.address')}</p>
              <p className="tel mt-2">{t('business.tel')}</p>
              
              {/* Services */}
              <div className="mt-3 space-y-2 text-shadow">
                <p>{t('business.service.services')}</p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="mt-auto pt-3 flex gap-4">
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.menu')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.order')}
              </button>
              <button className="button-shadow cursor-pointer text-shadow flex-1 bg-button-purple-gradient hover:bg-white/30 text-white py-2 px-4 rounded transition-colors text-center">
                {t('business.buttons.more')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

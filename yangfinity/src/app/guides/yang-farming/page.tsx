import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Yang Farming Guide - Yangfinity",
  description: "Complete guide to farming Yang in Metin2. Learn the best strategies, locations, and equipment for efficient Yang farming."
};

export default function YangFarmingPage() {
  const t = useTranslations('guides.items.yang-farming');
  const tc = useTranslations('guides.content');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/guides" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            {tc('backToGuides')}
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('description')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Top Yang & Won Farming Tips</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Daily Quests:</strong> Complete all daily quests for guaranteed Yang & Won</li>
              <li><strong>Boss Hunting:</strong> Group boss hunts for rare items worth millions</li>
              <li><strong>Grind Efficiently:</strong> Choose high-density monster areas</li>
              <li><strong>Auto-Pickup Pet:</strong> Never miss drops, increases profit 20-30%</li>
              <li><strong>Sell Items Wisely:</strong> Research market prices before selling</li>
              <li><strong>Event Participation:</strong> Server events often have huge rewards</li>
              <li><strong>Upgrade & Sell:</strong> Buy cheap items, upgrade them, sell for profit</li>
              <li><strong>Farming Routes:</strong> Create efficient circular routes</li>
              <li><strong>Peak Hours:</strong> Farm during off-peak for less competition</li>
              <li><strong>Alchemy:</strong> Craft valuable potions to sell</li>
            </ul>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💡 Pro Tip</h3>
            <p>Buying Yang & Won from Yangfinity is often more time-efficient than farming. Calculate your real hourly farming rate and compare!</p>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              {tc('browseProducts')}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

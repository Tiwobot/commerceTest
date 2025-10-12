import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Yang Farming Tips - Yangfinity",
  description: "Expert tips for farming Yang in Metin2. Learn the best locations, equipment, and strategies for efficient Yang farming."
};

export default function YangFarmingTipsBlogPage() {
  const t = useTranslations('blog.posts.yang-farming-tips');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-neutral-800 text-[#b6e700] text-xs font-semibold rounded-full">
              {t('category')}
            </span>
            <span className="text-sm text-neutral-500">6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('excerpt')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Top 10 Farming Tips</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>Daily Quests First:</strong> Always complete dailies - guaranteed Yang & Won with minimal effort</li>
              <li><strong>Invest in Auto-Pickup Pet:</strong> Increases Yang & Won collection by 25-30%</li>
              <li><strong>Farm During Off-Peak Hours:</strong> Less competition = more monster kills</li>
              <li><strong>Focus on High-Density Areas:</strong> More mobs per square meter = more Yang & Won per hour</li>
              <li><strong>Sell Everything:</strong> Don&apos;t hoard - convert items to Yang & Won immediately</li>
              <li><strong>Join Boss Groups:</strong> Rare drops can net millions of Yang & Won</li>
              <li><strong>Use Drop Rate Buffs:</strong> Events and items that boost drop rates pay for themselves</li>
              <li><strong>Optimize Your Build:</strong> AOE damage for farming, not single-target DPS</li>
              <li><strong>Create a Farming Route:</strong> Efficient circular paths minimize downtime</li>
              <li><strong>Track Your Earnings:</strong> Calculate Yang & Won per hour to optimize</li>
            </ol>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💡 Expert Tip</h3>
            <p>The average player farms 5-10 million Yang & Won per hour. If your real-world hourly rate is higher, buying from Yangfinity is actually more efficient!</p>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Skip the grind?</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              Buy Yang & Won Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}


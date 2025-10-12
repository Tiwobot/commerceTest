import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Metin2 Server Population Guide - Yangfinity",
  description: "Guide to understanding Metin2 server population and its impact on Yang & Won trading and gameplay."
};

export default function ServerPopulationBlogPage() {
  const t = useTranslations('blog.posts.metin2-server-population-guide');
  
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
            <span className="text-sm text-neutral-500">5 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('excerpt')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Most Populated Servers 2024</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#b6e700] pl-4">
                <h3 className="font-bold text-[#b6e700]">🥇 Gameforge West (Eostre, Teutonia)</h3>
                <p>Population: Very High | Economy: Active | Best for new players</p>
              </div>
              <div className="border-l-4 border-[#b6e700] pl-4">
                <h3 className="font-bold text-[#b6e700]">🥈 Gameforge East (Europe)</h3>
                <p>Population: High | Economy: Stable | Great for English speakers</p>
              </div>
              <div className="border-l-4 border-[#b6e700] pl-4">
                <h3 className="font-bold text-[#b6e700]">🥉 Ruby Chimera (Private)</h3>
                <p>Population: High | Economy: Inflated | Custom features</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Ready to buy Yang & Won?</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              Browse Yang & Won Products
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}


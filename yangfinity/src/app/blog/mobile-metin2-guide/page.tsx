'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function MobileMetin2GuideBlogPage() {
  const t = useTranslations('blog.posts.mobile-metin2-guide');
  
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
            <h2 className="text-2xl font-bold text-white mb-4">Mobile Metin2 Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Auto-Play System:</strong> Let the game farm for you while you work or sleep</li>
              <li><strong>Cloud Saves:</strong> Switch between devices seamlessly</li>
              <li><strong>Touch Optimized:</strong> Intuitive controls designed for mobile</li>
              <li><strong>Lower Yang & Won Prices:</strong> Mobile economy is generally 20-30% cheaper</li>
              <li><strong>Quick Sessions:</strong> Perfect for commuting or short breaks</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">✅ Advantages</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Play anywhere, anytime</li>
                <li>Auto-play features</li>
                <li>Lower Yang & Won costs</li>
                <li>Faster progression</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">⚠️ Considerations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Battery drain</li>
                <li>Smaller screen</li>
                <li>Less social features</li>
                <li>Data usage</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Get Yang & Won for Mobile</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              Browse Mobile Yang & Won
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}


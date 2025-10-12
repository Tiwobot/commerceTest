import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Gameforge vs Private Servers - Yangfinity",
  description: "Compare Gameforge official servers vs private servers for Metin2 Yang & Won trading. Learn the pros and cons of each option."
};

export default function GameforgeVsPrivatePage() {
  const t = useTranslations('blog.posts.gameforge-vs-private-servers');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <span className="inline-block bg-neutral-800 text-[#b6e700] text-xs px-3 py-1 rounded-full mb-4">
            {t('category')}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>January 10, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="text-neutral-300 space-y-6">
          <p className="text-lg text-neutral-200">
            Choosing between Gameforge official servers and private servers is crucial for your Metin2 experience. 
            This guide compares both options to help you make an informed decision.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Gameforge Official Servers</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Currency: Won</h3>
          <p>
            Gameforge servers use <strong>Won</strong> as their primary currency.
          </p>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Advantages:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Stability</strong> - Official servers rarely shut down</li>
              <li><strong>Regular Updates</strong> - New content and events frequently</li>
              <li><strong>Active Community</strong> - Large player base</li>
              <li><strong>Customer Support</strong> - Official GM support</li>
              <li><strong>Anti-Cheat</strong> - Better security measures</li>
              <li><strong>Long-term Investment</strong> - Your progress is safer</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Disadvantages:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Higher Prices</strong> - Won costs more than private server Yang</li>
              <li><strong>Slower Progression</strong> - Standard exp rates</li>
              <li><strong>Strict Rules</strong> - Buying Won can violate TOS</li>
              <li><strong>Currency Locked</strong> - Won cannot be transferred between servers easily</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Private Servers</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Currency: Yang</h3>
          <p>
            Private servers typically use <strong>Yang</strong> as their currency.
          </p>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Advantages:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Lower Prices</strong> - Yang is generally cheaper</li>
              <li><strong>Faster Rates</strong> - Higher exp/drop rates</li>
              <li><strong>Custom Content</strong> - Unique features and items</li>
              <li><strong>More Lenient</strong> - Buying Yang often allowed</li>
              <li><strong>Community Driven</strong> - Direct interaction with admins</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Disadvantages:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Server Stability</strong> - Servers can shut down unexpectedly</li>
              <li><strong>Population</strong> - Varies greatly between servers</li>
              <li><strong>Updates</strong> - Less frequent than official servers</li>
              <li><strong>Support</strong> - Limited customer support</li>
              <li><strong>Investment Risk</strong> - Your progress could be lost</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Price Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-800 my-6">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Server Type</th>
                  <th className="border border-neutral-800 p-3 text-left">Currency</th>
                  <th className="border border-neutral-800 p-3 text-left">Avg. Price</th>
                  <th className="border border-neutral-800 p-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Gameforge West</td>
                  <td className="border border-neutral-800 p-3">Won</td>
                  <td className="border border-neutral-800 p-3">€0.30-€2.00/billion</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">Medium</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Gameforge East</td>
                  <td className="border border-neutral-800 p-3">Won</td>
                  <td className="border border-neutral-800 p-3">€0.40-€2.25/billion</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">Medium</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Private Servers</td>
                  <td className="border border-neutral-800 p-3">Yang</td>
                  <td className="border border-neutral-800 p-3">€10/package</td>
                  <td className="border border-neutral-800 p-3 text-green-400">High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Which Should You Choose?</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Choose Gameforge If:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You want long-term, stable gameplay</li>
            <li>You prefer official support and regular updates</li>
              <li>You&apos;re willing to pay premium prices for stability</li>
              <li>You value a large, active community</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Choose Private Servers If:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You want faster progression and custom content</li>
              <li>You&apos;re looking for better value for money</li>
              <li>You&apos;re okay with potential server instability</li>
            <li>You enjoy unique, community-driven features</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yangfinity&apos;s Recommendation</h2>
          <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6 my-6">
            <p>
              For <strong>beginners</strong>, we recommend starting with <strong>Gameforge servers</strong> for stability and support. 
              Once you&apos;re familiar with the game, exploring private servers can offer exciting new experiences.
            </p>
            <p className="mt-4">
              For <strong>experienced players</strong>, private servers often provide better value and unique content that can refresh your Metin2 experience.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-neutral-300 mb-6">
            Browse our Yang & Won products for both Gameforge and Private servers.
          </p>
          <Link 
            href="/products"
            className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20"
          >
            View All Products
          </Link>
        </div>
      </article>
    </div>
  );
}


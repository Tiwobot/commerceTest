'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function GameforgeVsPrivatePage() {
  const t = useTranslations('guides.items.gameforge-vs-private');
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
          <p className="text-lg text-neutral-200">
            Choosing between Gameforge official servers and private servers significantly impacts your Metin2 experience. 
            This comprehensive comparison will help you decide which type of Yang & Won to buy based on your playstyle, 
            budget, and preferences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Gameforge Official Servers</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Currency: Won</h3>
          <p>
            Gameforge servers use <strong>Won</strong> as their primary currency. These are the official, licensed servers 
            operated by Gameforge in Europe, Middle East, and Turkey.
          </p>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Advantages of Gameforge:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Maximum Stability:</strong> Official servers have 99%+ uptime, rarely shut down</li>
              <li><strong>Regular Content Updates:</strong> New dungeons, events, and features every few months</li>
              <li><strong>Large Player Base:</strong> Thousands of active players, vibrant economy</li>
              <li><strong>Official Customer Support:</strong> Real GMs who respond to issues</li>
              <li><strong>Strong Anti-Cheat:</strong> Automated systems detect and ban cheaters</li>
              <li><strong>Long-term Investment:</strong> Your progress is secure for years</li>
              <li><strong>Balanced Economy:</strong> Controlled inflation, stable prices</li>
              <li><strong>Professional Management:</strong> Company with legal obligations to players</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Disadvantages of Gameforge:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Higher Won Prices:</strong> Official currency costs 2-3x more than private server Yang</li>
              <li><strong>Slower Progression:</strong> Standard exp rates (1x), takes months to reach max level</li>
              <li><strong>Strict Terms of Service:</strong> Buying Won technically violates TOS (though rarely enforced)</li>
              <li><strong>Pay-to-Win Elements:</strong> Item Mall gives advantages to paying players</li>
              <li><strong>Server Transfer Costs:</strong> Moving Won between servers is expensive</li>
              <li><strong>Limited Customization:</strong> Stuck with official content only</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Popular Gameforge Servers:</h3>
          <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Gameforge West</h4>
              <p className="text-sm">Eostre, Teutonia, Germania</p>
              <p className="text-xs text-neutral-400 mt-2">Population: Very High</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Gameforge East</h4>
              <p className="text-sm">Europe, Tigerghost</p>
              <p className="text-xs text-neutral-400 mt-2">Population: High</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Gameforge TR</h4>
              <p className="text-sm">Onyx, Azrael, Ruby</p>
              <p className="text-xs text-neutral-400 mt-2">Population: Very High</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Private Servers</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Currency: Yang</h3>
          <p>
            Private servers are community-run alternatives using <strong>Yang</strong> as currency. These servers offer 
            customized experiences with varied rates, features, and rulesets.
          </p>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Advantages of Private Servers:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Lower Yang Prices:</strong> 50-70% cheaper than Gameforge Won</li>
              <li><strong>Faster Progression:</strong> 5x-100x exp rates, reach endgame in days/weeks</li>
              <li><strong>Custom Content:</strong> Unique dungeons, items, and gameplay mechanics</li>
              <li><strong>Lenient Rules:</strong> Buying Yang is openly allowed and encouraged</li>
              <li><strong>Higher Drop Rates:</strong> More rewarding farming experience</li>
              <li><strong>Community Driven:</strong> Direct feedback to admins, player influence</li>
              <li><strong>Varied Options:</strong> Find servers matching your preferred playstyle</li>
              <li><strong>No Pay-to-Win:</strong> Many private servers have balanced donation systems</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Disadvantages of Private Servers:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Server Instability:</strong> Servers can shut down with little warning</li>
              <li><strong>Variable Population:</strong> Can range from 50 to 5000 players</li>
              <li><strong>Infrequent Updates:</strong> Development depends on small team resources</li>
              <li><strong>Limited Support:</strong> Support quality varies greatly</li>
              <li><strong>Investment Risk:</strong> Your time and money could be lost if server closes</li>
              <li><strong>Potential Bugs:</strong> Custom content may have more bugs</li>
              <li><strong>Economy Issues:</strong> Inflation can be extreme on some servers</li>
              <li><strong>Admin Abuse:</strong> Rare but possible - unfair advantages to friends</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Popular Private Servers:</h3>
          <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Ruby Chimera</h4>
              <p className="text-sm">Mid-rate, established</p>
              <p className="text-xs text-neutral-400 mt-2">Population: High</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Emerald Aurora</h4>
              <p className="text-sm">Low-rate, old-school</p>
              <p className="text-xs text-neutral-400 mt-2">Population: Medium</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-[#b6e700] mb-2">Others</h4>
              <p className="text-sm">Various rates & styles</p>
              <p className="text-xs text-neutral-400 mt-2">Check our products page</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Price & Value Comparison</h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Factor</th>
                  <th className="border border-neutral-800 p-3 text-left">Gameforge</th>
                  <th className="border border-neutral-800 p-3 text-left">Private Servers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Currency Name</td>
                  <td className="border border-neutral-800 p-3"><strong>Won</strong></td>
                  <td className="border border-neutral-800 p-3"><strong>Yang</strong></td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Avg. Price/Billion</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">€0.30-€2.00</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Package deals</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Stability</td>
                  <td className="border border-neutral-800 p-3 text-green-400">★★★★★</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">★★★☆☆</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Progression Speed</td>
                  <td className="border border-neutral-800 p-3">Slow (1x)</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Fast (5-100x)</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Player Base</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Very Large</td>
                  <td className="border border-neutral-800 p-3">Variable</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Updates</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Regular</td>
                  <td className="border border-neutral-800 p-3">Varies</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Best For</td>
                  <td className="border border-neutral-800 p-3">Long-term players</td>
                  <td className="border border-neutral-800 p-3">Casual/Experimental</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Which Should You Choose?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Choose Gameforge If:</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ You want guaranteed long-term stability</li>
                <li>✓ You prefer official support and regular updates</li>
                <li>✓ You&apos;re willing to invest more money for security</li>
                <li>✓ You value a large, active community</li>
                <li>✓ You&apos;re a completionist who plans to play for years</li>
                <li>✓ You want balanced, fair gameplay</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Choose Private Servers If:</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ You want faster progression and endgame content</li>
                <li>✓ You&apos;re looking for better value for money</li>
                <li>✓ You enjoy unique, custom content and features</li>
                <li>✓ You&apos;re okay with potential server instability</li>
                <li>✓ You want to experiment with different playstyles</li>
                <li>✓ You prefer higher drop rates and rewarding farming</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yangfinity&apos;s Recommendation</h2>
          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <p className="mb-4">
              For <strong>beginners</strong>, we recommend starting with <strong>Gameforge servers</strong>. The stability, 
              support, and large player base provide the best learning environment. Once you understand the game mechanics, 
              exploring private servers can offer exciting new experiences.
            </p>
            <p className="mb-4">
              For <strong>experienced players</strong>, private servers often provide better value and unique content that 
              can refresh your Metin2 experience. Just research server reputation before investing.
            </p>
            <p>
              For <strong>casual players</strong>, private servers with higher rates let you experience endgame content 
              without months of grinding, making them ideal for limited playtime.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Final Decision Matrix</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <p className="font-semibold text-white mb-3">Quick Decision Helper:</p>
            <ul className="space-y-2">
              <li><strong>Budget Limited?</strong> → Private Servers (lower Yang prices)</li>
              <li><strong>Time Limited?</strong> → Private Servers (faster progression)</li>
              <li><strong>Want Security?</strong> → Gameforge (guaranteed stability)</li>
              <li><strong>Competitive Player?</strong> → Gameforge (larger PvP scene)</li>
              <li><strong>Casual Gamer?</strong> → Private Servers (flexible experience)</li>
              <li><strong>First-Time Player?</strong> → Gameforge (official experience)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
          <p className="text-neutral-300 mb-6">
            Browse our Yang & Won products for both Gameforge and Private servers.
          </p>
          <Link 
            href="/products"
            className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20"
          >
            {tc('browseProducts')}
          </Link>
        </div>
      </article>
    </div>
  );
}

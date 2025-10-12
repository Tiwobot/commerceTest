import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Server Population Guide - Yangfinity",
  description: "Understanding Metin2 server population and its impact on Yang & Won trading. Learn how population affects prices and trading opportunities."
};

export default function ServerPopulationPage() {
  const t = useTranslations('guides.items.server-population');
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
            Server population directly impacts your Metin2 experience - from economy activity to PvP availability. 
            This guide helps you find the most active servers where your Yang & Won investment will have the best value.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Server Population Matters</h2>
          <p>Population affects every aspect of gameplay:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Active Economy:</strong> More buyers and sellers = fair prices and easy trades</li>
            <li><strong>Group Content:</strong> Find parties for dungeons and boss hunts easily</li>
            <li><strong>PvP Action:</strong> More opponents for competitive gameplay</li>
            <li><strong>Guild Wars:</strong> Active guild scene with regular wars</li>
            <li><strong>Market Liquidity:</strong> Sell items quickly without waiting days</li>
            <li><strong>Server Longevity:</strong> High-pop servers are less likely to close</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Most Populated Servers 2024</h2>

          <h3 className="text-xl font-semibold text-[#b6e700] mt-6 mb-3">Gameforge West (Top Tier)</h3>
          <div className="space-y-4 my-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">🥇 Eostre</h4>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">Very High</span>
              </div>
              <p className="mb-2"><strong>Average Online:</strong> 3,000-5,000 players</p>
              <p className="mb-2"><strong>Peak Times:</strong> 18:00-23:00 CET (6,000+ players)</p>
              <p className="mb-2"><strong>Economy:</strong> Extremely active, best market liquidity</p>
              <p className="mb-2"><strong>Best For:</strong> Traders, PvP players, social gamers</p>
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <p className="text-sm text-neutral-400">✓ Most active server ✓ Constant guild wars ✓ Easy to find groups</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">🥈 Teutonia</h4>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">Very High</span>
              </div>
              <p className="mb-2"><strong>Average Online:</strong> 2,500-4,500 players</p>
              <p className="mb-2"><strong>Peak Times:</strong> 19:00-00:00 CET (5,000+ players)</p>
              <p className="mb-2"><strong>Economy:</strong> Very active, competitive prices</p>
              <p className="mb-2"><strong>Best For:</strong> All playstyles, balanced community</p>
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <p className="text-sm text-neutral-400">✓ Friendly community ✓ Active economy ✓ Regular events</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">🥉 Germania</h4>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">High</span>
              </div>
              <p className="mb-2"><strong>Average Online:</strong> 2,000-3,500 players</p>
              <p className="mb-2"><strong>Peak Times:</strong> 18:00-22:00 CET (4,000+ players)</p>
              <p className="mb-2"><strong>Economy:</strong> Active, slightly lower prices</p>
              <p className="mb-2"><strong>Best For:</strong> German speakers, PvE focus</p>
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <p className="text-sm text-neutral-400">✓ German community ✓ Lower Yang & Won prices ✓ PvE oriented</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-[#b6e700] mt-6 mb-3">Gameforge East (High Tier)</h3>
          <div className="space-y-4 my-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">Europa / Europe</h4>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">High</span>
              </div>
              <p className="mb-2"><strong>Average Online:</strong> 1,800-3,000 players</p>
              <p className="mb-2"><strong>Peak Times:</strong> 19:00-23:00 CET (3,500+ players)</p>
              <p className="mb-2"><strong>Economy:</strong> Active, international community</p>
              <p className="mb-2"><strong>Best For:</strong> English speakers, balanced gameplay</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-white">Tigerghost</h4>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">Medium-High</span>
              </div>
              <p className="mb-2"><strong>Average Online:</strong> 1,500-2,500 players</p>
              <p className="mb-2"><strong>Peak Times:</strong> 20:00-01:00 CET (3,000 players)</p>
              <p className="mb-2"><strong>Economy:</strong> Stable, night-owl friendly</p>
              <p className="mb-2"><strong>Best For:</strong> Late-night players, UK timezone</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-[#b6e700] mt-6 mb-3">Gameforge TR (Turkey - Very High)</h3>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <p className="mb-4">Turkish servers have massive populations but different economy dynamics:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Onyx, Ruby, Azrael:</strong> 5,000-8,000+ players during peak</li>
              <li><strong>Language:</strong> Primarily Turkish-speaking community</li>
              <li><strong>Economy:</strong> Hyperinflated, different Won pricing</li>
              <li><strong>Best For:</strong> Turkish speakers, extremely active PvP</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-[#b6e700] mt-6 mb-3">Private Servers (Variable)</h3>
          <div className="space-y-4 my-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Ruby Chimera</h4>
              <p className="mb-2"><strong>Type:</strong> Mid-rate private server</p>
              <p className="mb-2"><strong>Population:</strong> 800-1,500 players</p>
              <p className="mb-2"><strong>Stability:</strong> 3+ years active - excellent for private server</p>
              <p className="mb-2"><strong>Yang Price:</strong> Very affordable</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Emerald Aurora</h4>
              <p className="mb-2"><strong>Type:</strong> Low-rate old-school</p>
              <p className="mb-2"><strong>Population:</strong> 300-600 players</p>
              <p className="mb-2"><strong>Stability:</strong> 2+ years, dedicated community</p>
              <p className="mb-2"><strong>Yang Price:</strong> Lower than Gameforge</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Check Server Population</h2>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">Method 1: In-Game Check</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Log into the server during peak hours (18:00-23:00 your timezone)</li>
              <li>Visit main cities: Map1 Capital, Map2 Capital</li>
              <li>Count shops in marketplace - 100+ shops = healthy population</li>
              <li>Check guild rankings - 50+ active guilds = good sign</li>
              <li>Look for chat activity - frequent trades and LFG messages</li>
            </ol>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">Method 2: Third-Party Trackers</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Metin2Wiki population stats (for Gameforge servers)</li>
              <li>Server ranking websites (for private servers)</li>
              <li>Community Discord servers - ask active players</li>
              <li>Reddit r/metin2 - server comparison threads</li>
            </ul>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">Method 3: Economic Indicators</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Shop Count:</strong> More shops = more active traders</li>
              <li><strong>Item Prices:</strong> Competitive prices = healthy economy</li>
              <li><strong>Trade Chat:</strong> Active WTS/WTB = liquid market</li>
              <li><strong>Guild Activity:</strong> Active recruitment = thriving community</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Peak Times by Region</h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Region</th>
                  <th className="border border-neutral-800 p-3 text-left">Peak Time</th>
                  <th className="border border-neutral-800 p-3 text-left">Best Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Germany/Central EU</td>
                  <td className="border border-neutral-800 p-3">18:00-23:00 CET</td>
                  <td className="border border-neutral-800 p-3">Friday-Sunday</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">UK/Western EU</td>
                  <td className="border border-neutral-800 p-3">19:00-00:00 GMT</td>
                  <td className="border border-neutral-800 p-3">Saturday-Sunday</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Turkey</td>
                  <td className="border border-neutral-800 p-3">20:00-02:00 TRT</td>
                  <td className="border border-neutral-800 p-3">All week</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Eastern EU</td>
                  <td className="border border-neutral-800 p-3">19:00-01:00 EET</td>
                  <td className="border border-neutral-800 p-3">Friday-Saturday</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Population Trends to Watch</h2>
          
          <div className="space-y-4">
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Healthy Signs:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Population stable or growing month-over-month</li>
                <li>Active recruitment in guilds</li>
                <li>Regular server events with good attendance</li>
                <li>New players asking questions in chat</li>
                <li>Marketplace constantly refreshing with new shops</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Warning Signs:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Declining population for 3+ months</li>
                <li>Top guilds disbanding or leaving</li>
                <li>Long queue times for dungeons/PvP</li>
                <li>Items listed for weeks without selling</li>
                <li>Admin announcements becoming rare</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Server for Your Playstyle</h2>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <p className="font-semibold text-white mb-3">Quick Match Guide:</p>
            <ul className="space-y-2">
              <li><strong>Hardcore Trader?</strong> → Eostre (highest liquidity)</li>
              <li><strong>PvP Focused?</strong> → Teutonia (active guild wars)</li>
              <li><strong>Social Player?</strong> → Europa (international community)</li>
              <li><strong>Night Owl?</strong> → Tigerghost (active late nights)</li>
              <li><strong>Budget Conscious?</strong> → Private servers (lower Yang prices)</li>
              <li><strong>Turkish Speaker?</strong> → Turkish servers (massive population)</li>
              <li><strong>Beginner?</strong> → Germania (friendly, helpful community)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yang & Won Value by Population</h2>
          <p className="mb-4">Server population directly affects your Yang & Won investment value:</p>
          
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">High Population</h4>
              <p className="text-sm mb-2">3,000+ players</p>
              <ul className="text-xs space-y-1">
                <li>✓ Best market liquidity</li>
                <li>✓ Competitive prices</li>
                <li>✓ Easy to spend/earn</li>
                <li>✗ Slightly higher prices</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">Medium Population</h4>
              <p className="text-sm mb-2">1,000-3,000 players</p>
              <ul className="text-xs space-y-1">
                <li>✓ Good market activity</li>
                <li>✓ Fair prices</li>
                <li>~ May wait for sales</li>
                <li>~ Limited rare items</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">Low Population</h4>
              <p className="text-sm mb-2">&lt;1,000 players</p>
              <ul className="text-xs space-y-1">
                <li>✓ Lower prices</li>
                <li>✗ Slow to sell items</li>
                <li>✗ Limited buyers</li>
                <li>✗ Server risk</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💡 Pro Tip</h3>
            <p>
              When buying Yang & Won, choose servers with 1,500+ active players. This ensures your currency has real value 
              in an active economy. Lower population servers may have cheaper Yang, but items are harder to buy/sell, reducing 
              actual purchasing power.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
          <p className="text-neutral-300 mb-6">
            Browse Yang & Won for all popular servers - high and low population options available.
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

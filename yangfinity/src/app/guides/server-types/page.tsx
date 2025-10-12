import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Metin2 Server Types Guide - Yangfinity",
  description: "Complete guide to different Metin2 server types. Learn about official servers, private servers, and their impact on Yang & Won trading."
};

export default function ServerTypesPage() {
  const t = useTranslations('guides.items.server-types');
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
            Metin2 servers come in various types with different rates, features, and economies. Understanding server types 
            helps you choose where to invest your Yang & Won and what gameplay experience to expect.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Main Server Categories</h2>

          <div className="space-y-6">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Official (Low-Rate) Servers</h3>
              <p className="mb-4"><strong>Examples:</strong> All Gameforge servers (Eostre, Teutonia, Germania, Europa, etc.)</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div>
                  <h4 className="font-bold text-white mb-3">Core Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>EXP Rate:</strong> 1x (default Metin2)</li>
                    <li><strong>Drop Rate:</strong> 1x (standard drops)</li>
                    <li><strong>Yang Drop:</strong> 1x (slow accumulation)</li>
                    <li><strong>Max Level:</strong> Gradually increasing</li>
                    <li><strong>Progression:</strong> 3-6 months to max level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Yang & Won Economy:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Currency:</strong> Won (official)</li>
                    <li><strong>Inflation:</strong> Controlled, slow</li>
                    <li><strong>Prices:</strong> €0.30-€2.00/billion</li>
                    <li><strong>Market:</strong> Extremely stable</li>
                    <li><strong>Value:</strong> Holds long-term</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>✅ Best For:</strong> Players seeking authentic Metin2 experience, long-term investment, 
                stable economy, competitive end-game content</p>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mt-2">
                <p className="text-sm"><strong>❌ Not Ideal For:</strong> Casual players with limited time, those wanting quick 
                progression, players on tight budgets</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Mid-Rate Servers (2x-10x)</h3>
              <p className="mb-4"><strong>Examples:</strong> Ruby Chimera, many established private servers</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div>
                  <h4 className="font-bold text-white mb-3">Core Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>EXP Rate:</strong> 2x-10x (faster leveling)</li>
                    <li><strong>Drop Rate:</strong> 2x-5x (better drops)</li>
                    <li><strong>Yang Drop:</strong> 3x-10x (quicker wealth)</li>
                    <li><strong>Max Level:</strong> Often 105-120</li>
                    <li><strong>Progression:</strong> 2-8 weeks to max</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Yang Economy:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Currency:</strong> Yang</li>
                    <li><strong>Inflation:</strong> Moderate</li>
                    <li><strong>Prices:</strong> Package deals (~€10)</li>
                    <li><strong>Market:</strong> Active, balanced</li>
                    <li><strong>Value:</strong> Good purchasing power</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>✅ Best For:</strong> Balanced experience, players with moderate time, 
                those who want faster progression but still enjoy the journey</p>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mt-2">
                <p className="text-sm"><strong>❌ Not Ideal For:</strong> Purists wanting authentic experience, 
                players seeking instant gratification</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">High-Rate Servers (10x-50x)</h3>
              <p className="mb-4"><strong>Examples:</strong> Many PvP-focused private servers</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div>
                  <h4 className="font-bold text-white mb-3">Core Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>EXP Rate:</strong> 10x-50x (very fast)</li>
                    <li><strong>Drop Rate:</strong> 5x-20x (frequent drops)</li>
                    <li><strong>Yang Drop:</strong> 10x-50x (easy wealth)</li>
                    <li><strong>Max Level:</strong> Often 120-150</li>
                    <li><strong>Progression:</strong> Days to max level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Yang Economy:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Currency:</strong> Yang</li>
                    <li><strong>Inflation:</strong> High</li>
                    <li><strong>Prices:</strong> Low real money cost</li>
                    <li><strong>Market:</strong> Volatile</li>
                    <li><strong>Value:</strong> Decreases over time</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>✅ Best For:</strong> PvP enthusiasts, casual players, testing builds, 
                those with limited playtime who want endgame quickly</p>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mt-2">
                <p className="text-sm"><strong>❌ Not Ideal For:</strong> Players who enjoy progression, 
                long-term investment seekers, those wanting challenge</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Ultra High-Rate (50x-1000x)</h3>
              <p className="mb-4"><strong>Examples:</strong> Fun servers, test servers</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div>
                  <h4 className="font-bold text-white mb-3">Core Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>EXP Rate:</strong> 50x-1000x (instant max)</li>
                    <li><strong>Drop Rate:</strong> 20x-100x (constant drops)</li>
                    <li><strong>Yang Drop:</strong> 50x-1000x (billions easily)</li>
                    <li><strong>Max Level:</strong> Variable, often 250+</li>
                    <li><strong>Progression:</strong> Hours to max level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Yang Economy:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Currency:</strong> Yang (often free)</li>
                    <li><strong>Inflation:</strong> Extreme</li>
                    <li><strong>Prices:</strong> Minimal or donation-based</li>
                    <li><strong>Market:</strong> Chaotic</li>
                    <li><strong>Value:</strong> Nearly worthless</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm"><strong>✅ Best For:</strong> Fun/casual play, testing mechanics, pure PvP focus, 
                players who don&apos;t want to invest time or money</p>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mt-2">
                <p className="text-sm"><strong>❌ Not Ideal For:</strong> Serious players, anyone seeking progression 
                satisfaction, long-term gameplay</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Specialized Server Types</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">PvP Servers</h3>
              <p className="mb-3">Focus on player-vs-player combat with special features:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Fast leveling to reach PvP-ready state quickly</li>
                <li>Balanced classes for fair combat</li>
                <li>Arena systems and tournaments</li>
                <li>Guild war focused content</li>
                <li>Yang primarily for PvP gear upgrades</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">PvE/Farming Servers</h3>
              <p className="mb-3">Optimized for monster farming and item collection:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Higher drop rates for rare items</li>
                <li>Custom dungeons and raids</li>
                <li>Boss hunting focus</li>
                <li>Item crafting systems</li>
                <li>Yang used for trading farmed items</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Old-School Servers</h3>
              <p className="mb-3">Nostalgic experience with original Metin2 content:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Cap at level 85-90 (like old Metin2)</li>
                <li>No modern items or dungeons</li>
                <li>Classic map designs</li>
                <li>Authentic economy simulation</li>
                <li>Yang & Won values similar to 2008-2012 era</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yang & Won Value by Server Type</h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Server Type</th>
                  <th className="border border-neutral-800 p-3 text-left">Rates</th>
                  <th className="border border-neutral-800 p-3 text-left">Real $ Value</th>
                  <th className="border border-neutral-800 p-3 text-left">Purchasing Power</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Official/Low-Rate</td>
                  <td className="border border-neutral-800 p-3">1x</td>
                  <td className="border border-neutral-800 p-3 text-green-400">High</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Excellent</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Mid-Rate</td>
                  <td className="border border-neutral-800 p-3">2x-10x</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">Medium</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Good</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">High-Rate</td>
                  <td className="border border-neutral-800 p-3">10x-50x</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">Low-Medium</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">Fair</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Ultra High-Rate</td>
                  <td className="border border-neutral-800 p-3">50x+</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Very Low</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Minimal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Choosing the Right Server Type</h2>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">Decision Matrix</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#b6e700] font-bold min-w-[150px]">Available Time:</span>
                <span>1-2 hrs/day → High-rate | 3-5 hrs/day → Mid-rate | 5+ hrs/day → Low-rate</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b6e700] font-bold min-w-[150px]">Budget:</span>
                <span>Low → High-rate | Medium → Mid-rate | Flexible → Official</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b6e700] font-bold min-w-[150px]">Playstyle:</span>
                <span>PvP → High-rate | Balanced → Mid-rate | PvE/Trade → Official</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b6e700] font-bold min-w-[150px]">Experience Level:</span>
                <span>New → Official | Returning → Mid-rate | Veteran → Any</span>
              </div>
            </div>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💡 Yangfinity&apos;s Recommendation</h3>
            <p className="mb-4">
              For maximum value on your Yang & Won investment, we recommend <strong>official Gameforge servers</strong> or 
              <strong>established mid-rate private servers</strong> (2+ years old). These provide the best balance of:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Currency value retention over time</li>
              <li>Active, stable economy for trading</li>
              <li>Lower risk of server closure</li>
              <li>Meaningful progression without excessive grind</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
          <p className="text-neutral-300 mb-6">
            We support all major server types - find Yang & Won for your preferred gameplay style.
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

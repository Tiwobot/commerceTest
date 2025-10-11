'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function TradingBasicsPage() {
  const t = useTranslations('guides.items.trading-basics');
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
            Trading in Metin2 can multiply your Yang & Won without grinding. This comprehensive guide teaches you the fundamentals 
            of profitable trading, from basic flipping to advanced market strategies.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Trade Instead of Farm?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Trading Advantages:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Higher Yang/Won per hour than farming (2-5x more)</li>
                <li>Works while AFK - set shop and leave</li>
                <li>No equipment needed - works at any level</li>
                <li>Scalable - more capital = more profit</li>
                <li>Low effort - minimal button presses</li>
                <li>No repair costs or potion expenses</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Trading Challenges:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Requires starting capital (10M+ recommended)</li>
                <li>Market knowledge needed</li>
                <li>Some items take time to sell</li>
                <li>Competition from other traders</li>
                <li>Price fluctuations can cause losses</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Core Trading Principle: Buy Low, Sell High</h2>
          <p>All trading profits come from the spread between buying and selling prices:</p>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">Example Trade:</h3>
            <div className="space-y-2">
              <p>• <strong>Item:</strong> +7 Sword</p>
              <p>• <strong>Buy Price:</strong> 15M Yang (from desperate seller)</p>
              <p>• <strong>Market Price:</strong> 20M Yang (normal rate)</p>
              <p>• <strong>Your Sell Price:</strong> 18-19M (competitive)</p>
              <p className="text-[#b6e700] font-bold mt-4">• <strong>Profit:</strong> 3-4M Yang (20-26% return)</p>
            </div>
            <p className="text-sm mt-4 text-neutral-400">Do this 10 times per day = 30-40M profit with minimal effort</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started: First 100M Yang</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Step 1: Gather Starting Capital (10-50M)</h3>
              <p className="mb-3">You need capital to make money. Options:</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Farm for it:</strong> 2-3 hours in Grotto = 30-50M (slow but free)</li>
                <li><strong>Buy Yang & Won:</strong> €1-2 = 50-100M (fast start, recommended)</li>
                <li><strong>Daily quests:</strong> Complete all dailies for guaranteed Yang</li>
              </ul>
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Smart Move:</strong> Most successful traders buy initial 50-100M Yang to jumpstart. 
                The ROI from trading pays back the investment in days.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Step 2: Learn Your Server&apos;s Economy</h3>
              <p className="mb-3">Spend 2-3 hours just observing before trading:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>Visit Main Cities:</strong> Check all player shops in Map1/Map2</li>
                <li><strong>Record Prices:</strong> Write down prices for popular items</li>
                <li><strong>Identify Patterns:</strong> Which items sell fast? Which sit unsold?</li>
                <li><strong>Watch Chat:</strong> Monitor WTS/WTB messages for demand</li>
                <li><strong>Check Different Times:</strong> Prices vary by time of day</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Step 3: Choose Your Trading Category</h3>
              <p className="mb-3">Start with ONE category to master:</p>
              
              <div className="space-y-3">
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🔧 Upgrade Materials (Best for Beginners)</h4>
                  <p className="text-sm mb-2"><strong>Items:</strong> Blessing Scrolls, Dragon Stones, Upgrade Stones</p>
                  <p className="text-sm mb-2"><strong>Capital Needed:</strong> 10-30M</p>
                  <p className="text-sm mb-2"><strong>Profit Margin:</strong> 10-20% per trade</p>
                  <p className="text-sm mb-2"><strong>Why Good:</strong> Always in demand, fast turnover, stable prices</p>
                </div>

                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">⚔️ Equipment Trading</h4>
                  <p className="text-sm mb-2"><strong>Items:</strong> +6 to +9 weapons, armor sets</p>
                  <p className="text-sm mb-2"><strong>Capital Needed:</strong> 50-200M</p>
                  <p className="text-sm mb-2"><strong>Profit Margin:</strong> 15-30% per trade</p>
                  <p className="text-sm mb-2"><strong>Why Good:</strong> Higher profits, but slower sales</p>
                </div>

                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🧪 Consumables (Fast Turnover)</h4>
                  <p className="text-sm mb-2"><strong>Items:</strong> Potions, speed items, buff scrolls</p>
                  <p className="text-sm mb-2"><strong>Capital Needed:</strong> 5-20M</p>
                  <p className="text-sm mb-2"><strong>Profit Margin:</strong> 5-15% per trade</p>
                  <p className="text-sm mb-2"><strong>Why Good:</strong> Sells within minutes, low risk</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Basic Trading Strategies</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Strategy 1: Price Watching & Sniping</h3>
              <p className="mb-3">Look for underpriced items and resell at market rate.</p>
              
              <div className="bg-neutral-800 rounded-lg p-4 mb-3">
                <p className="text-sm mb-2"><strong>How It Works:</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Know the market price (e.g., +7 sword = 20M)</li>
                  <li>Find someone selling for less (15M - needs Yang fast)</li>
                  <li>Buy it immediately</li>
                  <li>Relist for 18-19M (still good deal for buyers)</li>
                  <li>Profit: 3-4M</li>
                </ol>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Use whisper /w to contact sellers directly before they list 
                in shop. Beat the competition!</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Strategy 2: Bulk Buying</h3>
              <p className="mb-3">Buy large quantities for discount, sell individually at full price.</p>
              
              <div className="bg-neutral-800 rounded-lg p-4 mb-3">
                <p className="text-sm mb-2"><strong>Example:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Normal price: 500k per blessing scroll</li>
                  <li>Bulk deal: Buy 100 scrolls for 45M (450k each = 10% discount)</li>
                  <li>Sell individually: 100 × 500k = 50M</li>
                  <li><strong className="text-[#b6e700]">Profit: 5M (11% return)</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Strategy 3: Time-Based Trading</h3>
              <p className="mb-3">Prices fluctuate based on server activity times.</p>
              
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Peak Hours (18:00-23:00):</strong> High demand = higher prices = SELL</li>
                <li><strong>Off-Peak (3:00-10:00):</strong> Low demand = lower prices = BUY</li>
                <li><strong>Profit:</strong> Buy cheap at 3am, sell expensive at 8pm</li>
              </ul>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Advanced:</strong> Set up shop before bed with items bought cheap. 
                Wake up to profits from overnight sales!</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Setting Up Your Shop</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Shop Setup Best Practices:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Location Matters:</h4>
                <ul className="text-sm space-y-1">
                  <li>• High-traffic areas (city centers)</li>
                  <li>• Near popular NPCs</li>
                  <li>• Marketplace designated zones</li>
                  <li>• Visible from main paths</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Shop Naming:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Clear, descriptive names</li>
                  <li>• Include item types (&quot;+7/+8 WEAPONS&quot;)</li>
                  <li>• Use symbols for attention (⚔️ ✨)</li>
                  <li>• Mention deals (&quot;CHEAP MATS&quot;)</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-white mb-2">Pricing Strategy:</h4>
              <ul className="text-sm space-y-1">
                <li>• Price 5-10% below top competitors (sells faster)</li>
                <li>• Bundle deals (3 items for discount)</li>
                <li>• Round numbers (18M not 18.3M)</li>
                <li>• Update prices if not selling in 2-3 hours</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Beginner Mistakes</h2>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Avoid These Errors:</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold">1. Trading Too Many Item Types</p>
                <p className="text-sm">Focus on 1-2 categories until you master them. Jack-of-all-trades = master of none.</p>
              </div>
              <div>
                <p className="font-bold">2. Overpricing Items</p>
                <p className="text-sm">20% above market = no sales. 5-10% below = fast sales + good reputation.</p>
              </div>
              <div>
                <p className="font-bold">3. No Price Research</p>
                <p className="text-sm">Never buy without knowing market price. You could buy above market value!</p>
              </div>
              <div>
                <p className="font-bold">4. Tying Up All Capital</p>
                <p className="text-sm">Keep 20-30% liquid Yang for good deals. Can&apos;t buy opportunities with 0 Yang!</p>
              </div>
              <div>
                <p className="font-bold">5. Panic Selling</p>
                <p className="text-sm">Item not selling in 2 hours? Normal. Give it 24 hours before panic discounts.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Realistic Profit Expectations</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Capital</th>
                  <th className="border border-neutral-800 p-3 text-left">Daily Trades</th>
                  <th className="border border-neutral-800 p-3 text-left">Avg Margin</th>
                  <th className="border border-neutral-800 p-3 text-left">Daily Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">10M</td>
                  <td className="border border-neutral-800 p-3">3-5 trades</td>
                  <td className="border border-neutral-800 p-3">15%</td>
                  <td className="border border-neutral-800 p-3 text-green-400">4-7M</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">50M</td>
                  <td className="border border-neutral-800 p-3">5-8 trades</td>
                  <td className="border border-neutral-800 p-3">15-20%</td>
                  <td className="border border-neutral-800 p-3 text-green-400">35-80M</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">200M</td>
                  <td className="border border-neutral-800 p-3">8-12 trades</td>
                  <td className="border border-neutral-800 p-3">20%</td>
                  <td className="border border-neutral-800 p-3 text-green-400">160-240M</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">1B+</td>
                  <td className="border border-neutral-800 p-3">10-20 trades</td>
                  <td className="border border-neutral-800 p-3">20-25%</td>
                  <td className="border border-neutral-800 p-3 text-green-400">1-5B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">🚀 Quick Start Action Plan</h3>
            <p className="mb-3">Your first week trading:</p>
            <div className="space-y-2">
              <p><strong>Day 1-2:</strong> Spend 50M Yang (buy or farm) + Research market prices 3 hours</p>
              <p><strong>Day 3:</strong> Make first 5 trades with upgrade materials (low risk)</p>
              <p><strong>Day 4-5:</strong> Refine strategy, aim for 10% profit per trade</p>
              <p><strong>Day 6-7:</strong> Scale up, 10-15 trades/day, reinvest profits</p>
              <p className="text-[#b6e700] font-bold mt-3"><strong>Expected Result:</strong> 50M → 100-150M in first week (100-200% return)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Starting Capital?</h3>
          <p className="text-neutral-300 mb-6">
            Buy Yang & Won to jumpstart your trading career. Most traders buy 50-100M to begin.
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

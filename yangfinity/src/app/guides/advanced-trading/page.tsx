import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Advanced Trading Strategies - Yangfinity",
  description: "Advanced trading strategies for Metin2 Yang & Won. Learn about market timing, price analysis, and maximizing your trading profits."
};

export default function AdvancedTradingPage() {
  const t = useTranslations('guides.items.advanced-trading');
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
            Master-level trading strategies for experienced traders looking to scale profits from millions to billions. 
            These techniques require capital, market knowledge, and calculated risk-taking.
          </p>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Advanced Traders Only</h3>
            <p className="text-sm">
              These strategies require 200M+ capital, deep market knowledge, and risk tolerance. If you&apos;re new to trading, 
              start with our <Link href="/guides/trading-basics" className="text-[#b6e700] hover:underline">Trading Basics Guide</Link> first.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategy 1: Market Cornering</h2>

          <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">The Monopoly Play</h3>
            <p className="mb-4">Control the supply of a specific item to manipulate prices.</p>
            
            <div className="bg-neutral-800 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-white mb-3">How It Works:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Identify Target:</strong> Choose item with limited supply (500M+ total supply)</li>
                <li><strong>Buy Out Market:</strong> Purchase 60-80% of available supply</li>
                <li><strong>Control Supply:</strong> Only you and a few others have it</li>
                <li><strong>Set High Price:</strong> List at 30-50% above old market rate</li>
                <li><strong>Maintain Control:</strong> Buy any underpriced listings immediately</li>
                <li><strong>Gradual Release:</strong> Sell slowly at inflated prices</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">✅ When It Works:</h4>
                <ul className="text-xs space-y-1">
                  <li>• Item has consistent demand</li>
                  <li>• Supply is limited/rare</li>
                  <li>• You have 1B+ capital</li>
                  <li>• Few competing traders</li>
                  <li>• <strong>Profit: 200-500% ROI</strong></li>
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">❌ Risks:</h4>
                <ul className="text-xs space-y-1">
                  <li>• Massive capital required</li>
                  <li>• Others can undercut you</li>
                  <li>• Demand could disappear</li>
                  <li>• Updates can crash market</li>
                  <li>• <strong>Risk: Total loss possible</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-3 mt-3">
              <p className="text-sm"><strong>💡 Real Example:</strong> Trader buys 80 +8 weapons @ 100M each (8B investment). 
              Controls market, sells @ 145M each over 2 weeks = 11.6B revenue = 3.6B profit (45% return).</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategy 2: Arbitrage Trading</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Cross-Server/Channel Profit</h3>
            <p className="mb-4">Exploit price differences between servers or channels.</p>
            
            <div className="space-y-3">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Server Arbitrage:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Item costs 50M on Server A, 75M on Server B</li>
                  <li>Buy on A, transfer to character on B, sell</li>
                  <li>Profit: 25M per item (50% return)</li>
                  <li><strong>Requirements:</strong> Characters on both servers, transfer method</li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Channel Arbitrage:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Channel 1: Busy, high prices</li>
                  <li>Channel 4: Dead, low prices</li>
                  <li>Buy in Ch4, sell in Ch1 = 10-20% instant profit</li>
                  <li><strong>Requirements:</strong> Ability to switch channels quickly</li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Time Zone Arbitrage:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Buy during EU off-hours (cheap)</li>
                  <li>Sell during EU peak hours (expensive)</li>
                  <li>Profit: 15-25% with no travel needed</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategy 3: Speculative Investment</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Predicting Market Moves</h3>
            <p className="mb-4">Invest before demand spikes, sell at peak.</p>
            
            <div className="space-y-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Update Speculation:</h4>
                <p className="text-sm mb-2">When new dungeon is announced:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li><strong>Pre-Announcement:</strong> Read test server patch notes (if available)</li>
                  <li><strong>Day 1:</strong> Buy all related items (dungeon keys, recommended gear)</li>
                  <li><strong>Day 2-7:</strong> Prices spike +200-500% as players prepare</li>
                  <li><strong>Day 8:</strong> Sell at peak before dungeon releases</li>
                  <li><strong>Profit:</strong> 200-500% return in 1 week</li>
                </ol>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Event Speculation:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Winter Event Coming:</strong> Buy cold resist gear 2 weeks early</li>
                  <li><strong>PvP Tournament:</strong> Stock up on buff items 1 week before</li>
                  <li><strong>Bonus EXP Weekend:</strong> Buy low-level equipment Friday morning</li>
                  <li><strong>Pattern:</strong> All predictable = easy 50-150% profits</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-3">
              <p className="text-sm"><strong>💡 Success Rate:</strong> 70-80% if you time it right. The 20-30% losses are 
              outweighed by the 200-500% gains on successful specs.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategy 4: Bulk Trading Operations</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Scale Your Way to Billions</h3>
            
            <div className="bg-neutral-800 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-white mb-3">The Volume Game:</h4>
              <p className="text-sm mb-3">Lower margins, higher volume = massive profits</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-700 text-sm">
                  <thead>
                    <tr className="bg-neutral-700">
                      <th className="border border-neutral-600 p-2">Strategy</th>
                      <th className="border border-neutral-600 p-2">Margin</th>
                      <th className="border border-neutral-600 p-2">Daily Volume</th>
                      <th className="border border-neutral-600 p-2">Daily Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-600 p-2">High Margin</td>
                      <td className="border border-neutral-600 p-2">30%</td>
                      <td className="border border-neutral-600 p-2">500M</td>
                      <td className="border border-neutral-600 p-2">150M</td>
                    </tr>
                    <tr className="bg-neutral-800">
                      <td className="border border-neutral-600 p-2">Bulk Trading</td>
                      <td className="border border-neutral-600 p-2">8%</td>
                      <td className="border border-neutral-600 p-2">5B</td>
                      <td className="border border-neutral-600 p-2 text-[#b6e700]"><strong>400M</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-neutral-400">Lower margin but 10x volume = 2.6x more profit with less risk</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold">How to Execute Bulk Trading:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Focus on High-Turnover Items:</strong> Potions, common materials</li>
                <li><strong>Price Just Below Market:</strong> 5% discount = instant sales</li>
                <li><strong>Buy in Massive Bulk:</strong> Negotiate 10-15% discounts</li>
                <li><strong>Automated Systems:</strong> Multiple shops, always stocked</li>
                <li><strong>Reinvest Everything:</strong> Compound daily</li>
              </ol>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategy 5: Crafting & Flipping</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Value-Add Trading</h3>
            <p className="mb-4">Buy materials, craft items, sell for profit.</p>
            
            <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-white mb-3">Example: Potion Crafting</h4>
              <div className="space-y-1 text-sm">
                <p>• Buy herbs: 10k each × 1000 = 10M</p>
                <p>• Craft into potions: 500 potions</p>
                <p>• Sell potions: 50k each × 500 = 25M</p>
                <p className="text-[#b6e700] font-bold">• Profit: 15M (150% ROI)</p>
                <p className="text-xs text-neutral-400 mt-2">Time investment: 2 hours. Hourly rate: 7.5M Yang</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p><strong>Best Crafting Opportunities:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Potions (high demand, fast sales)</li>
                <li>Upgrade stones (if you have alchemy)</li>
                <li>Equipment upgrades (+6 to +7)</li>
                <li>Gem combinations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Risk Management</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Protecting Your Capital:</h3>
            
            <div className="space-y-4">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">The 20% Rule</h4>
                <p className="text-sm">Never invest more than 20% of capital in single trade. One bad trade shouldn&apos;t 
                ruin you.</p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Stop-Loss Strategy</h4>
                <p className="text-sm mb-2">If item drops 15% below buy price, sell immediately. Accept small loss rather than 
                holding for bigger loss.</p>
                <p className="text-xs text-neutral-400">Example: Bought @ 100M, drops to 85M = sell. Don&apos;t wait for 
                recovery that may never come.</p>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Diversification</h4>
                <ul className="text-sm space-y-1">
                  <li>• 40% in safe, liquid assets</li>
                  <li>• 40% in active trades</li>
                  <li>• 20% in speculative plays</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Master Trader Mindset</h2>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Think Like the Top 1%:</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold mb-1">1. Patience Beats Speed</p>
                <p className="text-sm">Wait for perfect opportunities rather than forcing trades. One great trade/week &gt; 
                ten mediocre trades/day.</p>
              </div>
              <div>
                <p className="font-bold mb-1">2. Information is Profit</p>
                <p className="text-sm">Spend 50% of trading time gathering information. Knowledge = money.</p>
              </div>
              <div>
                <p className="font-bold mb-1">3. Emotion-Free Trading</p>
                <p className="text-sm">No revenge trading after losses. No greed after wins. Stick to the plan.</p>
              </div>
              <div>
                <p className="font-bold mb-1">4. Always Have Exit Strategy</p>
                <p className="text-sm">Before buying, know exactly how and when you&apos;ll sell. No &quot;I&apos;ll figure 
                it out later.&quot;</p>
              </div>
              <div>
                <p className="font-bold mb-1">5. Compound Ruthlessly</p>
                <p className="text-sm">Reinvest 80% of profits. 10B trader started as 100M trader who compounded for months.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Real Results: What&apos;s Possible</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">Month 1</h4>
              <p className="text-sm">Start: 200M</p>
              <p className="text-sm">Strategy: Basic flipping</p>
              <p className="text-sm">End: 500M (150% gain)</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">Month 3</h4>
              <p className="text-sm">Start: 500M</p>
              <p className="text-sm">Strategy: + Speculation</p>
              <p className="text-sm">End: 2B (300% gain)</p>
            </div>
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-4">
              <h4 className="font-bold text-[#b6e700] mb-2">Month 6</h4>
              <p className="text-sm">Start: 2B</p>
              <p className="text-sm">Strategy: + Market cornering</p>
              <p className="text-sm text-[#b6e700]"><strong>End: 10B+ (400% gain)</strong></p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Scale Your Trading Empire</h3>
          <p className="text-neutral-300 mb-6">
            Need capital to implement advanced strategies? Buy Yang & Won to reach the next level.
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

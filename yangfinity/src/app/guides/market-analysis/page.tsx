'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function MarketAnalysisPage() {
  const t = useTranslations('guides.items.market-analysis');
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
            Successful trading requires understanding market trends and price movements. Learn how to analyze the Metin2 
            economy to predict profitable opportunities and maximize your Yang & Won returns.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Market Analysis Matters</h2>
          <p>Understanding the market gives you a competitive edge:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Buy Before Demand Spikes:</strong> Anticipate events and stock up early</li>
            <li><strong>Avoid Overpaying:</strong> Know when prices are inflated</li>
            <li><strong>Timing is Everything:</strong> Sell at peak prices, buy at lows</li>
            <li><strong>Risk Management:</strong> Avoid investing in declining markets</li>
            <li><strong>Profit Maximization:</strong> 50-200% better returns with good timing</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Price Tracking Methods</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Method 1: Manual Price Recording</h3>
              <p className="mb-3">Track prices daily to identify trends.</p>
              
              <div className="bg-neutral-800 rounded-lg p-4 mb-3">
                <h4 className="font-bold text-white mb-2">Create a Price Spreadsheet:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-700 text-sm">
                    <thead>
                      <tr className="bg-neutral-700">
                        <th className="border border-neutral-600 p-2">Date</th>
                        <th className="border border-neutral-600 p-2">Item</th>
                        <th className="border border-neutral-600 p-2">Low Price</th>
                        <th className="border border-neutral-600 p-2">High Price</th>
                        <th className="border border-neutral-600 p-2">Avg Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-600 p-2">Oct 1</td>
                        <td className="border border-neutral-600 p-2">+7 Sword</td>
                        <td className="border border-neutral-600 p-2">15M</td>
                        <td className="border border-neutral-600 p-2">22M</td>
                        <td className="border border-neutral-600 p-2">18M</td>
                      </tr>
                      <tr className="bg-neutral-800">
                        <td className="border border-neutral-600 p-2">Oct 8</td>
                        <td className="border border-neutral-600 p-2">+7 Sword</td>
                        <td className="border border-neutral-600 p-2">18M</td>
                        <td className="border border-neutral-600 p-2">25M</td>
                        <td className="border border-neutral-600 p-2">21M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3 text-neutral-400">Track 5-10 popular items weekly. Spot trends after 2-3 weeks of data.</p>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Use Google Sheets with your guild members - pool data collection. 
                More data points = better market understanding.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Method 2: Chat Monitoring</h3>
              <p className="mb-3">Watch trade chat for real-time price discovery.</p>
              
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>WTS Messages:</strong> What prices are sellers asking?</li>
                <li><strong>WTB Messages:</strong> What are buyers willing to pay?</li>
                <li><strong>Quick Sales:</strong> If item sells in &lt;5 minutes, price was too low</li>
                <li><strong>Long Listings:</strong> If item sits for hours, price too high</li>
                <li><strong>Negotiation Patterns:</strong> How much do people haggle?</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Method 3: Shop Surveys</h3>
              <p className="mb-3">Visit marketplace and record shop prices.</p>
              
              <div className="bg-neutral-800 rounded-lg p-4">
                <p className="font-bold mb-2">Daily Survey Routine (15 minutes):</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Visit Map1 marketplace at same time daily (e.g., 8pm)</li>
                  <li>Check 20-30 shops selling your target items</li>
                  <li>Record lowest, highest, and median prices</li>
                  <li>Note which items sold out (high demand indicator)</li>
                  <li>Check same time next day to track trends</li>
                </ol>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Market Cycles & Patterns</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Weekly Cycle</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">📉 Low Price Days (Mon-Thu)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Lower player activity</li>
                    <li>• Less demand = lower prices</li>
                    <li>• <strong className="text-[#b6e700]">Strategy: BUY</strong></li>
                    <li>• Best: Monday 2pm-6pm</li>
                  </ul>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">📈 High Price Days (Fri-Sun)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Peak player activity</li>
                    <li>• High demand = higher prices</li>
                    <li>• <strong className="text-[#b6e700]">Strategy: SELL</strong></li>
                    <li>• Best: Saturday 8pm-11pm</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>Example:</strong> +8 weapon costs 80M Monday afternoon, 95M Saturday evening. 
                Buy Monday, sell Saturday = 15M profit (18.75% return) with zero effort.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Event-Driven Price Changes</h3>
              <p className="mb-3">Server events dramatically impact prices.</p>
              
              <div className="space-y-3">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">🎉 Before Event (1-2 days early):</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Upgrade materials spike +30-50%</li>
                    <li>• Consumables (potions, buffs) +20-40%</li>
                    <li>• <strong className="text-[#b6e700]">Action: SELL materials, BUY equipment</strong></li>
                  </ul>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">⚔️ During Event:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Peak consumable prices (+50-80%)</li>
                    <li>• Equipment demand drops</li>
                    <li>• <strong className="text-[#b6e700]">Action: SELL consumables, BUY equipment cheap</strong></li>
                  </ul>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">📉 After Event:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Materials crash -40-60%</li>
                    <li>• Equipment recovers to normal</li>
                    <li>• <strong className="text-[#b6e700]">Action: BUY materials cheap, SELL equipment</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Seasonal Trends</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Summer (June-Aug):</strong> Lower activity, prices drop 10-20%</li>
                <li><strong>Winter (Dec-Feb):</strong> High activity, prices peak +15-30%</li>
                <li><strong>New Updates:</strong> Old items crash, new items overpric ed initially</li>
                <li><strong>School Holidays:</strong> More players = higher demand</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Supply & Demand Analysis</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Identifying Supply Levels:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Low Supply</h4>
                <ul className="text-xs space-y-1">
                  <li>• &lt;5 shops selling item</li>
                  <li>• Sells within hours</li>
                  <li>• Price rising weekly</li>
                  <li>• <strong>Action: BUY & HOLD</strong></li>
                </ul>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                <h4 className="font-bold text-yellow-400 mb-2">Normal Supply</h4>
                <ul className="text-xs space-y-1">
                  <li>• 10-20 shops selling</li>
                  <li>• Sells in 1-2 days</li>
                  <li>• Stable prices</li>
                  <li>• <strong>Action: Normal trading</strong></li>
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">Oversupply</h4>
                <ul className="text-xs space-y-1">
                  <li>• 30+ shops selling</li>
                  <li>• Takes days to sell</li>
                  <li>• Prices dropping</li>
                  <li>• <strong>Action: AVOID</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Indicators</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Guild Activity Indicator</h3>
              <p className="mb-3">Active guilds = healthy economy</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>50+ active guilds:</strong> Strong market, good for trading</li>
                <li><strong>Guild war frequency:</strong> More wars = more consumable demand</li>
                <li><strong>Recruitment spam:</strong> Growing population = rising prices</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Server Population Trends</h3>
              <p className="mb-3">Population directly impacts Yang & Won value</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Growing:</strong> Prices rise 2-5% monthly - buy & hold</li>
                <li><strong>Stable:</strong> Predictable cycles - trade normally</li>
                <li><strong>Declining:</strong> Prices fall 5-10% monthly - avoid long-term holds</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Update Announcements</h3>
              <p className="mb-3">Official updates cause market disruption</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>New dungeon announced:</strong> Related items spike +50-200%</li>
                <li><strong>Balance changes:</strong> Affected class equipment volatility</li>
                <li><strong>New items coming:</strong> Old similar items lose 20-40% value</li>
                <li><strong>Level cap increase:</strong> Max-level gear demand drops</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Practical Market Analysis Example</h2>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">📊 Case Study: Profitable Event Trading</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold mb-1">Monday: Event Announced (Guild War Weekend)</p>
                <p className="text-sm">• Notice: Server announces big guild war event this Saturday</p>
                <p className="text-sm text-[#b6e700]">• <strong>Action:</strong> Buy 200 HP potions @ 300k each = 60M investment</p>
              </div>
              <div>
                <p className="font-bold mb-1">Tuesday-Thursday: Build Position</p>
                <p className="text-sm">• Prices slowly rising: 300k → 350k → 400k</p>
                <p className="text-sm text-[#b6e700]">• <strong>Action:</strong> Buy 100 more @ 400k = 40M more (100M total invested)</p>
              </div>
              <div>
                <p className="font-bold mb-1">Friday-Saturday: Peak Demand</p>
                <p className="text-sm">• Players buying for event: 400k → 550k → 600k</p>
                <p className="text-sm text-[#b6e700]">• <strong>Action:</strong> Sell 300 potions @ 580k average = 174M revenue</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 mt-3">
                <p className="font-bold text-white mb-1">Result:</p>
                <p className="text-sm">• Investment: 100M</p>
                <p className="text-sm">• Revenue: 174M</p>
                <p className="text-sm text-[#b6e700]">• <strong>Profit: 74M (74% return in 5 days!)</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Market Analysis Checklist</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Before Every Major Trade:</h3>
            <ul className="space-y-2">
              <li>☐ Tracked price for 7+ days (know the trend)</li>
              <li>☐ Checked supply (how many shops selling?)</li>
              <li>☐ Identified demand (how fast does it sell?)</li>
              <li>☐ Considered day of week (Mon = cheap, Sat = expensive)</li>
              <li>☐ Checked for upcoming events (price spikes coming?)</li>
              <li>☐ Reviewed server announcements (updates affecting item?)</li>
              <li>☐ Confirmed profit margin (15%+ after market fees)</li>
              <li>☐ Have exit strategy (how will I sell this?)</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Common Analysis Mistakes</h3>
            <ul className="space-y-2 text-sm">
              <li>❌ <strong>Trusting single data point:</strong> One low price doesn&apos;t mean trend</li>
              <li>❌ <strong>Ignoring volume:</strong> Price means nothing if no one&apos;s buying</li>
              <li>❌ <strong>Missing event calendars:</strong> Predictable spikes = easy profit</li>
              <li>❌ <strong>Not tracking competitors:</strong> Top traders dictate market</li>
              <li>❌ <strong>Emotional decisions:</strong> Data &gt; gut feeling always</li>
            </ul>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">🎓 Master Trader Secret</h3>
            <p className="mb-3">
              Top 1% traders spend 30 minutes daily on market analysis, 30 minutes actually trading. 
              The analysis makes them 200-500% more profitable than traders who just &quot;wing it.&quot;
            </p>
            <p className="text-sm">
              Time investment: 3.5 hours/week on analysis = 50-100M extra profit weekly = €3-5 real value. 
              Better hourly rate than most real jobs!
            </p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Yang & Won for Trading?</h3>
          <p className="text-neutral-300 mb-6">
            Start with 50-100M Yang to practice market analysis strategies. Fast, secure delivery.
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

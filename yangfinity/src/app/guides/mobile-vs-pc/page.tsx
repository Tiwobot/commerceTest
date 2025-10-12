import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Mobile vs PC Metin2 - Yangfinity",
  description: "Compare Mobile Metin2 vs PC Metin2. Learn the differences in gameplay, Yang & Won trading, and which version suits you best."
};

export default function MobileVsPCPage() {
  const t = useTranslations('guides.items.mobile-vs-pc');
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
            Choosing between Mobile and PC Metin2 affects your gaming experience, Yang & Won value, and playstyle. This comprehensive 
            comparison helps you decide which platform suits you best.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Complete Platform Comparison</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">📱 Mobile</h3>
              
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-green-400 mb-2">✅ Advantages</h4>
                <ul className="text-sm space-y-1">
                  <li>• Play anywhere, anytime</li>
                  <li>• Auto-play features (AFK farming)</li>
                  <li>• 20-40% cheaper Yang & Won</li>
                  <li>• Faster delivery (5-10 min)</li>
                  <li>• Mobile-exclusive events</li>
                  <li>• Touch-optimized UI</li>
                  <li>• Cloud saves across devices</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">❌ Disadvantages</h4>
                <ul className="text-sm space-y-1">
                  <li>• Smaller screen (5-7 inches)</li>
                  <li>• Battery drain (heating issues)</li>
                  <li>• Lower graphics quality</li>
                  <li>• Touch controls (less precise)</li>
                  <li>• Data usage (WiFi needed)</li>
                  <li>• Limited multitasking</li>
                </ul>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">🖥️ PC</h3>
              
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-green-400 mb-2">✅ Advantages</h4>
                <ul className="text-sm space-y-1">
                  <li>• Large screen (20+ inches)</li>
                  <li>• Superior graphics & performance</li>
                  <li>• Precise mouse & keyboard</li>
                  <li>• Better for PvP & trading</li>
                  <li>• No battery concerns</li>
                  <li>• Multi-window support</li>
                  <li>• Full feature set</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">❌ Disadvantages</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tied to desk/home</li>
                  <li>• No auto-play (manual only)</li>
                  <li>• More expensive Yang & Won</li>
                  <li>• Slower delivery (10-15 min)</li>
                  <li>• Requires gaming PC</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Detailed Feature Breakdown</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800 text-sm">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Category</th>
                  <th className="border border-neutral-800 p-3 text-left">Mobile</th>
                  <th className="border border-neutral-800 p-3 text-left">PC</th>
                  <th className="border border-neutral-800 p-3 text-left">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3 font-bold">Convenience</td>
                  <td className="border border-neutral-800 p-3">Play anywhere</td>
                  <td className="border border-neutral-800 p-3">Desk only</td>
                  <td className="border border-neutral-800 p-3 text-green-400">📱 Mobile</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3 font-bold">Graphics</td>
                  <td className="border border-neutral-800 p-3">Good</td>
                  <td className="border border-neutral-800 p-3">Excellent</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3 font-bold">PvP</td>
                  <td className="border border-neutral-800 p-3">Harder (touch)</td>
                  <td className="border border-neutral-800 p-3">Easier (precise)</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3 font-bold">Farming</td>
                  <td className="border border-neutral-800 p-3">Auto-play (AFK)</td>
                  <td className="border border-neutral-800 p-3">Manual only</td>
                  <td className="border border-neutral-800 p-3 text-green-400">📱 Mobile</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3 font-bold">Trading</td>
                  <td className="border border-neutral-800 p-3">Small screen</td>
                  <td className="border border-neutral-800 p-3">Full screen</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3 font-bold">Yang & Won Cost</td>
                  <td className="border border-neutral-800 p-3">20-40% cheaper</td>
                  <td className="border border-neutral-800 p-3">Standard price</td>
                  <td className="border border-neutral-800 p-3 text-green-400">📱 Mobile</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3 font-bold">Screen Real Estate</td>
                  <td className="border border-neutral-800 p-3">5-7 inches</td>
                  <td className="border border-neutral-800 p-3">20-27 inches</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3 font-bold">Multitasking</td>
                  <td className="border border-neutral-800 p-3">Limited</td>
                  <td className="border border-neutral-800 p-3">Full support</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3 font-bold">Social Features</td>
                  <td className="border border-neutral-800 p-3">Simplified</td>
                  <td className="border border-neutral-800 p-3">Full featured</td>
                  <td className="border border-neutral-800 p-3 text-green-400">🖥️ PC</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3 font-bold">Cost to Play</td>
                  <td className="border border-neutral-800 p-3">Phone (have one)</td>
                  <td className="border border-neutral-800 p-3">Gaming PC needed</td>
                  <td className="border border-neutral-800 p-3 text-green-400">📱 Mobile</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Platform by Playstyle</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">📱 Mobile is Better For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Casual Players:</p>
                  <p className="text-sm">Play 30-60 min sessions during commute, lunch breaks</p>
                </div>
                <div>
                  <p className="font-bold mb-2">AFK Farmers:</p>
                  <p className="text-sm">Auto-play overnight while charging phone</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Budget Gamers:</p>
                  <p className="text-sm">Don&apos;t need gaming PC, phone works perfectly</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Multitaskers:</p>
                  <p className="text-sm">Play while watching TV, traveling, etc.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">🖥️ PC is Better For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Hardcore PvPers:</p>
                  <p className="text-sm">Precise controls essential for competitive play</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Traders:</p>
                  <p className="text-sm">Need multiple windows, spreadsheets, large screen</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Guild Leaders:</p>
                  <p className="text-sm">Complex management easier on PC</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Graphics Enthusiasts:</p>
                  <p className="text-sm">Want best visual experience</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yang & Won Value Comparison</h2>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">💰 Real Money Value Analysis</h3>
            
            <div className="space-y-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <p className="font-bold mb-2">Scenario: Buying 500M Yang</p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-sm mb-1"><strong>PC:</strong></p>
                    <p className="text-sm">• Cost: €6.50</p>
                    <p className="text-sm">• Delivery: 10-15 minutes</p>
                    <p className="text-sm">• Method: In-game trade</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1"><strong>Mobile:</strong></p>
                    <p className="text-sm text-[#b6e700]">• Cost: €4.50 (31% savings!)</p>
                    <p className="text-sm text-[#b6e700]">• Delivery: 5-10 minutes</p>
                    <p className="text-sm">• Method: In-game mail</p>
                  </div>
                </div>
                <p className="text-sm mt-3 italic">Over a year: Save €200+ on Yang purchases by playing mobile!</p>
              </div>

              <p className="text-sm">
                <strong>Why the difference?</strong> Mobile economies have higher Yang supply due to auto-farming, 
                leading to lower real-money prices. Same in-game purchasing power, less real cost.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Can You Play Both?</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Hybrid Approach (Best of Both Worlds):</h3>
            
            <div className="space-y-3">
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Strategy 1: Separate Characters</h4>
                <ul className="text-sm space-y-1">
                  <li>• Main character on PC (serious play)</li>
                  <li>• Alt character on mobile (AFK farming)</li>
                  <li>• Transfer wealth between them (if server allows)</li>
                  <li>• Best: Get PC gameplay quality + mobile convenience</li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Strategy 2: Cross-Platform (If Supported)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Some servers support same character on both</li>
                  <li>• Play PC at home (evenings, weekends)</li>
                  <li>• Play mobile on-the-go (commute, lunch)</li>
                  <li>• Best: Maximum flexibility, single progression</li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-[#b6e700] mb-2">Strategy 3: Task-Based Platform Choice</h4>
                <ul className="text-sm space-y-1">
                  <li>• Mobile: Farming, dailies, simple quests</li>
                  <li>• PC: PvP, trading, guild management, dungeons</li>
                  <li>• Best: Use each platform for what it does best</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Performance & Requirements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">📱 Mobile Requirements</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold mb-1">Minimum:</p>
                  <ul className="text-sm space-y-1">
                    <li>• iPhone 7+ / Android 8.0+</li>
                    <li>• 2GB RAM</li>
                    <li>• 2GB free storage</li>
                    <li>• WiFi connection</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Recommended:</p>
                  <ul className="text-sm space-y-1">
                    <li>• iPhone 11+ / Android 10.0+</li>
                    <li>• 4GB+ RAM</li>
                    <li>• 4GB free storage</li>
                    <li>• Fast WiFi or 4G/5G</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">🖥️ PC Requirements</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold mb-1">Minimum:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Windows 7/10/11</li>
                    <li>• 2GB RAM</li>
                    <li>• Intel HD Graphics</li>
                    <li>• 5GB free storage</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Recommended:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Windows 10/11</li>
                    <li>• 8GB+ RAM</li>
                    <li>• Dedicated GPU (GTX 1050+)</li>
                    <li>• SSD with 10GB space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Final Recommendation</h2>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Our Verdict</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold text-[#b6e700] mb-2">For Most Players: Mobile</p>
                <p className="text-sm">The convenience and auto-play features outweigh the graphics downgrade. Plus, 
                20-40% cheaper Yang makes it more accessible. Perfect for 80% of players.</p>
              </div>

              <div>
                <p className="font-bold text-[#b6e700] mb-2">For Serious Players: PC</p>
                <p className="text-sm">If you&apos;re into competitive PvP, serious trading, or guild leadership, PC is essential. 
                The precision and screen space are worth the higher Yang cost.</p>
              </div>

              <div>
                <p className="font-bold text-[#b6e700] mb-2">Optimal: Both Platforms</p>
                <p className="text-sm">Use mobile for farming and casual play, PC for serious content. Get the best of both 
                worlds. Many top players do this.</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-3">💡 Pro Player Insight</h3>
            <p className="italic text-sm">
              &quot;I started on PC, thought mobile was inferior. Then I tried it - the auto-play changed everything. 
              Now I use mobile to farm 8 hours daily while I work/sleep (makes 300M+ Yang/day). Then I switch to PC 
              for 2 hours of PvP and trading in the evening. This combo is unbeatable. And mobile Yang being cheaper 
              means my initial investment went further!&quot;
            </p>
            <p className="text-xs text-neutral-400 mt-2">- Competitive Metin2 player with 3+ years experience</p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Buy Yang & Won for Your Platform</h3>
          <p className="text-neutral-300 mb-6">
            Whether Mobile or PC, we support both. Mobile players save 20-40%!
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

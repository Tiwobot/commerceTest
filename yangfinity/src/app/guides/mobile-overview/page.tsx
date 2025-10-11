'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function MobileOverviewPage() {
  const t = useTranslations('guides.items.mobile-overview');
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
            Mobile Metin2 brings the classic MMORPG experience to smartphones and tablets. Understand the differences, 
            advantages, and how to maximize your mobile gaming experience with Yang & Won.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Mobile Metin2?</h2>
          <p>Mobile Metin2 is an optimized version of the game for iOS and Android devices, featuring:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Touch Controls:</strong> Redesigned interface for mobile gameplay</li>
            <li><strong>Auto-Play Features:</strong> Automated farming and questing</li>
            <li><strong>Cross-Platform:</strong> Some servers sync with PC (server-dependent)</li>
            <li><strong>Optimized Graphics:</strong> Runs smoothly on modern phones</li>
            <li><strong>Cloud Saves:</strong> Play on multiple devices seamlessly</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile-Specific Features</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Auto-Play System</h3>
              <p className="mb-3">The game-changing feature for mobile players:</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Auto-Quest:</strong> Automatically complete quests without input</li>
                <li><strong>Auto-Battle:</strong> Character fights enemies automatically</li>
                <li><strong>Auto-Pickup:</strong> Collects items and Yang automatically</li>
                <li><strong>Auto-Potion:</strong> Uses potions when HP/SP is low</li>
                <li><strong>AFK Farming:</strong> Farm while phone is locked (premium feature)</li>
              </ul>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Auto-play while commuting, working, or sleeping. Wake up to 
                millions of Yang earned overnight!</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Touch-Optimized Interface</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Combat Controls:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tap to attack</li>
                    <li>• Swipe for skills</li>
                    <li>• Virtual joystick movement</li>
                    <li>• Quick-access skill buttons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Menu Navigation:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Simplified inventory</li>
                    <li>• One-tap quest tracking</li>
                    <li>• Quick teleport buttons</li>
                    <li>• Streamlined shop interface</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Mobile-Exclusive Events</h3>
              <p className="mb-3">Special events only available on mobile:</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Login Rewards:</strong> Daily bonuses for mobile players</li>
                <li><strong>Mobile-Only Dungeons:</strong> Exclusive content and rewards</li>
                <li><strong>Time-Limited Events:</strong> Hourly Yang & Won bonuses</li>
                <li><strong>Share Rewards:</strong> Get bonuses for inviting friends</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile vs PC: Feature Comparison</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Feature</th>
                  <th className="border border-neutral-800 p-3 text-left">Mobile</th>
                  <th className="border border-neutral-800 p-3 text-left">PC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Portability</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ Play anywhere</td>
                  <td className="border border-neutral-800 p-3 text-red-400">✗ Desk only</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Auto-Play</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ Built-in</td>
                  <td className="border border-neutral-800 p-3 text-red-400">✗ Manual only</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Graphics Quality</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">~ Good</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ Excellent</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Screen Size</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">~ 5-7 inches</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ 20+ inches</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Yang & Won Price</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ Often cheaper</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">~ Standard price</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Battery/Power</td>
                  <td className="border border-neutral-800 p-3 text-red-400">✗ Drains battery</td>
                  <td className="border border-neutral-800 p-3 text-green-400">✓ Plugged in</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started on Mobile</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Step 1: Download & Install</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-[#b6e700] mb-2">iOS (iPhone/iPad)</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Open App Store</li>
                    <li>Search &quot;Metin2&quot;</li>
                    <li>Download official app</li>
                    <li>Install (1-2GB space needed)</li>
                  </ol>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-[#b6e700] mb-2">Android</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Open Google Play Store</li>
                    <li>Search &quot;Metin2&quot;</li>
                    <li>Download official app</li>
                    <li>Install (1-2GB space needed)</li>
                  </ol>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-3">⚠️ Only download from official stores. Avoid third-party APKs (malware risk).</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Step 2: Choose Server</h3>
              <p className="mb-3">Select based on your needs:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Same as PC:</strong> If playing both platforms, choose same server (if supported)</li>
                <li><strong>New Mobile Server:</strong> Fresh economy, everyone starting equal</li>
                <li><strong>Established Server:</strong> Active economy, but harder to catch up</li>
                <li><strong>Language:</strong> Choose server matching your language</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Step 3: Optimize Settings</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white mb-1">Graphics Settings:</h4>
                  <p className="text-sm">• Lower graphics = better battery life & performance</p>
                  <p className="text-sm">• High graphics only if you have flagship phone</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Auto-Play Settings:</h4>
                  <p className="text-sm">• Enable auto-pickup (essential!)</p>
                  <p className="text-sm">• Set auto-potion threshold (use at 50% HP)</p>
                  <p className="text-sm">• Configure auto-quest priority</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Battery Optimization:</h4>
                  <p className="text-sm">• Lower frame rate when not actively playing</p>
                  <p className="text-sm">• Disable unnecessary animations</p>
                  <p className="text-sm">• Use power saving mode for overnight farming</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile Yang & Won Economy</h2>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💰 Why Mobile Yang & Won is Cheaper</h3>
            <div className="space-y-2">
              <p><strong>1. Higher Supply:</strong> Auto-farming = more Yang generated = lower prices</p>
              <p><strong>2. Mobile-Only Sales:</strong> Sellers offer mobile discounts to attract players</p>
              <p><strong>3. Different Economy:</strong> Mobile servers often have separate economy from PC</p>
              <p><strong>4. Typical Savings:</strong> 20-40% cheaper than equivalent PC server Yang</p>
            </div>
            <p className="text-sm mt-4 italic">Example: 100M Yang on PC = €1.50, same on Mobile = €0.90-1.20</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Practices for Mobile Gaming</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Maximize Your Mobile Experience:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Do&apos;s:</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Use WiFi for downloads (save data)</li>
                  <li>✓ Charge while auto-farming overnight</li>
                  <li>✓ Join mobile-focused guilds</li>
                  <li>✓ Take advantage of mobile events</li>
                  <li>✓ Buy Yang & Won (cheaper on mobile!)</li>
                  <li>✓ Use tablet for better experience</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Don&apos;ts:</h4>
                <ul className="text-sm space-y-1">
                  <li>✗ Don&apos;t play on mobile data (expensive)</li>
                  <li>✗ Don&apos;t max graphics (battery drain)</li>
                  <li>✗ Don&apos;t ignore heat warnings</li>
                  <li>✗ Don&apos;t PvP on small screen (disadvantage)</li>
                  <li>✗ Don&apos;t forget to close app (battery)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Mobile Gaming Warnings</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Battery Health:</strong> Extended gaming degrades battery over time</li>
              <li><strong>Data Usage:</strong> Can use 50-200MB per hour - use WiFi!</li>
              <li><strong>Overheating:</strong> Take breaks if phone gets hot</li>
              <li><strong>Screen Burn-in:</strong> OLED screens risk burn-in from static UI elements</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Who Should Play Mobile?</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">✅ Perfect For:</h4>
              <ul className="text-xs space-y-1">
                <li>• Commuters</li>
                <li>• Busy professionals</li>
                <li>• Casual players</li>
                <li>• Budget gamers</li>
                <li>• Students</li>
              </ul>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">~ Maybe For:</h4>
              <ul className="text-xs space-y-1">
                <li>• Hardcore PvPers (harder)</li>
                <li>• Traders (limited screen)</li>
                <li>• Perfectionists (graphics)</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">❌ Not Ideal For:</h4>
              <ul className="text-xs space-y-1">
                <li>• Guild leaders (complex)</li>
                <li>• Market analysts (need big screen)</li>
                <li>• Those without good phone</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Mobile Metin2 Success Tips</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Embrace Auto-Play:</strong> Don&apos;t try to play manually all day - use automation</li>
              <li><strong>Focus on Farming:</strong> Mobile excels at AFK farming, not complex trading</li>
              <li><strong>Buy Yang & Won:</strong> Mobile versions are cheaper - take advantage!</li>
              <li><strong>Short Sessions:</strong> Play in 15-30 minute bursts, not 4-hour marathons</li>
              <li><strong>Guild Up:</strong> Mobile guilds understand the platform&apos;s limitations</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get Mobile Yang & Won</h3>
          <p className="text-neutral-300 mb-6">
            Mobile Yang & Won often costs 20-40% less than PC. Take advantage of mobile pricing!
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

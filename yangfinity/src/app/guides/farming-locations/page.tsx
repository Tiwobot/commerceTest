'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function FarmingLocationsPage() {
  const t = useTranslations('guides.items.farming-locations');
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
            Choosing the right farming location dramatically impacts your Yang & Won earnings per hour. This comprehensive 
            guide covers the best spots for every level range, with earnings estimates and pro tips.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Beginner Locations (Level 1-30)</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Yongbi Desert (Lv 1-15)</h3>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Beginner</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Map1, near starting village</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Wild Dogs, Sheep, Young Scorpions</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 1-15</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 500k-2M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> Basic materials, low-level equipment</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Very Easy</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Focus on Wild Dogs - they drop copper ore which sells well. 
                Stay near respawn points for maximum efficiency.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Spider Dungeon (Lv 15-30)</h3>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Beginner</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Map1, spider cave entrance</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Spiders, Poison Spiders</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 15-30</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 2M-5M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> Spider eyes (alchemy), basic +0 items</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Easy</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Spider eyes are valuable for alchemy - save them to sell in bulk. 
                Party up for faster clearing.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intermediate Locations (Level 30-60)</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Doyyumhwan (Lv 30-45)</h3>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">Intermediate</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Map2, desert area</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Orc Warriors, Shamans</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 30-45</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 5M-15M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> +1/+2 equipment, upgrade materials</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Medium</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Target Shamans for better drops. Bring HP potions - 
                they hit harder than previous zones. Use AOE skills.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Dragon Valley (Lv 45-60)</h3>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">Intermediate</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Desert teleporter, Valley of Dragons</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Ice Golems, Desert Outlaws</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 45-60</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 15M-35M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> +3/+4 items, rare materials</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Medium-Hard</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> One of the most profitable mid-level zones. Bring auto-pickup pet 
                to maximize Yang collection. Farm in circular route.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Locations (Level 60-90)</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">🏆 Grotto (Lv 60-75) - BEST PROFIT</h3>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 text-xs font-semibold rounded-full">Advanced</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Map2, grotto entrance (requires key or party)</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Metin Stones, Demons</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 60-75</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 40M-100M+</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> +5/+6 items, rare stones, valuable materials</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Hard</p>
                </div>
              </div>
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-4">
                <p className="text-sm mb-2"><strong>⭐ Why It&apos;s Best:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Highest Yang & Won per hour for this level range</li>
                  <li>• Rare materials sell for millions</li>
                  <li>• Equipment drops are valuable (+5/+6)</li>
                  <li>• Metin stones give bonus yang</li>
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Join a grotto farming party. Share loot fairly. 
                Invest in +7 weapon for efficient clearing. Best Yang/hour in the game at this level.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Flame Dungeon (Lv 70-85)</h3>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 text-xs font-semibold rounded-full">Advanced</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Fire Land portal</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Fire Spirits, Flame Warriors</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 70-85</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 35M-80M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> Fire materials, +6 items</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Hard</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Fire resistance gear highly recommended. 
                Farm in groups for safety and speed.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">End-Game Locations (Level 90+)</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">🏆 Nephrite Bay (Lv 90-105) - TOP TIER</h3>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-xs font-semibold rounded-full">End-Game</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Nephrite teleporter (level requirement)</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> High-level beasts, bosses</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 90-105</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 100M-300M+</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> +7/+8 items, legendary materials</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Very Hard</p>
                </div>
              </div>
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-4">
                <p className="text-sm mb-2"><strong>⭐ Ultimate Farming Zone:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Highest Yang & Won earnings in the game</li>
                  <li>• Rare boss spawns with millions in drops</li>
                  <li>• Equipment worth 50M+ yang each</li>
                  <li>• Materials for legendary crafting</li>
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>⚠️ Requirements:</strong> +9 weapon minimum, good armor, skilled gameplay. 
                Party recommended for boss spawns.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#b6e700]">Thunder Dungeon (Lv 105+)</h3>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-xs font-semibold rounded-full">End-Game</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Location:</strong> Special portal (requires quest completion)</p>
                  <p className="text-sm mb-2"><strong>Monsters:</strong> Thunder elementals, elite mobs</p>
                  <p className="text-sm mb-2"><strong>Level Range:</strong> 105+</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Yang/Hour:</strong> 150M-400M</p>
                  <p className="text-sm mb-2"><strong>Drops:</strong> +8/+9 items, ultra-rare materials</p>
                  <p className="text-sm mb-2"><strong>Difficulty:</strong> Extreme</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> End-game content for max-level players. 
                Requires perfect gear and experienced party. Highest risk, highest reward.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Farming Efficiency Comparison</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Location</th>
                  <th className="border border-neutral-800 p-3 text-left">Level</th>
                  <th className="border border-neutral-800 p-3 text-left">Yang/Hour</th>
                  <th className="border border-neutral-800 p-3 text-left">Difficulty</th>
                  <th className="border border-neutral-800 p-3 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Nephrite Bay</td>
                  <td className="border border-neutral-800 p-3">90-105</td>
                  <td className="border border-neutral-800 p-3 text-green-400">100-300M</td>
                  <td className="border border-neutral-800 p-3">Very Hard</td>
                  <td className="border border-neutral-800 p-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Grotto</td>
                  <td className="border border-neutral-800 p-3">60-75</td>
                  <td className="border border-neutral-800 p-3 text-green-400">40-100M</td>
                  <td className="border border-neutral-800 p-3">Hard</td>
                  <td className="border border-neutral-800 p-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Dragon Valley</td>
                  <td className="border border-neutral-800 p-3">45-60</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">15-35M</td>
                  <td className="border border-neutral-800 p-3">Medium</td>
                  <td className="border border-neutral-800 p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Flame Dungeon</td>
                  <td className="border border-neutral-800 p-3">70-85</td>
                  <td className="border border-neutral-800 p-3 text-yellow-400">35-80M</td>
                  <td className="border border-neutral-800 p-3">Hard</td>
                  <td className="border border-neutral-800 p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Spider Dungeon</td>
                  <td className="border border-neutral-800 p-3">15-30</td>
                  <td className="border border-neutral-800 p-3">2-5M</td>
                  <td className="border border-neutral-800 p-3">Easy</td>
                  <td className="border border-neutral-800 p-3">⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Farming Route Optimization</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Create Efficient Routes:</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>Map the Zone:</strong> Identify high-density monster areas</li>
              <li><strong>Plan Circular Path:</strong> Never backtrack - always moving forward</li>
              <li><strong>Mark Respawn Points:</strong> Time mob respawns (usually 30-60 seconds)</li>
              <li><strong>Minimize Travel:</strong> Stay in profitable areas, avoid empty spaces</li>
              <li><strong>Use Mount Wisely:</strong> Mount between mob packs, dismount to kill</li>
              <li><strong>Perfect the Loop:</strong> Mobs should respawn as you complete circuit</li>
            </ol>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-3">💰 Yang & Won Investment Decision</h3>
            <p className="mb-3">
              Compare farming vs buying Yang & Won:
            </p>
            <ul className="space-y-2">
              <li><strong>Farming Grotto 2 hours:</strong> 80M-200M Yang earned (requires time + effort)</li>
              <li><strong>Buying 100M Yang:</strong> ~€1.50 on Yangfinity (instant, no effort)</li>
              <li><strong>Break-Even:</strong> If you value your time &gt;€0.75/hour, buying is better value</li>
            </ul>
            <p className="mt-3 text-sm italic">Most players find buying Yang & Won lets them enjoy end-game content 
            instead of grinding, making it excellent value.</p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Skip the Grind?</h3>
          <p className="text-neutral-300 mb-6">
            Buy Yang & Won and jump straight to the fun content. Fast, safe, and better value than farming.
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

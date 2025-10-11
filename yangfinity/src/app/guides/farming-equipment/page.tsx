'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function FarmingEquipmentPage() {
  const t = useTranslations('guides.items.farming-equipment');
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
            The right equipment dramatically increases your Yang & Won farming efficiency. This guide covers optimal gear 
            for maximum profit, from budget builds to end-game setups.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Equipment Matters for Farming</h2>
          <p>Good farming equipment can increase your Yang & Won earnings by 200-500%:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Kill Speed:</strong> 2x faster = 2x more Yang per hour</li>
            <li><strong>Survivability:</strong> Less potions = more profit kept</li>
            <li><strong>AOE Damage:</strong> Kill multiple mobs simultaneously</li>
            <li><strong>Drop Rate:</strong> Some gear increases item drops</li>
            <li><strong>Yang Bonus:</strong> Special items boost Yang from monsters</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Essential Equipment Categories</h2>

          <div className="space-y-6">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">1. Weapon (Most Important)</h3>
              <p className="mb-4">Your weapon determines kill speed - the #1 factor in farming efficiency.</p>
              
              <div className="space-y-4">
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Budget Setup (5-10M Yang investment)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Enhancement:</strong> +7 to +8</li>
                    <li>• <strong>Bonus:</strong> 15-20% vs Monsters</li>
                    <li>• <strong>Additional:</strong> 5% Critical Hit</li>
                    <li>• <strong>ROI:</strong> 150% - pays for itself in 3-4 hours farming</li>
                  </ul>
                </div>

                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Optimal Setup (50-100M Yang investment)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Enhancement:</strong> +9</li>
                    <li>• <strong>Bonus:</strong> 25-30% vs Monsters</li>
                    <li>• <strong>Additional:</strong> 10% Critical, 5% Piercing</li>
                    <li>• <strong>ROI:</strong> 300% - earns back cost in 2-3 days active farming</li>
                  </ul>
                </div>

                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">End-Game Setup (500M+ Yang investment)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Enhancement:</strong> +9 with elemental bonuses</li>
                    <li>• <strong>Bonus:</strong> 30-40% vs Monsters</li>
                    <li>• <strong>Additional:</strong> 15% Crit, 10% Pierce, 5% AOE damage</li>
                    <li>• <strong>ROI:</strong> 400%+ - for serious farmers making billions weekly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-4">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> &quot;vs Monsters&quot; bonus is more important than raw damage 
                for farming. A +9 with 30% vs Monsters &gt; +10 with 10% vs Monsters for PvE.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">2. Armor Set</h3>
              <p className="mb-4">Armor keeps you alive and reduces potion costs.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Key Stats:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Defense:</strong> Reduces damage taken</li>
                    <li>• <strong>HP Absorption:</strong> 5-10% heal per hit</li>
                    <li>• <strong>HP Bonus:</strong> +1000-2000 HP</li>
                    <li>• <strong>Attack Speed:</strong> Kill faster</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Investment Guide:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Budget: +5 armor (5M total)</li>
                    <li>• Optimal: +6/+7 with bonuses (30M)</li>
                    <li>• End-Game: +8/+9 perfect bonuses (200M+)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">3. Shoes (Critical for Efficiency)</h3>
              <p className="mb-4">Movement speed = more mobs killed per hour.</p>
              
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-4">
                <p className="text-sm mb-2"><strong>Must-Have Bonuses:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Movement Speed:</strong> +15-20% (essential!)</li>
                  <li>• <strong>Attack Speed:</strong> +8-10%</li>
                  <li>• <strong>HP:</strong> +500-1000</li>
                </ul>
                <p className="text-sm mt-3"><strong>Impact:</strong> 20% movement speed = 15-20% more Yang per hour by reducing 
                travel time between mob packs.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">4. Accessories (Damage Multipliers)</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white mb-1">Necklace:</h4>
                  <p className="text-sm">Critical Hit +10-15%, Attack Value +5-10%</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Earrings:</h4>
                  <p className="text-sm">Penetration +5-10%, Magic Resistance (survivability)</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Bracelet:</h4>
                  <p className="text-sm">Attack Speed +8-10%, HP Absorption +3-5%</p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 mt-4">
                <p className="text-sm"><strong>⚠️ Budget Priority:</strong> Weapon &gt; Shoes &gt; Armor &gt; Accessories. 
                Don&apos;t buy expensive accessories before having good weapon!</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">5. Pet (Game-Changer)</h3>
              <p className="mb-4">Auto-pickup pets increase profit by 20-30% by collecting all drops.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Basic Pet (10-20M Yang)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Auto-pickup Yang</li>
                    <li>✓ Auto-pickup items</li>
                    <li>✓ 15-20 minute duration</li>
                    <li>~ Need to resummon often</li>
                  </ul>
                </div>
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Premium Pet (100M+ Yang)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Auto-pickup everything</li>
                    <li>✓ Bonus stats (+HP, +Damage)</li>
                    <li>✓ 60+ minute duration</li>
                    <li>✓ Set and forget</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-4">
                <p className="text-sm"><strong>💡 ROI Analysis:</strong> Pet costs 20M, increases Yang collection by 25%. 
                At 50M Yang/hour farming, pet pays for itself in under 2 hours. Essential investment!</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Farming Build Examples by Budget</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Starter Build - 20M Yang Investment</h3>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Budget</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Weapon:</strong> +7 with 15% vs Monsters (10M)</p>
                  <p className="text-sm mb-2"><strong>Armor:</strong> +4/+5 basic set (3M)</p>
                  <p className="text-sm mb-2"><strong>Shoes:</strong> +5 with 12% move speed (2M)</p>
                  <p className="text-sm mb-2"><strong>Accessories:</strong> Basic +0 items (1M)</p>
                  <p className="text-sm mb-2"><strong>Pet:</strong> None or basic (4M)</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Expected Yang/Hour:</strong> 20-40M</p>
                  <p className="text-sm mb-2"><strong>ROI Time:</strong> ~1 day active farming</p>
                  <p className="text-sm mb-2"><strong>Best For:</strong> Levels 30-60</p>
                  <p className="text-sm text-[#b6e700]"><strong>Profit After ROI:</strong> 20-40M/hour pure profit</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Efficient Build - 100M Yang Investment</h3>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-semibold rounded-full">Optimal</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Weapon:</strong> +9 with 25% vs Monsters (60M)</p>
                  <p className="text-sm mb-2"><strong>Armor:</strong> +6 with HP absorption (15M)</p>
                  <p className="text-sm mb-2"><strong>Shoes:</strong> +6 with 18% move, 8% atk speed (8M)</p>
                  <p className="text-sm mb-2"><strong>Accessories:</strong> Crit/Pierce bonuses (10M)</p>
                  <p className="text-sm mb-2"><strong>Pet:</strong> Auto-pickup pet (7M)</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Expected Yang/Hour:</strong> 60-120M</p>
                  <p className="text-sm mb-2"><strong>ROI Time:</strong> ~1-2 days</p>
                  <p className="text-sm mb-2"><strong>Best For:</strong> Levels 60-90</p>
                  <p className="text-sm text-[#b6e700]"><strong>Profit After ROI:</strong> 60-120M/hour - serious farming money</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Pro Build - 500M+ Yang Investment</h3>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-xs font-semibold rounded-full">End-Game</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2"><strong>Weapon:</strong> +9 perfect bonuses (300M+)</p>
                  <p className="text-sm mb-2"><strong>Armor:</strong> +8/+9 perfect stats (100M+)</p>
                  <p className="text-sm mb-2"><strong>Shoes:</strong> +7/+8 perfect bonuses (40M)</p>
                  <p className="text-sm mb-2"><strong>Accessories:</strong> Legendary with perfect stats (50M)</p>
                  <p className="text-sm mb-2"><strong>Pet:</strong> Premium with stat bonuses (30M)</p>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>Expected Yang/Hour:</strong> 150-300M+</p>
                  <p className="text-sm mb-2"><strong>ROI Time:</strong> 2-4 days</p>
                  <p className="text-sm mb-2"><strong>Best For:</strong> Levels 90-120</p>
                  <p className="text-sm text-[#b6e700]"><strong>Profit After ROI:</strong> 150-300M+/hour - elite farming</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Consumables & Buffs</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Essential Consumables:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Must-Have:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>HP Potions:</strong> Red/Purple (cost vs farming profit)</li>
                  <li>• <strong>SP Potions:</strong> For skill spam</li>
                  <li>• <strong>Speed Potions:</strong> 10-20% temporary boost</li>
                  <li>• <strong>Attack Scrolls:</strong> +10-20% damage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">Optional but Profitable:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Drop Rate Buffs:</strong> If available on your server</li>
                  <li>• <strong>Yang Boost Items:</strong> Increase Yang from mobs</li>
                  <li>• <strong>EXP Buffs:</strong> If still leveling</li>
                  <li>• <strong>Defense Potions:</strong> For dangerous zones</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Equipment Upgrade Path</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Optimal Upgrade Order:</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>Get +7 weapon first</strong> - Biggest impact on farming speed</li>
              <li><strong>Buy auto-pickup pet</strong> - 20-30% more Yang collected</li>
              <li><strong>Upgrade to +9 weapon</strong> - 2x farming efficiency</li>
              <li><strong>Get movement speed shoes</strong> - 15-20% more kills/hour</li>
              <li><strong>Upgrade armor to +6</strong> - Reduce potion costs</li>
              <li><strong>Add accessories with crit/pierce</strong> - Damage multiplier</li>
              <li><strong>Perfect your weapon bonuses</strong> - Min-max for maximum profit</li>
            </ol>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-3">💰 Equipment vs Buying Yang & Won</h3>
            <p className="mb-3">Investment comparison:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Farming Route:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Invest 100M in equipment</li>
                  <li>• Farm 3 hours daily</li>
                  <li>• Earn ~200M/day</li>
                  <li>• ROI: 2-3 days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Buying Route:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Buy 500M Yang for ~€3-5</li>
                  <li>• Play 0 hours farming</li>
                  <li>• Enjoy content immediately</li>
                  <li>• ROI: Play time saved</li>
                </ul>
              </div>
            </div>
            <p className="text-sm mt-3 italic">Most players combine both: Buy initial Yang & Won for gear, then farm efficiently 
            if they enjoy it. Best of both worlds!</p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Yang & Won for Equipment?</h3>
          <p className="text-neutral-300 mb-6">
            Buy Yang & Won to fund your perfect farming setup. Fast delivery, secure payment.
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

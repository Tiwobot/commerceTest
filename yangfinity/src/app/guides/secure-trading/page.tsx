import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Secure Trading Guide - Yangfinity",
  description: "Complete guide to secure trading in Metin2. Learn about safe trading practices, escrow services, and protecting your transactions."
};

export default function SecureTradingPage() {
  const t = useTranslations('guides.items.secure-trading');
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
            Player-to-player trading is essential in Metin2 but carries risks. Learn proven methods to trade safely, 
            protect your Yang & Won, and avoid scams when dealing with other players.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Secure Trading Matters</h2>
          <p>Billions of Yang & Won are lost daily to trading scams:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Trust is Exploited:</strong> Scammers build trust, then steal big trades</li>
            <li><strong>No Rollbacks:</strong> Game support rarely reverses scam trades</li>
            <li><strong>Your Responsibility:</strong> You must protect yourself - GMs won&apos;t</li>
            <li><strong>Prevention &gt; Recovery:</strong> Much easier to avoid scams than recover</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Golden Rules of Safe Trading</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Rule #1: NEVER Drop Items on Ground</h3>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-3">
                <p className="text-sm font-bold mb-2">⚠️ Common Scam:</p>
                <p className="text-sm">&quot;I&apos;ll drop 100M Yang, you pick it up and drop your +9 weapon.&quot; You drop weapon, 
                they pick it and run. Your 200M weapon gone forever.</p>
              </div>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                <p className="text-sm"><strong>✅ Always Use Trade Window:</strong> In-game trade interface protects both parties. 
                Both must accept before items transfer. NEVER drop valuable items.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Rule #2: Screenshot Everything</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Before Trade:</strong> Screenshot agreement in chat</li>
                <li><strong>Trade Window:</strong> Screenshot before clicking accept</li>
                <li><strong>After Trade:</strong> Screenshot received items/Yang</li>
                <li><strong>Why:</strong> Evidence if dispute arises, helps support cases</li>
              </ul>
              <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-3 mt-3">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Keep screenshots folder for all trades over 50M Yang. 
                Takes 2 seconds, can save you millions.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[#b6e700] mb-4">Rule #3: Verify Items Before Accepting</h3>
              <p className="mb-3">Common trick: Show good item, swap for bad item at last second.</p>
              
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Verification Checklist:</h4>
                <ul className="space-y-1 text-sm">
                  <li>☐ Hover over item to see stats pop-up</li>
                  <li>☐ Check enhancement level (+7, +8, +9)</li>
                  <li>☐ Verify item bonuses (vs Monsters %, Crit %, etc.)</li>
                  <li>☐ Count Yang amount (0s are easy to miss - 10M vs 100M)</li>
                  <li>☐ If they cancel/reopen trade, RE-CHECK everything</li>
                  <li>☐ Take 5 seconds to verify - rushing = getting scammed</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Middleman Services</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#b6e700] mb-3">For High-Value Trades (100M+ Yang)</h3>
            <p className="mb-4">Trusted third-party holds items/Yang until both parties deliver.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">✅ How It Works:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>You give items to middleman</li>
                  <li>Other player gives Yang to middleman</li>
                  <li>Middleman verifies both received</li>
                  <li>Middleman distributes to each party</li>
                  <li>Small fee (1-5% of trade value)</li>
                </ol>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Finding Middlemen:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Guild officers (trusted members)</li>
                  <li>• Server Discord verified staff</li>
                  <li>• Reddit moderators</li>
                  <li>• Long-time players with reputation</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-3">
              <p className="text-sm"><strong>⚠️ Warning:</strong> Fake middlemen exist! Verify reputation with multiple sources. 
              Scammers impersonate trusted middlemen.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Trading by Transaction Size</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Trade Value</th>
                  <th className="border border-neutral-800 p-3 text-left">Method</th>
                  <th className="border border-neutral-800 p-3 text-left">Precautions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">&lt;10M Yang</td>
                  <td className="border border-neutral-800 p-3">Direct trade</td>
                  <td className="border border-neutral-800 p-3">Basic verification</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">10-50M Yang</td>
                  <td className="border border-neutral-800 p-3">Direct trade</td>
                  <td className="border border-neutral-800 p-3">Screenshot + verify</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">50-100M Yang</td>
                  <td className="border border-neutral-800 p-3">Direct trade</td>
                  <td className="border border-neutral-800 p-3">Check reputation + screenshot</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">100-500M Yang</td>
                  <td className="border border-neutral-800 p-3">Consider middleman</td>
                  <td className="border border-neutral-800 p-3">Full verification + escrow</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">500M+ Yang</td>
                  <td className="border border-neutral-800 p-3 text-[#b6e700]"><strong>Middleman required</strong></td>
                  <td className="border border-neutral-800 p-3">Maximum precautions + escrow</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building Trading Reputation</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Become a Trusted Trader:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Start Small:</strong> Build reputation with 10-20 small successful trades</li>
              <li><strong>Be Fair:</strong> Don&apos;t try to cheat - word spreads fast</li>
              <li><strong>Fast Delivery:</strong> Deliver as soon as payment received</li>
              <li><strong>Communicate:</strong> Keep buyers updated on status</li>
              <li><strong>Guild Vouching:</strong> Get guild members to vouch for you</li>
              <li><strong>Forum Rep:</strong> Build positive reputation on server forums/Discord</li>
            </ul>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-3">🎯 The Safest Option: Reputable Sellers</h3>
            <p className="text-sm mb-3">
              Player-to-player trades always carry risk. For Yang & Won purchases, using established sellers like Yangfinity 
              is objectively safer:
            </p>
            <ul className="space-y-1 text-sm">
              <li>✓ <strong>Zero scam risk:</strong> 5+ years, 500+ reviews, never a single scam report</li>
              <li>✓ <strong>Buyer protection:</strong> PayPal/Card payments = full refund if issues</li>
              <li>✓ <strong>Fast delivery:</strong> 5-15 minutes guaranteed</li>
              <li>✓ <strong>24/7 support:</strong> Problems resolved immediately</li>
              <li>✓ <strong>Clear pricing:</strong> No haggling, no uncertainty</li>
            </ul>
            <p className="text-sm mt-3 italic">Most players use Yangfinity for Yang & Won, reserve player trades for items/equipment only.</p>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Trade Yang & Won Safely</h3>
          <p className="text-neutral-300 mb-6">
            Skip the risk of player-to-player Yang trades. Buy from verified, trusted seller.
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

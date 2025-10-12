import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Mobile Metin2 Yang Guide - Yangfinity",
  description: "Complete guide to Yang & Won in Mobile Metin2. Learn about mobile-specific features, trading differences, and optimization tips."
};

export default function MobileYangPage() {
  const t = useTranslations('guides.items.mobile-yang');
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
            Buying and using Yang & Won on Mobile Metin2 has unique aspects. Learn how to purchase safely, receive delivery quickly, 
            and make the most of mobile currency advantages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How Mobile Yang & Won Works</h2>
          <p>Mobile servers typically use the same currency names (Yang/Won) but have separate economies:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Separate from PC:</strong> Mobile Yang can&apos;t be transferred to PC (usually)</li>
            <li><strong>Different Prices:</strong> Mobile Yang is often 20-40% cheaper</li>
            <li><strong>Faster Delivery:</strong> Mobile deliveries average 5-10 minutes</li>
            <li><strong>In-Game Mail:</strong> Received via mailbox system</li>
            <li><strong>Same Uses:</strong> Buy items, upgrade gear, trade with players</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Buying Yang & Won for Mobile</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-[#b6e700] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Step-by-Step Purchase Process</h3>
              
              <ol className="list-decimal list-inside space-y-4">
                <li className="font-bold">Visit Yangfinity Product Page
                  <p className="font-normal text-sm mt-1 ml-6">Browse mobile-specific Yang & Won products or contact support for mobile pricing</p>
                </li>
                <li className="font-bold">Select Your Server
                  <p className="font-normal text-sm mt-1 ml-6">Specify: Server name, Character name, Faction (if applicable)</p>
                </li>
                <li className="font-bold">Choose Payment Method
                  <p className="font-normal text-sm mt-1 ml-6">PayPal, Credit/Debit cards - same secure options as PC</p>
                </li>
                <li className="font-bold">Complete Purchase
                  <p className="font-normal text-sm mt-1 ml-6">Checkout takes 30-60 seconds</p>
                </li>
                <li className="font-bold">Check In-Game Mailbox
                  <p className="font-normal text-sm mt-1 ml-6">Yang arrives in 5-10 minutes via in-game mail</p>
                </li>
              </ol>

              <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mt-4">
                <p className="text-sm"><strong>💡 Pro Tip:</strong> Make sure you&apos;re online when ordering. Some mobile servers 
                require recipient to be logged in for delivery.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Mobile Delivery Methods</h3>
              
              <div className="space-y-3">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">1. In-Game Mail (Most Common)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Yang sent to your mailbox</li>
                    <li>• Check mail icon on screen</li>
                    <li>• Click to claim (instant to inventory)</li>
                    <li>• Delivery time: 5-10 minutes</li>
                  </ul>
                </div>

                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">2. Direct Trade</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Seller meets you in-game</li>
                    <li>• Direct trade window</li>
                    <li>• Immediate transfer</li>
                    <li>• Delivery time: 5-15 minutes (requires meetup)</li>
                  </ul>
                </div>

                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3. Storage Transfer</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Seller deposits in shared storage (rare)</li>
                    <li>• You collect from storage</li>
                    <li>• Used on some private mobile servers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile Yang & Won Pricing</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Amount</th>
                  <th className="border border-neutral-800 p-3 text-left">PC Price</th>
                  <th className="border border-neutral-800 p-3 text-left">Mobile Price</th>
                  <th className="border border-neutral-800 p-3 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">100M Yang</td>
                  <td className="border border-neutral-800 p-3">€1.50</td>
                  <td className="border border-neutral-800 p-3 text-green-400">€1.00</td>
                  <td className="border border-neutral-800 p-3 text-green-400">33%</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">500M Yang</td>
                  <td className="border border-neutral-800 p-3">€6.50</td>
                  <td className="border border-neutral-800 p-3 text-green-400">€4.50</td>
                  <td className="border border-neutral-800 p-3 text-green-400">31%</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">1B Yang</td>
                  <td className="border border-neutral-800 p-3">€12.00</td>
                  <td className="border border-neutral-800 p-3 text-green-400">€8.00</td>
                  <td className="border border-neutral-800 p-3 text-green-400">33%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">💰 Why Mobile is Cheaper</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Higher In-Game Supply:</strong> Auto-farming generates more Yang = lower real-money price</li>
              <li><strong>Mobile Promotions:</strong> Sellers offer discounts to grow mobile player base</li>
              <li><strong>Separate Economy:</strong> Mobile markets less mature = lower inflation</li>
              <li><strong>Competition:</strong> More sellers = better prices for buyers</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safety Tips for Mobile Purchases</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Before Buying:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Verify Server Name:</strong> Mobile servers often have different names than PC</li>
                <li><strong>Check Character Name:</strong> Make sure it&apos;s spelled exactly right</li>
                <li><strong>Confirm You&apos;re Online:</strong> Some deliveries require active login</li>
                <li><strong>Secure Payment Only:</strong> Use PayPal or cards with buyer protection</li>
                <li><strong>Read Reviews:</strong> Check seller Trustpilot (Yangfinity has 500+)</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">After Receiving:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Count the Yang:</strong> Verify you received correct amount</li>
                <li><strong>Store Safely:</strong> Don&apos;t carry billions - use storage</li>
                <li><strong>Spend Wisely:</strong> Mobile inflation can be high - invest in assets</li>
                <li><strong>Contact Support:</strong> Report any issues immediately</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Uses for Mobile Yang & Won</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Smart Investments:</h3>
              <ul className="text-sm space-y-2">
                <li><strong>+7/+8 Equipment:</strong> Essential for efficient farming</li>
                <li><strong>Auto-Pickup Pet:</strong> 25-30% more Yang collected</li>
                <li><strong>Movement Speed Shoes:</strong> Farm faster</li>
                <li><strong>Premium Auto-Play:</strong> If available on your server</li>
                <li><strong>Storage Expansion:</strong> Convenience for traders</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">Avoid Wasting On:</h3>
              <ul className="text-sm space-y-2">
                <li><strong>Cosmetics:</strong> No gameplay advantage</li>
                <li><strong>Consumables:</strong> Farm these yourself easily</li>
                <li><strong>Low-Level Gear:</strong> You&apos;ll outlevel quickly</li>
                <li><strong>Overpriced Items:</strong> Check market before buying</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile-Specific Yang Strategies</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Maximize Value on Mobile:</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">1. Buy During Mobile Events</h4>
                <p className="text-sm">Mobile servers have frequent bonus events. Wait for 2x Yang events or mobile-only sales.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">2. Bulk Purchase Discounts</h4>
                <p className="text-sm">Buying 1B+ at once often gets 10-15% extra discount on mobile.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">3. Cross-Platform Advantage</h4>
                <p className="text-sm">If your server allows transfer: Buy on mobile (cheaper) → Transfer to PC (if needed)</p>
              </div>

              <div>
                <h4 className="font-bold text-[#b6e700] mb-2">4. Early Server Economics</h4>
                <p className="text-sm">New mobile servers have cheapest Yang - buy early when real-money value is highest.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Mobile-Specific Scam Warnings</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Fake Apps:</strong> Only download Metin2 from official stores (App Store/Play Store)</li>
              <li><strong>Phishing Messages:</strong> Never click links in suspicious in-game messages</li>
              <li><strong>Account Sharing:</strong> Never share login for &quot;free Yang&quot; - scam 100%</li>
              <li><strong>Too-Good Deals:</strong> If mobile Yang is 80% off, it&apos;s a scam</li>
            </ul>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">📱 Mobile Player Testimonial</h3>
            <p className="italic mb-3">
              &quot;I bought 500M Yang for my mobile character for only €4. Same amount would cost €6.50 on PC. The delivery 
              was in 8 minutes via in-game mail. Used it to buy +7 weapon and auto-pickup pet - now I farm 50M+ daily while 
              commuting. Best investment!&quot;
            </p>
            <p className="text-sm text-neutral-400">- Mobile Metin2 Player, 6 months playtime</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile FAQ</h2>

          <div className="space-y-3">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <p className="font-bold mb-1">Q: Can I use PC Yang on mobile?</p>
              <p className="text-sm">A: Usually no - mobile and PC economies are separate. Check with your server.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <p className="font-bold mb-1">Q: Is mobile Yang real money trading allowed?</p>
              <p className="text-sm">A: Same rules as PC - technically against TOS but rarely enforced. Use at your discretion.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <p className="font-bold mb-1">Q: Why is mobile delivery faster?</p>
              <p className="text-sm">A: Sellers often have mobile characters ready. Mail system is also faster than PC methods.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <p className="font-bold mb-1">Q: Can I play on both phone and tablet?</p>
              <p className="text-sm">A: Yes! Same account works on all your mobile devices with cloud saves.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Buy Mobile Yang & Won - 20-40% Cheaper!</h3>
          <p className="text-neutral-300 mb-6">
            Take advantage of mobile pricing. Fast delivery, same security, better value.
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

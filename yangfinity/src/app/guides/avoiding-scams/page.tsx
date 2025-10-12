import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Avoiding Scams - Yangfinity",
  description: "Learn how to avoid scams when buying Metin2 Yang & Won. Common scam tactics and how to protect yourself from fraudulent sellers."
};

export default function AvoidingScamsPage() {
  const t = useTranslations('guides.items.avoiding-scams');
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
            Scammers target Metin2 players constantly - from fake Yang & Won sellers to in-game trade scams. Learn to recognize 
            every type of scam and protect yourself completely.
          </p>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Scam Statistics</h3>
            <p className="text-sm">
              <strong>Estimated 30% of Metin2 players</strong> have been scammed at least once. Average loss: €50-200 in Yang & Won 
              or items. Don&apos;t become a statistic - learn the common scams below.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Top 10 Most Common Scams</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">1. Fake Yang & Won Websites</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> Scammers create lookalike websites (yanfinity.com instead 
                  of yangfinity.com). You pay, never receive Yang.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Verify exact URL spelling</li>
                      <li>• Check for HTTPS (padlock icon)</li>
                      <li>• Bookmark legitimate sites</li>
                      <li>• Google search + click official result</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">2. Trade Window Swap</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> Trading items. Scammer puts +9 weapon, you put Yang. 
                  Last second they swap +9 for +0, accept quickly hoping you don&apos;t notice.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• ALWAYS hover over item before accepting</li>
                      <li>• Take screenshot of trade window</li>
                      <li>• If they cancel trade, be suspicious</li>
                      <li>• Double-check item stats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">3. Fake GM/Admin Messages</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> Scammer sends message: &quot;[GM] Your account will be 
                  banned. Verify at [fake link].&quot; Link steals password.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Real GMs NEVER ask for passwords</li>
                      <li>• Don&apos;t click links in messages</li>
                      <li>• Check official website for announcements</li>
                      <li>• Contact official support to verify</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">4. Too-Good-To-Be-True Prices</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> &quot;1 Billion Yang for €1!&quot; (normally €10-15). 
                  You pay, get nothing or get banned Yang that gets removed.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• If 50%+ below market = scam</li>
                      <li>• Research average prices first</li>
                      <li>• Stick to reputable sellers</li>
                      <li>• Remember: &quot;If too good to be true, it is&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">5. Account Leveling Services</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> &quot;We&apos;ll level your character to 105 for €20!&quot; 
                  You give login info, they steal everything.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• NEVER share account credentials</li>
                      <li>• 90% of &quot;boosting services&quot; are scams</li>
                      <li>• Buy Yang & Won instead, level yourself</li>
                      <li>• Or use auto-play on mobile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-2">6. Discord/Social Media Scams</h3>
                  <p className="text-sm mb-2"><strong>How it works:</strong> DM from &quot;Yangfinity Support&quot; asking to verify 
                  account via sketchy link.</p>
                  <div className="bg-neutral-800 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold mb-1">🛡️ Protection:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Yangfinity NEVER DMs first</li>
                      <li>• Always contact us through official website</li>
                      <li>• Check verified badges on social media</li>
                      <li>• When in doubt, ask on our official chat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Red Flags Checklist</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">🚩 If You See These, It&apos;s a Scam:</h3>
            <ul className="space-y-2">
              <li>⚠️ Asks for password/credentials</li>
              <li>⚠️ Prices 50%+ below market rate</li>
              <li>⚠️ Pressure to buy NOW (limited time!)</li>
              <li>⚠️ Payment upfront with no guarantee</li>
              <li>⚠️ No reviews or only 5-star reviews</li>
              <li>⚠️ Contact only via Discord/Telegram</li>
              <li>⚠️ Website has spelling errors</li>
              <li>⚠️ Requests &quot;Friends & Family&quot; PayPal</li>
              <li>⚠️ No customer support email/phone</li>
              <li>⚠️ Promises things that sound impossible</li>
            </ul>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">✅ How to Verify Yangfinity is Legitimate</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Trustpilot:</strong> 500+ verified reviews, 4.8+ rating</li>
              <li>✓ <strong>Google Reviews:</strong> Consistent 5-star ratings</li>
              <li>✓ <strong>5+ Years Operating:</strong> Est. 2019, still going strong</li>
              <li>✓ <strong>24/7 Live Support:</strong> Real humans respond in minutes</li>
              <li>✓ <strong>Secure Payments:</strong> PayPal, Credit Cards (buyer protection)</li>
              <li>✓ <strong>Clear Policies:</strong> Refund policy, delivery guarantee</li>
              <li>✓ <strong>Never Asks Password:</strong> All deliveries via safe methods</li>
              <li>✓ <strong>Transparent Pricing:</strong> No hidden fees, clear amounts</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">If You&apos;ve Been Scammed</h2>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recovery Steps:</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>File Chargeback:</strong> If paid by PayPal/Card, dispute immediately (180-day window)</li>
              <li><strong>Report Seller:</strong> Report to Trustpilot, Reddit, game forums</li>
              <li><strong>Warn Community:</strong> Post on r/metin2, Discord servers</li>
              <li><strong>Screenshot Everything:</strong> Gather evidence for reports</li>
              <li><strong>Learn & Move On:</strong> Don&apos;t let one scam stop you - just use reputable sellers</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Buy Yang & Won Without Scam Risk</h3>
          <p className="text-neutral-300 mb-6">
            Yangfinity: Verified seller, 500+ positive reviews, 5+ years trusted by Metin2 community.
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

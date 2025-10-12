import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Choosing the Right Seller - Yangfinity",
  description: "How to choose a trustworthy Metin2 Yang & Won seller. Learn what to look for in reputable sellers and red flags to avoid."
};

export default function ChoosingSellerPage() {
  const t = useTranslations('guides.items.choosing-seller');
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
            Choosing the right Yang & Won seller is critical to your experience. A reputable seller means fast delivery, 
            fair prices, and peace of mind. This guide will help you identify trustworthy sellers and avoid scams.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Seller Choice Matters</h2>
          <p>
            The Yang & Won market has both legitimate businesses and scammers. Choosing poorly can result in:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Lost money with no delivery</li>
            <li>Account bans due to suspicious Yang & Won sources</li>
            <li>Delayed deliveries affecting your gameplay</li>
            <li>No support when issues arise</li>
            <li>Personal information theft</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Criteria for Choosing a Seller</h2>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">1. Verified Reviews & Reputation</h3>
              <p className="mb-3">Look for sellers with substantial, verified customer reviews:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Trustpilot:</strong> 4+ stars with 50+ reviews minimum</li>
                <li><strong>Google Reviews:</strong> Recent reviews (within 3 months)</li>
                <li><strong>Reddit/Forums:</strong> Community recommendations and warnings</li>
                <li><strong>Review Details:</strong> Look for specific details, not generic praise</li>
              </ul>
              <div className="mt-4 bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-sm">⚠️ <strong>Warning:</strong> Fake reviews often lack specifics and have similar wording. Check review dates - batches of 5-star reviews on the same day is suspicious.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">2. Business Longevity</h3>
              <p className="mb-3">Established sellers are more reliable:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>6+ months minimum:</strong> Scam sites usually don&apos;t last long</li>
                <li><strong>1+ years preferred:</strong> Shows stability and customer trust</li>
                <li><strong>5+ years exceptional:</strong> Like Yangfinity - proven track record</li>
              </ul>
              <p className="mt-3">Check domain registration date using WHOIS lookup tools.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">3. Payment Security</h3>
              <p className="mb-3">Secure payment options protect your money:</p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">✅ Good Signs:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• PayPal accepted</li>
                    <li>• Credit/Debit cards</li>
                    <li>• SSL certificate (https://)</li>
                    <li>• Multiple payment options</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">❌ Red Flags:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Only bank transfer</li>
                    <li>• Crypto only (no escrow)</li>
                    <li>• No SSL certificate</li>
                    <li>• &quot;Friends &amp; Family&quot; payment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">4. Customer Support Quality</h3>
              <p className="mb-3">Good support means problems get resolved quickly:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>24/7 Live Chat:</strong> Best option for immediate help</li>
                <li><strong>Email Support:</strong> Should respond within 24 hours</li>
                <li><strong>Discord Server:</strong> Active community support</li>
                <li><strong>Phone Support:</strong> Rare but excellent sign</li>
              </ul>
              <p className="mt-3 text-sm italic">💡 Test support before buying - ask a question and see response time and quality.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">5. Clear Policies</h3>
              <p className="mb-3">Legitimate sellers have transparent policies:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Refund Policy:</strong> Clear conditions for refunds</li>
                <li><strong>Delivery Time:</strong> Specific timeframes (e.g., &quot;5-15 minutes&quot;)</li>
                <li><strong>Terms of Service:</strong> Detailed and professional</li>
                <li><strong>Privacy Policy:</strong> How they handle your data</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#b6e700] mb-3">6. Transparent Pricing</h3>
              <p className="mb-3">Honest sellers are upfront about costs:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>No Hidden Fees:</strong> Final price shown before checkout</li>
                <li><strong>Market-Rate Pricing:</strong> Not suspiciously low</li>
                <li><strong>Bulk Discounts:</strong> Clearly displayed (if offered)</li>
                <li><strong>Currency Clearly Listed:</strong> Know if you&apos;re buying Yang or Won</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Red Flags to Avoid</h2>
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Scam Warning Signs:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Prices 50%+ below market:</strong> If it&apos;s too good to be true, it is</li>
              <li><strong>No reviews or only 5-star reviews:</strong> Fake or new scam site</li>
              <li><strong>Pressure tactics:</strong> &quot;Limited time only!&quot; &quot;Buy now or miss out!&quot;</li>
              <li><strong>No contact information:</strong> No way to reach them = red flag</li>
              <li><strong>Poor website quality:</strong> Spelling errors, broken links</li>
              <li><strong>Requests for credentials:</strong> Never give your login info</li>
              <li><strong>Upfront payment required:</strong> No delivery guarantee</li>
              <li><strong>No social media presence:</strong> Legitimate businesses have social accounts</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Test a New Seller</h2>
          <p>When trying a seller for the first time, follow this process:</p>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-4">
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>Research First:</strong> Spend 15-20 minutes checking reviews and reputation</li>
              <li><strong>Contact Support:</strong> Ask a question and evaluate their response</li>
              <li><strong>Start Small:</strong> Make minimum order (e.g., 100 million Yang & Won)</li>
              <li><strong>Time the Delivery:</strong> Note how long it takes</li>
              <li><strong>Verify Currency:</strong> Ensure you received correct amount</li>
              <li><strong>Test Support Again:</strong> Ask a follow-up question</li>
              <li><strong>Scale Up:</strong> If satisfied, place larger orders</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Comparison Checklist</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-neutral-800">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="border border-neutral-800 p-3 text-left">Criteria</th>
                  <th className="border border-neutral-800 p-3 text-left">Good Seller</th>
                  <th className="border border-neutral-800 p-3 text-left">Scam Seller</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-800 p-3">Reviews</td>
                  <td className="border border-neutral-800 p-3 text-green-400">50+ verified, detailed</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Few or generic</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Age</td>
                  <td className="border border-neutral-800 p-3 text-green-400">1+ years</td>
                  <td className="border border-neutral-800 p-3 text-red-400">&lt; 6 months</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Payment</td>
                  <td className="border border-neutral-800 p-3 text-green-400">PayPal, Cards</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Bank transfer only</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-800 p-3">Support</td>
                  <td className="border border-neutral-800 p-3 text-green-400">24/7 live chat</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Email only/slow</td>
                </tr>
                <tr>
                  <td className="border border-neutral-800 p-3">Pricing</td>
                  <td className="border border-neutral-800 p-3 text-green-400">Market rate</td>
                  <td className="border border-neutral-800 p-3 text-red-400">Suspiciously low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose Yangfinity?</h2>
          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <p className="mb-4">
              Yangfinity meets all criteria for a trustworthy Yang & Won seller:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>✓ <strong>5+ years</strong> in business</li>
                <li>✓ <strong>500+ verified</strong> Trustpilot reviews</li>
                <li>✓ <strong>24/7 live chat</strong> support</li>
                <li>✓ <strong>PayPal & Cards</strong> accepted</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ <strong>5-15 minute</strong> delivery</li>
                <li>✓ <strong>Clear refund</strong> policy</li>
                <li>✓ <strong>Transparent</strong> pricing</li>
                <li>✓ <strong>Active</strong> social media</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Final Checklist</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <p className="font-semibold text-white mb-3">Before Choosing a Seller, Verify:</p>
            <ul className="space-y-2">
              <li>□ 50+ positive, detailed reviews on Trustpilot or Google</li>
              <li>□ Business active for at least 6 months (1+ year preferred)</li>
              <li>□ Accepts PayPal or credit/debit cards</li>
              <li>□ Has 24/7 support (live chat or fast email response)</li>
              <li>□ Clear refund and delivery policies</li>
              <li>□ Transparent pricing with no hidden fees</li>
              <li>□ Professional website with SSL certificate</li>
              <li>□ Active social media or community presence</li>
              <li>□ No pressure tactics or suspicious promises</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
          <p className="text-neutral-300 mb-6">
            Shop with confidence at a verified, trusted Yang & Won seller.
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
